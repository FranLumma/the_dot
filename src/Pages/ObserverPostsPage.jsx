import React from "react";

import ObserverPosts from "../Components/ObserverPosts";
import Nav from "../Components/NavBar";
import Header from "../Components/header";

const ObserverPostPage = () => {
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
      <div
        className="content-box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="content_container" style={cc_style}>
          <ObserverPosts />
        </div>
      </div>
    </>
  );
};

export default ObserverPostPage;
