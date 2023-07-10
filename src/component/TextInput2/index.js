import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Button = ({
  id = "",
  label = "",
  width = "90%",
  type = "text",

  onChange = () => {},
}) => {
  return (
    <div style={{ display: "flex" }}>
      <label style={{ fontSize: "20px", width: "30%", textAlign: "right" }}>
        {label}
      </label>
      &nbsp;&nbsp;
      <input
        onChange={onChange}
        id={id}
        type={type}
        style={{
          width: "60%",
          background: "#fff",
          borderBottom: "3px solid #000",
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          outline: "none",
        }}
      />
    </div>
  );
};
export default Button;
