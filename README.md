# DeedPro - Real Estate Document Platform

A modern full-stack platform for creating, managing, and recording real estate transfer documents.

## 🏗️ Architecture

- **Frontend**: Next.js (React + TypeScript)
- **Backend**: FastAPI (Python)
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **Deployment**: Vercel (Frontend) + Render (Backend)

## 🚀 Features

- **User Dashboard**: Clean, intuitive interface with big buttons and easy navigation
- **Deed Wizard**: Step-by-step deed creation with property search and form validation
- **Account Settings**: Profile management, payment methods, and notification preferences
- **Document Generation**: Merge property data with HTML templates for legal documents
- **Payment Integration**: Stripe-powered subscription and payment management
- **Real-time Sync**: All user data synchronized across devices via backend API

## 📁 Project Structure

```
deeds/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── dashboard/    # Dashboard page
│   │   │   ├── create-deed/  # Deed Wizard
│   │   │   └── account-settings/ # Account management
│   │   ├── components/       # Reusable React components
│   │   │   └── Sidebar.tsx   # Navigation sidebar
│   │   └── styles/           # CSS stylesheets
│   │       └── dashboard.css # Main dashboard styles
│   └── package.json
├── backend/                  # FastAPI backend application
│   ├── main.py              # API endpoints and routes
│   ├── database.py          # Database utilities and models
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # Environment variables
└── templates/               # HTML templates for document generation
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- Git

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   - Open [http://localhost:3000](http://localhost:3000)
   - Navigate to `/dashboard` for the main interface

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Add your Supabase and Stripe credentials

6. **Start the API server:**
   ```bash
   uvicorn main:app --reload
   ```

7. **Access the API:**
   - API docs: [http://localhost:8000/docs](http://localhost:8000/docs)
   - Health check: [http://localhost:8000/health](http://localhost:8000/health)

## 🔧 Environment Variables

### Backend (.env)

```env
SUPABASE_URL=postgresql://postgres:password@db.xxx.supabase.co:5432/postgres
SUPABASE_KEY=your_supabase_anon_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

## 🚀 Deployment

### Frontend (Vercel)

1. **Connect GitHub repository to Vercel**
2. **Set build settings:**
   - Framework: Next.js
   - Root directory: `frontend`
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Add environment variables in Vercel dashboard:**
   - `NEXT_PUBLIC_API_URL=https://your-backend.render.com`

### Backend (Render)

1. **Connect GitHub repository to Render**
2. **Create a new Web Service:**
   - Root directory: `backend`
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

3. **Add environment variables in Render dashboard:**
   - All variables from your `.env` file

## 📋 API Endpoints

### Users
- `POST /users` - Create a new user
- `GET /users/{email}` - Get user by email
- `GET /user/me` - Get current user

### Deeds
- `POST /deeds` - Create a new deed
- `GET /deeds` - List user's deeds
- `GET /deeds/{deed_id}` - Get specific deed

### Payments
- `POST /payment-methods` - Add payment method
- `GET /payment-methods` - List payment methods
- `DELETE /payment-methods/{id}` - Remove payment method

### Property
- `GET /property/search?address={address}` - Search property information

## 🎨 UI/UX Features

- **Big Buttons**: All primary actions use large, easily clickable buttons
- **Clear Navigation**: Intuitive sidebar with icons and labels
- **Progress Indicators**: Step-by-step wizards with visual progress
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Branded Design**: Purple gradient theme with professional styling
- **Accessibility**: High contrast, large fonts, and keyboard navigation

## 🔒 Security

- Environment variables for all sensitive data
- CORS properly configured for production
- Stripe webhooks for secure payment processing
- Database queries use parameterized statements
- JWT tokens for user authentication (to be implemented)

## 📖 Usage

1. **Dashboard**: Overview of recent deeds and quick actions
2. **Create Deed**: Step-by-step wizard to generate legal documents
3. **Account Settings**: Manage profile, payment methods, and preferences
4. **Document Generation**: Automatic merging of property data with legal templates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for DeedPro.io.

## 🆘 Support

For technical support, contact the development team or refer to the API documentation at `/docs` when the backend is running.