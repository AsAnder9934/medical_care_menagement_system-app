import React from "react";
import "./Register.css";
import logo from "./tmp/green_logo_1.png";
import background from "./tmp/home_background.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register_site">
      <img className="background" src={background} alt="background"></img>
      <div className="transparency">
        <div className="login_top">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="register_mid">
          <div className="title">Register</div>
          <div className="register_input">
            <input
              className="register_login"
              type="text"
              placeholder="e-mail adress"
            />
          </div>
          <div className="register_input2">
            <input
              className="register_password"
              type={"password"}
              placeholder="Password"
            />
            <input
              className="register_confirm_password"
              type={"password"}
              placeholder="Confirm password"
            />
          </div>
        </div>
        <button className="register_button">Register</button>
        <div className="login_botton">
          <line className="line"></line>
          <div className="contact">
            <div className="call_now">Call now</div>
            <div className="phone">+48 555 444 333</div>
            <div className="website">www.malinowski-clinics.com</div>
          </div>
          <div className="return_button">
            <Link to="/">
              <button className="return">Return</button>
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
export default Register;
