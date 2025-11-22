from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import requests


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


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
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/travel-assistant", response_model=TravelAssistantResponse)
async def travel_assistant(query: TravelQuery):
    """
    AI-powered travel assistant using Groq's Llama 3.3 70B model
    Provides comprehensive travel information about any destination
    """
    try:
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

Important instructions:
- Respond in {language_name} with the SAME level of detail regardless of language
- Include specific names (hotels, restaurants, attractions)
- Mention approximate prices when relevant
- Give concrete recommendations with practical details
- Use organized sections with clear headers
- Be specific and complete, not generic
- Keep similar length and depth in both Spanish and English"""
        
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
            generated_text = result["choices"][0]["message"]["content"]
        else:
            raise HTTPException(
                status_code=500,
                detail="AI did not generate a response. Please try again."
            )
        
        return TravelAssistantResponse(response=generated_text.strip())
        
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

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()