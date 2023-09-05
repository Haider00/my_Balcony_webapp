import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { api } from "../../utils/api"; // Import your API utility

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workspaces: [],
    };
  }

  componentDidMount() {
    // Fetch your workspace data and set it in the state
    // Replace this with your actual data fetching logic using your API utility
    api
      .getWorkSpace({ query: "" })
      .then((res) => {
        this.setState({ workspaces: res.data });
      })
      .catch((err) => {
        console.log("Error fetching workspace data:", err);
      });
  }

  renderMarkers = (map, maps) => {
    const { workspaces } = this.state;

    // Create markers for each workspace
    workspaces.forEach((workspace) => {
      const [lat, lng] = workspace.coordinates;

      new maps.Marker({
        position: { lat, lng },
        map,
        title: workspace.name,
      });
    });
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4", // Replace with your Google Maps API key
          }}
          defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          defaultZoom={10}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        />
      </div>
    );
  }
}

export default GoogleMaps;
