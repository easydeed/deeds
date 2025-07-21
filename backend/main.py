import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow CORS for local dev and frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/health")
def health():
    return {"status": "ok"}

# Placeholder: User routes
@app.get("/user/me")
def get_user():
    return {"user": "demo"}

# Placeholder: Deeds routes
@app.get("/deeds")
def list_deeds():
    return {"deeds": []}

# Placeholder: Payments routes
@app.get("/payments")
def list_payments():
    return {"payments": []}

# Config for Supabase and Stripe (to be used in real endpoints)
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY") 