import React from "react";

import Button from "./Button";
import "../css/Post.css";

const Post = ({ postD, deletePost, guestLog }) => {
  return (
    <div className="post-container">
      {guestLog ? <p>{postD.name}</p> : false}
      <p>{postD.date}</p>
      <p>{postD.text}</p>
      <div className="buttoncontainer">
        <Button onClick={() => deletePost(postD.id)}>
          <img
            src="https://img.icons8.com/ios/50/FFFFFF/empty-trash.png"
            alt="trash"
          />
        </Button>
      </div>
    </div>
  );
};

export default Post;
