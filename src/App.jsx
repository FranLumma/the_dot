import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Nav from "./Components/NavBar";

import GuestPage from "./Pages/GuestBookPage";
import About from "./Pages/AboutPage";

const App = () => {
  const [logged, setlogged] = useState();

  return (
    <>
      <div className="max-w-1366">
        <Router>
          <Header />
          <Nav />
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/" element={<GuestPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
