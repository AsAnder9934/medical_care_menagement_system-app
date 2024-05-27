import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
// import logo from "./tmp";
// import photo from "./tmp"
// import menu_icon from "./tmp"

function About() {
  return (
    <div className="about">
      <div className="top">
        <div className="about_title">About us</div>
        <div className="option">
          <Link to="/log_in">
            <button className="login_panel">Login panel</button>
          </Link>
        </div>
      </div>
      <div className="mid">
        <div className="text_left"></div>
        {/* <img className="logo_about" src={logo} alt="logo"></img> */}
      </div>
      {/* <img className="photo_about" src={photo} alt="photo"></img> */}
      <div className="bot"></div>
    </div>
  );
}
export default About;
