# Quick Deployment Guide

## Your app is already on GitHub: 
https://github.com/sagar-p-mtr/LinkedIn-Clone

## Deploy in 2 minutes:

### 1. Go to Vercel
https://vercel.com/new

### 2. Import your repo
- Click "Import Git Repository"
- Select: sagar-p-mtr/LinkedIn-Clone
- Click Import

### 3. Deploy BACKEND first:
- Project Name: `linkedin-backend`
- Root Directory: **SELECT `backend`** ← IMPORTANT!
- Framework: Other
- Build Command: (leave empty)
- Environment Variables:
  ```
  MONGODB_URI = mongodb+srv://sagarp22cs_db_user:admin123@cluster0.xtf3lx8.mongodb.net/?appName=Cluster0
  JWT_SECRET = my-jwt-secret-2025
  NODE_ENV = production
  ```
- Click Deploy
- **COPY THE URL** (e.g., https://linkedin-backend-xxx.vercel.app)

### 4. Deploy FRONTEND:
- Go back to Vercel → Add New → Project
- Import SAME repo again
- Project Name: `linkedin-frontend`
- Root Directory: **SELECT `frontend`** ← IMPORTANT!
- Framework: Vite
- Build Command: `npm run build`
- Install Command: `npm install --legacy-peer-deps`
- Environment Variables:
  ```
  VITE_API_URL = https://YOUR-BACKEND-URL.vercel.app/api
  ```
  (Replace with URL from step 3)
- Click Deploy

### 5. Done!
Your app is live at: https://linkedin-frontend-xxx.vercel.app

---

## Current Issue:
You deployed the whole project instead of backend/frontend separately.

## Fix:
1. Delete current deployment on Vercel
2. Follow steps above
3. Deploy backend and frontend as separate projects
