# DeedPro Development Guide

**Essential navigation and setup guide for developers and AI agents working on DeedPro.**

## 🗂️ Project Structure & Navigation

### **Root Directory**: `deeds-1/`
```
C:\Users\gerar\Desktop\deeds-1\          ← PROJECT ROOT (where you start)
├── backend/                             ← All Python/API code
│   ├── main.py                         ← Main API (Port 8000)
│   ├── external_api.py                 ← External API (Port 8001) 
│   ├── ai_assist.py                    ← AI assistance module
│   ├── start_external_api.py           ← External API startup script
│   ├── database.py                     ← Database utilities
│   ├── requirements.txt                ← Core dependencies
│   ├── requirements_full.txt           ← All dependencies (recommended)
│   ├── external_requirements.txt       ← External API dependencies
│   ├── EXTERNAL_API_README.md          ← External API documentation
│   └── .env                           ← Environment variables
├── frontend/                            ← Next.js React application
│   ├── src/app/                        ← App router pages
│   │   ├── create-deed/page.tsx        ← AI-enhanced deed wizard
│   │   ├── dashboard/page.tsx          ← Main dashboard
│   │   ├── admin/page.tsx              ← Admin panel
│   │   ├── account-settings/page.tsx   ← User settings
│   │   ├── past-deeds/page.tsx         ← Deed history
│   │   └── shared-deeds/page.tsx       ← Collaboration features
│   ├── src/components/                 ← Reusable components
│   │   ├── Sidebar.tsx                 ← Navigation sidebar
│   │   ├── Features.tsx                ← Landing features
│   │   └── [others]                    ← Hero, Footer, Navbar, Pricing
│   ├── src/styles/                     ← CSS stylesheets
│   │   └── dashboard.css               ← Main styles with AI animations
│   ├── package.json                    ← Frontend dependencies
│   └── next.config.js                  ← Next.js configuration
├── README.md                            ← Complete project documentation
├── DEPLOYMENT_GUIDE.md                  ← Production deployment guide
├── DEVELOPMENT_GUIDE.md                 ← This file (navigation guide)
├── vercel.json                         ← Vercel deployment config
└── package.json                        ← Root package.json
```

## 🚀 Quick Start Commands

### **IMPORTANT: Always start from project root!**
```powershell
# Your starting location should always be:
C:\Users\gerar\Desktop\deeds-1\

# Verify you're in the right place:
Get-ChildItem  # Should show backend/, frontend/, README.md, etc.
```

### **Backend Development (APIs)**

#### **Install Dependencies (First Time Setup)**
```powershell
# Navigate to backend directory
cd backend

# Install all dependencies (recommended for full features)
pip install -r requirements_full.txt

# OR install core dependencies only
pip install -r requirements.txt

# Verify installation
python -c "import fastapi; print('FastAPI installed successfully')"
```

#### **Run Main API (Port 8000)**
```powershell
# From project root: C:\Users\gerar\Desktop\deeds-1\
cd backend
python main.py

# API will be available at:
# - Health: http://localhost:8000/health
# - Docs: http://localhost:8000/docs
# - Admin: http://localhost:8000/admin/dashboard
```

#### **Run External API (Port 8001)**
```powershell
# Open NEW terminal/PowerShell window
# Navigate from project root
cd C:\Users\gerar\Desktop\deeds-1\backend
python start_external_api.py

# API will be available at:
# - Health: http://localhost:8001/health
# - Docs: http://localhost:8001/docs
# - SoftPro: http://localhost:8001/api/v1/softpro/webhook
```

#### **Run Both APIs Simultaneously (Advanced)**
```powershell
# From backend directory
Start-Job -Name "MainAPI" -ScriptBlock { 
    Set-Location "C:\Users\gerar\Desktop\deeds-1\backend"
    python main.py 
}

Start-Job -Name "ExternalAPI" -ScriptBlock { 
    Set-Location "C:\Users\gerar\Desktop\deeds-1\backend"
    python start_external_api.py 
}

# Check running jobs
Get-Job

# Stop jobs when done
Stop-Job -Name "MainAPI"
Stop-Job -Name "ExternalAPI"
```

### **Frontend Development (Next.js)**

#### **Install Dependencies (First Time Setup)**
```powershell
# Navigate to frontend directory
cd frontend

# Install Node.js dependencies
npm install

# Verify installation
npm --version
```

#### **Run Development Server**
```powershell
# From project root: C:\Users\gerar\Desktop\deeds-1\
cd frontend
npm run dev

# Frontend will be available at:
# - App: http://localhost:3000
# - Dashboard: http://localhost:3000/dashboard
# - Deed Wizard: http://localhost:3000/create-deed
```

## 🔧 Common Development Tasks

