import React, { useState } from "react";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { TextInput } from "../../component";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Title = () => {
  const [count, setCount] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const baseStyle = (index) => ({
    display: "flex",
    backgroundColor: hoverIndex === index ? "#ffff00" : "#005451",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    marginLeft: 10,
    cursor: "pointer",
  });

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      {/* <TextField
        style={{ margin: "15px" }}
        id="people"
        label="people"
        size="small"
        value={count.toString()}
      /> */}

      <div
        style={{
          marginLeft: 15,
          position: "relative",
          marginTop: 15,
          marginBottom: 15,
          display: "flex",
          flexDirection: "column",
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
          {"people"}
        </label>
        <input
          value={count?.toString()}
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "10px",
            font: "inherit",
            color: "#000",
            backgroundColor: "transparent",
            outline: "1px solid #000",

            height: "59px",
          }}
        />
      </div>
      <div
        style={baseStyle(0)}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        onClick={handleDecrement}
      >
        <Remove
          style={{
            fontSize: 20,
            color: hoverIndex === 0 ? "#000" : "#fff",
          }}
        />
      </div>
      <div
        style={baseStyle(1)}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={handleIncrement}
      >
        <Add
          style={{
            fontSize: 20,
            color: hoverIndex === 1 ? "#000" : "#fff",
          }}
        />
      </div>
    </Box>
  );
};

export default Title;
