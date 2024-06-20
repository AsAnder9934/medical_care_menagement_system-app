import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import database_services from "./tmp/uslugi.png";
import database_map from "./tmp/mapa.png";
import database_view from "./tmp/widok.png";
import MediaCard from "./Hospital_card";
import axios from "axios";

function Hospital_db_dashboard() {
  const [hospitalsData, setHospitalsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitals_building&maxFeatures=50&outputFormat=application%2Fjson"
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
          <Link to="/log_in/services/hospital/db">
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
            // <Link
            //   to={`/log_in/services/hospitals/db/contact/${hospital.nazwa}`}
            //   key={index}
            // >
            <MediaCard
              className="hospital_cards"
              name={hospital.nazwa}
              content={hospital.ulica}
              image={hospital.zdjecie}
            />
            // </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Hospital_db_dashboard;
