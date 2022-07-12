import React, { useState, useEffect } from "react";

import Post from "./Post";

const Posts = ({ postData, deletePost }) => {
  return (
    <>
      {postData.map((postD) => (
        <Post postD={postD} deletePost={deletePost} key={postD.id} />
      ))}
    </>
  );
};

export default Posts;
