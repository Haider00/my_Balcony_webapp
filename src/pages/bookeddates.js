import React from "react";
import Grid from "@mui/material/Grid";
import { CustomHeader } from "../component";
import { WebTabs } from "../component";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/svg/TableBottom";
import { Divider } from "@mui/material";
import Incomingbooking from "./BookedDates/incomingbooking";
import Ongoingbooking from "./BookedDates/ongoingbooking";
import Bookinghistory from "./BookedDates/bookinghistory";

export default function bookeddates() {
  return (
    <>
      <CustomHeader />
      <WebTabs />

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
        }}
        container
      >
        <Grid
          item
          xs={12}
          lg={4}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Incomingbooking />
          <Ongoingbooking />
        </Grid>
        <Divider
          sx={{ backgroundColor: "#000" }}
          orientation="vertical"
          flexItem
        />
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Bookinghistory />
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
