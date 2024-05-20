import React from "react";
import "./Services.css";
import logo from "./tmp/logo.PNG";
import hospital_icon from "./tmp/hospital_icon.png";
import patient_icon from "./tmp/patient_icon.png";
import staff_icon from "./tmp/staff_icon.png";

function Services() {
  return (
    <div className="services">
      <div className="top_left">Dostępne usługi zarządzania</div>
      <img className="top_right" src={logo} alt="logo"></img>
      <div className="botton">
        <div className="botton_options">
          <div className="options_top">
            <img
              className="patient_icon"
              src={patient_icon}
              alt="patient_icon"
            ></img>
            <div className="paitents">Pacjenci</div>
          </div>
          <div className="options_mid">
            <img
              className="hospital_icon"
              src={hospital_icon}
              alt="hospital_icon"
            ></img>
            <div className="hospital">Szpitale</div>
          </div>
          <div className="options_bot">
            <img className="staff_icon" src={staff_icon} alt="staff_icon"></img>
            <div className="staff">Personel</div>
          </div>
        </div>
        <img className="botton_picture"></img>
        <button className="button_exit">Wyjście</button>
      </div>
    </div>
  );
}

export default Services;
