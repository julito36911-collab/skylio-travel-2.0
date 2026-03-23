from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import certifi
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone, timedelta
import requests
import unicodedata
import re


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME')
db = None

if mongo_url and db_name:
    try:
        client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=3000, connectTimeoutMS=3000, tlsCAFile=certifi.where())
        db = client[db_name]
        logging.info("MongoDB connected successfully")
    except Exception as e:
        logging.error(f"Error connecting to MongoDB: {e}")
else:
    logging.warning("MongoDB credentials missing. Caching will be disabled.")

# In-memory fallback cache
memory_cache = {}
mongo_disabled = False
mongo_disabled_until = None

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


def normalize_query(text: str) -> str:
    """
    Lowercase and remove accents/diacritics from text
    """
    if not text:
        return ""
    # Normalize to NFD and filter out non-spacing marks
    text = text.lower().strip()
    normalized = "".join(
        c for c in unicodedata.normalize('NFD', text)
        if unicodedata.category(c) != 'Mn'
    )
    # Remove extra spaces
    return re.sub(r'\s+', ' ', normalized)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class TravelQuery(BaseModel):
    destination: str
    language: str = "es"

class TravelAssistantResponse(BaseModel):
    response: str
    status: str = "success"

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    if db is None:
        raise HTTPException(status_code=503, detail="Database not connected")
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if db is None:
        raise HTTPException(status_code=503, detail="Database not connected")
        
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/travel-assistant", response_model=TravelAssistantResponse)
async def travel_assistant(query: TravelQuery):
    global mongo_disabled, mongo_disabled_until
    """
    AI-powered travel assistant using Groq's Llama 3.3 70B model
    Provides comprehensive travel information about any destination
    With MongoDB caching for simple queries (1-3 words)
    """
    try:
        # 0. Cache Check Logic
        words = query.destination.strip().split()
        is_cacheable = 1 <= len(words) <= 3
        q_norm = normalize_query(query.destination)
        
        memory_key = f"ai:{q_norm}:{query.language}"
        use_memory_cache = False
        
        if is_cacheable:
            if db is not None and not (mongo_disabled and mongo_disabled_until and datetime.now() < mongo_disabled_until):
                try:
                    cache_coll = db["ai_cache"]
                    cached_doc = await cache_coll.find_one({
                        "query_normalizado": q_norm, 
                        "idioma": query.language
                    })
                    
                    if cached_doc:
                        try:
                            fecha_cache = datetime.fromisoformat(cached_doc["fecha"])
                            # Ensure timezone awareness
                            if fecha_cache.tzinfo is None:
                                fecha_cache = fecha_cache.replace(tzinfo=timezone.utc)
                            
                            days_old = (datetime.now(timezone.utc) - fecha_cache).days
                            if days_old < 30:
                                logging.info(f"AI Cache Hit: {q_norm} ({query.language})")
                                try:
                                    await cache_coll.update_one(
                                        {"_id": cached_doc["_id"]}, 
                                        {"$inc": {"consultas": 1}}
                                    )
                                except Exception as db_err:
                                    logging.warning(f"Failed to update AI cache stats: {db_err}")
                                return TravelAssistantResponse(response=cached_doc["respuesta"])
                        except (ValueError, TypeError) as parse_err:
                            logging.error(f"Error parsing AI cache date: {parse_err}")
                except Exception as db_err:
                    logging.error(f"AI Cache lookup failed (proceeding without cache): {db_err}")
                    mongo_disabled = True
                    mongo_disabled_until = datetime.now() + timedelta(minutes=10)
                    use_memory_cache = True
            else:
                use_memory_cache = True
                
            if use_memory_cache and memory_key in memory_cache:
                cached_data = memory_cache[memory_key]
                time_diff = (datetime.now() - cached_data["timestamp"]).total_seconds()
                if time_diff < 86400:  # 24 hours
                    logging.info(f"Using memory cache (MongoDB unavailable) for: {q_norm}")
                    return TravelAssistantResponse(response=cached_data["respuesta"])

        # 1. Call Groq normally if not in cache or complex
        # Get Groq API key from environment
        groq_api_key = os.environ.get('GROQ_API_KEY')
        
        if not groq_api_key:
            raise HTTPException(
                status_code=500, 
                detail="GROQ_API_KEY not configured. Please add it to your .env file."
            )
        
        # Groq API endpoint
        api_url = "https://api.groq.com/openai/v1/chat/completions"
        
        headers = {
            "Authorization": f"Bearer {groq_api_key}",
            "Content-Type": "application/json"
        }
        
        # Determine response language
        language_name = "Spanish" if query.language == "es" else "English"
        
        # Create flexible prompt that responds to specific questions
        system_message = f"""You are an expert travel advisor with deep knowledge about destinations worldwide. 

CRITICAL INSTRUCTIONS:
1. You MUST respond ENTIRELY in {language_name} language ONLY - every single word.
2. Answer EXACTLY what the user is asking - don't give generic information if they ask something specific.
3. If they ask about "romantic tours", talk about romantic tours, not general city info.
4. If they ask about "budget hotels", focus on budget accommodation recommendations.
5. If they only mention a city name without specific question, then provide comprehensive travel information.
6. Be conversational, helpful, and specific to their needs.
7. Provide detailed answers with specific examples, names, prices when possible.
8. Include practical tips and recommendations.
9. IMPORTANT: Generate approximately the SAME amount of content whether in Spanish or English - aim for balanced, equivalent responses."""
        
        user_message = f"""{query.destination}

CRITICAL: Read the user's query carefully and respond accordingly:

**OPTION A - If the query is SPECIFIC** (like "nightlife in...", "what to do at night in...", "vegan restaurants in...", "budget hotels in...", "activities with kids in..."):
→ Answer ONLY about what they asked
→ Focus EXCLUSIVELY on their specific question
→ Do NOT give general city information unless asked
→ Be detailed about the specific topic they want

**OPTION B - If the query is JUST A CITY NAME** (like "Paris", "Tokyo", "Barcelona"):
→ Provide COMPREHENSIVE travel information
→ Include these sections:
   1. Main attractions
   2. Airlines and airports (which airlines fly there, main airports, codes)
   3. Accommodation options (with prices)
   4. Restaurants/food recommendations (with prices)
   5. Practical tips
   6. Best time to visit

General instructions for BOTH options:
- Respond in {language_name} with the SAME level of detail regardless of language
- Include specific names and approximate prices when relevant
- Give concrete recommendations with practical details
- Use organized sections with clear headers
- Be specific and complete, not generic"""
        
        # Use same max_tokens for both languages to ensure similar length responses
        max_tokens = 1800
        
        payload = {
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {"role": "system", "content": system_message},
                {"role": "user", "content": user_message}
            ],
            "temperature": 0.7,
            "max_tokens": max_tokens,
            "top_p": 0.9
        }
        
        # Make request to Groq API
        response = requests.post(
            api_url,
            headers=headers,
            json=payload,
            timeout=30
        )
        
        if response.status_code != 200:
            logger.error(f"Groq API error: {response.status_code} - {response.text}")
            raise HTTPException(
                status_code=response.status_code,
                detail=f"AI service error: {response.text}"
            )
        
        result = response.json()
        
        # Extract generated text from Groq response
        if "choices" in result and len(result["choices"]) > 0:
            generated_text = result["choices"][0]["message"]["content"].strip()
        else:
            raise HTTPException(
                status_code=500,
                detail="AI did not generate a response. Please try again."
            )
        
        # 2. Save to Cache if applicable
        if is_cacheable:
            db_failed = False
            if db is not None:
                try:
                    cache_doc = {
                        "query_normalizado": q_norm,
                        "idioma": query.language,
                        "respuesta": generated_text,
                        "fecha": datetime.now(timezone.utc).isoformat(),
                        "consultas": 1
                    }
                    # Use upsert to update if query/lang exists (e.g. if cache was expired)
                    await db["ai_cache"].update_one(
                        {"query_normalizado": q_norm, "idioma": query.language},
                        {"$set": cache_doc},
                        upsert=True
                    )
                    logging.info(f"AI Cache Updated: {q_norm} ({query.language})")
                except Exception as e:
                    logging.error(f"Error saving to AI cache: {e}")
                    mongo_disabled = True
                    mongo_disabled_until = datetime.now() + timedelta(minutes=10)
                    db_failed = True
            else:
                db_failed = True
                
            if db_failed:
                memory_cache[memory_key] = {
                    "respuesta": generated_text,
                    "timestamp": datetime.now()
                }

        return TravelAssistantResponse(response=generated_text)
        
    except requests.exceptions.Timeout:
        raise HTTPException(
            status_code=504,
            detail="Request timed out. The AI is taking too long to respond. Please try again."
        )
    except requests.exceptions.RequestException as e:
        logger.error(f"Request error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to connect to AI service: {str(e)}"
        )
    except Exception as e:
        logger.error(f"Unexpected error in travel assistant: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"An unexpected error occurred: {str(e)}"
        )

