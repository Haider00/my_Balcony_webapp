import React, { useState, useEffect } from "react";

// import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

// const ChangeView: React.FC<props> = ({ coords = [] }) => {
//   const map = useMap();
//   map.setView(coords, 12);
//   return null;
// };

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  const center = [geoData.lat, geoData.lng];

  return (
    <div>view</div>
    // <MapContainer
    //   center={[40.505, -100.09]}
    //   zoom={12}
    //   style={{ height: "100vh" }}
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   {geoData.lat && geoData.lng && (
    //     <Marker position={[geoData.lat, geoData.lng]} />
    //   )}
    //   <ChangeView coords={center} />
    // </MapContainer>
  );
}
