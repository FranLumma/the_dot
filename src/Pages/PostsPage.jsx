import React from "react";

import Posts from "../Components/Posts";
import NewPost from "../Components/NewPost";
import Nav from "../Components/NavBar";

const PostPage = ({setlogged}) => {
  return (
    <>
      <Nav setlogged={setlogged} />
      <NewPost />
      <div className="content-box">
        <Posts />
      </div>
    </>
  );
};

export default PostPage;
