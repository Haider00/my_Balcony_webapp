import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { api } from "../../utils/api";

const GoogleMaps = () => {
  const [workspaces, setWorkspaces] = useState([]);
  console.log("guana", workspaces);

  useEffect(() => {
    api
      .getWorkSpace({ query: "" })
      .then((res) => {
        setWorkspaces(res.data);
      })
      .catch((err) => {
        console.log("Error fetching workspace data:", err);
      });
  }, []);

  const renderMarkers = (map, maps) => {
    workspaces.forEach((workspace) => {
      const [lat, lng] = workspace.coordinates;

      const marker = new maps.Marker({
        position: { lat, lng },
        map,
        title: workspace.name,
      });

      // Log the marker and workspace information
      console.log("Marker:PP", marker);
      console.log("Workspace:PP", workspace);
    });
  };

  // Conditional rendering based on workspaces data
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {workspaces.length > 0 ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4",
          }}
          defaultCenter={{ lat: 30.3753, lng: 69.3451 }}
          defaultZoom={0}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GoogleMaps;
