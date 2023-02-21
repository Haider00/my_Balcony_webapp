import React from 'react';
import { CustomHeader } from "../component";
import Grid from "@mui/material/Grid";
import { Divider } from '@mui/material';
import BushwickLoftsBookingOverview from './BookingOverview/bushwickLoftsBookingOverview';
import EditPortion from './BookingOverview/editPortion';
import MenuSection from './MenuSection/menuSection';

export default function BookingOverview() {
    return (
        <>
            <CustomHeader />

            <Grid container>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    md={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <BushwickLoftsBookingOverview />
                </Grid>
                 <Divider orientation='vertical' flexItem />
                <Grid
                    item
                    xs={12}
                    lg={5}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <EditPortion />
                </Grid>
            </Grid>
            
            <Grid
                item
                lg={12}
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginTop: 20,
                }}
            >
                <MenuSection />
            </Grid>
        </>
    )
}