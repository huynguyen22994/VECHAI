import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks"; 
import { useState } from 'react'
import "leaflet/dist/leaflet.css";
 
export default function Map() {
  const [count, setCount] = useState(0)
  const position = [51.505, -0.09]
  return (
    <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: "300px", width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}