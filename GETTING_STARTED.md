# 🚀 Getting Started - Quick Guide

Welcome to the LinkedIn Clone project! Follow these steps to get started quickly.

## 📋 Prerequisites

Before you begin, ensure you have:
- ✅ Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- ✅ MongoDB - Choose one:
  - **Local**: [Download MongoDB Community Edition](https://www.mongodb.com/try/download/community)
  - **Cloud**: [Free MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register)
- ✅ Git (optional, for cloning)
- ✅ Code editor (VS Code recommended)

## ⚡ Quick Start (3 Steps)

### Step 1: Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option B: MongoDB Atlas** (Recommended)
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier)
3. Get your connection string
4. Update `backend/.env` with your connection string

### Step 2: Start Backend

**Windows:**
```bash
# Double-click the file or run in terminal:
start-backend.bat
```

**Mac/Linux:**
```bash
cd backend
npm install
npm start
```

Backend will run on `http://localhost:5000`

### Step 3: Start Frontend

**Windows:**
```bash
# Open NEW terminal and double-click or run:
start-frontend.bat
```

**Mac/Linux:**
```bash
# Open NEW terminal
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000`

## 🎯 First Time Setup

### Backend Configuration

1. Navigate to `backend` folder
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Edit `.env` if needed (default values work for local MongoDB)

### Frontend Configuration

1. Navigate to `frontend` folder
2. The `.env` file is already configured for local development
3. No changes needed for local development

## 🧪 Testing the Application

1. Open browser to `http://localhost:3000`
2. You should see the Login page
3. Click "Sign up" to create your first account
4. Fill in:
   - **Name**: John Doe
   - **Email**: john@example.com
   - **Password**: password123
   - **Confirm Password**: password123
5. Click "Sign Up"
6. You'll be redirected to the Feed
7. Create your first post!

### Create a Second User (for testing interactions)

1. Open browser in Incognito/Private mode
2. Go to `http://localhost:3000`
3. Sign up with:
   - **Name**: Jane Smith
   - **Email**: jane@example.com
   - **Password**: password123
4. Now you can test likes and comments between users!

## 📱 What You Can Do

### As a User:
- ✅ Sign up for a new account
- ✅ Log in to your account
- ✅ Create posts (text + optional image URL)
- ✅ View all posts from all users
- ✅ Like/unlike any post
- ✅ Comment on any post
- ✅ Edit your own posts
- ✅ Delete your own posts
- ✅ Delete your own comments
- ✅ Log out

### Try These Features:
1. **Create a post**:
   - Enter text in the "What do you want to talk about?" field
   - Optionally add an image URL
   - Click "Post"

2. **Like a post**:
   - Click the heart icon
   - Watch the like count increase
   - Click again to unlike

3. **Comment on a post**:
   - Click "Comment" button
   - Type your comment
   - Click send icon

4. **Edit your post**:
   - Find a post you created
   - Click the edit icon (pencil)
   - Modify the text
   - Click "Save"

5. **Delete your post**:
   - Find a post you created
   - Click the delete icon (trash)
   - Confirm deletion

## 🔧 Troubleshooting

### Backend won't start?

**Error**: "MongoDB connection failed"
```bash
# Make sure MongoDB is running
# For local MongoDB:
mongod

# For MongoDB Atlas:
# Check your connection string in backend/.env
```

**Error**: "Port 5000 already in use"
```bash
# Kill the process or change port in backend/.env
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill -9
```

### Frontend won't start?

**Error**: "Dependencies not installed"
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Error**: "Cannot connect to backend"
- Make sure backend is running on port 5000
- Check `frontend/.env` has correct API URL

### Can't create account?

**Error**: "User already exists"
- Try a different email address
- Or use the existing account to log in

### Posts not showing?

1. Check browser console for errors (F12)
2. Make sure you're logged in
3. Try creating a new post
4. Refresh the page

## 📁 Project Structure Quick Reference

```
linkedin-clone/
├── backend/              # Node.js + Express backend
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication
│   └── server.js        # Entry point
│
├── frontend/            # React frontend
│   └── src/
│       ├── components/  # UI components
│       ├── pages/       # Page components
│       ├── context/     # State management
│       └── utils/       # API client
│
└── Documentation files
```

## 📚 Documentation

- **README.md** - Full project documentation
- **SETUP.md** - Detailed setup instructions
- **DEPLOYMENT.md** - How to deploy to production
- **FEATURES.md** - Complete feature list
- **PROJECT_COMPLETION.md** - Assignment checklist

## 🎓 Learn More

### Technologies Used:
- **Frontend**: React, React Router, Axios, React Icons
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT
- **Tools**: Vite, npm, Git

### Key Concepts Demonstrated:
- RESTful API design
- JWT authentication
- React Context API
- Protected routes
- CRUD operations
- Responsive design

## 💡 Tips

1. **Keep both terminals open** - one for backend, one for frontend
2. **Check the console** - errors will appear in browser console (F12)
3. **Use Chrome DevTools** - Network tab shows API calls
4. **Test with multiple users** - use incognito mode for second account
5. **MongoDB Atlas** - recommended over local MongoDB (easier setup)

## 🆘 Need Help?

### Check These First:
1. Are both backend and frontend running?
2. Is MongoDB connected?
3. Any errors in the terminal?
4. Any errors in browser console?

### Common Issues:
- **Can't log in** → Check credentials, try signing up again
- **Posts not loading** → Refresh page, check backend is running
- **Images not showing** → Make sure image URL is valid and public

## ✅ Checklist

Before you start coding:
- [ ] Node.js installed
- [ ] MongoDB running (local or Atlas)
- [ ] Backend dependencies installed
- [ ] Backend server running on port 5000
- [ ] Frontend dependencies installed
- [ ] Frontend server running on port 3000
- [ ] Created first test account
- [ ] Created first post
- [ ] Tested all features

## 🎉 You're All Set!

You should now have:
- ✅ Backend running on http://localhost:5000
- ✅ Frontend running on http://localhost:3000
- ✅ MongoDB connected
- ✅ Ability to create accounts and posts

**Enjoy building with LinkedIn Clone!** 🚀

---

**Next Steps:**
1. Explore the code
2. Understand the architecture
3. Try all features
4. Read the documentation
5. Deploy to production (see DEPLOYMENT.md)

**Questions?** Check the documentation files or review the code comments!
