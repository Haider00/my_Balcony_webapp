import React from 'react'
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Box } from '@mui/material';
import MenuSection from './MenuSection/menuSection'
import RightIcons from '@components/rightIcons/rightIcons';
import WorkFromIndoorImage from '@components/workFromIndoorImage/workFromIndoorImage';
import Image from "next/image";
import WorkFromOutdoorImage from '@components/workFromOutdoorImage/workFromoutdoorImage';
import Pagination from '@mui/material/Pagination';
import TableBottom from "src/assets/images/tablebottom.png";
import {Divider} from '@mui/material';
// import TableBottom from 'src/assets/svg/TableBottom';

export default function WorkFromIndoor() {
    return (
        <>
            <CustomHeader />

            <Grid style={{ justifyContent: 'center', alignItems: 'center', maxWidth: 1400, marginLeft: "auto", marginRight: "auto", marginTop: 130 }} sx={{ marginY: 1, }} container >
                <Grid container sx={{ justifyContent: 'space-between' }}>
                    <Grid md={1}
                        lg={1}
                        xs={1}
                        sm={12} item>
                        <WebTabs selectedTab={3} />
                    </Grid>
                    <Grid
                        item
                        md={12}
                        lg={4}
                        xs={12}
                        sm={12}
                    >
                        <WorkFromIndoorImage />
                    </Grid>
                    <Grid item
                        md={12}
                        lg={1}
                        xs={12}
                        sm={12}>
                            <Divider orientation="vertical" flexItem />
                    </Grid>
                    <Grid
                        item
                        md={12}
                        lg={4}
                        xs={12}
                        sm={12}
                    >
                        <WorkFromOutdoorImage />
                    </Grid>
                    <Grid
                        marginX={6}
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flexDirection: "column",
                            flex: 1,
                        }}
                        item
                        md={1}
                        lg={1}
                        xs={1}
                        sm={1}
                    >
                        <RightIcons />
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                sx={{
                    marginTop: 4,
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }}
                container
                spacing={2}
            >
                <Grid
                    item
                    md={3}
                    sm={5}
                    xs={12}
                    sx={{
                        marginBottom: 4,
                        marginLeft: 7,
                    }}
                >
                    <MenuSection />
                </Grid>
                <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
                    <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
                        <Image src={TableBottom} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
