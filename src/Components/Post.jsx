import { React, useState } from "react";

import Button from "./Button";
import "../css/Post.css";
import PlaceHolder from "../assets/qr-code.svg";

const Post = ({ postD, deletePost, guestLog }) => {
  const [hover, setHover] = useState(false);
  var style_off = {
    backgroundImage: "url(" + PlaceHolder + ")",
    backgroundPosition: "center",
    backgroundSize: "50px",
    backgroundRepeat: "no-repeat",
    borderRadius: "9px",
  };

  var style_on = {
    backgroundImage: "url(" + postD.img + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "9px",
  };

  return (
    <div className="post-container">
      {postD.img ? (
        <a href={postD.link}>
          <div
            className="img_container"
            style={hover ? style_on : style_off}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          ></div>
        </a>
      ) : null}
      <div id="under">
        {postD.title ? <p style={{fontWeight: "bold"}}>{postD.title}</p> : null}
        {guestLog ? <p>{postD.name}</p> : null}
        <p>{postD.date}</p>
        <p>{postD.text}</p>
        <div className="buttoncontainer">
          <Button onClick={() => deletePost(postD.id)}>
            <img
              src="https://img.icons8.com/ios/50/FFFFFF/empty-trash.png"
              alt="trash"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
