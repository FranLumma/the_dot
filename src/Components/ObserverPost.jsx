import { React, useState } from "react";

import "../css/Post.css";
import PlaceHolder from "../assets/qr-code.svg";

const ObserverPost = ({ postD }) => {
  const [hover, setHover] = useState(false);
  var style_off = {
    backgroundImage: "url(" + PlaceHolder + ")",
    backgroundPosition: "center",
    backgroundSize: "70px",
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
        <div className="info">
          {postD.title ? <p style={{fontWeight: "bold"}}>{postD.title}</p> : null}
          {postD.name ? <p>{postD.name}</p> : null}
          <p>{postD.date}</p>
        </div>
        <p>{postD.text}</p>
      </div>
    </div>
  );
};

export default ObserverPost;
