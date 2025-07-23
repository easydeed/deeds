# 🛠️ DeedPro Development Guide

## 📁 **Repository Structure Overview**

### **Dual-Repository Development Setup**

**We use two repositories for development and deployment:**

#### **📂 Main Development Repository**
- **Repository**: [https://github.com/easydeed/deeds](https://github.com/easydeed/deeds)
- **Purpose**: Complete project development and backup
- **Contains**: Frontend + Backend + Documentation
- **Use for**: Daily development, testing, documentation

#### **📂 Backend Deployment Repository**
- **Repository**: [https://github.com/easydeed/deedpro-backend-2024](https://github.com/easydeed/deedpro-backend-2024)  
- **Purpose**: Clean backend deployment to Render
- **Contains**: Backend files only
- **Use for**: Backend deployments and Render service

## 🔄 **Development Workflow**

### **Daily Development Process**

#### **1. Work in Main Repository**
```bash
# Clone or work in main repository
git clone https://github.com/easydeed/deeds.git
cd deeds
```

#### **2. Frontend Development**
```bash
cd frontend
npm install
npm run dev
# Develops on http://localhost:3000
```

#### **3. Backend Development**  
```bash
cd backend
pip install -r requirements.txt
python main.py
# Develops on http://localhost:8000
```

#### **4. Database Development**
```bash
cd backend
# For schema changes
python setup_database.py

# For testing
python reset_and_fix.py
```

### **Deployment Process**

#### **Frontend Deployment**
```bash
# 1. Test locally
cd frontend && npm run build

# 2. Commit to main repository
git add frontend/
git commit -m "Update frontend features"
git push origin main

# 3. Vercel auto-deploys from main repo
# Uses /frontend directory automatically
```

#### **Backend Deployment**
```bash
# 1. Test locally
cd backend && python main.py

# 2. Commit to main repository (backup)
git add backend/
git commit -m "Update backend API"  
git push origin main

# 3. Copy changes to backend repository
# Option A: Upload via GitHub web interface
# Option B: Clone backend repo and copy files
git clone https://github.com/easydeed/deedpro-backend-2024.git
cp -r backend/* deedpro-backend-2024/backend/
cd deedpro-backend-2024
git add .
git commit -m "Update backend"
git push origin main

# 4. Render auto-deploys from backend repo
```

## 🏗️ **Local Development Setup**

### **Prerequisites**
- **Node.js 18+** and npm
- **Python 3.8+**
- **Git**
- **PostgreSQL** (optional for local testing)

### **Environment Setup**

#### **Frontend Environment** (`.env.local`)
```env
# Development API URL
NEXT_PUBLIC_API_URL=http://localhost:8000

# Stripe (use test keys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[your_stripe_publishable_key]

# Development settings
NODE_ENV=development
```

#### **Backend Environment** (`.env`)
```env
# Database (use local or Render connection)
DATABASE_URL=postgresql://user:password@localhost:5432/deedpro_dev
# OR use live database for testing:
# DATABASE_URL=postgresql://deedpro_user:password@host/deedpro

# JWT Security  
JWT_SECRET_KEY=development-secret-key-change-in-production

# Stripe (test keys)
STRIPE_SECRET_KEY=[your_stripe_secret_key_here]
STRIPE_WEBHOOK_SECRET=[your_webhook_secret]

# Development settings
ENVIRONMENT=development
FRONTEND_URL=http://localhost:3000

# AI (optional)
OPENAI_API_KEY=your_openai_api_key_or_leave_blank_for_mock
```

## 🧪 **Testing Strategy**

### **Local Testing**

#### **Frontend Testing**
```bash
cd frontend

# Development server
npm run dev

# Build testing
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

#### **Backend Testing**
```bash
cd backend

# Run main API
python main.py

# Run external API
python start_external_api.py

# Test database connection
python -c "from database import get_db_connection; print('✅ Database connected!')"

# Test specific endpoints
curl http://localhost:8000/health
curl http://localhost:8000/docs
```

### **Integration Testing**

#### **Full Stack Testing**
1. **Start backend**: `cd backend && python main.py`
2. **Start frontend**: `cd frontend && npm run dev`  
3. **Test registration**: http://localhost:3000/register
4. **Test login**: http://localhost:3000/login
5. **Test API calls**: Check browser network tab

#### **Database Testing**
```bash
# Initialize test database
python setup_database.py

# Test with live database
python -c "
import os
os.environ['DATABASE_URL'] = 'your_render_database_url'
from database import get_db_connection
print('✅ Live database connected!')
"
```

## 🔧 **Development Tools**

### **Useful Scripts**

#### **Backend Database Scripts**
```bash
# Initialize/reset database
python setup_database.py

# Add missing columns
python fix_database.py

# Reset connections
python reset_and_fix.py

# Check database status
python -c "from database import *; check_tables()"
```

#### **Frontend Development**
```bash
# Install dependencies
npm install

# Start development with hot reload
npm run dev

# Build for production testing
npm run build && npm start

# Check for TypeScript errors
npm run type-check
```

### **IDE Setup**

#### **VSCode Extensions**
- **Python** (Microsoft)
- **TypeScript Hero**
- **Prettier** (code formatting)
- **ESLint** (JavaScript/TypeScript linting)
- **PostCSS Language Support**

#### **Python Extensions**
- **Pylint** (code quality)
- **Black** (code formatting)
- **Python Docstring Generator**

## 🐛 **Debugging**

### **Frontend Debugging**
```bash
# Check browser console for errors
# Open Developer Tools (F12)
# Check Network tab for API calls
# Verify environment variables in console:
console.log(process.env.NEXT_PUBLIC_API_URL)
```

### **Backend Debugging**
```bash
# Check server logs
python main.py
# Logs show request/response details

# Test database connection
python -c "from database import test_connection; test_connection()"

# Test specific API endpoints
curl -X POST http://localhost:8000/users/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123","full_name":"Test User"}'
```

### **Database Debugging**
```bash
# Check table structure
python -c "
from database import get_db_connection
conn = get_db_connection()
cursor = conn.cursor()
cursor.execute('DESCRIBE users;')  # Or '\d users' in PostgreSQL
print(cursor.fetchall())
"

# Check data
python -c "
from database import get_db_connection
conn = get_db_connection()
cursor = conn.cursor()
cursor.execute('SELECT * FROM users LIMIT 5;')
print(cursor.fetchall())
"
```

## 🚀 **Production Deployment Checklist**

### **Pre-Deployment**
- [ ] ✅ Test locally with production environment variables
- [ ] ✅ Run full test suite
- [ ] ✅ Check database schema is up to date
- [ ] ✅ Verify all environment variables are set
- [ ] ✅ Test API endpoints with production URLs

### **Frontend Deployment**
- [ ] ✅ Update `NEXT_PUBLIC_API_URL` to production backend
- [ ] ✅ Commit to main repository
- [ ] ✅ Verify Vercel auto-deployment
- [ ] ✅ Test live frontend

### **Backend Deployment**  
- [ ] ✅ Test backend changes locally
- [ ] ✅ Commit to main repository (backup)
- [ ] ✅ Upload to backend repository
- [ ] ✅ Verify Render auto-deployment
- [ ] ✅ Test live API endpoints

### **Database Deployment**
- [ ] ✅ Run schema updates on production database
- [ ] ✅ Verify data integrity
- [ ] ✅ Test API database connections

## 📊 **Monitoring During Development**

### **Local Monitoring**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

### **Production Monitoring**
- **Frontend**: https://frontend-mydmrvafb-easydeeds-projects.vercel.app
- **Backend API**: https://deedpro-main-api.onrender.com/docs
- **Health Check**: https://deedpro-main-api.onrender.com/health

### **Development Logs**
```bash
# Backend logs
tail -f backend/logs/app.log

# Frontend logs  
npm run dev  # Shows real-time compilation logs

# Database logs
python -c "import logging; logging.basicConfig(level=logging.DEBUG)"
```

## 🎯 **Best Practices**

### **Code Organization**
- ✅ **Keep main repository as source of truth**
- ✅ **Use backend repository only for deployment**
- ✅ **Test locally before deploying**
- ✅ **Document all changes**

### **Git Workflow**
- ✅ **Commit frequently to main repository**
- ✅ **Use descriptive commit messages**
- ✅ **Keep backend repository synchronized**
- ✅ **Tag releases for important versions**

### **Environment Management**
- ✅ **Never commit environment files**
- ✅ **Use different secrets for development/production**
- ✅ **Document required environment variables**
- ✅ **Test with production-like data**

**Happy developing! Your DeedPro platform is ready for continued development!** 🎉 