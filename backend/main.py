import os
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
from typing import Optional, List
import stripe
from database import (
    create_user, get_user_by_email, create_deed, get_user_deeds
)

load_dotenv()

app = FastAPI(title="DeedPro API", version="1.0.0")

# Allow CORS for local dev and frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Stripe configuration
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

# Pydantic models
class UserCreate(BaseModel):
    email: str
    first_name: str
    last_name: str
    username: Optional[str] = None
    city: Optional[str] = None
    country: Optional[str] = None

class UserUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    username: Optional[str] = None
    city: Optional[str] = None
    country: Optional[str] = None

class DeedCreate(BaseModel):
    deed_type: str
    property_address: Optional[str] = None
    apn: Optional[str] = None
    county: Optional[str] = None
    legal_description: Optional[str] = None
    owner_type: Optional[str] = None
    sales_price: Optional[float] = None
    grantee_name: Optional[str] = None
    vesting: Optional[str] = None

class PaymentMethodCreate(BaseModel):
    payment_method_id: str
    set_as_default: bool = False

class Recipient(BaseModel):
    name: str
    email: str
    role: str

class RecipientsCreate(BaseModel):
    deed_id: int
    recipients: List[Recipient]

# Health check
@app.get("/health")
def health():
    return {"status": "ok", "message": "DeedPro API is running"}

# User endpoints
@app.post("/users")
def create_user_endpoint(user: UserCreate):
    """Create a new user"""
    # Check if user already exists
    existing_user = get_user_by_email(user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="User with this email already exists")
    
    new_user = create_user(
        email=user.email,
        first_name=user.first_name,
        last_name=user.last_name,
        username=user.username,
        city=user.city,
        country=user.country
    )
    
    if not new_user:
        raise HTTPException(status_code=500, detail="Failed to create user")
    
    return new_user

