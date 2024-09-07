import React from 'react';

const VideoThumbnail = ({ video, onClick }) => (
  <div className="video-thumbnail" onClick={() => onClick(video)}>
    <img src={video.thumbnail} alt={video.title} />
    <h3>{video.title}</h3>
  </div>
);

export default VideoThumbnail;