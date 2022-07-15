import React, { useState } from "react";

import Authentication from "./Authentication";
import Logo from "../assets/My_Cube.png";
import Button from "../Components/Button";

import "../css/Login.css";

const Login = ({ setlogged, setObserver, setguestLog }) => {
  const [adminPassword, setadminPassword] = useState([]);
  const adminEmail = "fran.dev.use@outlook.com";

  const handlePassword = (e) => {
    setadminPassword(e.target.value);
  };

  const handleCall = async (e) => {
    try {
      await Authentication(adminEmail, adminPassword, setlogged);
      e.preventDefault();
    } catch (err) {
      console.log(err);
    }
  };

  const handleObserver = async (e) => {
    setObserver(true);
  };

  const handleGuest = async (e) => {
    setguestLog(true);
  };

  return (
    <div className="wrapper center">
      <div className="login_content">
        <div className="logo center">
          <img src={Logo} alt="" />
        </div>
        <div className="password_input">
          <form className="center">
            <input
              type="password"
              maxLength={16}
              placeholder="PASSWORD"
              onChange={handlePassword}
              value={adminPassword}
            />
            <Button onClick={handleCall}>
              <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/forward.png" alt="forward" />
            </Button>
          </form>
        </div>
        <div className="observer-container center">
          <Button onClick={handleObserver}>
            <img src="https://img.icons8.com/material-outlined/24/FFFFFF/visible--v1.png" alt="Eye" />
          </Button>
        </div>
        <div className="observer-container center">
          <Button onClick={handleGuest}>LEAVE A MESSAGE</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
