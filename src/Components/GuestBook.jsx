import React, { useState } from "react";

import { db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Button from "./Button";
import "../css/GuestBook.css";

const NewPost = () => {
  const [guestName, setguestName] = useState("");
  const [inputData, setinputData] = useState("");
  const [imgData, setimgData] = useState("");
  const [imgLink, setimgLink] = useState("");

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
      img: imgLink,
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

  const handleFileAttach = async (e) => {
    setimgData(e.target.files[0]);
    console.log(imgData + " ATTCHED");
};

const handleUpload = (e) => {
  if (!imgData){
    alert("PHOTO MISSING")
  }
  const storageRef = ref(storage, `/files/${imgData.name}`)
  const uploadTask = uploadBytesResumable(storageRef, imgData);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
        const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
    },
    (err) => console.log(err),
    () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setimgLink(url.toString());
        });
    }
  );
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
          <input
            type="file"
            name="myImage"
            accept="image/*"
            id="contained-button-file"
            onChange={handleFileAttach}
          />
          <Button onClick={handleUpload}>UPLOAD</Button>
        </div>
        <div className="button-container">
          <Button onClick={handlePostClick}>SEND</Button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