### **Testing API Endpoints**
```powershell
# Test Main API health
Invoke-RestMethod -Uri "http://localhost:8000/health"

# Test External API health  
Invoke-RestMethod -Uri "http://localhost:8001/health"

# Test AI assistance (Main API)
$body = @{
    deed_type = "Grant Deed"
    field = "property_address" 
    input = "123 main st los angeles"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8000/api/ai/assist" -Method POST -Body $body -ContentType "application/json"

# Test SoftPro webhook (External API)
$webhook = @{
    order_id = "TEST123"
    property_address = "123 Test St, Los Angeles, CA"
    buyer_name = "John Doe"
    seller_name = "Jane Smith"
    deed_type = "Grant Deed"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8001/api/v1/softpro/webhook" -Method POST -Body $webhook -ContentType "application/json" -Headers @{"X-API-Key" = "softpro_api_key_123"}
```

### **Database Operations**
```powershell
# From backend directory
cd backend

# Check database connection
python -c "from database import get_db_connection; print('DB connection:', get_db_connection() is not None)"

# Create/reset tables (if needed)
python -c "from database import create_tables; create_tables()"
```

### **Environment Variables**
```powershell
# Location: backend/.env
# Key variables to check:
# - DATABASE_URL (for database connection)
# - STRIPE_SECRET_KEY (for payments)
# - OPENAI_API_KEY (for AI features, optional)
# - ALLOWED_ORIGINS (for CORS)

# View current environment (without secrets)
cd backend
python -c "import os; from dotenv import load_dotenv; load_dotenv(); print('Environment loaded successfully')"
```

## 🚨 Common Issues & Solutions

### **"No such file or directory" Error**
```powershell
# ❌ WRONG - Running from project root
python main.py  # File not found!

# ✅ CORRECT - Navigate to backend first
cd backend
python main.py
```

### **"Module not found" Error**
```powershell
# Install missing dependencies
cd backend
pip install -r requirements_full.txt

# OR install specific missing package
pip install fastapi uvicorn python-dotenv
```

### **Port Already in Use**
```powershell
# Kill processes using ports
Get-Process | Where-Object {$_.ProcessName -eq "python"} | Stop-Process -Force

# OR use different ports in start scripts
```

### **CORS Errors in Frontend**
- Check that APIs are running on correct ports (8000, 8001)
- Verify ALLOWED_ORIGINS in backend/.env includes frontend URL
- Ensure frontend environment variables point to correct API URLs

## 📋 Pre-Development Checklist

Before starting development, always verify:

- [ ] **Location**: You're in `C:\Users\gerar\Desktop\deeds-1\`
- [ ] **Backend**: Dependencies installed with `pip install -r requirements_full.txt`
- [ ] **Frontend**: Dependencies installed with `npm install`
- [ ] **Environment**: `.env` file exists in `backend/` directory
- [ ] **Python**: Version 3.8+ installed and accessible
- [ ] **Node.js**: Version 18+ installed for frontend
- [ ] **Ports**: 8000, 8001, and 3000 are available

## 🔄 Git Workflow

### **Making Changes**
```powershell
# Always work from project root
cd C:\Users\gerar\Desktop\deeds-1\

# Check current status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Description of changes"

# Push to repository
git push origin main
```

### **Pulling Latest Changes**
```powershell
# Update from repository
git pull origin main

# Reinstall dependencies if package files changed
cd backend
pip install -r requirements_full.txt

cd ../frontend  
npm install
```

## 🎯 Development Focus Areas

### **AI-Enhanced Deed Wizard**
- **Location**: `frontend/src/app/create-deed/page.tsx`
- **Features**: Interactive tooltips, AI suggestions, card-based selection
- **Backend**: AI assistance endpoint at `/api/ai/assist`

### **External Integrations**
- **Location**: `backend/external_api.py`
- **Features**: SoftPro 360 webhooks, Qualia GraphQL integration
- **Documentation**: `backend/EXTERNAL_API_README.md`

### **Admin Dashboard**
- **Location**: `frontend/src/app/admin/page.tsx`
- **Backend**: Admin endpoints in `backend/main.py` (starting with `/admin/`)

### **Core API**
- **Location**: `backend/main.py`
- **Features**: User management, deed CRUD, payments, sharing

## 📞 Quick Reference

### **URLs in Development**
- **Frontend**: http://localhost:3000
- **Main API Docs**: http://localhost:8000/docs
- **External API Docs**: http://localhost:8001/docs
- **Admin Dashboard**: http://localhost:3000/admin

### **Key Files for Different Tasks**
- **UI/UX Changes**: `frontend/src/app/*/page.tsx`
- **API Changes**: `backend/main.py` or `backend/external_api.py`
- **Styling**: `frontend/src/styles/dashboard.css`
- **Database**: `backend/database.py`
- **AI Features**: `backend/ai_assist.py`
- **Deployment**: `DEPLOYMENT_GUIDE.md`

---

**Remember**: Always start navigation from `C:\Users\gerar\Desktop\deeds-1\` and use `cd backend` or `cd frontend` to access the respective code areas! 