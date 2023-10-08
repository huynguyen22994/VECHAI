import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks"; 
import { useState } from 'react'
import "leaflet/dist/leaflet.css";
 
export default function Map() {
  const [count, setCount] = useState(0)
  const center = [10.861481, 106.6194982]
  const position = [51.505, -0.09]
  const position1 = [51.567, -0.09]
  return (
    <MapContainer center={center} zoom={16} scrollWheelZoom={false} style={{ height: "300px", width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Marker position={position1}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}