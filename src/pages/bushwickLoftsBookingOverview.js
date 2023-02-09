import React from 'react'
import { Box, Typography, Rating } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';  
import { LeftWallpaperWb, FormWb, WorksapceImagesBookingOverview } from "./WorkSpace/wb";
import Amenities from './WorkSpace/Amenities';

export default function BushwickLoftsBookingOverview() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
                <Typography variant="h5">Booking Overview</Typography>
            </Box>
            
            <Box sx={{ml:-10 ,mt:4}}>
                <WorksapceImagesBookingOverview/>
            </Box>
        </div>
    )
}
