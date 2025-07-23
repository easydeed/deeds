# 🚀 DeedPro Deployment Guide

## 📁 **Current Deployment Architecture**

### **Dual-Repository Setup**

**Our deployment uses two repositories for optimal performance:**

#### **📂 Frontend Repository**
- **Source**: [https://github.com/easydeed/deeds](https://github.com/easydeed/deeds)
- **Deploys to**: **Vercel**
- **Uses**: `/frontend` directory only
- **Live URL**: https://frontend-mydmrvafb-easydeeds-projects.vercel.app

#### **📂 Backend Repository**  
- **Source**: [https://github.com/easydeed/deedpro-backend-2024](https://github.com/easydeed/deedpro-backend-2024)
- **Deploys to**: **Render**
- **Uses**: `/backend` directory only  
- **Live URL**: https://deedpro-main-api.onrender.com

#### **📂 Database**
- **Service**: Render PostgreSQL
- **Name**: `deedpro-db-2024`
- **Region**: Ohio (US East)

## ✅ **Current Status - LIVE & WORKING**

### **✅ Production Services**
- **Frontend**: ✅ Live on Vercel
- **Backend API**: ✅ Live on Render  
- **Database**: ✅ PostgreSQL with proper schema
- **Domain Setup**: ✅ Connected and functional

### **✅ Features Working**
- **User Registration**: ✅ Creating accounts
- **User Authentication**: ✅ Login system  
- **Database Integration**: ✅ All tables created
- **API Endpoints**: ✅ All routes functional
- **CORS Configuration**: ✅ Frontend-backend communication

## 🔄 **Deployment Workflow**

### **For Frontend Updates**
1. **Edit files** in `frontend/` folder of main repository
2. **Test locally**: `cd frontend && npm run dev`
3. **Push to main repo**: [easydeed/deeds](https://github.com/easydeed/deeds)
4. **Vercel auto-deploys** (2-3 minutes)

### **For Backend Updates**
1. **Edit files** in `backend/` folder locally
2. **Test locally**: `cd backend && python main.py`
3. **Push to main repo** (for backup): [easydeed/deeds](https://github.com/easydeed/deeds)
4. **Upload to backend repo**: [easydeed/deedpro-backend-2024](https://github.com/easydeed/deedpro-backend-2024)
5. **Render auto-deploys** (5-10 minutes)

### **For Database Updates**
1. **Run local scripts**: `python setup_database.py`
2. **Connect to live database** via connection string
3. **Changes apply immediately**

## 🌐 **Live URLs & Access**

### **Public URLs**
- **Frontend**: https://frontend-mydmrvafb-easydeeds-projects.vercel.app
- **Backend API**: https://deedpro-main-api.onrender.com
- **API Documentation**: https://deedpro-main-api.onrender.com/docs
- **Health Check**: https://deedpro-main-api.onrender.com/health

### **Admin Access**
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Render Dashboard**: https://dashboard.render.com
- **GitHub Main Repo**: https://github.com/easydeed/deeds
- **GitHub Backend Repo**: https://github.com/easydeed/deedpro-backend-2024

## 🔧 **Environment Variables**

### **Vercel (Frontend)**
```env
NEXT_PUBLIC_API_URL=https://deedpro-main-api.onrender.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[Your Stripe Public Key]
NODE_ENV=production
```

### **Render (Backend)**
```env
DATABASE_URL=[PostgreSQL connection string from Render]
JWT_SECRET_KEY=[Your JWT secret]
STRIPE_SECRET_KEY=[Your Stripe secret key]
STRIPE_WEBHOOK_SECRET=[Your webhook secret]
ENVIRONMENT=production
FRONTEND_URL=https://frontend-mydmrvafb-easydeeds-projects.vercel.app
```

## 🧪 **Testing & Verification**

### **Health Checks**
- **Backend Health**: https://deedpro-main-api.onrender.com/health
- **API Docs**: https://deedpro-main-api.onrender.com/docs
- **Frontend Load**: https://frontend-mydmrvafb-easydeeds-projects.vercel.app

### **Functional Tests**
- **Registration**: Create new account
- **Login**: Test authentication
- **Dashboard**: Access main interface
- **API Calls**: Frontend ↔ Backend communication

## 🔄 **Maintenance Tasks**

### **Regular Updates**
1. **Keep repositories synchronized**
2. **Monitor Render/Vercel dashboards**
3. **Check database performance**
4. **Review API logs**

### **Emergency Procedures**
- **Backend Issues**: Restart Render service
- **Frontend Issues**: Redeploy in Vercel
- **Database Issues**: Use local scripts to fix schema
- **Connection Issues**: Check environment variables

## 📊 **Monitoring & Logs**

### **Vercel Monitoring**
- **Build logs**: Available in deployment history
- **Runtime logs**: Function logs for debugging
- **Analytics**: Traffic and performance metrics

### **Render Monitoring**
- **Service logs**: Real-time application logs
- **Metrics**: CPU, memory, response times
- **Database logs**: PostgreSQL performance

## 🚨 **Troubleshooting**

### **Common Issues**

**Frontend can't reach backend**:
- ✅ Check `NEXT_PUBLIC_API_URL` in Vercel
- ✅ Verify backend is running on Render

**Backend database errors**:
- ✅ Run `python reset_and_fix.py` locally
- ✅ Check `DATABASE_URL` in Render

**Authentication failures**:
- ✅ Verify `JWT_SECRET_KEY` matches
- ✅ Check database schema has all columns

**CORS errors**:
- ✅ Verify `FRONTEND_URL` in backend
- ✅ Check Render service is running

## 🎯 **Quick Commands**

### **Local Testing**
```bash
# Test frontend
cd frontend && npm run dev

# Test backend  
cd backend && python main.py

# Fix database
cd backend && python setup_database.py
```

### **Deploy Updates**
```bash
# Frontend: Push to main repo
git add frontend/
git commit -m "Update frontend"
git push origin main

# Backend: Upload to backend repo via GitHub web interface
# Or use git commands on backend-specific repo
```

**Your DeedPro platform is successfully deployed and running!** 🎉 