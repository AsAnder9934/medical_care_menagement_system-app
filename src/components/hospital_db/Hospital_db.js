import React from "react";
import "./Hospital_db.css";
import { Link } from "react-router-dom";
import database_services from "./tmp/uslugi.png";
import database_map from "./tmp/mapa.png";
import database_view from "./tmp/widok.png";

function Hospital_db() {
  return (
    <div className="hospital_db">
      <div className="patient_db_top">
        <div className="service_title">Hospitals database</div>
        <div className="services_line"></div>
        <div className="database_menu">
          <Link to="/log_in/services/hospitals">
            <img
              className="database_services"
              src={database_services}
              alt="database_services"
            ></img>
          </Link>
          <Link to="/log_in/services/hospital/map">
            <img
              className="database_map"
              src={database_map}
              alt="database_map"
            ></img>
          </Link>
          <Link to="/log_in/services/hospital/db/dashboard">
            <img
              className="database_view"
              src={database_view}
              alt="database_view"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Hospital_db;
