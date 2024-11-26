import React from "react";
import "./Services_patients.css";
import logo_white from "./tmp/white_logo_1.png";
import db_icon from "./tmp/data_base.png";
import add_icon from "./tmp/add_icon.png";
import map_icon from "./tmp/map_icon.png";

import { Link } from "react-router-dom";

function Services_patients() {
  return (
    <div className="services">
      <div className="top">
        <div className="service_title">Patients</div>
        <img className="logo_white" src={logo_white} alt="logo_white"></img>
        <div className="services_line"></div>
      </div>
      <div className="services_acces">
        <Link to="/log_in/services/patients/db">
          <button className="patients">
            <div className="services_patients_title">Patients database</div>
            <img
              className="patient_icon"
              src={db_icon}
              alt="patient_icon"
            ></img>
          </button>
        </Link>
        {/* <Link to="add_patient"> */}
        <button className="hospitals">
          <div className="services_hospitals_title">Adding a new patient</div>
          <img
            className="hospital_icon"
            src={add_icon}
            alt="hospital_icon"
          ></img>
        </button>
        {/* </Link> */}
        <Link to="/log_in/services/patients/map">
          <button className="staff">
            <div className="services_staff_title">Interactive patients map</div>
            <img className="staff_icon" src={map_icon} alt="staff_icon"></img>
          </button>
        </Link>
      </div>
      <Link to="/log_in/services">
        <button className="exit">Return</button>
      </Link>
    </div>
  );
}
export default Services_patients;
