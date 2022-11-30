import React from "react";

import GuestPosts from "../Components/GuestPosts";
import GuestBook from "../Components/GuestBook";
import Nav from "../Components/NavBar";
import Header from "../Components/header";

const GuestPage = () => {
  var cc_style = {
    position: "relative",
    height: "100%",
    padding: "25px 25px 15px 25px",
    borderLeft: "3px black solid",
    borderRight: "3px black solid",
  };

  return (
    <>
      <Header />
      <Nav />
      <GuestBook />
      <div
        className="content-box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="content_container" style={cc_style}>
          <GuestPosts editPost={false} />
        </div>
      </div>
    </>
  );
};

export default GuestPage;
