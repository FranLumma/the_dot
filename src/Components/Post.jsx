import React from "react";

import Button from "./Button";
import "../Post.css";

const Post = ({ postD, deletePost, editPost }) => {
  return (
    <div className="post-container">
      <p>{postD.date}</p>
      <p>{postD.text}</p>
      {editPost ? (
        <div className="buttoncontainer">
          <Button onClick={() => deletePost(postD.id)}><img src="https://img.icons8.com/ios/50/FFFFFF/empty-trash.png"/></Button>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default Post;
