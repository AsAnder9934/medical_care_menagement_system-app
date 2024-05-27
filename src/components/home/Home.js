import React from "react";
import "./Home.css";
import logo from "./tmp/green_logo_1.png";
import background from "./tmp/home_background.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img className="background" src={background} alt="background"></img>
      <div className="transparency">
        <div className="home_top">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="home_mid">
          <div className="title">Best Medical Service</div>
          <div className="subtitle">Healthy life, make you happy.</div>
        </div>
        <div className="home_botton">
          <line className="line"></line>
          <div className="contact">
            <div className="call_now">Call now</div>
            <div className="phone">+48 555 444 333</div>
            <href className="website">www.malinowski-clinics.com</href>
          </div>
          <div className="logging_button">
            <Link to="log_in">
              <button className="login_button">Log in</button>
            </Link>
          </div>
          <Link to="about">
            <div className="home_botton_about">About us</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