@app.get("/users/{email}")
def get_user_endpoint(email: str):
    """Get user by email"""
    user = get_user_by_email(email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.get("/user/me")
def get_current_user():
    """Get current user (placeholder - would use JWT token in production)"""
    # For demo purposes, return a sample user
    return {
        "id": 1,
        "email": "john@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "username": "johndoe",
        "city": "Los Angeles",
        "country": "USA"
    }

# Deed endpoints
@app.post("/deeds")
def create_deed_endpoint(deed: DeedCreate):
    """Create a new deed"""
    # In production, get user_id from JWT token
    user_id = 1  # Placeholder
    
    deed_data = deed.dict()
    new_deed = create_deed(user_id, deed_data)
    
    if not new_deed:
        raise HTTPException(status_code=500, detail="Failed to create deed")
    
    return new_deed

@app.get("/deeds")
def list_deeds_endpoint():
    """List all deeds for current user"""
    # In production, get user_id from JWT token
    user_id = 1  # Placeholder
    
    # Sample data with various statuses for testing
    sample_deeds = [
        {
            "id": 1,
            "date": "2024-01-15",
            "apn": "123-456-789",
            "address": "123 Main St, Los Angeles, CA",
            "escrow_number": "ESC001",
            "deed_type": "Quitclaim Deed",
            "status": "completed",
            "recorded": True
        },
        {
            "id": 2,
            "date": "2024-01-10",
            "apn": "987-654-321",
            "address": "456 Oak Ave, Beverly Hills, CA",
            "escrow_number": "ESC002",
            "deed_type": "Grant Deed",
            "status": "draft",
            "recorded": False
        },
        {
            "id": 3,
            "date": "2024-01-08",
            "apn": "555-777-999",
            "address": "789 Pine Rd, Santa Monica, CA",
            "escrow_number": "ESC003",
            "deed_type": "Warranty Deed",
            "status": "pending",
            "recorded": False
        }
    ]
    
    return {"deeds": sample_deeds}

@app.get("/deeds/{deed_id}")
def get_deed_endpoint(deed_id: int):
    """Get a specific deed"""
    # Placeholder - would implement get_deed_by_id in database.py
    return {
        "id": deed_id,
        "deed_type": "Quitclaim Deed",
        "property_address": "123 Success Ave",
        "status": "completed"
    }

@app.put("/deeds/{deed_id}/status")
def update_deed_status(deed_id: int, status: str):
    """Update deed status"""
    # Placeholder for updating deed status
    valid_statuses = ["draft", "completed", "pending", "recorded"]
    if status not in valid_statuses:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    return {"message": f"Deed {deed_id} status updated to {status}"}

# Recipients endpoints
@app.post("/deeds/{deed_id}/recipients")
def save_recipients_endpoint(deed_id: int, recipients_data: RecipientsCreate):
    """Save recipients for a deed"""
    # In production, save to database and send emails
    return {
        "success": True,
        "message": f"Recipients added successfully for deed {deed_id}",
        "recipients_count": len(recipients_data.recipients)
    }

@app.get("/deeds/{deed_id}/recipients")
def get_recipients_endpoint(deed_id: int):
    """Get recipients for a deed"""
    # Placeholder data
    sample_recipients = [
        {"name": "John Smith", "email": "john@titleco.com", "role": "title_officer"},
        {"name": "Jane Doe", "email": "jane@lender.com", "role": "lender"},
        {"name": "Bob Wilson", "email": "bob@escrow.com", "role": "escrow_officer"}
    ]
    
    return {
        "success": True,
        "recipients": sample_recipients
    }

@app.delete("/deeds/{deed_id}")
def delete_deed_endpoint(deed_id: int):
    """Delete a deed"""
    # In production, soft delete or permanent delete based on business rules
    return {"message": f"Deed {deed_id} deleted successfully"}

@app.get("/deeds/{deed_id}/download")
def download_deed_endpoint(deed_id: int):
    """Generate and download deed document"""
    # In production, generate PDF and return file
    return {
        "download_url": f"https://api.deedpro.io/files/deed_{deed_id}.pdf",
        "expires_at": "2024-02-01T12:00:00Z"
    }

# Payment endpoints
@app.post("/payment-methods")
def create_payment_method_endpoint(payment_method: PaymentMethodCreate):
    """Add a new payment method via Stripe"""
    try:
        # Get the payment method from Stripe
        stripe_pm = stripe.PaymentMethod.retrieve(payment_method.payment_method_id)
        
        # In production, get user_id from JWT token and save to database
        user_id = 1  # Placeholder
        
        return {
            "id": stripe_pm.id,
            "card_brand": stripe_pm.card.brand,
            "last_four": stripe_pm.card.last4,
            "is_default": payment_method.set_as_default
        }
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/payment-methods")
def list_payment_methods_endpoint():
    """List all payment methods for current user"""
    # Placeholder data
    return {
        "payment_methods": [
            {
                "id": "pm_1234567890",
                "card_brand": "visa",
                "last_four": "1234",
                "is_default": True
            }
        ]
    }

@app.delete("/payment-methods/{payment_method_id}")
def delete_payment_method_endpoint(payment_method_id: str):
    """Remove a payment method"""
    try:
        # Detach from Stripe
        stripe.PaymentMethod.detach(payment_method_id)
        # Would also remove from database in production
        return {"message": "Payment method removed successfully"}
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))

# Subscription endpoints
@app.post("/subscriptions")
def create_subscription_endpoint():
    """Create a new subscription"""
    # Placeholder for Stripe subscription creation
    return {
        "subscription_id": "sub_1234567890",
        "status": "active",
        "plan": "pro"
    }

@app.get("/subscriptions")
def get_subscription_endpoint():
    """Get current user's subscription"""
    # Placeholder data
    return {
        "subscription_id": "sub_1234567890",
        "status": "active",
        "plan": "pro",
        "current_period_end": "2024-02-01"
    }

# Property search endpoint (placeholder)
@app.get("/property/search")
def search_property_endpoint(address: str):
    """Search for property information"""
    # Placeholder - would integrate with property data API
    return {
        "results": [
            {
                "address": address,
                "apn": "123-456-789",
                "county": "Los Angeles",
                "city": "Los Angeles",
                "legal_description": "Lot 1, Block 2, Tract 12345"
            }
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 