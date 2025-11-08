import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FiBookmark } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      {/* User Card */}
      <div className="sidebar-card user-card">
        <div className="user-card-cover"></div>
        <div className="user-card-content">
          <div className="user-card-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h3 className="user-card-name" onClick={() => navigate('/profile')}>
            {user?.name}
          </h3>
          <p className="user-card-email">{user?.email}</p>
          <div className="user-card-stats">
            <div className="stat-item">
              <span className="stat-label">Profile viewers</span>
              <span className="stat-value">25</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Post impressions</span>
              <span className="stat-value">142</span>
            </div>
          </div>
          <div className="user-card-premium">
            <FiBookmark />
            <span>My items</span>
          </div>
        </div>
      </div>

      {/* Suggested for you */}
      <div className="sidebar-card suggestions-card">
        <h3 className="suggestions-title">Add to your feed</h3>
        <div className="suggestions-list">
          <div className="suggestion-item">
            <div className="suggestion-avatar">T</div>
            <div className="suggestion-info">
              <h4>Technology News</h4>
              <p>Company • Technology</p>
            </div>
            <button className="follow-btn">+ Follow</button>
          </div>
          <div className="suggestion-item">
            <div className="suggestion-avatar">D</div>
            <div className="suggestion-info">
              <h4>Design Inspiration</h4>
              <p>Company • Design</p>
            </div>
            <button className="follow-btn">+ Follow</button>
          </div>
          <div className="suggestion-item">
            <div className="suggestion-avatar">S</div>
            <div className="suggestion-info">
              <h4>Startup Stories</h4>
              <p>Company • Business</p>
            </div>
            <button className="follow-btn">+ Follow</button>
          </div>
        </div>
        <button className="view-all-btn">View all recommendations →</button>
      </div>
    </div>
  );
};

export default Sidebar;
