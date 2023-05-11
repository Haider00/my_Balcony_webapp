import React, { useEffect, useState } from "react";
import Map from "@components/Map";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";

export default function Home() {

  const [center, setCenter] = useState([0, 0]);
  const workspaceDetails = useWorkspaceDetailState();

  useEffect(() => {
    if (workspaceDetails.workspaceDetail && workspaceDetails.workspaceDetail.coordinates) {

      setCenter(workspaceDetails.workspaceDetail.coordinates);

    }
  })
  console.log('workspaceDetails>>>>>>', workspaceDetails.workspaceDetail.coordinates)


  return (
    <Map center={center} zoom={16}>
      {({ TileLayer, Marker }) => (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center} />
        </>
      )}
    </Map>
  );
}
