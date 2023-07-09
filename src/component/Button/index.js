import * as React from "react";
import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";

const Button = ({
  title = "",
  width = "100%",
  backgroundColor = "#ffff00",
  color = "#fff",
  fontSize = "",
  height = "",
  textTransform = "",
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
          "&:hover": {
            backgroundColor: "#ffff00",
            color:'#000'
          },
          backgroundColor: backgroundColor,
          borderRadius: 2,
          width: "100%",
          color: color,
          fontSize: fontSize,
          height: height,
          textTransform: textTransform,
        }}
        variant="contained"
      >
        {title}
      </MuiButton>
    </Box>
  );
};
export default Button;
