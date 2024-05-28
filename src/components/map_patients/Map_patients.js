import React, { useEffect } from "react";
import "./Map_patients.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function Map_patients() {
  useEffect(() => {
    console.log("aaa");
    const getData = () => {
      axios
        .get(
          // "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3AA01_Granice_wojewodztw_db&maxFeatures=50&outputFormat=application%2Fjson"
          "https://jsonplaceholder.typicode.com/posts/1"
        )
        .then((dane) => {
          console.log(dane);
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
          <LayersControl.BaseLayer checked name="granice wojewodztw db">
            <WMSTileLayer
              layers="A01_Granice_wojewodztw_db"
              url="http://127.0.0.1:8080/geoserver/prge/wms"
            />
          </LayersControl.BaseLayer>
          {/* <LayersControl.Overlay checked name="granice wojewodztwa db WFS">
            <GeoJSON data={A01_Granice_wojewodztw_db} />
          </LayersControl.Overlay> */}
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map_patients;
