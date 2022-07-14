import React, { useEffect, useState } from "react";

import { db, auth } from "../firebase";
import { collection, getDocs, doc } from "firebase/firestore";

import Authentication from "./Authentication";
import Logo from "../assets/My_Cube.png";
import Button from "../Components/Button";

import "../Login.css";

const Login = ({ setlogged, setEditPost }) => {
  const [adminPassword, setadminPassword] = useState([]);
  const adminEmail = "test@test.com";

  const handlePassword = (e) => {
    setadminPassword(e.target.value);
  };

  const handleCall = async (e) => {
    try {
      await Authentication(adminEmail, adminPassword, setlogged);
      setEditPost(true);
      e.preventDefault();
    } catch (err) {
      console.log(err);
    }
  };

  const handleObserver = async (e) => {
    setlogged(true);
    setEditPost(false);
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
            />
            <Button onClick={handleCall}>
              <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/forward.png" />
            </Button>
          </form>
        </div>
        <div className="observer-container center">
          <Button onClick={handleObserver}>
            <img src="https://img.icons8.com/material-outlined/24/FFFFFF/visible--v1.png" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
