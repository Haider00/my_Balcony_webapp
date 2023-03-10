import React, { useEffect, useState } from "react";
import Map from "@components/Map";
const workspaceDetails = {
  name: "Sanan's Workspace",
  coordinates: [31.4504, 73.135],
  image: "image Location",
  address: "Nazar shah street",
  address2: "Ghona",
  city: "LHR",
  cleaningFee: 200,
  country: "Pakistan",
  currency: "USD",
  flatFee: true,
  workspaceType: "Indoor",
  maintenancesFee: 400,
  otherFeeAmount: 100,
  otherFeeName: "Other Fee",
  perPerson: 10,
  percentage: false,
  state: "Punjab",
  coworkspace: true,
};
export default function Home() {
  const [center, setCenter] = useState(workspaceDetails.coordinates);

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
