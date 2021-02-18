import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import Sidebar from "./Sidebar";
import Social from "./Social";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={handleClick}>
            <FaBars />
          </button>
        </div>
       
          <div className={
            `${showLinks ? 'links-container show-container' : 'links-container'}`}>
            <Sidebar />
          </div>
       

        <Social />
      </div>
    </nav>
  );
};

export default Navbar;
