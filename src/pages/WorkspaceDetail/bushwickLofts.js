import React from 'react'
import { Box, Typography, Rating } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import { WorksapceImages } from "../WorkSpace/wb";
// import Amenities from './WorkSpace/Amenities';

export default function BushwickLofts() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: '20%' }}>
                <Typography variant="h5">Bushwick Lofts</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mr: '20%' }}>
                <ShareIcon />
                <Box sx={{ display: 'flex'}}>
                    <Rating
                        defaultValue={2.5}
                        name="simple-controlled"
                    />
                    <Typography variant="small">(151)</Typography>
                </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
                <WorksapceImages />
            </Box>
        </div>
    )
}


