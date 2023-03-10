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
import TableBottom from "src/assets/svg/TableBottom";
import Mapsection from "./WorkspaceDetail/map";

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
          <Mapsection />
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
          sx={{ display: "flex", justifyContent: "flex-end" }}
          item
          xs={12}
          sm={12}
          md={7}
          lg={9}
        >
          <TableBottom />
        </Grid>
      </Grid>
    </>
  );
}
