import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Button = ({
  id = "",
  label = "",
  width = "90%",
  containerWidth = "100%",
  size = "small",
  type = "text",
  alignItems = "center",
  onChange = () => {},
}) => {
  return (
    <div
      style={{
        position: "relative",
        marginTop: 15,
        marginBottom: 15,
        display: "flex",
        alignItems: alignItems,
        flexDirection: "column",
        width: containerWidth,
      }}
    >
      <input
        onChange={onChange}
        id={id}
        type={type}
        style={{
          padding: "10px",
          border: "none",
          borderRadius: "10px",
          font: "inherit",
          color: "#000",
          backgroundColor: "transparent",
          outline: "1px solid #000",
          width: width,
        }}
      />

      <label
        style={{
          position: "absolute",
          left: 0,
          transform:
            alignItems === "center"
              ? "translate(55px, -12px) scale(0.9)"
              : "translate(25px, -12px) scale(0.9)",
          color: "#000",
          paddingInline: "5px",
          backgroundColor: "#fff",
        }}
      >
        {label}
      </label>
    </div>
  );
};
export default Button;
