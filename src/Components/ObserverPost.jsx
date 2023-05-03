import { React, useState } from "react";

import PlaceHolder from "../assets/qr-code.svg";

const ObserverPost = ({ postD }) => {
  const [hover, setHover] = useState(false);
  // var style_off = {
  //   transition: ".5s",
  //   backgroundImage: "url(" + PlaceHolder + ")",
  //   backgroundPosition: "center",
  //   backgroundSize: "70px",
  //   backgroundRepeat: "no-repeat",
  //   borderRadius: "9px",
  // };

  // var style_on = {
  //   transition: ".5s",
  //   backgroundImage: "url(" + postD.img + ")",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   borderRadius: "9px",
  //   transform: "scale(5)",
  // };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full mb-[10px] flex border-black border-b-[4px]">
      <div className="w-full pb-2" id="under">
        <div className="font-bold text-white inline">
          {postD.title ? <p className="mb-[5px]">{postD.title}</p> : null}
          {postD.name ? <p className="mb-[5px]">{postD.name}</p> : null}
          <p className="mb-[5px]">{postD.date}</p>
        </div>
        <p className="mb-[5px] text-white inline">{postD.text}</p>
      </div>
      {postD.img ? (
        <a href={postD.link}>
          <div
            className="min-w-[87px] min-h-[87px] m-2 hover:scale-150 transition-[.5s] bg-cover bg-center bg-no-repeat cursor-pointer"
            style={{ backgroundImage: "url(" + postD.img + ")" }}
            onClick={() => {
              openInNewTab(postD.img);
            }}
          ></div>
        </a>
      ) : null}
    </div>
  );
};

export default ObserverPost;
