import React, { useState } from "react";
import axios from "axios";

function Autocomplete() {
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

  const fetchPredictions = (newInput) => {
    const apiKey = "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4";
    const endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${newInput}&key=${apiKey}`;

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
      <input
        type="text"
        placeholder="Enter a location"
        value={input}
        onChange={handleInputChange}
      />
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction.place_id}>{prediction.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
