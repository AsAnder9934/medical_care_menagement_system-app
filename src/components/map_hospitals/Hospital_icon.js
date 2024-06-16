import L from "leaflet";
import hospital from "./tmp/marker.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    tooltipAnchor: [0, 0],
  },
});

export const hospitalIcon = new LeafIcon({ iconUrl: hospital });
