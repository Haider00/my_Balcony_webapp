import * as React from "react";
import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";

const Button = ({
  title = "",
  width = "100%",
  backgroundColor = "#005451",
  color = "#fff",
  onClick = () => {},
}) => {
  return (
    <Box
      sx={{
        marginY: 1.5,
        display: "flex",
        width: width,
        justifyContent: "center",
      }}
    >
      <MuiButton
        onClick={() => {
          onClick();
        }}
        sx={{
          backgroundColor: backgroundColor,
          borderRadius: 2,
          width: "100%",
          color: color,
        }}
        variant="contained"
      >
        {title}
      </MuiButton>
    </Box>
  );
};
export default Button;
