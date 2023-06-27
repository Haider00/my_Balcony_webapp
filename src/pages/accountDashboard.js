import React, { useState } from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import { useAuthDispatch } from "src/context/auth.context";
import { useAuthState } from "src/context/auth.context";
import { Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import TableBottom from "src/assets/images/tablebottom.png";
import Image from "next/image";
export default function BookingOverview() {
  const authDispatch = useAuthDispatch();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const auth = useAuthState();

  function userAccessControl() {
    // const userType = "user"
    // console.log('typeCheck')
    authDispatch({ type: "SET_USER_TYPE", payload: "user" });
  }
  function sellerAccessControl() {
    // const userType = "seller"
    // console.log('typeCheck')
    authDispatch({ type: "SET_USER_TYPE", payload: "seller" });
  }
  function handleLogout() {
    authDispatch({ type: "LOGOUT", payload: "" });
    setMessage("You have been logged out");
    setDisplay(true);
    router.push("./signin");
  }
  return (
    <>
      <CustomHeader />

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
      <Box style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto" }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            mt: 5,
          }}
          container
        >
          <Grid style={{ marginTop: 56 }} item xs={1} md={1}>
            <WebTabs />
          </Grid>
          {auth.userType == "seller" ? (
            <Grid
              item
              xs={12}
              lg={10}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Profile
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Payout
                </Typography>
              </div>

              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Contact
                  <br /> Support
                </Typography>
              </div>
              <div
                onClick={() => {
                  userAccessControl();
                }}
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Switch to <br /> user access
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography
                  onClick={handleLogout}
                  variant="h6"
                  sx={{ cursor: "pointer" }}
                >
                  logout
                </Typography>
              </div>
            </Grid>
          ) : null}

          {auth.userType == "user" ? (
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Profile
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Wallet
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Promotion
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Contact
                  <br /> Support
                </Typography>
              </div>
              <div
                onClick={() => {
                  sellerAccessControl();
                }}
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  Switch to <br /> host access
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  padding: 20,
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <Typography
                  onClick={handleLogout}
                  variant="h6"
                  sx={{ cursor: "pointer" }}
                >
                  logout
                </Typography>
              </div>
            </Grid>
          ) : null}
          {/* <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ width: '40%', padding: 20, borderBottom: '1px solid black', textAlign: 'center' }}>
                        <Typography variant='h6' sx={{ cursor: 'pointer' }}>Profile</Typography>
                    </div>
                    <div style={{ width: '40%', padding: 20, borderBottom: '1px solid black', textAlign: 'center' }}>
                        <Typography variant='h6' sx={{ cursor: 'pointer' }}>Wallet</Typography>
                    </div>
                    <div style={{ width: '40%', padding: 20, borderBottom: '1px solid black', textAlign: 'center' }}>
                        <Typography variant='h6' sx={{ cursor: 'pointer' }}>Promotion</Typography>
                    </div>
                    <div style={{ width: '40%', padding: 20, textAlign: 'center' }}>
                        <Typography variant='h6'>Become a workspace host</Typography>
                    </div>
                    <div style={{ width: '40%', padding: 20, borderBottom: '1px solid black', textAlign: 'center' }}>
                        <Typography variant='h6' sx={{ cursor: 'pointer' }}>Logout</Typography>
                    </div>
                </Grid> */}
        </Grid>
      </Box>
      <Grid
        sx={{
          marginTop: 4,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
        container
        spacing={2}
      >
        <Grid
          item
          md={3}
          sm={5}
          xs={12}
          sx={{
            marginBottom: 4,
            marginLeft: 7,
          }}
        >
          <MenuSection />
        </Grid>
        <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <Image src={TableBottom} alt="" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
