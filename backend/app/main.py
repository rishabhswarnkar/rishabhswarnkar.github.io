from fastapi import FastAPI
from app.models import models
from app.database import engine
from app.api import endpoints
from fastapi.middleware.cors import CORSMiddleware

# Create tables if they don't exist (simpler than running alembic in dev start, though alembic is preferred)
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="BPO Automation Tool API")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(endpoints.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to BPO Automation Tool API"}
