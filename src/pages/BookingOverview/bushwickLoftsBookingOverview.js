import React from "react";
import { Typography, Grid } from "@mui/material";
import { WorksapceImagesBookingOverview } from "../WorkSpace/wb";

export default function BushwickLoftsBookingOverview() {
  return (
    <div className="bookingoverview-imgcontainer" style={{ width: "100%" }}>
      <Grid sx={{ mt: 4, display: "flex", justifyContent: "flex-start" }}>
        <Typography style={{ fontSize: "34px" }} variant="h5">
          Booking Overview
        </Typography>
      </Grid>

      <Grid sx={{ mt: 2, width: "100%" }}>
        <WorksapceImagesBookingOverview />
        

      </Grid>
    </div>
  );
}
