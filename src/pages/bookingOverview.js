import React from 'react';
import { CustomHeader } from "../component";
import Grid from "@mui/material/Grid";
import { Divider } from '@mui/material';
import BushwickLoftsBookingOverview from './BookingOverview/bushwickLoftsBookingOverview';
import EditPortion from './BookingOverview/editPortion';
import MenuSection from './MenuSection/menuSection';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function BookingOverview() {

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
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
                {!isMediumScreen && <Divider className='divider' orientation='vertical' flexItem />}
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
                    flex: 1,
                    marginLeft: -10,
                    marginY: 20
                }}
                item
                md={12}
                lg={12}
                xs={12}
                sm={12}
            >
                <MenuSection />
            </Grid>

        </>
    )
}
