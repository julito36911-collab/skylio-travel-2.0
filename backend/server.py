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
    AI-powered travel assistant using Hugging Face's Meta-Llama-3.1-8B-Instruct
    Provides comprehensive travel information about any destination
    """
    try:
        # Get Hugging Face API key from environment
        hf_api_key = os.environ.get('HUGGINGFACE_API_KEY')
        
        if not hf_api_key:
            raise HTTPException(
                status_code=500, 
                detail="HUGGINGFACE_API_KEY not configured. Please add it to your .env file."
            )
        
        # Hugging Face Inference API endpoint (updated URL)
        api_url = "https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct"
        
        headers = {
            "Authorization": f"Bearer {hf_api_key}",
            "Content-Type": "application/json"
        }
        
        # Create detailed prompt for travel information
        prompt = f"""You are an expert travel advisor. Provide comprehensive information about {query.destination} for travelers planning their trip. Include:

1. **Hotels Recommended** (list 3-4 options with different budgets: budget, mid-range, luxury)
2. **Airlines** that fly to {query.destination} (mention major carriers and airports)
3. **Must-Visit Places** (top 5-7 tourist attractions)
4. **Recommended Tours** (suggest 2-3 popular tour options)
5. **Travel Tips for Different Groups**:
   - For Couples (romantic activities)
   - For Families with Children (kid-friendly attractions)
   - For Solo Travelers (safety tips and activities)
6. **Best Time to Visit** (mention season and weather)
7. **Budget Estimate** (approximate daily budget in USD)
8. **Practical Tips** (visa requirements, local currency, language)

Keep the response organized, informative, and practical. Use clear sections.

Destination: {query.destination}

Travel Information:"""
        
        payload = {
            "inputs": prompt,
            "parameters": {
                "max_new_tokens": 800,
                "temperature": 0.7,
                "top_p": 0.95,
                "top_k": 50,
                "return_full_text": False
            }
        }
        
        # Make request to Hugging Face API
        response = requests.post(
            api_url,
            headers=headers,
            json=payload,
            timeout=60
        )
        
        if response.status_code == 503:
            # Model is loading
            raise HTTPException(
                status_code=503,
                detail="AI model is loading. Please try again in 20-30 seconds."
            )
        
        if response.status_code != 200:
            logger.error(f"Hugging Face API error: {response.status_code} - {response.text}")
            raise HTTPException(
                status_code=response.status_code,
                detail=f"AI service error: {response.text}"
            )
        
        result = response.json()
        
        # Extract generated text
        if isinstance(result, list) and len(result) > 0:
            generated_text = result[0].get("generated_text", "")
        else:
            generated_text = result.get("generated_text", "")
        
        if not generated_text:
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