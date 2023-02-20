import React from 'react'
import { CustomHeader } from "../component";
import Grid from "@mui/material/Grid";
import { Divider } from '@mui/material';
import BushwickLofts from './WorkspaceDetail/bushwickLofts';
import HoursOfServices from './WorkspaceDetail/hoursOfServices';
import AmenitiesPortion from './WorkspaceDetail/amenitiesPortion';
import MenuSection from './MenuSection/menuSection';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function WorkspaceDetail() {

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <CustomHeader />

                <Grid style={{ display: 'flex', justifyContent: 'center' }} sx={{ marginY: 2, justifyContent: 'center' }}container spacing={4}>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent:'center',
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
                    lg={3}
                    xs={12}
                    sm={12}
                >
                    <AmenitiesPortion/>
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
                        // flexDirection: "column",
                        alignItem: "center",
                        justifyContent: "flex-start",
                        // flex: 1,
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

