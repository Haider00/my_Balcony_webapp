import React from 'react'
import { CustomHeader, ScrollCard, WebTabs } from "../component";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { LeftWallpaperWb, FormWb, WorksapceImages } from "./WorkSpace/wb";
import { Divider } from '@mui/material';
import BushwickLofts from '../pages/bushwickLofts';
import HoursOfServices from '../pages/hoursOfServices';
import Amenities from './WorkSpace/Amenities';



export default function WorkspaceDetail() {
    return (
        <>
            <CustomHeader />

            <Grid style={{display: 'flex'}} sx={{ marginY: 2, marginX:20 }} container spacing={4}>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "center",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={3}
                    xs={12}
                    sm={12}
                >
                    <BushwickLofts/>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "center",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={3}
                    xs={12}
                    sm={12}
                >
                    {/* <Amenities/> */}
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "center",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={4}
                    xs={12}
                    sm={12}
                >
                    <HoursOfServices/>
                </Grid>
            </Grid>
        </>
    )
}
