import React from "react";
import "./Services.css";
import logo_white from "./tmp/white_logo_1.png";
import medical_staff from "./tmp/services_staff.png";
import patient_icon from "./tmp/patients_icon.png";
import hospital_icon from "./tmp/hospital_icon.png";
import staff_icon from "./tmp/workers_icon.png";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <div className="top">
        <div className="service_title">Available management services</div>
        <img className="logo_white" src={logo_white} alt="logo_white"></img>
        <div className="services_line"></div>
      </div>
      <div className="services_acces">
        <button className="patients">
          <div className="services_patients_title">Patients</div>
          <img
            className="patient_icon"
            src={patient_icon}
            alt="patient_icon"
          ></img>
        </button>
        <button className="hospitals">
          <div className="services_hospitals_title">Hospitals</div>
          <img
            className="hospital_icon"
            src={hospital_icon}
            alt="hospital_icon"
          ></img>
        </button>
        <button className="staff">
          <div className="services_staff_title">Staff</div>
          <img className="staff_icon" src={staff_icon} alt="staff_icon"></img>
        </button>
      </div>
      <img
        className="medical_staff"
        src={medical_staff}
        alt="medical_staff"
      ></img>
      <Link to="/">
        <button className="exit">Exit</button>
      </Link>
    </div>
  );
}
export default Services;
