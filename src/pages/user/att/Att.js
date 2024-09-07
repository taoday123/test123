// src/App.js
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './Att.scss';
import UploadVideo from './UploadVideo/UploadVideo';

const videoList = [
  // ... (dữ liệu video cũ của bạn)
];

const App = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [showDeletePassword, setShowDeletePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [videoToDelete, setVideoToDelete] = useState(null);
  const [showYouTubeForm, setShowYouTubeForm] = useState(false);
  const [youtubeUrl, setYouTubeUrl] = useState('');
  const [youtubeTitle, setYouTubeTitle] = useState('');

  useEffect(() => {
    // Load uploaded videos from localStorage
    const savedVideos = JSON.parse(localStorage.getItem('uploadedVideos')) || [];
    setUploadedVideos(savedVideos);
  }, []);

  useEffect(() => {
    // Save uploaded videos to localStorage whenever they change
    localStorage.setItem('uploadedVideos', JSON.stringify(uploadedVideos));
  }, [uploadedVideos]);

  const handleVideoClick = (url) => {
    setVideoUrl(url);
  };

  const handleClose = () => {
    setVideoUrl(null);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      const newComment = {
        text: commentText,
        author: 'User',
        timestamp: new Date().toLocaleString(),
      };
      setComments([newComment, ...comments]);
      setCommentText('');
    }
  };

  const handleUpload = (url, title) => {
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)?([^\s"&?/]+)|youtu\.be\/([^\s"&?/]+)/;
    const match = url.match(youtubeRegex);

    let finalUrl = url;

    if (match) {
      const videoId = match[1] || match[2];
      finalUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }

    const newVideo = {
      id: uploadedVideos.length + 1,
      title,
      thumbnail: 'https://via.placeholder.com/150', // Placeholder thumbnail
      url: finalUrl,
    };
    setUploadedVideos([newVideo, ...uploadedVideos]);
  };

  const handleYouTubeSubmit = () => {
    if (youtubeUrl.trim() && youtubeTitle.trim()) {
      handleUpload(youtubeUrl, youtubeTitle);
      setYouTubeUrl('');
      setYouTubeTitle('');
      setShowYouTubeForm(false);
    } else {
      alert('Please provide both URL and title.');
    }
  };

  const handleDelete = (video) => {
    setVideoToDelete(video);
    setShowDeletePassword(true);
  };

  const confirmDelete = () => {
    if (password === '1234567899') {
      setUploadedVideos(uploadedVideos.filter(video => video !== videoToDelete));
      setVideoToDelete(null);
      setShowDeletePassword(false);
      setPassword('');
    } else {
      alert('Mật khẩu không chính xác');
    }
  };

  const cancelDelete = () => {
    setVideoToDelete(null);
    setShowDeletePassword(false);
    setPassword('');
  };

  return (
    <div className="app">
      <h1>Video Gallery</h1>
      <UploadVideo onUpload={handleUpload} />
      <div className="video-gallery">
        {videoList.concat(uploadedVideos).map((video) => (
          <div key={video.id} className="video-thumbnail">
            <img src={video.thumbnail} alt={video.title} onClick={() => handleVideoClick(video.url)} />
            <p>{video.title}</p>
            <button onClick={() => handleDelete(video)}>Xóa</button>
          </div>
        ))}
      </div>
      {videoUrl && (
        <div>
          <div className="video-player-container">
            <ReactPlayer url={videoUrl} playing controls width="100%" height="100%" />
            <button className="close-btn" onClick={handleClose}>Close</button>
          </div>
          <div className="comments-section">
            <h4>Comments</h4>
            <div className="comments-list">
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-timestamp">{comment.timestamp}</span>
                  </div>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
            />
            <button onClick={handleCommentSubmit}>Bình Luận</button>
          </div>
        </div>
      )}
      <div className="bottom-actions">
        <button onClick={() => setShowYouTubeForm(true)}>Thêm Video YouTube</button>
      </div>
      {showYouTubeForm && (
        <div className="youtube-form-modal">
          <h3>Thêm Video YouTube</h3>
          <input
            type="text"
            value={youtubeTitle}
            onChange={(e) => setYouTubeTitle(e.target.value)}
            placeholder="Nhập tiêu đề video..."
          />
          <input
            type="text"
            value={youtubeUrl}
            onChange={(e) => setYouTubeUrl(e.target.value)}
            placeholder="Nhập liên kết YouTube..."
          />
          <button onClick={handleYouTubeSubmit}>Thêm Video</button>
          <button onClick={() => setShowYouTubeForm(false)}>Hủy</button>
        </div>
      )}
      {showDeletePassword && (
        <div className="notification-modal">
          <div className="notification-content">
            <h3>Xác Nhận Xóa Video</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu..."
            />
            <button onClick={confirmDelete}>Xác Nhận</button>
            <button onClick={cancelDelete}>Hủy</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
