import React from 'react'
import { CustomHeader, ScrollCard, WebTabs } from "../component";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { LeftWallpaperWb, FormWb, WorksapceImages } from "./WorkSpace/wb";
import { Divider } from '@mui/material';
import BushwickLoftsBookingOverview from './bushwickLoftsBookingOverview';
import EditPortion from '../pages/editPortion';
import MenuSection from '../pages/menuSection'
import RightIcons from '@components/rightIcons/rightIcons';
import WorkFromIndoorImage from '@components/workFromIndoorImage/workFromIndoorImage';


export default function WorkFromIndoor () {
    return (
        <>
            <CustomHeader />

            <Grid style={{ display: 'flex' , justifyContent: 'center' }} sx={{ marginY: 1, }} container spacing={4}>
                <Grid
                marginX={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        // alignItem: "center",
                        // justifyContent: "center",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={12}
                    xs={12}
                    sm={12}
                >
                    <RightIcons/>
                    {/* <BushwickLoftsBookingOverview /> */}
                </Grid>
                
                    {/* <Divider sx={{ bgcolor: "black" }} orientation="vertical" flexItem /> */}
                
                <Grid
                marginX={6}
                marginY={2}
                    sx={{
                        // display: "flex",
                        alignItem: "flex-start",
                        flexWrap: "wrap",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={12}
                    xs={12}
                    sm={12}
                >
                    <WorkFromIndoorImage/>
                    {/* <EditPortion /> */}
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
