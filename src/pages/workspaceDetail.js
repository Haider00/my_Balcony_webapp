import React from 'react'
import { CustomHeader, ScrollCard, WebTabs } from "../component";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { LeftWallpaperWb, FormWb, WorksapceImages } from "./WorkSpace/wb";
import { Divider } from '@mui/material';
import BushwickLofts from '../pages/bushwickLofts';
import HoursOfServices from '../pages/hoursOfServices';
import AmenitiesPortion from '../pages/amenitiesPortion';
import MenuSection from '../pages/menuSection'
// import Amenities from './WorkSpace/Amenities';
import dynamic from "next/dynamic";

export default function WorkspaceDetail() {
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
                    lg={4}
                    xs={12}
                    sm={12}
                >
                    <BushwickLofts />
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
                    <AmenitiesPortion/>
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
                    <HoursOfServices />
                </Grid>
            </Grid>
            <Grid
                md={12}
                lg={12}
                xs={12}
                sm={12} style={{ display: 'flex', justifyContent: 'center' }} sx={{ marginY: 10, }} container spacing={4}>
                <iframe style={{  borderRadius: 40, width: '75%', height: '600px' }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
            </Grid>

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
                    <MenuSection />
                </Grid>
        </>
    )
}
