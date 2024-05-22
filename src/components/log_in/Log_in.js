import React from "react";
import "./Log_in.css";
import logo from "./tmp/green_logo_1.png";
import background from "./tmp/home_background.png";
import show_hide_pass from "./tmp/show_hide_pass-removebg-preview.png";
import { Link } from "react-router-dom";

function Log_in({ showPassword, handleChange, togglePasswordVisibility }) {
  return (
    <div className="loging">
      <img className="background" src={background} alt="background"></img>
      <div className="transparency">
        <div className="login_top">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="login_mid">
          <div className="title">Log in</div>
          <div className="login_input">
            <input
              className="insert_login"
              type="text"
              placeholder="User ID/e-mail"
            />
          </div>
          <div className="password-input">
            <input
              className="insert_password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
            />
            <img
              className="show_hide_password"
              src={show_hide_pass}
              alt="show_hide_password"
              onClick={togglePasswordVisibility}
            />
          </div>

          <href className="forgot_id">Forgot User ID/Password</href>
          <Link to="services">
            <button className="log_in">Log in</button>
          </Link>
          <Link to="register">
            <button className="register">Register</button>
          </Link>
        </div>
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
          <div className="home_botton_about">About us</div>
        </div>
      </div>
    </div>
  );
}
export default Log_in;
