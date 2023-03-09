import React, { useEffect, useState } from 'react';
import Map from "@components/Map";

export default function Home() {
  const [center, setCenter] = useState([31.4187, -73.0791]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter([position.coords.latitude, position.coords.longitude]);
    console.log(center);
    });
  }, []);

  const handleMarkerDrag = (event) => {
    // setCenter([event.target.getLatLng().lat, event.target.getLatLng().lng]);
    // console.log('marker dragged', event);
  };

  return (
    <Map center={center} zoom={16}>
      {({ TileLayer, Marker }) => (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center} draggable={true} dragging={handleMarkerDrag} />
        </>
      )}
    </Map>
  );
}
