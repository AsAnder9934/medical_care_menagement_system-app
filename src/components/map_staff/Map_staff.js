import React, { useState, useEffect } from "react";
import "./Map_staff.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import MarkerPlacement from "./Marker_staff_placement";

function Map_staff() {
  const [satff, setStaff] = useState(null);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitals_staff&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setStaff(dane.data.features);
        });
    };
    getData();
  }, []);

  return (
    <div className="map_staff">
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
          <LayersControl.BaseLayer checked name="Staff DB">
            <WMSTileLayer
              layers="Staff DB WMS"
              url="http://127.0.0.1:8080/geoserver/Hospital/ows"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Hospitals DB WFS">
            {satff ? <GeoJSON dane={satff} /> : ""}
          </LayersControl.Overlay>
          <MarkerPlacement />
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map_staff;
