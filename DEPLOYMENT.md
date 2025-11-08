# Deployment Guide

This guide will help you deploy the LinkedIn Clone application to production.

## Backend Deployment (Render)

### Step 1: Prepare Your Code

1. Make sure your code is pushed to GitHub
2. Ensure `.env` is in `.gitignore`
3. Verify `package.json` has correct start script:
   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

### Step 2: Create MongoDB Atlas Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or log in
3. Create a new cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Add your database name: `mongodb+srv://...mongodb.net/linkedin-clone?...`

### Step 3: Deploy to Render

1. Go to [Render](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Fill in the details:
   - **Name**: `linkedin-clone-backend`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A random secure string (min 32 characters)
   - `NODE_ENV`: `production`
   - `PORT`: `5000`

6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. Copy your backend URL (e.g., `https://linkedin-clone-backend.onrender.com`)

### Alternative: Railway

1. Go to [Railway](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables (same as above)
6. Deploy

## Frontend Deployment (Vercel)

### Step 1: Update API URL

1. Frontend will use the backend URL from Render
2. Set environment variable in Vercel

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign up/login
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Add Environment Variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.onrender.com/api`
   - (Replace with your actual backend URL)

6. Click "Deploy"
7. Wait for deployment (2-5 minutes)
8. Your frontend will be live at `https://your-app.vercel.app`

### Alternative: Netlify

1. Go to [Netlify](https://www.netlify.com)
2. Drag and drop your `frontend/dist` folder
3. Or connect via GitHub:
   - Click "New site from Git"
   - Choose your repository
   - Set build settings:
     - **Build command**: `cd frontend && npm run build`
     - **Publish directory**: `frontend/dist`
   - Add environment variables
   - Deploy

## Post-Deployment Steps

### 1. Update CORS Settings (Backend)

If your frontend is on a different domain, update `backend/server.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-url.vercel.app'
  ],
  credentials: true
}));
```

### 2. Test the Application

1. Visit your frontend URL
2. Sign up a new account
3. Create a post
4. Test all features:
   - Login/Signup
   - Create post
   - Like post
   - Comment on post
   - Edit post
   - Delete post

### 3. Update README

Update the README.md with your live URLs:

```markdown
## 🚀 Live Demo

- **Frontend**: https://your-app.vercel.app
- **Backend**: https://linkedin-clone-backend.onrender.com
```

## Environment Variables Summary

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/linkedin-clone?retryWrites=true&w=majority
JWT_SECRET=your_super_secure_random_secret_key_min_32_characters
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## Troubleshooting

### Backend Issues

**Problem**: "Application failed to respond"
- Check Render logs
- Verify MongoDB connection string
- Ensure all environment variables are set

**Problem**: "MongooseServerSelectionError"
- Whitelist all IPs (0.0.0.0/0) in MongoDB Atlas Network Access
- Check database user credentials

### Frontend Issues

**Problem**: "Failed to fetch" or CORS errors
- Verify VITE_API_URL is correct
- Check CORS settings in backend
- Ensure backend is running

**Problem**: Build fails
- Check build logs in Vercel/Netlify
- Verify all dependencies are in package.json
- Try building locally first: `npm run build`

### Free Tier Limitations

**Render Free Tier:**
- Spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- Consider upgrading for better performance

**Solutions:**
- Use a service like [UptimeRobot](https://uptimerobot.com) to ping your backend every 14 minutes
- Upgrade to paid tier for production use

## Monitoring

### Set up monitoring:

1. **Backend Health Check**:
   - Endpoint: `https://your-backend.onrender.com/api/health`
   - Should return: `{"success": true, "message": "Server is running"}`

2. **Frontend**:
   - Visit your app URL
   - Check browser console for errors
   - Test all features

## Custom Domain (Optional)

### Vercel:
1. Go to project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Render:
1. Go to your service → Settings
2. Add custom domain
3. Configure DNS

## Security Checklist

- ✅ Environment variables set correctly
- ✅ `.env` files not committed to Git
- ✅ Strong JWT_SECRET (min 32 characters)
- ✅ MongoDB Atlas IP whitelist configured
- ✅ CORS configured for your domain only
- ✅ HTTPS enabled (automatic on Vercel/Render)

## Cost Breakdown

### Free Tier (Recommended for testing):
- **MongoDB Atlas**: Free (512 MB storage)
- **Render**: Free (with limitations)
- **Vercel**: Free (hobby plan)
- **Total**: $0/month

### Production (Recommended for real use):
- **MongoDB Atlas**: $9/month (Shared cluster)
- **Render**: $7/month (Starter)
- **Vercel**: Free or $20/month (Pro)
- **Total**: $16-36/month

## Backup & Maintenance

### Database Backups:
- MongoDB Atlas provides automated backups
- Set up regular exports for important data

### Updates:
- Regularly update dependencies
- Monitor security advisories
- Keep Node.js version updated

## Support

For deployment issues:
- **Render**: Check [Render Docs](https://render.com/docs)
- **Vercel**: Check [Vercel Docs](https://vercel.com/docs)
- **MongoDB**: Check [Atlas Docs](https://docs.atlas.mongodb.com/)

Good luck with your deployment! 🚀
