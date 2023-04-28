import React, { useEffect, useState } from "react";
import { CustomHeader } from "../component";
import Grid from "@mui/material/Grid";
import { Button, Divider } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import TableBottom from "src/assets/svg/TableBottom";
// import Mapsection from "./WorkspaceDetail/map";
import { useRouter } from "next/router";
// import { useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import { api } from "src/utils/api";
import PlannerCalendar from '../components/Planner/plannerCalendar/plannerCalendar';
import PlannerCards from '../components/Planner/plannerCards';
import PlannerNotes from '../components/Planner/plannerNotes';
import { usePlannerState } from "src/context/planner.context";
import { useAuthState } from "src/context/auth.context";


export default function Planner() {

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <CustomHeader />

            <Grid container sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
                <Grid sx={{ mt: 2, textAlign: 'center' }} item xs={12} sm={12} md={6} lg={3}>
                    <PlannerCalendar />
                </Grid>
                {!isMediumScreen && (
                    <Divider className="divider" orientation="vertical" flexItem />
                )}
                <Grid sx={{ mt: 2, textAlign: 'center' }} item xs={12} sm={12} md={6} lg={3}>
                    <PlannerCards />
                </Grid>
                {!isMediumScreen && (
                    <Divider className="divider" orientation="vertical" flexItem />
                )}
                <Grid sx={{ mt: 2, textAlign: 'center' }} item xs={12} sm={12} md={12} lg={3}>
                    <PlannerNotes />
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
