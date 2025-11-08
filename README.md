# LinkedIn Clone - Social Media Website

A full-stack social media web application similar to LinkedIn, built with React.js, Node.js, Express.js, and MongoDB.

## 🚀 Live Demo

- **Frontend**: (Deploy on Netlify/Vercel)
- **Backend**: (Deploy on Render/Railway)

## 📋 Features

### Core Features
- ✅ **User Authentication**
  - Sign up with name, email, and password
  - Login with email and password
  - JWT-based authentication
  - Protected routes
  - Persistent login sessions

- ✅ **Post Management**
  - Create text posts with optional images
  - View all posts from all users (public feed)
  - Posts display user name, content, and timestamp
  - Latest posts appear first
  - Real-time post updates

### Bonus Features
- ✅ **Like System**
  - Like/unlike posts
  - View like count on posts
  - Visual feedback for liked posts

- ✅ **Comment System**
  - Add comments to posts
  - Delete your own comments
  - View all comments on a post
  - Comment count display

- ✅ **Edit & Delete**
  - Edit your own posts
  - Delete your own posts
  - Confirmation before deletion

- ✅ **User Profile Display**
  - User avatar with initials
  - User name display in navbar
  - Logout functionality

- ✅ **Responsive Design**
  - Mobile-friendly interface
  - Clean and modern UI
  - LinkedIn-inspired design

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Vite** - Build tool
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📁 Project Structure

```
linkedin-clone/
├── backend/
│   ├── models/
│   │   ├── User.js          # User schema
│   │   └── Post.js          # Post schema with comments
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── posts.js         # Post routes
│   ├── middleware/
│   │   └── auth.js          # JWT verification middleware
│   ├── server.js            # Express server setup
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   └── PostCard.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Feed.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── .env
│
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/linkedin-clone
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

4. Start MongoDB:
   - **Local MongoDB**: Make sure MongoDB is running on your system
   - **MongoDB Atlas**: Use your Atlas connection string in `MONGODB_URI`

5. Start the backend server:
```bash
npm start
```
or for development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🎯 Usage

1. **Sign Up**: Create a new account with your name, email, and password
2. **Log In**: Access your account using your credentials
3. **Create Posts**: Share your thoughts and add optional images
4. **Interact**: Like and comment on posts from other users
5. **Manage**: Edit or delete your own posts and comments
6. **Navigate**: Use the clean interface to browse the feed
7. **Log Out**: Securely end your session

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Posts
- `GET /api/posts` - Get all posts (protected)
- `GET /api/posts/:id` - Get single post (protected)
- `POST /api/posts` - Create a post (protected)
- `PUT /api/posts/:id` - Update a post (protected, owner only)
- `DELETE /api/posts/:id` - Delete a post (protected, owner only)
- `PUT /api/posts/:id/like` - Like/unlike a post (protected)
- `POST /api/posts/:id/comment` - Add a comment (protected)
- `DELETE /api/posts/:id/comment/:commentId` - Delete a comment (protected, owner only)

## 🚀 Deployment

### Backend Deployment (Render/Railway)

1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `JWT_SECRET` - A secure random string
   - `NODE_ENV` - `production`

### Frontend Deployment (Netlify/Vercel)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to Netlify or Vercel
3. Set the environment variable:
   - `VITE_API_URL` - Your deployed backend URL

### Using Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Using Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes
- Input validation
- CORS configuration
- Environment variables for sensitive data

## 🎨 UI/UX Features

- LinkedIn-inspired design
- Responsive layout for mobile and desktop
- Smooth animations and transitions
- User avatars with initials
- Real-time timestamp display
- Form validation with error messages
- Loading states and feedback

## 🧪 Testing

You can test the application with these sample users:

```javascript
// User 1
{
  name: "John Doe",
  email: "john@example.com",
  password: "password123"
}

// User 2
{
  name: "Jane Smith",
  email: "jane@example.com",
  password: "password123"
}
```

## 📝 Future Enhancements

- [ ] Image upload functionality
- [ ] User profiles with bio and profile pictures
- [ ] Follow/unfollow users
- [ ] Personalized feed based on connections
- [ ] Search functionality
- [ ] Notifications
- [ ] Real-time updates with WebSockets
- [ ] Share posts
- [ ] Hashtags and mentions
- [ ] Private messaging

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as a Full Stack Developer Internship Assignment

## 🙏 Acknowledgments

- Inspired by LinkedIn's user interface
- Built with modern web development best practices
- Uses industry-standard technologies and patterns

---

**Note**: This is a portfolio project created for educational purposes and internship assessment. It demonstrates full-stack development skills including frontend, backend, database, and deployment.
