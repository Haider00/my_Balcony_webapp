import React from 'react'
import { CustomHeader} from "../component";
import Grid from "@mui/material/Grid";
import MenuSection from './MenuSection/menuSection'
import RightIcons from '@components/rightIcons/rightIcons';
import WorkFromIndoorImage from '@components/workFromIndoorImage/workFromIndoorImage';
import Pagination from '@mui/material/Pagination';

export default function WorkFromIndoor () {
    return (
        <>
            <CustomHeader />

            <Grid style={{ display: 'flex' , justifyContent: 'center' }} sx={{ marginY: 1, }} container >
                <Grid
                marginX={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={12}
                    xs={12}
                    sm={12}
                >
                    <RightIcons/>
                </Grid>
                                
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
                </Grid>
            </Grid>

            <Grid style={{ display: 'flex' , justifyContent: 'flex-start' }} sx={{ marginY: 1, marginX:4 }} container spacing={4}>
            <Pagination count={7} color="primary" />
            </Grid>

            <Grid
                sx={{
                    display: "flex",
                    // flexDirection: "column",
                    alignItem: "center",
                    flex: 1,
                    marginLeft: -10,
                    marginY: 20
                }}
                item
                md={12}
                lg={4}
                xs={4}
                sm={4}
            >
                <MenuSection />
            </Grid>

        </>
    )
}
