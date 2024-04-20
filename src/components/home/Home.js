import React from "react";
import "./Home.css";
import logo from "./tmp/logo.PNG";

function Home() {
  return (
    <div className="home">
      <div className="home_top">
        <div className="title">Geoportal</div>
        <div className="subtitle">
          Zarządzanie przychodniami lekarskimi i pacjentami przypisanymi do
          danej przychodni
        </div>
      </div>
      <div className="home_botton">
        <div className="logging_pane">
          <div className="loggin_title">Podaj dane logowania:</div>
          <div className="logging_mid_left">
            <div className="login">Login:</div>
            <div className="password">Hasło:</div>
          </div>
          <div className="logging_mid_right">
            <div className="login_input">
              <input className="insert_login" type="text" />
            </div>
            <div className="password-input">
              <input className="insert_password" type="password" />
            </div>
          </div>
          <div className="logging_button">
            <button className="login_button">Zaloguj</button>
          </div>
        </div>
        <div className="logo_institution">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="home_botton_about">Informacje o projekcie</div>
      </div>
    </div>
  );
}

export default Home;
