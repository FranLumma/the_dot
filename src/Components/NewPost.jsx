import React, { useState } from "react";

import Button from "./Button";

const NewPost = ({ handlePostAddition }) => {
  const [inputData, setinputData] = useState("");

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
        name="post"
        id="newPost"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={inputData}
      ></textarea>
      <Button onClick={handlePostClick}>Crzy</Button>
    </div>
  );
};

export default NewPost;
