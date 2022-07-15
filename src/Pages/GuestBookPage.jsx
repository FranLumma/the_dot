import React from "react";

import GuestPosts from "../Components/GuestPosts";
import GuestBook from "../Components/GuestBook";
import Nav from "../Components/NavBar";

const GuestPage = () => {
  return (
    <>
      <Nav />
      <GuestBook />
      <div className="content-box">
        <GuestPosts editPost={false} />
      </div>
    </>
  );
};

export default GuestPage;
