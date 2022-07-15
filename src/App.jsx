import React, { useState } from "react";

import Login from "./Pages/Login";
import PostPage from "./Pages/PostsPage";
import GuestPage from "./Pages/GuestBookPage";
import ObserverPostPage from "./Pages/ObserverPostsPage";

import "./css/App.css";

const App = () => {
  const [logged, setlogged] = useState();
  const [observer, setObserver] = useState();
  const [guestLog, setguestLog] = useState();

  var loginD;
  if (!logged) {
    loginD = (
      <Login
        setlogged={setlogged}
        setObserver={setObserver}
        setguestLog={setguestLog}
      />
    );
  } else if (logged) {
    loginD = <PostPage />;
  }
  if(observer) {
    loginD = <ObserverPostPage />
  }
  if (guestLog) {
    loginD = <GuestPage />;
  }

  return (
    <>
      <div className="container">{loginD}</div>
    </>
  );
};

export default App;
