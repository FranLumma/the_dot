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
      {postD.img ? <img src={postD.img} alt="y" loading="lazy" style={{ maxWidth: "500px"}}/> : false}
    </div>
  );
};

export default ObserverPost;
