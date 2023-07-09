import * as React from "react";
import { useState } from "react";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { TextInput } from "../";
import Box from "@mui/material/Box";

const Title = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const baseStyle = index => ({
    display: "flex",
    backgroundColor: hoverIndex === index ? "#ffff00" : "#005451",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    marginLeft: 10,
    cursor: 'pointer',
  });

  const handleMouseEnter = index => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      <TextInput
        containerWidth="58%"
        alignItems="flex-start"
        width="85%"
        id="people"
        label="people"
        size="small"
      />
      <div
        style={baseStyle(0)}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
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
