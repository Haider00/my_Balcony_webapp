import React from 'react'
import { CustomHeader, ScrollCard, WebTabs } from "../component";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { LeftWallpaperWb, FormWb, WorksapceImages } from "./WorkSpace/wb";
import { Divider } from '@mui/material';
import BushwickLoftsBookingOverview from './bushwickLoftsBookingOverview';
import EditPortion from '../pages/editPortion';
import MenuSection from '../pages/menuSection'

export default function BookingOverview() {
    return (
        <>
            <CustomHeader />

            <Grid style={{ display: 'flex', justifyContent: 'center' }} sx={{ marginY: 2, }} container spacing={4}>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "center",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={5}
                    xs={12}
                    sm={12}
                >
                    <BushwickLoftsBookingOverview />
                </Grid>
                
                    <Divider sx={{ bgcolor: "black" }} orientation="vertical" flexItem />
                
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "center",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={5}
                    xs={12}
                    sm={12}
                >
                    <EditPortion />
                </Grid>
            </Grid>
            <Grid
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItem: "center",
                    flex: 1,
                    marginLeft: -10,
                    marginY: 20
                }}
                item
                md={12}
                lg={4}
                xs={12}
                sm={12}
            >
                <MenuSection />
            </Grid>

        </>
    )
}
