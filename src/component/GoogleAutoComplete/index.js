import React, { useState } from "react";
import axios from "axios";

function Autocomplete({ onplaceSelect }) {
  const [predictions, setPredictions] = useState([]);
  const [input, setInput] = useState("");

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
    onplaceSelect(prediction.description);
  };

  const fetchPredictions = (newInput) => {
    const apiKey = "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4";
    const endpoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${newInput}&key=${apiKey}`;

    axios
      .get(endpoint)
      .then((response) => {
        setPredictions(response.data.predictions);
      })
      .catch((error) => {
        console.error("Error fetching predictions:", error);
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
          outline: "1px solid #000",
          width: "85%",
          height: "59px",
          justifyContent: "center",
        }}
      >
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
        <input
          style={{ height: "3em", border: "none", outline: "none" }}
          type="text"
          placeholder="Enter a location"
          value={input}
          onChange={handleInputChange}
        />
      </div>

      <ul className="predictions-list">
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