@api_router.get("/youtube")
async def get_youtube_videos(q: str, lang: str = "es"):
    global mongo_disabled, mongo_disabled_until
    """
    Search YouTube videos with MongoDB caching (30 days)
    Filters for > 50,000 views and returns top 2 (views + likes)
    """
    try:
        youtube_api_key = os.environ.get('YOUTUBE_API_KEY')
        if not youtube_api_key:
            raise HTTPException(status_code=500, detail="YOUTUBE_API_KEY not configured")

        # 1. Check Cache
        memory_key = f"youtube:{q}:{lang}"
        use_memory_cache = False
        
        if db is not None and not (mongo_disabled and mongo_disabled_until and datetime.now() < mongo_disabled_until):
            try:
                cache_collection = db["youtube_cache"]
                cached_result = await cache_collection.find_one({"q": q, "lang": lang})
                
                if cached_result:
                    cache_date = datetime.fromisoformat(cached_result['timestamp'])
                    # Ensure cache_date is timezone-aware for comparison
                    if cache_date.tzinfo is None:
                        cache_date = cache_date.replace(tzinfo=timezone.utc)
                    days_diff = (datetime.now(timezone.utc) - cache_date).days
                    if days_diff < 30:
                        logging.info(f"YouTube Cache Hit for: {q}")
                        return {"status": "success", "videos": cached_result['videos'], "cached": True}
            except Exception as db_err:
                logging.error(f"YouTube Cache check failed (proceeding without cache): {db_err}")
                mongo_disabled = True
                mongo_disabled_until = datetime.now() + timedelta(minutes=10)
                use_memory_cache = True
        else:
            logging.info(f"YouTube Cache Skipped (No DB) for: {q}")
            use_memory_cache = True
            
        if use_memory_cache and memory_key in memory_cache:
            cached_data = memory_cache[memory_key]
            time_diff = (datetime.now() - cached_data["timestamp"]).total_seconds()
            if time_diff < 86400:  # 24 hours
                logging.info(f"Using memory cache (MongoDB unavailable) for: {q}")
                return {"status": "success", "videos": cached_data["videos"], "cached": True}

        # 2. Search YouTube
        search_url = "https://www.googleapis.com/youtube/v3/search"
        # Clean up in case frontend already appended it
        clean_q = q.replace(' travel guide', '').replace(' guía de viaje turismo', '').replace(' travel guide tourism', '').replace('"', '').strip()
        
        if lang == "es":
            formatted_q = f'"{clean_q}" guía de viaje turismo'
        else:
            formatted_q = f'"{clean_q}" travel guide tourism'
            
        search_params = {
            "part": "snippet",
            "q": formatted_q,
            "type": "video",
            "maxResults": 6,
            "order": "relevance",
            "relevanceLanguage": lang,
            "regionCode": "ES" if lang == "es" else "US",
            "videoDuration": "medium",
            "key": youtube_api_key
        }
        
        search_response = requests.get(search_url, params=search_params, timeout=10)
        if search_response.status_code != 200:
            raise HTTPException(status_code=search_response.status_code, detail=f"YouTube Search Error: {search_response.text}")
        
        items = search_response.json().get("items", [])
        if not items:
            return {"status": "success", "videos": [], "message": "No videos found"}
            
        video_ids = [item["id"]["videoId"] for item in items]
        
        # 3. Get Statistics
        stats_url = "https://www.googleapis.com/youtube/v3/videos"
        stats_params = {
            "part": "statistics,snippet",
            "id": ",".join(video_ids),
            "key": youtube_api_key
        }
        
        stats_response = requests.get(stats_url, params=stats_params, timeout=10)
        if stats_response.status_code != 200:
            raise HTTPException(status_code=stats_response.status_code, detail=f"YouTube Stats Error: {stats_response.text}")
            
        video_details = stats_response.json().get("items", [])
        
        # 4. Filter and Sort
        processed_videos = []
        for v in video_details:
            stats = v.get("statistics", {})
            views = int(stats.get("viewCount", 0))
            likes = int(stats.get("likeCount", 0))
            
            # Filter > 50,000 views
            if views >= 50000:
                processed_videos.append({
                    "id": v["id"],
                    "title": v["snippet"]["title"],
                    "thumbnail": v["snippet"]["thumbnails"]["high"]["url"],
                    "views": views,
                    "likes": likes,
                    "score": views + likes
                })
        
        # Sort by score (views + likes) and take top 2
        top_videos = sorted(processed_videos, key=lambda x: x["score"], reverse=True)[:2]
        
        # 5. Save to Cache
        db_failed = False
        if db is not None:
            cache_doc = {
                "q": q,
                "lang": lang,
                "videos": top_videos,
                "timestamp": datetime.now(timezone.utc).isoformat()
            }
            try:
                await db["youtube_cache"].update_one({"q": q, "lang": lang}, {"$set": cache_doc}, upsert=True)
            except Exception as e:
                logging.error(f"Error saving to YouTube cache: {e}")
                mongo_disabled = True
                mongo_disabled_until = datetime.now() + timedelta(minutes=10)
                db_failed = True
        else:
            db_failed = True
            
        if db_failed:
            memory_cache[memory_key] = {
                "videos": top_videos,
                "timestamp": datetime.now()
            }
        
        return {"status": "success", "videos": top_videos, "cached": False}
        
    except Exception as e:
        logger.error(f"YouTube search error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/news")
