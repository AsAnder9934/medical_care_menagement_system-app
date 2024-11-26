import React, { useEffect, useState } from "react";
import "./Map_patients.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import MarkerPlacement from "./Marker_patients_placement";

function Map_patients() {
  const [patients, setPatients] = useState(null);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitalss&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setPatients(dane.data.features);
        });
    };
    getData();
  }, []);

  return (
    <div className="map">
      <MapContainer center={[52.2322222, 21.0]} zoom={7}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Patient DB">
            <WMSTileLayer
              layers="granice_wojewodztw"
              url="http://127.0.0.1:8080/geoserver/Hospital/wms"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Patients DB WFS">
            {patients ? <GeoJSON dane={patients} /> : ""}
          </LayersControl.Overlay>
          <MarkerPlacement />
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map_patients;
