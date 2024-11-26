import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { hospitalIcon } from "./Hospital_icon";
import axios from "axios";

function Marker_hospital_placement() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitals_building&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          const features = response.data.features;
          const hospitalsData = features.map((feature) => {
            const { coordinates } = feature.geometry;
            return {
              position: [coordinates[1], coordinates[0]],
              properties: feature.properties,
            };
          });
          setHospitals(hospitalsData);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    };
    getData();
  }, []);

  return (
    <div>
      {hospitals.map((hospital, index) => (
        <Marker key={index} icon={hospitalIcon} position={hospital.position}>
          <Popup>
            <strong>Hospital name: </strong>
            {hospital.properties.nazwa}
            <br />
            <strong>Address: </strong>
            {hospital.properties.ulica}
            <br />
            {hospital.properties.kod} {hospital.properties.poczta}
            <br />
            <img
              src={hospital.properties.zdjecie}
              alt="Lamp"
              width="110"
              height="100"
            ></img>
          </Popup>
        </Marker>
      ))}
    </div>
  );
}

export default Marker_hospital_placement;
