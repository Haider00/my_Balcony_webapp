import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "../../component";
import Changepassword from "../ResetPass/changepassword";
import { Snackbar } from "@mui/material";
const OtpPopup = ({ email, onClose, onCloseAll }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [otpVerified, setotpVerified] = useState(false);
  console.log("otpverf", otpVerified);
  const [closeAll, setcloseAll] = useState(true);
  const [otpStatus, setotpStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);

      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleResendClick = () => {
    fetch("https://www.api.balcony.ws/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("ResendOTP", data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTimer(30);
  };

  const handleVerifyOTP = () => {
    fetch("https://www.api.balcony.ws/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, otp: otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("VerifyOTP", data.message);
        if (data.message == "OTP verified successfully.") {
          setMessage("OTP verified successfully");
          setDisplay(true);
          setotpVerified(true);
          setotpStatus(false);
        } else {
          setotpStatus(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={display}
        onClose={() => {
          setDisplay(false);
        }}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{message}</span>}
      />
      {closeAll ? (
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
              zIndex: 101,
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
              zIndex: 99999,
            }}
          >
            {otpVerified ? (
              <Changepassword
                email={email}
                onClose={() => setotpVerified(false)}
                onCloseAll={() => setcloseAll(false)}
              />
            ) : (
              <>
                <Box
                  style={{
                    cursor: "pointer",
                    textAlign: "right",
                    paddingRight: 10,
                    paddingTop: 10,
                  }}
                  onClick={onClose}
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
                    Enter Your One Time Password
                  </Typography>
                  <TextField
                    sx={{ marginBottom: "20px" }}
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <button
                    onClick={handleVerifyOTP}
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
                    Verify OTP
                  </button>
                  {otpStatus ? (
                    <Typography
                      sx={{ fontSize: 16, marginBottom: "20px", color: "red" }}
                      component="h4"
                      variant="h4"
                    >
                      Incorrect OTP
                    </Typography>
                  ) : null}
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        width: "50%",
                        backgroundColor: timer !== 0 ? "#ccc" : "#005451",
                        marginBottom: "20px",
                        color: "#fff",
                        padding: "6px 16px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: timer !== 0 ? "#ffff00" : "#ccc",
                          color: timer !== 0 ? "#000" : "#fff",
                        },
                      }}
                      onClick={handleResendClick}
                      disabled={timer !== 0}
                    >
                      Resend OTP
                    </button>
                    <Typography style={{ textAlign: "right" }}>
                      Resend in: {timer} seconds
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </>
      ) : null}
    </div>
  );
};

export default OtpPopup;
