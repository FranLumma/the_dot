import React, { useState } from "react";

import { db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Button from "./Button";

const NewPost = () => {
  const [inputData, setinputData] = useState("");
  const [imgData, setimgData] = useState("");
  const [imgLink, setimgLink] = useState("");
  const [link_, setlink_] = useState("");
  const [titleP, setitleP] = useState("");
  const [percent, setpercent] = useState("UPLOAD");
  //const userId = auth.currentUser.uid;

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

  const handlePostAddition = async (postText, postImg, postLink, postTitle) => {
    await addDoc(collection(db, "posts"), {
      id: Math.random(50),
      date: today,
      title: postTitle,
      text: postText,
      img: imgLink,
      link: postLink,
      created: hours,
    });
  };

  const handleChange = (e) => {
    setinputData(e.target.value);
  };

  const handleLinkChange = (e) => {
    setlink_(e.target.value);
  };

  const handletitleChange = (e) => {
    setitleP(e.target.value);
  };

  const handlePostClick = async () => {
    if (inputData === "") {
      alert("empty");
      return;
    } else {
      handlePostAddition(inputData, imgData, link_, titleP);
      setinputData("");
      setimgData("");
      setimgLink("");
      setlink_("");
      setitleP("");
      setpercent("UPLOAD");
    }
  };

  const handleFileAttach = async (e) => {
    setimgData(e.target.files[0]);
    console.log(imgData + " ATTCHED");
  };

  const handleUpload = (e) => {
    if (!imgData) {
      alert("PHOTO MISSING");
      return;
    }
    const storageRef = ref(storage, `/files/${imgData.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imgData);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
        setpercent(percent + "%");
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setimgLink(url.toString());
          setpercent("DONE");
        });
      }
    );
  };

  return (
    <div className="make-post">
      <div className="in_text_area">
        <input
          type="text"
          name="tittle"
          className="cont_link"
          onChange={handletitleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="link"
          className="cont_link"
          onChange={handleLinkChange}
          placeholder="Link"
        />
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
      </div>
      <div className="button-container">
        <div id="input_file">
          <input
            style={{
              display: "none",
            }}
            type="file"
            name="myImage"
            accept="image/*"
            id="contained-button-file"
            onChange={handleFileAttach}
          />
          <label
            htmlFor="contained-button-file"
            style={{
              color: "white",
              backgroundcolor: "black",
              display: "flex",
            }}
          >
            Attach File
          </label>
          <Button onClick={handleUpload}>{percent}</Button>
        </div>
        <div id="submit_btn">
          <Button onClick={handlePostClick}>SEND</Button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
