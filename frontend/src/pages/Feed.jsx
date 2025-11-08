import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { postsAPI } from '../utils/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await postsAPI.getAllPosts();
      setPosts(response.data.posts);
      setError('');
    } catch (err) {
      setError('Failed to load posts');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handlePostUpdated = (updatedPost) => {
    setPosts(posts.map(post => 
      post._id === updatedPost._id ? updatedPost : post
    ));
  };

  const handlePostDeleted = (postId) => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  return (
    <div className="feed-container">
      <Navbar />
      
      <div className="feed-content">
        <Sidebar />
        
        <div className="feed-main">
          <CreatePost onPostCreated={handlePostCreated} />
          
          {loading && (
            <div className="feed-loading">Loading posts...</div>
          )}

          {error && (
            <div className="feed-error">{error}</div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="feed-empty">
              <p>No posts yet. Be the first to share something!</p>
            </div>
          )}

          <div className="posts-list">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                currentUserId={user?.id}
                onUpdate={handlePostUpdated}
                onDelete={handlePostDeleted}
              />
            ))}
          </div>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;
