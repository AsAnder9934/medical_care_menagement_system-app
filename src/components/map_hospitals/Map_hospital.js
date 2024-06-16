import React, { useState, useEffect } from "react";
import "./Map_hospital.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import MarkerPlacement from "./Merker_hospital_placement";

function Map_hospital() {
  const [hospitals, setHospitals] = useState(null);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitals_building&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setHospitals(dane.data.features);
        });
    };
    getData();
  }, []);

  return (
    <div className="map_hospital">
      <MapContainer center={[52.2322222, 21.0]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Hospitals DB">
            <WMSTileLayer
              layers="A01_Granice_wojewodztw_db"
              url="http://127.0.0.1:8080/geoserver/Hospital/ows"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Hospitals DB WFS">
            {hospitals ? <GeoJSON dane={hospitals} /> : ""}
          </LayersControl.Overlay>
          <MarkerPlacement />
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map_hospital;
