import React, { useEffect, useState } from 'react';
import Map from "@components/Map";
import { useWorkspaceDispatch } from "src/context/workspace.context";


export default function Home() {
  const [center, setCenter] = useState([]);
  const workSpaceDispatch = useWorkspaceDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter([position.coords.latitude, position.coords.longitude]);
      workSpaceDispatch({
        type: "WORKSPACE_MAP_COARDINATES",
        payload: [position.coords.latitude, position.coords.longitude],
      });
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
