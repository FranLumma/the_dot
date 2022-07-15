import React from "react";

import "../css/Post.css";

const ObserverPost = ({ postD }) => {
  return (
    <div className="post-container">
      <div className="info">
        {postD.name ? <p>{postD.name}</p> : false}
        <p>{postD.date}</p>
      </div>
      <p>{postD.text}</p>
    </div>
  );
};

export default ObserverPost;
