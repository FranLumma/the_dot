import React, { useState } from "react";

import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

import Button from "./Button";
import "../css/GuestBook.css";

const NewPost = () => {
  const [guestName, setguestName] = useState("");
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

  const handlePostAddition = async (postText, nameguest) => {
    await addDoc(collection(db, "GuestBook"), {
      name: nameguest,
      id: Math.random(50),
      date: today,
      text: postText,
      created: hours,
    });
  };

  const handleNameChange = (e) => {
    setguestName(e.target.value);
  };

  const handleChange = (e) => {
    setinputData(e.target.value);
  };

  const handlePostClick = async () => {
    if (inputData === "") {
      alert("empty");
      return;
    } else {
      handlePostAddition(inputData, guestName);
      setguestName("");
      setinputData("");
    }
  };

  return (
    <div className="make-post">
      <div>
        <div>
          <input
            className="guestName"
            type="text"
            onChange={handleNameChange}
            placeholder="Name"
            value={guestName}
          />
        </div>
          <textarea
            className="text-input"
            name="post"
            id="newPost"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={inputData}
            placeholder="Message"
          ></textarea>
        <div className="button-container">
          <Button onClick={handlePostClick}>SEND</Button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
