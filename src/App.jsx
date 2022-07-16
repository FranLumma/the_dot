import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import PostPage from "./Pages/PostsPage";
import GuestPage from "./Pages/GuestBookPage";
import ObserverPostPage from "./Pages/ObserverPostsPage";

import "./css/App.css";

const App = () => {
  const [logged, setlogged] = useState();

  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                !logged ? (
                  <Login
                    setlogged={setlogged}
                  />
                ) : (
                  <PostPage setlogged={setlogged} />
                )
              }
            />
            <Route path="/Observer" element={<ObserverPostPage />} />
            <Route path="GuestBook" element={<GuestPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
