import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { api } from "../../utils/api";

const GoogleMaps = ({ handlecoordinates = ({}) => {} }) => {
  const [userLocation, setUserLocation] = useState([]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const newPosition = [latitude, longitude]; // Store as an array
        setUserLocation(newPosition);
        handlecoordinates(newPosition);
      });
    }
  }, []);

  const loadMap = (map, maps) => {
    if (!userLocation || userLocation.length !== 2) {
      return;
    }

    const [lat, lng] = userLocation; // Destructure the array

    map.setCenter({ lat, lng });

    const marker = new maps.Marker({
      position: { lat, lng },
      map,
      draggable: true,
      icon: null,
    });

    marker.addListener("dragend", () => {
      const newPosition = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      };
      setUserLocation([newPosition.lat, newPosition.lng]);
      handlecoordinates([newPosition.lat, newPosition.lng]);
      console.log("Marker Position:", newPosition);
    });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4", // Replace with your API key
        }}
        defaultCenter={
          userLocation.length === 2
            ? { lat: userLocation[0], lng: userLocation[1] }
            : { lat: 40.756795, lng: -73.954298 }
        }
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      />
    </div>
  );
};

export default GoogleMaps;
