import React from 'react';

//{} is used to access JS object, so instead of passing props,
// passing {video} passes, props.video
const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = 'https://www/youtube.com/embed/' + videoId;  // `https://www/youtube.com/embed/${videoId}`
  
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className = "details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;