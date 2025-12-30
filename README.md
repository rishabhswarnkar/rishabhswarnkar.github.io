# BPO Automation Tool

AI-powered tool that helps California real estate agents complete Broker Price Opinions (BPOs) faster.

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: FastAPI, SQLAlchemy, Pydantic
- **Database**: PostgreSQL with Alembic migrations
- **Infrastructure**: Docker Compose

## Project Structure

- `frontend/`: Next.js application
- `backend/`: FastAPI application
- `docker-compose.yml`: Local development orchestration

## Setup Instructions

1. **Prerequisites**: Ensure you have Docker and Docker Compose installed.

2. **Environment Variables**:
   The `docker-compose.yml` sets up default environment variables. For production, create a `.env` file.

3. **Run the Application**:
   ```bash
   docker-compose up --build
   ```

4. **Access the App**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

## Features (MVP)

- **Property Lookup**: Enter an address to fetch mock property details and comparables.
- **Authentication**: Basic NextAuth.js setup (Mock login).
- **Dashboard**: View property details and comparables.

## API Usage

**POST /api/property/lookup**

Input:
```json
{
  "address": "123 Main St, Los Angeles, CA 90001"
}
```

Output:
```json
{
  "property": { ... },
  "comparables": [ ... ]
}
```
