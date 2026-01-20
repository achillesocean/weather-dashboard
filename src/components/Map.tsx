import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {};

export default function Map({}: Props) {
  return (
    <MapContainer
      center={[9, 38.75]}
      zoom={5}
      style={{ width: "700px", height: "500px" }}
    >
      <MapClick />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[9, 38.75]} />
    </MapContainer>
  );
}

function MapClick() {
  const map = useMap();
  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    map.panTo([lat, lng]);
  });
  return null;
}
