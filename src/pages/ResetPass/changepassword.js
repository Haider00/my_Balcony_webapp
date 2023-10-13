import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
const Changepassword = ({ email, onClose, onCloseAll }) => {
  const [newPassword, setNewPassword] = useState("");

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      newPassword: newPassword,
    };

    try {
      const response = await fetch(
        "https://www.api.balcony.ws/api/user/update-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Password updated successfully");
        onClose();
      } else {
        console.error("Error updating password");
      }
    } catch (error) {
      console.error("Error updating password", error);
    }
  };
  return (
    <>
      <Box
        style={{
          background: "#111",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          opacity: "0.7",
        }}
        className="overlay"
      ></Box>
      <Box
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "450px",
          borderRadius: "5px",
          background: "#fff",
        }}
      >
        <Box
          style={{
            cursor: "pointer",
            textAlign: "right",
            paddingRight: 10,
            paddingTop: 10,
          }}
          onClick={onCloseAll}
        >
          ✖
        </Box>
        <Box
          style={{
            padding: "40px",
          }}
          className="otp-popup-content"
        >
          <Typography
            sx={{ fontSize: 24, marginBottom: "20px" }}
            component="h1"
            variant="h5"
          >
            Enter New Password
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ marginBottom: "20px" }}
              type="email"
              placeholder="Enter Email"
              value={email}
              readOnly
            />
            <TextField
              sx={{ marginBottom: "20px" }}
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              autoComplete="off"
            />

            <button
              type="submit"
              style={{
                width: "50%",
                backgroundColor: "#005451",
                marginBottom: "20px",
                color: "#fff",
                padding: "6px 16px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>

          {/* <TextField
            sx={{ marginBottom: "20px" }}
            type="text"
            placeholder="Enter Password"
          />

          <button
            style={{
              width: "50%",
              backgroundColor: "#005451",
              marginBottom: "20px",
              color: "#fff",
              padding: "6px 16px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Submit
          </button> */}
        </Box>
      </Box>
    </>
  );
};

export default Changepassword;
