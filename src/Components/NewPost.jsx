import React, { useState } from "react";

import { db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Button from "./Button";
import "../css/NewPost.css";

const NewPost = () => {
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

  const handlePostAddition = async (postText, postImg) => {
    await addDoc(collection(db, "posts"), {
      id: Math.random(50),
      date: today,
      text: postText,
      img: imgLink,
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
      handlePostAddition(inputData, imgData);
      setinputData("");
      setimgData("");
      setimgLink("");
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
        <input type="file" name="myImage" accept="image/*" id="contained-button-file" onChange={handleFileAttach} />
        <Button onClick={handleUpload}>UPLOAD</Button>
      </div>
      <div className="button-container">
        <Button onClick={handlePostClick}>SEND</Button>
      </div>
    </div>
  );
};

export default NewPost;
