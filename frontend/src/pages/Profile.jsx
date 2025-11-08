import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { postsAPI } from '../utils/api';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      setLoading(true);
      const response = await postsAPI.getAllPosts();
      // Filter posts by current user
      const myPosts = response.data.posts.filter(post => post.user._id === user.id);
      setUserPosts(myPosts);
    } catch (err) {
      console.error('Error fetching user posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePostUpdated = (updatedPost) => {
    setUserPosts(userPosts.map(post => 
      post._id === updatedPost._id ? updatedPost : post
    ));
  };

  const handlePostDeleted = (postId) => {
    setUserPosts(userPosts.filter(post => post._id !== postId));
  };

  return (
    <div className="profile-container">
      <Navbar />
      
      <div className="profile-content">
        <div className="profile-main">
          {/* Profile Header */}
          <div className="profile-header-card">
            <div className="profile-cover"></div>
            <div className="profile-info-section">
              <div className="profile-avatar-large">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="profile-details">
                <h1 className="profile-name">{user?.name}</h1>
                <p className="profile-email">{user?.email}</p>
                <p className="profile-bio">{user?.bio || 'No bio yet'}</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">{userPosts.length}</span>
                    <span className="stat-label">Posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Posts */}
          <div className="profile-posts-section">
            <h2 className="section-title">My Posts</h2>
            
            {loading && (
              <div className="profile-loading">Loading posts...</div>
            )}

            {!loading && userPosts.length === 0 && (
              <div className="profile-empty">
                <p>You haven't created any posts yet.</p>
                <button onClick={() => navigate('/feed')} className="go-to-feed-btn">
                  Go to Feed
                </button>
              </div>
            )}

            <div className="profile-posts-list">
              {userPosts.map((post) => (
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
