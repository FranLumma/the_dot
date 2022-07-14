import React, { useEffect, useState } from "react";

import { db, auth } from "./firebase";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  orderBy,
  limitToLast,
  query,
} from "firebase/firestore";

import PostPage from "./Pages/PostsPage";
import Login from "./Pages/Login";
import Nav from "./Components/NavBar";
import "./App.css";

const App = () => {
  const [logged, setlogged] = useState();
  const [editPost, setEditPost] = useState();

  return (
    <>
      <div className="container">
        {!logged ? <Login setlogged={setlogged} editPost={editPost} setEditPost={setEditPost} /> : <PostPage editPost={editPost} />}
      </div>
    </>
  );
};

export default App;
