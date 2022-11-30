import React from "react";
import { useNavigate } from "react-router-dom";

import "../css/NavBar.css";

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
    <div className="navbar">
      <div className="c_c">
        <ul className="navbar_content">
          <li
            onClick={() => {
              handleBack("GuestBook");
            }}
          >
            <a href="">
              <img src={icon1} alt="Back" />
            </a>
          </li>
          <li
            onClick={() => {
              handleBack("About");
            }}
          >
            <a href="">
              <img src={icon} alt="Back" />
            </a>
          </li>
          <li
            onClick={() => {
              handleBack("");
            }}
          >
            <a href="">
              <img src={icon2} alt="Back" style={{transform: "rotate(-25deg)", width: "30px"}}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
