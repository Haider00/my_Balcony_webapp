import React, { useEffect, useState } from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Divider, Box } from "@mui/material";
import BushwickLoftsBookingOverview from "./BookingOverview/bushwickLoftsBookingOverview";
import BookingOverviewDetail from "./BookingOverview/bookingOverviewDetail";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/images/tablebottom2.png";
import Image from "next/image";
import Head from "next/head";

export default function BookingOverview() {
  return (
    <>
      <Head>
        <title>Booking Overview</title>
      </Head>
      <div
        style={{
          marginLeft: 20,
          top: "160px",
          position: "fixed",
          zIndex: 10,
        }}
      >
        <WebTabs selectedTab={3} />
      </div>
      <Box style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto" }}>
        <CustomHeader />
        <Grid sx={{ marginTop: 15, alignItems: "start" }} container>
          <Grid
            item
            xs={12}
            lg={6}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BushwickLoftsBookingOverview />
          </Grid>

          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BookingOverviewDetail />
          </Grid>
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
