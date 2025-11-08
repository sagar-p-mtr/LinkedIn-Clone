# Quick Setup Guide

## Prerequisites
- Node.js v14+ installed
- MongoDB installed and running (or MongoDB Atlas account)
- npm or yarn package manager

## Step-by-Step Setup

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Configure Backend Environment

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/linkedin-clone
JWT_SECRET=linkedin_clone_super_secret_jwt_key_2025
NODE_ENV=development
```

**For MongoDB Atlas:**
Replace `MONGODB_URI` with your Atlas connection string:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/linkedin-clone?retryWrites=true&w=majority
```

### 3. Start MongoDB (if using local MongoDB)

**Windows:**
```bash
mongod
```

**Mac/Linux:**
```bash
sudo service mongod start
```

### 4. Start Backend Server

```bash
cd backend
npm start
```

Backend will run on `http://localhost:5000`

### 5. Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

If you encounter errors, try:
```bash
npm install --legacy-peer-deps
```

### 6. Configure Frontend Environment

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

### 7. Start Frontend Development Server

```bash
cd frontend
npm run dev
```

Frontend will run on `http://localhost:3000`

## Testing the Application

1. Open `http://localhost:3000` in your browser
2. Click "Sign up" to create a new account
3. Fill in your name, email, and password
4. After signup, you'll be redirected to the feed
5. Create your first post
6. Sign up with another account to test interactions
7. Try liking posts, adding comments, editing and deleting your posts

## Troubleshooting

### MongoDB Connection Issues

**Error:** `MongooseServerSelectionError`

**Solution:**
- Make sure MongoDB is running
- Check your MongoDB URI in `.env`
- For Atlas, ensure your IP is whitelisted

### Port Already in Use

**Error:** `Port 5000 is already in use`

**Solution:**
- Kill the process using the port or change the port in `backend/.env`

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### CORS Errors

**Solution:**
- Ensure backend is running on port 5000
- Check VITE_API_URL in frontend `.env`
- Clear browser cache and reload

### Frontend Dependencies Issues

**Solution:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## Default Test Accounts

You can create test accounts with these credentials:

```
User 1:
Name: John Doe
Email: john@example.com
Password: password123

User 2:
Name: Jane Smith  
Email: jane@example.com
Password: password123
```

## Project Structure

```
linkedin-clone/
├── backend/          # Node.js + Express backend
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   ├── middleware/  # Auth middleware
│   └── server.js    # Entry point
│
└── frontend/        # React frontend
    ├── src/
    │   ├── components/  # Reusable components
    │   ├── pages/      # Page components
    │   ├── context/    # React context
    │   └── utils/      # Utilities
    └── package.json
```

## Next Steps

1. Deploy backend to Render or Railway
2. Deploy frontend to Netlify or Vercel
3. Update environment variables for production
4. Test deployed application
5. Share links in README.md

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB is running
4. Check network tab in browser DevTools
5. Review backend logs

Happy coding! 🚀
