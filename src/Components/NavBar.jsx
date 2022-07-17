import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import "../css/NavBar.css";
import Logo from "../assets/My_Cube.png";

const Nav = ({ setlogged }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
    if (setlogged) {
      setlogged(false);
    } else {
      return;
    }
  };
  return (
    <header className="header-bar">
      <div className="cont_back">
        <Button onClick={handleBack}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/back.png"
            alt="Back"
          />
        </Button>
      </div>
      <div className="logo_container">
        <img src={Logo} alt="yo" />
      </div>
    </header>
  );
};

export default Nav;
