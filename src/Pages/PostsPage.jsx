import React from "react";

import Posts from "../Components/Posts";
import NewPost from "../Components/NewPost";
import Nav from "../Components/NavBar";


const PostPage = ({editPost}) => {
  return (
    <>
      <Nav />
      {editPost ? <NewPost /> : false}
      <div className="content-box">
        <Posts editPost={editPost} />
      </div>
    </>
  );
};

export default PostPage;
