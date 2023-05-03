import React from "react";

import GuestPosts from "../Components/GuestPosts";
import GuestBook from "../Components/GuestBook";

const GuestPage = () => {
  var cc_style = {
    position: "relative",
    height: "100%",
    padding: "25px 25px 15px 25px",
    borderLeft: "3px black solid",
    borderRight: "3px black solid",
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center w-full">
        <div className="border-[1px] rounded-[4px] border-black mt-2 w-[790px] h-fit bg-[#181818] justify-center self-center">
          <GuestBook />
          <div
            className="content-box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="relative w-[580px] h-full m-2 p-2 border-l-[3px] border-r-[3px] border-black">
              <GuestPosts editPost={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestPage;
