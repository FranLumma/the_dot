import React from "react";

import Button from "./Button";
import "../Post.css";

const Post = ({ postD, deletePost }) => {
  return (
    <div className="post-container">
      <p>{postD.date}</p>
      <p>{postD.text}</p>
      <Button onClick={() => deletePost(postD.id)}>Delete</Button>
    </div>
  );
};

export default Post;
