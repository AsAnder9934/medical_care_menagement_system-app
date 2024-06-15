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

function Map_patients() {
  const [hospitals, setHospitals] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      console.log(feature.properties.imie_i_naz);
      layer.bindPopup(`
        <h1> Dane pacjenta</h1>
        
        <strong>Imię i nazwisko: </strong>${feature.properties.imie_i_naz}</br>
        <strong>PESEL: </strong>${feature.properties.pesel}</br>
        <img src=${feature.properties.zdjecie} alt="Lamp" width="70" height="70" margin="50" />
        `);
    }
  };

  useEffect(() => {
    console.log("aaa");
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitalss&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setHospitals(dane.data);
        });
    };
    getData();
  }, []);

  return (
    <div className="map_patients">
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
          <LayersControl.BaseLayer checked name="Patients Map">
            <WMSTileLayer
              layers="hospitalss"
              url="http:///127.0.0.1:8080/geoserver/Hospital/wms"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Patients Map DB WFS">
            {hospitals ? (
              <GeoJSON data={hospitals} onEachFeature={makePopup} />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map_patients;
