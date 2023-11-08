import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { api } from "../../utils/api";
import { useRouter } from "next/router";
const GoogleMaps = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const router = useRouter();
  const { lat, lon } = router.query;

  const centerCoords = {
    lat: parseFloat(lat),
    lng: parseFloat(lon),
  };
  const maxDistance = 50;

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

  const calculateDistance = (coords1, coords2) => {
    const radlat1 = (Math.PI * coords1.lat) / 180;
    const radlat2 = (Math.PI * coords2.lat) / 180;
    const theta = coords1.lng - coords2.lng;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  };

  const renderMarkers = (map, maps) => {
    workspaces.forEach((workspace) => {
      const [lat, lng] = workspace.coordinates;
      const workspaceCoords = { lat, lng };

      const distance = calculateDistance(centerCoords, workspaceCoords);

      if (distance <= maxDistance) {
        const marker = new maps.Marker({
          position: { lat, lng },
          map,
          title: workspace.name,
        });

        console.log("Marker:PP", marker);
        console.log("Workspace:PP", workspace);
      }
    });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {workspaces.length > 0 ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4",
          }}
          defaultCenter={centerCoords}
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
