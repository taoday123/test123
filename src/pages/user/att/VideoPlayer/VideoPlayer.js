// src/components/VideoPlayer.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const VideoPlayer = ({ video, isOpen, onClose, children }) => {
  const [playbackRate, setPlaybackRate] = useState(1);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="video-player-container">
        <ReactPlayer
          url={video.url}
          playing={isOpen}
          controls
          playbackRate={playbackRate}
          width="100%"
          height="100%" // Đảm bảo video có chiều cao đầy đủ
        />
        <div className="controls">
          <label>
            Playback Speed:
            <select value={playbackRate} onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}>
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </label>
        </div>
        {children} {/* Hiển thị phần bình luận */}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default VideoPlayer;