async def get_news(language: str = "es", q: str = None):
    """
    Get travel news from NewsAPI
    Supports Spanish (es) and English (en)
    Optional 'q' parameter for specific searches
    """
    try:
        # Get NewsAPI key from environment
        news_api_key = os.environ.get('NEWS_API_KEY')
        
        if not news_api_key:
            raise HTTPException(
                status_code=500, 
                detail="NEWS_API_KEY not configured. Please add it to your .env file."
            )
        
        # NewsAPI endpoint
        api_url = "https://newsapi.org/v2/everything"
        
        # Define search queries
        if q:
            # Custom search: combine user query with travel/tourism
            query = f"{q} travel tourism"
        else:
            # Default search based on language
            if language == "es":
                query = "(viajes OR turismo OR vacaciones) AND (destinos OR aerolíneas OR hoteles OR vuelos OR aeropuerto OR pasajeros)"
            else:  # English
                query = "(travel OR tourism OR vacation) AND (destination OR airlines OR hotels OR flights OR airport)"
        
        # API parameters
        params = {
            "q": query,
            "language": language,
            "sortBy": "publishedAt",
            "pageSize": 8,
            "apiKey": news_api_key
        }
        
        # Make request to NewsAPI
        response = requests.get(api_url, params=params, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            return {
                "status": "success",
                "articles": data.get("articles", []),
                "totalResults": data.get("totalResults", 0)
            }
        elif response.status_code == 426:
            # Upgrade required error from NewsAPI
            raise HTTPException(
                status_code=426,
                detail="NewsAPI requires HTTPS. This usually happens when accessing from localhost."
            )
        else:
            raise HTTPException(
                status_code=response.status_code,
                detail=f"NewsAPI error: {response.text}"
            )
        
    except requests.exceptions.Timeout:
        raise HTTPException(
            status_code=504,
            detail="Request to NewsAPI timed out. Please try again."
        )
    except requests.exceptions.RequestException as e:
        logger.error(f"NewsAPI request error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to connect to NewsAPI: {str(e)}"
        )
    except Exception as e:
        logger.error(f"Unexpected error in news endpoint: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"An unexpected error occurred: {str(e)}"
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Download endpoint for ZIP file
@api_router.get("/download-build")
async def download_build():
    file_path = ROOT_DIR / "static" / "skylio-frontend.zip"
    if file_path.exists():
        return FileResponse(
            path=str(file_path),
            filename="skylio-frontend.zip",
            media_type="application/zip"
        )
    raise HTTPException(status_code=404, detail="File not found")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()