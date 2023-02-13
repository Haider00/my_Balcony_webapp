import React from 'react'
import MapIcon from '@mui/icons-material/Map';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, Typography, Rating, Button } from '@mui/material'
import { fontSize } from '@mui/system';


export default function RightIcons() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <MapIcon sx={{ fontSize:30}} />
                <FilterAltIcon sx={{marginLeft:2, fontSize:30}} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography fontSize={9} variant="caption">Map View</Typography>
                <Typography marginLeft={2} fontSize={9} variant="caption">Filter</Typography>
            </Box>
        </>
    )
}
