import React, { useState } from "react";

import { db, storage } from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Button from "./Button";

const NewPost = () => {
  const [guestName, setguestName] = useState("");
  const [inputData, setinputData] = useState("");
  const [imgData, setimgData] = useState("");
  const [imgLink, setimgLink] = useState("");
  const [percent, setpercent] = useState("UPLOAD");

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
      setimgData("");
      setimgLink("");
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
    <div className="flex justify-center">
      <div className="grid grid-flow-row">
        <div className="mt-2 mb-2">
          <input
            className="w-[500px] h-[40px] p-1 pl-2 rounded-[4px] border-black border-[2px] bg-[#121212] placeholder-white text-white focus:text-black focus:bg-[#b3b2b3] focus:placeholder-black"
            type="text"
            onChange={handleNameChange}
            placeholder="Name"
            value={guestName}
          />
        </div>
        <div>
          <textarea
            className="p-1 pl-2 rounded-[4px] border-black border-[2px] w-[500px] h-[140px] resize-none bg-[#121212]  placeholder-white text-white focus:text-black focus:bg-[#b3b2b3] focus:placeholder-black"
            name="post"
            id="newPost"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={inputData}
            placeholder="Message"
          ></textarea>
        </div>
        <div className="mb-2">
          <div className="flex" id="">
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
              className="bg-[#fb9f9f] text-black font-bold hover:bg-[#fdb6b6] hover:text-white min-w-fit w-[100px] p-2 mr-1 rounded-[4px] border-[2px] border-black hover:cursor-pointer"
            >
              Attach File
            </label>
            <Button onClick={handleUpload}>{percent}</Button>
            <div id="submit_btn">
              <Button className="" onClick={handlePostClick}>
                SEND
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
