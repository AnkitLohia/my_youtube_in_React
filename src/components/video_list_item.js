import React from 'react';

const VideoListItem = (props) => {
  const videoItem = props.video;
  const imageUrl = videoItem.snippet.thumbnails.default.url;
  return (
      <li className="list-group-item">
        <div className="video_list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{videoItem.snippet.title}</div>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;