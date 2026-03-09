# Skylio Hub - Travel Portal PRD

## Original Problem Statement
Build a comprehensive travel portal application called "Skylio Hub" with bilingual (Spanish/English) support, featuring must-see destinations, driving restrictions guide, AI-powered travel assistant, and travel news integration.

## Current Status
**Status:** Production Ready
**Last Updated:** March 9, 2026

## Core Features Implemented

### 1. Must-See Destinations (25 locations)
- Full bilingual data (ES/EN) with proper translations for all destination names
- YouTube video links for all destinations
- Photo gallery (3 images per destination)
- Rich content: descriptions, must-know facts, what to do, tips
- Continent-based filtering with proper language switching

### 2. Driving Restrictions Guide
- Complete English translations
- City-based restrictions information
- LEZ, ZTL, and Congestion Charge badges
- Dynamic data loading based on language

### 3. AI Travel Assistant
- Integrated with Groq API
- Bilingual responses based on selected language
- Example queries provided

### 4. Travel News Section
- NewsAPI integration via backend proxy
- Solves CORS issues
- Language-aware news fetching

### 5. Internationalization (i18n)
- Full Spanish/English support
- Dynamic continent filter translation
- All UI strings translated via react-i18next

## Technical Architecture

### Frontend
- React + Tailwind CSS
- react-i18next for translations
- Located at: `/app/frontend/`

### Backend
- Python FastAPI
- Located at: `/app/backend/`

### Key Files
- `frontend/src/pages/GuidesHub.jsx` - Main travel guides component
- `frontend/src/data/mustSeeDestinations_es.js` - Spanish destinations data
- `frontend/src/data/mustSeeDestinations_en.js` - English destinations data
- `frontend/src/data/drivingRestrictions.js` - Spanish driving data
- `frontend/src/data/drivingRestrictions_en.js` - English driving data
- `frontend/src/locales/en/translation.json` - English UI strings
- `frontend/src/locales/es/translation.json` - Spanish UI strings
- `backend/server.py` - Backend with news proxy endpoint

## API Keys Required
- `GROQ_API_KEY` - For AI Travel Assistant
- `NEWS_API_KEY` - For travel news

## Recent Bug Fixes (March 9, 2026)
1. **Destination names disappearing in English mode** - Fixed by adding missing `name`, `city`, `country`, `continent`, `flag`, and `coordinates` fields to all 25 destinations in `mustSeeDestinations_en.js`
2. **"Ver detalles →" not translated** - Added `t('guides.seeDetails')` translation function to DestinationCard and DrivingCard components
3. **Duplicate "All" continent filter** - Removed duplicate from continents array
4. **Syntax error in data file** - Fixed escaped apostrophe in "Ma'an" city name

## Deployment Notes
- Frontend: Static build for Hostinger
- Backend: FastAPI for Render.com
- Production build: `skylio-frontend.zip`

## Completed Tasks
- [x] YouTube links for all 25 destinations
- [x] Photo gallery for all 25 destinations
- [x] News section with NewsAPI
- [x] Backend proxy for news
- [x] English translations for driving restrictions
- [x] Full i18n support
- [x] Bug fixes for English mode

## Known Limitations
- None currently

## Future Enhancements (Backlog)
- Refactor GuidesHub.jsx (1400+ lines) into smaller components
- Add more destinations
- Real-time weather integration
- User accounts and favorites
