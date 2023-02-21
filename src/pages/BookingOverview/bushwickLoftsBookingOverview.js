import React from 'react'
import { Typography, Grid } from '@mui/material'
import { WorksapceImagesBookingOverview } from "../WorkSpace/wb";

export default function BushwickLoftsBookingOverview() {
    return (
        <div>
            <Grid sx={{mt:4, display: 'flex', justifyContent: 'flex-start'}}>
                <Typography variant="h5">Booking Overview</Typography>
            </Grid>
            
            <Grid sx={{mt:2, width:550}}>
                <WorksapceImagesBookingOverview/>
            </Grid>
        </div>
    )
}
