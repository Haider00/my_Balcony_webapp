import React, { useEffect, useState } from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import BushwickLoftsBookingOverview from "./BookingOverview/bushwickLoftsBookingOverview";
import EditPortion from "./BookingOverview/editPortion";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/svg/TableBottom";

export default function BookingOverview() {
  return (
    <>
      <CustomHeader />
      <WebTabs selectedTab={4} />
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
          <EditPortion />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ display: "flex", marginTop: 10 }}>
        <Grid
          sx={{ display: "flex", marginTop: 8, justifyContent: "center" }}
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
        >
          <MenuSection />
        </Grid>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
          sm={12}
          md={7}
          lg={8}
        >
          <TableBottom />
        </Grid>
      </Grid>
    </>
  );
}
