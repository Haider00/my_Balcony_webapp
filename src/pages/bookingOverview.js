import React, { useEffect, useState } from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import BushwickLoftsBookingOverview from "./BookingOverview/bushwickLoftsBookingOverview";
import BookingOverviewDetail from "./BookingOverview/bookingOverviewDetail";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/images/tablebottom.png";
import Image from "next/image";

export default function BookingOverview() {
  return (
    <>
      <Box style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto" }}>
        <CustomHeader />
        <Grid container>
          <Grid
            item
            xs={12}
            lg={6}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BushwickLoftsBookingOverview />
          </Grid>
          <Divider orientation="vertical" flexItem />
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
