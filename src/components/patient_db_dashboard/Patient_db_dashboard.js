import React, { useState, useEffect } from "react";
import "./Patient_db_dashboard.css";
import { Link } from "react-router-dom";
import database_services from "./tmp/uslugi.png";
import database_map from "./tmp/mapa.png";
import database_view from "./tmp/widok.png";
import MediaCard from "./Patient_card";
import axios from "axios";

function Patient_db_dashboard() {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitalss&maxFeatures=50&outputFormat=application%2Fjson"
      )
      .then((response) => {
        console.log("API response:", response.data);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const patients = data.features.map((feature) => feature.properties);
          setPatientsData(patients);
        } else {
          console.error("No patient data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the patient data!", error);
      });
  }, []);

  return (
    <div className="patient_db_dashboard">
      <div className="patient_db_top">
        <div className="service_title">Patients database</div>
        <div className="services_line"></div>
        <div className="database_menu">
          <Link to="/log_in/services/patients">
            <img
              className="database_services"
              src={database_services}
              alt="database_services"
            ></img>
          </Link>
          <Link to="/log_in/services/patients/map">
            <img
              className="database_map"
              src={database_map}
              alt="database_map"
            ></img>
          </Link>
          <Link to="/log_in/services/patients/db">
            <img
              className="database_view"
              src={database_view}
              alt="database_view"
            ></img>
          </Link>
        </div>
      </div>
      <div className="card_mid">
        {patientsData.map((patient, index) => {
          return (
            <Link
              to={`/log_in/services/patients/db/contact/${patient.pesel}`}
              key={index}
            >
              <MediaCard
                className="patient_cards"
                name={patient.imie_i_naz}
                content={patient.pesel}
                image={patient.zdjecie}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Patient_db_dashboard;
