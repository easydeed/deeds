import os
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
from typing import Optional, List
import stripe
from datetime import datetime, timedelta
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

class ShareDeedCreate(BaseModel):
    deed_id: int
    recipient_name: str
    recipient_email: str
    recipient_role: str
    message: Optional[str] = None
    expires_in_days: int = 7

class ApprovalResponse(BaseModel):
    approved: bool
    comments: Optional[str] = None

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

@app.get("/deeds/available")
def list_available_deeds_for_sharing():
    """List deeds available for sharing (completed deeds)"""
    # Sample data of completed deeds that can be shared
    available_deeds = [
        { "id": 105, "address": "100 New St, LA, CA", "deed_type": "Quitclaim Deed" },
        { "id": 106, "address": "200 Fresh Ave, LA, CA", "deed_type": "Grant Deed" },
        { "id": 107, "address": "300 Clean Rd, LA, CA", "deed_type": "Warranty Deed" },
        { "id": 1, "address": "123 Main St, Los Angeles, CA", "deed_type": "Quitclaim Deed" }
    ]
    return {"available_deeds": available_deeds}

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

# Shared Deeds endpoints
@app.post("/shared-deeds")
def share_deed_for_approval(share_data: ShareDeedCreate):
    """Share a deed with someone for approval"""
    # In production:
    # 1. Create shared deed record in database
    # 2. Generate unique approval link
    # 3. Send email to recipient
    # 4. Return shared deed details
    
    expires_at = datetime.now() + timedelta(days=share_data.expires_in_days)
    approval_token = f"token_{share_data.deed_id}_{share_data.recipient_email.replace('@', '_at_')}"
    
    shared_deed = {
        "id": 101,  # Would be auto-generated
        "deed_id": share_data.deed_id,
        "shared_by_user_id": 1,  # From JWT token
        "recipient_name": share_data.recipient_name,
        "recipient_email": share_data.recipient_email,
        "recipient_role": share_data.recipient_role,
        "message": share_data.message,
        "status": "sent",
        "approval_token": approval_token,
        "expires_at": expires_at.isoformat(),
        "created_at": datetime.now().isoformat(),
        "approval_url": f"https://deedpro.com/approve/{approval_token}"
    }
    
    # Simulate email sending
    email_sent = True  # Would use actual email service
    
    if not email_sent:
        raise HTTPException(status_code=500, detail="Failed to send approval email")
    
    return {
        "success": True,
        "message": "Deed shared successfully! Approval email sent.",
        "shared_deed": shared_deed
    }

@app.get("/shared-deeds")
def list_shared_deeds():
    """List all shared deeds for current user"""
    # Sample data showing various approval statuses
    shared_deeds = [
        {
            "id": 1,
            "date_shared": "2024-01-15",
            "deed_id": 101,
            "apn": "123-456-789",
            "address": "123 Main St, Los Angeles, CA",
            "deed_type": "Quitclaim Deed",
            "shared_with": "John Smith",
            "recipient_email": "john@titleco.com",
            "recipient_role": "Title Officer",
            "status": "approved",
            "response_date": "2024-01-16",
            "comments": "Looks good to proceed",
            "expires_at": "2024-01-22"
        },
        {
            "id": 2,
            "date_shared": "2024-01-14",
            "deed_id": 102,
            "apn": "987-654-321",
            "address": "456 Oak Ave, Beverly Hills, CA",
            "deed_type": "Grant Deed",
            "shared_with": "Jane Doe",
            "recipient_email": "jane@lender.com",
            "recipient_role": "Lender",
            "status": "viewed",
            "expires_at": "2024-01-21"
        },
        {
            "id": 3,
            "date_shared": "2024-01-13",
            "deed_id": 103,
            "apn": "555-777-999",
            "address": "789 Pine Rd, Santa Monica, CA",
            "deed_type": "Warranty Deed",
            "shared_with": "Bob Wilson",
            "recipient_email": "bob@escrow.com",
            "recipient_role": "Escrow Officer",
            "status": "sent",
            "expires_at": "2024-01-20"
        },
        {
            "id": 4,
            "date_shared": "2024-01-10",
            "deed_id": 104,
            "apn": "111-222-333",
            "address": "321 Cedar St, Pasadena, CA",
            "deed_type": "Trust Deed",
            "shared_with": "Sarah Johnson",
            "recipient_email": "sarah@notary.com",
            "recipient_role": "Notary",
            "status": "rejected",
            "response_date": "2024-01-11",
            "comments": "Please revise the legal description section",
            "expires_at": "2024-01-17"
        }
    ]
    
    return {"shared_deeds": shared_deeds}

@app.post("/shared-deeds/{shared_deed_id}/resend")
def resend_approval_email(shared_deed_id: int):
    """Resend approval email reminder"""
    # In production, resend the approval email
    return {
        "success": True,
        "message": f"Reminder email sent for shared deed {shared_deed_id}"
    }

@app.delete("/shared-deeds/{shared_deed_id}")
def revoke_shared_deed(shared_deed_id: int):
    """Revoke access to a shared deed"""
    # In production:
    # 1. Mark shared deed as revoked
    # 2. Invalidate approval token
    # 3. Send notification email (optional)
    
    return {
        "success": True,
        "message": f"Access to shared deed {shared_deed_id} has been revoked"
    }

# Public approval endpoint (for recipients)
@app.get("/approve/{approval_token}")
def view_shared_deed(approval_token: str):
    """Public endpoint for recipients to view shared deed"""
    # In production:
    # 1. Validate token
    # 2. Check if not expired
    # 3. Mark as "viewed" if first time
    # 4. Return deed details
    
    # Simulate token validation
    if not approval_token.startswith("token_"):
        raise HTTPException(status_code=404, detail="Invalid approval link")
    
    # Sample deed data for approval
    deed_data = {
        "deed_id": 101,
        "deed_type": "Quitclaim Deed",
        "property_address": "123 Main St, Los Angeles, CA",
        "apn": "123-456-789",
        "shared_by": "DeedPro User",
        "message": "Please review and approve this deed",
        "expires_at": "2024-01-22",
        "can_approve": True  # Check if not expired
    }
    
    return deed_data

@app.post("/approve/{approval_token}")
def submit_approval_response(approval_token: str, response: ApprovalResponse):
    """Submit approval or rejection response"""
    # In production:
    # 1. Validate token
    # 2. Check if not expired
    # 3. Update shared deed status
    # 4. Notify deed owner via email
    
    if not approval_token.startswith("token_"):
        raise HTTPException(status_code=404, detail="Invalid approval link")
    
    status = "approved" if response.approved else "rejected"
    
    # Update shared deed status (would update database)
    result = {
        "success": True,
        "message": f"Thank you! Your response has been recorded.",
        "status": status,
        "comments": response.comments
    }
    
    return result

# Recipients endpoints (from previous implementation)
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