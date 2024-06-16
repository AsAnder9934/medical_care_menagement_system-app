import React, { useState, useEffect } from "react";
import "./Staff_db_dashboard.css";
import { Link } from "react-router-dom";
import database_services from "./tmp/uslugi.png";
import database_map from "./tmp/mapa.png";
import database_view from "./tmp/widok.png";
import MediaCard from "./Staff_card";
import axios from "axios";

function Staff_db_dashboard() {
  const [hospitalsData, setHospitalsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitals_staff&maxFeatures=50&outputFormat=application%2Fjson"
      )
      .then((response) => {
        console.log("API response:", response);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const hospitals = data.features.map((feature) => feature.properties);
          setHospitalsData(hospitals);
        } else {
          console.error("No hospital data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the hospital data!", error);
      });
  }, []);

  return (
    <div className="staff_db_dashboard">
      <div className="patient_db_top">
        <div className="service_title">Staff database</div>
        <div className="services_line"></div>
        <div className="database_menu">
          <Link to="/log_in/services/staff">
            <img
              className="database_services"
              src={database_services}
              alt="database_services"
            ></img>
          </Link>
          <Link to="/log_in/services/staff/map">
            <img
              className="database_map"
              src={database_map}
              alt="database_map"
            ></img>
          </Link>
          <Link to="/log_in/services/staff/db">
            <img
              className="database_view"
              src={database_view}
              alt="database_view"
            ></img>
          </Link>
        </div>
      </div>
      <div className="card_mid">
        {hospitalsData.map((hospital, index) => {
          return (
            <Link
              to={`/log_in/services/staff/db/contact/${hospital.pesel}`}
              key={index}
            >
              <MediaCard
                className="staff_cards"
                name={hospital.imie}
                content={hospital.nazwisko}
                image={hospital.zdjecie}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Staff_db_dashboard;
