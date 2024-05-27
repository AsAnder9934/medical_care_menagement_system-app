import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
// import logo from "./tmp";
// import photo from "./tmp"

function About() {
  return (
    <div className="about">
      <div className="about_title">About us</div>
      <div className="mid">
        <div className="text_left"></div>
        {/* <img className="logo" src={logo} alt="logo"></img> */}
      </div>
      {/* <img className="photo" src={photo} alt="photo"></img> */}
      <div className="bot"></div>
    </div>
  );
}
export default About;
