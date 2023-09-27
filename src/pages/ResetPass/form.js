import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Button } from "../../component";
import OTPpopup from "../ResetPass/otppopup";
export const Form = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [isResetPopupVisible, setResetPopupVisible] = React.useState(false);
  console.log("email", email);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    fetch("http://localhost:4000/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("frontend", data.message);
        setResetPopupVisible(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        sx={{ marginY: 1.5, width: "80%", marginTop: 6 }}
        id="email"
        label="email"
        variant="outlined"
        size="small"
        value={email}
        onChange={handleEmailChange}
      />

      <div style={{ width: "65%", margin: 10 }}>or</div>
      <TextField
        sx={{ marginY: 1.5, width: "80%", marginBottom: 6 }}
        id="phone"
        label="phone"
        variant="outlined"
        size="small"
      />

      <Button onClick={handleSubmit} title="Reset Password" width="80%" />
      {isResetPopupVisible && (
        <OTPpopup email={email} onClose={() => setResetPopupVisible(false)} />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "80%",
          marginY: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          style={{
            width: "50%",
          }}
        >
          Already Have an account?
        </Typography>
        <div style={{ height: 30, width: 1, backgroundColor: "#000" }} />
        <div
          onClick={() => {
            router.push("./signin");
          }}
          style={{ width: "40%", cursor: "pointer" }}
        >
          Sign In
        </div>
      </Box>
    </div>
  );
};
export default Form;
