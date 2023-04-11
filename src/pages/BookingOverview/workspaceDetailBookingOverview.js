import React from 'react'
import { Typography, Grid } from '@mui/material'
import { WorksapceImagesWorkspaceEdit } from "../WorkSpace/wb";

export default function WorkspaceDetailBookingOverview() {
    return (
        <div>
            <Grid sx={{mt:4, display: 'flex', justifyContent: 'flex-start'}}>
                <Typography variant="h5">Booking Overview</Typography>
            </Grid>
            
            <Grid sx={{mt:2, width:550}}>
                <WorksapceImagesWorkspaceEdit/>
            </Grid>
        </div>
    )
}
