import React from 'react'
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import MenuSection from './MenuSection/menuSection'
import RightIcons from '@components/rightIcons/rightIcons';
import WorkFromOutdoorImage from '@components/workFromOutdoorImage/workFromoutdoorImage';
import Pagination from '@mui/material/Pagination';
import TableBottom from 'src/assets/svg/TableBottom';

export default function WorkFromOutdoor() {
    return (
        <>
            <CustomHeader />
            <WebTabs selectedTab={3} />

            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} sx={{ marginY: 1, }} container >
                <Grid
                    marginX={6}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={12}
                    xs={12}
                    sm={12}
                >
                    <RightIcons />
                </Grid>

                <Grid
                    marginX={6}
                    marginY={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                        flexWrap: "wrap",
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={12}
                    xs={12}
                    sm={12}
                >
                    <WorkFromOutdoorImage />
                </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ display: 'flex', marginTop: 10 }}>
                <Grid sx={{ display: 'flex', marginTop: 8, justifyContent: 'center' }} item xs={12} sm={12} md={3} lg={3}>
                    <MenuSection />
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={12} md={7} lg={8}>
                    <TableBottom />
                </Grid>
            </Grid>
        </>
    )
}
