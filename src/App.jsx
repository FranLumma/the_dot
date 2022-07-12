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

import Posts from "./Components/Posts";
import Header from "./Components/Header";
import NewPost from "./Components/NewPost";
import "./App.css";

const App = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  var hours = new Date();
  var h = String(hours.getHours()).padStart(2, "0");
  var m = String(hours.getMinutes());
  var s = String(hours.getSeconds());
  hours = h + ":" + m + ":" + s;

  const [postData, setPostData] = useState([]);
  const ref = query(collection(db, "posts"), orderBy("created"));

  useEffect(() => {
    onSnapshot(ref, (doc) => {
      const getData = async () => {
        const data = await getDocs(ref);
        setPostData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      //console.log("New data in DataBase")
      getData();
    });
  }, []);

  const handlePostAddition = async (postText) => {
    await addDoc(collection(db, "posts"), {
      id: Math.random(50),
      date: today,
      text: postText,
      created: hours,
    });
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <>
      <div className="container">
        <Header />
        <NewPost handlePostAddition={handlePostAddition} />
        <div className="content-box">
          <Posts postData={postData} deletePost={deletePost} />
        </div>
      </div>
    </>
  );
};

export default App;
