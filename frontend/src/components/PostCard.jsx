import { useState } from 'react';
import { postsAPI } from '../utils/api';
import { FiHeart, FiMessageCircle, FiEdit2, FiTrash2, FiSend, FiShare2 } from 'react-icons/fi';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import { BiRepost } from 'react-icons/bi';
import './PostCard.css';

const PostCard = ({ post, currentUserId, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const [editImage, setEditImage] = useState(post.image || '');
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(false);

  const isOwner = post.user._id === currentUserId;
  const isLiked = post.likes.includes(currentUserId);
  const likesCount = post.likes.length;
  const commentsCount = post.comments.length;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMins < 1) return 'Just now';
    if (diffInMins < 60) return `${diffInMins}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  const handleLike = async () => {
    try {
      const response = await postsAPI.likePost(post._id);
      onUpdate(response.data.post);
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  const handleEdit = async () => {
    if (!editContent.trim()) return;

    setLoading(true);
    try {
      const response = await postsAPI.updatePost(post._id, {
        content: editContent,
        image: editImage,
      });
      onUpdate(response.data.post);
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating post:', err);
      alert('Failed to update post');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await postsAPI.deletePost(post._id);
      onDelete(post._id);
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Failed to delete post');
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setLoading(true);
    try {
      const response = await postsAPI.addComment(post._id, { text: commentText });
      onUpdate(response.data.post);
      setCommentText('');
    } catch (err) {
      console.error('Error adding comment:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) return;

    try {
      const response = await postsAPI.deleteComment(post._id, commentId);
      onUpdate(response.data.post);
    } catch (err) {
      console.error('Error deleting comment:', err);
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-author">
          <div className="author-avatar">
            {post.user.name.charAt(0).toUpperCase()}
          </div>
          <div className="author-info">
            <h3 className="author-name">{post.user.name}</h3>
            <p className="post-time">{formatDate(post.createdAt)}</p>
          </div>
        </div>

        {isOwner && !isEditing && (
          <div className="post-actions-menu">
            <button onClick={() => setIsEditing(true)} className="action-btn" title="Edit">
              <FiEdit2 />
            </button>
            <button onClick={handleDelete} className="action-btn" title="Delete">
              <FiTrash2 />
            </button>
          </div>
        )}
      </div>

      <div className="post-content">
        {isEditing ? (
          <div className="edit-form">
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="edit-textarea"
            />
            <input
              type="text"
              value={editImage}
              onChange={(e) => setEditImage(e.target.value)}
              placeholder="Image URL (optional)"
              className="edit-image-input"
            />
            <div className="edit-actions">
              <button onClick={() => setIsEditing(false)} className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleEdit} className="save-btn" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="post-text">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post" className="post-image" />
            )}
          </>
        )}
      </div>

      <div className="post-stats">
        {(likesCount > 0 || commentsCount > 0) && (
          <>
            {likesCount > 0 && (
              <div className="stat-item">
                <FaThumbsUp className="stat-icon" />
                <span>{likesCount}</span>
              </div>
            )}
            {commentsCount > 0 && (
              <span className="stat-item" onClick={() => setShowComments(!showComments)} style={{ cursor: 'pointer' }}>
                {commentsCount} {commentsCount === 1 ? 'comment' : 'comments'}
              </span>
            )}
          </>
        )}
      </div>

      <div className="post-interactions">
        <button onClick={handleLike} className={`interaction-btn ${isLiked ? 'liked' : ''}`}>
          {isLiked ? <FaThumbsUp /> : <FiHeart />}
          <span>Like</span>
        </button>
        <button onClick={() => setShowComments(!showComments)} className="interaction-btn">
          <FiMessageCircle />
          <span>Comment</span>
        </button>
        <button className="interaction-btn">
          <BiRepost />
          <span>Repost</span>
        </button>
        <button className="interaction-btn">
          <FiSend />
          <span>Send</span>
        </button>
      </div>

      {showComments && (
        <div className="comments-section">
          <form onSubmit={handleAddComment} className="comment-form">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              className="comment-input"
            />
            <button type="submit" className="comment-submit-btn" disabled={loading}>
              <FiSend />
            </button>
          </form>

          <div className="comments-list">
            {post.comments.map((comment) => (
              <div key={comment._id} className="comment">
                <div className="comment-avatar">
                  {comment.user.name.charAt(0).toUpperCase()}
                </div>
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-author">{comment.user.name}</span>
                    <span className="comment-time">{formatDate(comment.createdAt)}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </div>
                {comment.user._id === currentUserId && (
                  <button
                    onClick={() => handleDeleteComment(comment._id)}
                    className="comment-delete-btn"
                    title="Delete comment"
                  >
                    <FiTrash2 />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
