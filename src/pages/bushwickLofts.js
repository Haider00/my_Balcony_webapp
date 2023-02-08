import React from 'react'
import { Box, Typography, Rating } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';  
import { LeftWallpaperWb, FormWb, WorksapceImages } from "./WorkSpace/wb";
import Amenities from './WorkSpace/Amenities';

export default function BushwickLofts() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr:12 }}>
                <Typography variant="h5">Bushwick Lofts</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr:12 }}>
                <ShareIcon sx={{mr:37}}/>
                <Rating
                    defaultValue={2.5}
                    name="simple-controlled"
                />
                <Typography variant="small">(151)</Typography>
            </Box>
            <Box sx={{ml:-10 ,mt:4}}>
                <WorksapceImages/>
            </Box>
        </div>
    )
}
