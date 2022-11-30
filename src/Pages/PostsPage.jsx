import React from "react";

import Posts from "../Components/Posts";
import NewPost from "../Components/NewPost";
import Nav from "../Components/NavBar";
import Header from "../Components/header";

const PostPage = ({ setlogged }) => {
  return (
    <>
      <Header />
      <Nav setlogged={setlogged} />
      <NewPost />
      <div
        className="content-box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Posts />
      </div>
    </>
  );
};

export default PostPage;
