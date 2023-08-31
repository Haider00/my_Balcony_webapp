import React, { useState } from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Divider, Typography, Card, CardContent } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import { useAuthDispatch } from "src/context/auth.context";
import { useAuthState } from "src/context/auth.context";
import { Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import TableBottom from "src/assets/images/tablebottom.png";
import Leftewallpaper from "src/assets/images/tabletop.png";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
export default function BookingOverview() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { data: session } = useSession();
  console.log("dashbrdsession", session);
  const authDispatch = useAuthDispatch();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const auth = useAuthState();
  console.log("dashbrdauth", auth);
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
    if (session) {
      signOut({
        callbackUrl: `${window.location.origin}`,
      });

      router.push("./signin");
      console.log("google logout");
    } else {
      authDispatch({ type: "LOGOUT", payload: "" });
      setMessage("You have been logged out");
      setDisplay(true);
      router.push("./signin");
    }
  }
  function walletroute() {
    router.push("./wallet");
  }
  return (
    <>
      <Head>
        <title>Account Dashboard</title>
      </Head>
      <div
        style={{
          marginLeft: 20,
          top: "160px",
          position: "fixed",
          zIndex: 10,
        }}
      >
        <WebTabs selectedTab={6} />
      </div>
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

      <Grid container>
        <Grid
          item
          lg={7}
          style={{ display: isMediumScreen ? "none" : "block" }}
        >
          <Box>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "1000px",
              }}
              src={Leftewallpaper}
              alt=""
            />
          </Box>
        </Grid>
        <Grid
          sx={{ justifyContent: "center", alignItems: "center" }}
          item
          xs={12}
          md={12}
          lg={4}
          sm={12}
        >
          <Card
            style={{ marginTop: "140px" }}
            sx={{
              display: "flex",
              flexDirection: "column",

              marginX: 3.5,
              marginY: 1.5,
              // justifyContent: "space-between",
            }}
          >
            <Box style={{}}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  mt: 5,
                  mb: 5,
                }}
                container
              >
                {auth.isLoggedIn && auth.userType == "seller" ? (
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
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ cursor: "pointer" }}>
                        Profile
                      </Typography>
                    </div>
                    <div
                      style={{
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ cursor: "pointer" }}>
                        Payout
                      </Typography>
                    </div>

                    <div
                      style={{
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ cursor: "pointer" }}>
                        Contact Support
                      </Typography>
                    </div>
                    <div
                      onClick={() => {
                        userAccessControl();
                      }}
                      style={{
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ cursor: "pointer" }}>
                        Switch to user access
                      </Typography>
                    </div>
                    <div
                      style={{
                        padding: 15,

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

                {auth.isLoggedIn && auth.userType == "user" ? (
                  <Grid
                    item
                    xs={12}
                    lg={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ cursor: "pointer" }}>
                        Profile
                      </Typography>
                    </div>
                    <div
                      style={{
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography
                        onClick={walletroute}
                        variant="h6"
                        sx={{ cursor: "pointer" }}
                      >
                        Wallet
                      </Typography>
                    </div>
                    <div
                      style={{
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ cursor: "pointer" }}>
                        Promotion
                      </Typography>
                    </div>
                    <div
                      style={{
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ cursor: "pointer" }}>
                        Contact Support
                      </Typography>
                    </div>
                    <div
                      onClick={() => {
                        sellerAccessControl();
                      }}
                      style={{
                        padding: 15,

                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ cursor: "pointer" }}>
                        Host your workspace
                      </Typography>
                    </div>
                    <div
                      style={{
                        width: "40%",
                        padding: 15,

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
          </Card>
        </Grid>
      </Grid>

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
          sm={12}
          xs={12}
          sx={{
            marginBottom: 4,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <MenuSection />
        </Grid>
        <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Image style={{ width: "100%" }} src={TableBottom} alt="" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
