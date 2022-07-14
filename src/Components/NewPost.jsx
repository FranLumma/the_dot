import React, { useState } from "react";

import { db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

import Button from "./Button";
import "../NewPost.css";

const NewPost = () => {
  const [inputData, setinputData] = useState("");

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

  const handlePostAddition = async (postText) => {
    await addDoc(collection(db, "posts"), {
      id: Math.random(50),
      date: today,
      text: postText,
      created: hours,
    });
  };

  const handleChange = (e) => {
    setinputData(e.target.value);
  };

  const handlePostClick = async () => {
    if (inputData === "") {
      alert("empty");
      return;
    } else {
      handlePostAddition(inputData);
      setinputData("");
    }
  };

  return (
    <div className="make-post">
      <textarea
        className="text-input"
        name="post"
        id="newPost"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={inputData}
      ></textarea>
      <div className="button-container">
        <Button onClick={handlePostClick}>SEND</Button>
      </div>
    </div>
  );
};

export default NewPost;
