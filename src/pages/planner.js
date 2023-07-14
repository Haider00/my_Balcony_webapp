import React, { useEffect, useState } from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Button, Divider } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import TableBottom from "src/assets/images/tablebottom.png";
// import Mapsection from "./WorkspaceDetail/map";
import { useRouter } from "next/router";
// import { useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import { api } from "src/utils/api";
import PlannerCalendar from "../components/Planner/plannerCalendar/plannerCalendar";
import PlannerCards from "../components/Planner/plannerCards";
import PlannerNotes from "../components/Planner/plannerNotes";
import { usePlannerState } from "src/context/planner.context";
import { useAuthState } from "src/context/auth.context";
import Image from "next/image";
import Box from "@mui/material/Box";
export default function Planner() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div
        style={{
          marginLeft: 20,
          top: "160px",
          position: "fixed",
          zIndex: 10,
        }}
      >
        <WebTabs selectedTab={5} />
      </div>
      <Box style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto" }}>
        <CustomHeader />
        <Grid container sx={{ justifyContent: "space-evenly", mt: 15 }}>
          <Grid
            sx={{ mt: 2, textAlign: "center" }}
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <PlannerCalendar />
          </Grid>

          {!isMediumScreen && (
            <Divider className="divider" orientation="vertical" flexItem />
          )}
          <Grid
            sx={{ mt: 2, textAlign: "center" }}
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <PlannerCards />
          </Grid>
          {!isMediumScreen && (
            <Divider className="divider" orientation="vertical" flexItem />
          )}
          <Grid
            sx={{ mt: 2, textAlign: "center" }}
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <PlannerNotes />
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
            <Image
              style={{ objectFit: "contain", width: "100%", height: "1000px" }}
              src={TableBottom}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
