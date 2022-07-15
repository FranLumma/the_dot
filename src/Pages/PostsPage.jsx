import React from "react";

import Posts from "../Components/Posts";
import NewPost from "../Components/NewPost";
import Nav from "../Components/NavBar";

const PostPage = () => {
  return (
    <>
      <Nav />
      <NewPost />
      <div className="content-box">
        <Posts />
      </div>
    </>
  );
};

export default PostPage;
