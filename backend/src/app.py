from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import challenge, webhooks
import os

app = FastAPI()

# List your frontend origins here
origins = [
    "http://localhost:5173",  # for local dev
    "https://fastapi-ai-coding-challenge-generator-production-ffe3.up.railway.app",  # deployed frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,             # 👈 DO NOT use "*"
    allow_credentials=True,            # 👈 needed for Clerk JWT
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your routes
app.include_router(challenge.router, prefix="/api")
app.include_router(webhooks.router, prefix="/webhooks")