import React from "react";
import { CustomHeader } from "../component";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import BushwickLofts from "./WorkspaceDetail/bushwickLofts";
import HoursOfServices from "./WorkspaceDetail/hoursOfServices";
import AmenitiesPortion from "./WorkspaceDetail/amenitiesPortion";
import MenuSection from "./MenuSection/menuSection";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function WorkspaceDetail() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <CustomHeader />

      <Grid container sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={4}>
          <BushwickLofts />
        </Grid>
        {!isMediumScreen && (
          <Divider className="divider" orientation="vertical" flexItem />
        )}
        <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={3}>
          <AmenitiesPortion />
        </Grid>
        {!isMediumScreen && (
          <Divider className="divider" orientation="vertical" flexItem />
        )}
        <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={12} lg={4}>
          <HoursOfServices />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 10 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            style={{ borderRadius: 40, width: "75%", height: "600px" }}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure acres/hectares on map
            </a>
          </iframe>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: 10 }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MenuSection />
        </Grid>
      </Grid>
    </>
  );
}

