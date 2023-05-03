import React from "react";
import { useNavigate } from "react-router-dom";

import icon from "../assets/Group1.svg";
import icon1 from "../assets/Group.svg";
import icon2 from "../assets/My_Cube.svg";

const Nav = ({ setlogged }) => {
  const navigate = useNavigate();
  const handleBack = (dest) => {
    navigate("/" + dest);
    if (setlogged) {
      setlogged(false);
    } else {
      return;
    }
  };
  return (
    <div className="max-w-auto max-h-25p flex justify-center">
      <div className="w-3/4 pt-2 mt-2 p-2 bg-[#181818] border-[1px] border-black rounded-[4px]">
        <ul className="flex justify-center">
          <li
            onClick={() => {
              handleBack("");
            }}
            className="w-[35px] h-[35px] ml-5 mr-5"
          >
            <a href="">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 18h24v4H12v-4zm16 10H12v-4h16v4zm8-12H12v-4h24v4z"
                  fill="#fb9f9f"
                  className="hover:fill-[#fdb6b6] hover:stroke-black hover:stroke-[.5px]"
                />
                <path d="M0 0h48v48H0z" fill="none" />
              </svg>
            </a>
          </li>
          <li
            onClick={() => {
              handleBack("About");
            }}
            className="w-[35px] h-[35px] ml-5 mr-5"
          >
            <a href="">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title />
                <path
                  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-.5,3A1.5,1.5,0,1,1,10,6.5,1.5,1.5,0,0,1,11.5,5ZM14,18H13a2,2,0,0,1-2-2V12a1,1,0,0,1,0-2h1a1,1,0,0,1,1,1v5h1a1,1,0,0,1,0,2Z"
                  fill="#fb9f9f"
                  className="hover:fill-[#fdb6b6] hover:stroke-black hover:stroke-[.5px]"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
