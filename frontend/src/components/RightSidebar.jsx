import { FiInfo } from 'react-icons/fi';
import './RightSidebar.css';

const RightSidebar = () => {
  const newsItems = [
    { title: 'AI transforming tech industry', readers: '2,345' },
    { title: 'Remote work trends in 2025', readers: '1,892' },
    { title: 'Startup funding reaches new high', readers: '1,543' },
    { title: 'Green energy innovations', readers: '1,234' },
    { title: 'Crypto market updates', readers: '987' }
  ];

  return (
    <div className="right-sidebar">
      {/* LinkedIn News */}
      <div className="right-sidebar-card">
        <div className="news-header">
          <h3>LinkedIn News</h3>
          <FiInfo />
        </div>
        <div className="news-list">
          {newsItems.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-bullet">•</div>
              <div className="news-content">
                <h4>{item.title}</h4>
                <p>{item.readers} readers</p>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more-btn">Show more →</button>
      </div>

      {/* Footer */}
      <div className="right-sidebar-footer">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Accessibility</a>
          <a href="#">Help Center</a>
          <a href="#">Privacy & Terms</a>
          <a href="#">Ad Choices</a>
          <a href="#">Advertising</a>
          <a href="#">Business Services</a>
          <a href="#">Get the LinkedIn app</a>
          <a href="#">More</a>
        </div>
        <div className="footer-brand">
          <span className="brand-logo">in</span>
          <span>LinkedIn Clone © 2025</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
