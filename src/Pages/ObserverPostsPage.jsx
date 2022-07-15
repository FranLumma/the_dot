import React from "react";

import ObserverPosts from "../Components/ObserverPosts";
import Nav from "../Components/NavBar";

const ObserverPostPage = () => {
  return (
    <>
      <Nav />
      <div className="content-box">
        <ObserverPosts />
      </div>
    </>
  );
};

export default ObserverPostPage;
