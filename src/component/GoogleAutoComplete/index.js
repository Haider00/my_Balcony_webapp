// import React, { useState } from "react";
// import axios from "axios";

// function Autocomplete({ onplaceSelect }) {
//   const [predictions, setPredictions] = useState([]);
//   const [input, setInput] = useState("");

//   const handleInputChange = (e) => {
//     const newInput = e.target.value;
//     setInput(newInput);
//     if (newInput.trim() !== "") {
//       fetchPredictions(newInput);
//     } else {
//       setPredictions([]);
//     }
//   };

//   const handlePredictionClick = (prediction) => {
//     setInput(prediction.description);
//     setPredictions([]);
//     onplaceSelect(prediction.description);
//   };

//   const fetchPredictions = (newInput) => {
//     const apiKey = "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4";
//     const endpoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${newInput}&key=${apiKey}`;

//     axios
//       .get(endpoint)
//       .then((response) => {
//         setPredictions(response.data.predictions);
//         console.log("kkk", response.data.predictions);
//       })
//       .catch((error) => {
//         console.error("Error fetching predictions:", error);
//       });
//   };

//   return (
//     <div>
//       <div
//         className="autocomplete-input"
//         style={{
//           marginLeft: 15,
//           position: "relative",
//           marginTop: 15,
//           marginBottom: 15,
//           display: "flex",
//           flexDirection: "column",
//           padding: "10px",
//           border: "none",
//           borderRadius: "10px",
//           font: "inherit",
//           color: "#000",
//           backgroundColor: "transparent",
//           outline: "1px solid #000",
//           width: "85%",
//           height: "59px",
//           justifyContent: "center",
//         }}
//       >
//         <label
//           style={{
//             position: "absolute",
//             left: 28,
//             top: -13,
//             color: "#000",
//             paddingInline: "5px",
//             backgroundColor: "#fff",
//             fontSize: "20px",
//             transform: "scale(0.9)",
//           }}
//         >
//           place
//         </label>
//         <input
//           style={{ height: "3em", border: "none", outline: "none" }}
//           type="text"
//           placeholder="Enter a location"
//           value={input}
//           onChange={handleInputChange}
//         />
//       </div>

//       <ul className="predictions-list">
//         {predictions.map((prediction) => (
//           <p
//             style={{ cursor: "pointer" }}
//             key={prediction.place_id}
//             onClick={() => handlePredictionClick(prediction)}
//           >
//             {prediction.description}
//           </p>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Autocomplete;

import React, { useState } from "react";
import axios from "axios";

function Autocomplete({
  onplaceSelect,
  inputStyle,
  showLabel,
  placeholderText,
  outline,
}) {
  const [predictions, setPredictions] = useState([]);
  const [input, setInput] = useState("");
  const [selectedPlace, setSelectedPlace] = useState({ lat: null, lng: null });

  console.log("ppp", selectedPlace);
  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    if (newInput.trim() !== "") {
      fetchPredictions(newInput);
    } else {
      setPredictions([]);
    }
  };

  const handlePredictionClick = (prediction) => {
    setInput(prediction.description);
    setPredictions([]);
    // Fetch lat/long for the selected place using the Place Details API
    fetchPlaceDetails(prediction.place_id);
  };

  const fetchPredictions = (newInput) => {
    const apiKey = "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4";

    // const endpoint = `proxy/maps/api/place/autocomplete/json?input=${newInput}&key=${apiKey}`;
    const endpoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${newInput}&key=${apiKey}`;

    axios
      .get(endpoint)
      .then((response) => {
        setPredictions(response.data.predictions);
        console.log("Predictions", response.data.predictions);
      })
      .catch((error) => {
        console.error("Error fetching predictions:", error);
      });
  };

  const fetchPlaceDetails = (placeId) => {
    const apiKey = "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4";
    const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

    axios
      .get(endpoint)
      .then((response) => {
        const place = response.data.result;
        const location = place.geometry.location;
        const lat = location.lat;
        const lng = location.lng;

        setSelectedPlace({ lat, lng });
        onplaceSelect({ lat, lng });
      })
      .catch((error) => {
        console.error("Error fetching place details:", error);
      });
  };

  return (
    <div>
      <div
        className="autocomplete-input"
        style={{
          marginLeft: 15,
          position: "relative",
          marginTop: 15,
          marginBottom: 15,
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          border: "none",
          borderRadius: "10px",
          font: "inherit",
          color: "#000",
          backgroundColor: "transparent",
          outline: outline,
          width: "auto",
          height: "59px",
          justifyContent: "center",
        }}
      >
        {showLabel && (
          <label
            style={{
              position: "absolute",
              left: 28,
              top: -13,
              color: "#000",
              paddingInline: "5px",
              backgroundColor: "#fff",
              fontSize: "20px",
              transform: "scale(0.9)",
            }}
          >
            place
          </label>
        )}
        <input
          style={inputStyle}
          type="text"
          placeholder={placeholderText}
          value={input}
          onChange={handleInputChange}
        />
      </div>

      <ul
        className="predictions-list"
        style={{ position: "absolute", background: "#fff", zIndex: "999" }}
      >
        {predictions.map((prediction) => (
          <p
            style={{ cursor: "pointer" }}
            key={prediction.place_id}
            onClick={() => handlePredictionClick(prediction)}
          >
            {prediction.description}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
