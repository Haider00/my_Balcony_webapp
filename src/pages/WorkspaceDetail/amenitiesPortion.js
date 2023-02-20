import React from 'react'
import { Box, Typography, Rating } from '@mui/material'
import { Divider } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import Amenities from '../WorkSpace/Amenities';


export default function AmenitiesPortion() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h5">Amenities</Typography>
            </Box>
            <Amenities/>
            <Divider sx={{ display: 'flex', justifyContent: 'flex-end'}} variant="middle" />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginRight: 5 }}>
                <Typography variant="h6">$56.50 per person</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginRight: 5, marginTop: 3 }}>
                <Typography variant="button">Shared Workspace</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginRight: 5, }}>
                <GroupIcon sx={{ marginRight: 3, marginTop: -2 }} fontSize="large" />
                <Typography variant="caption">This space is shared with other people such as </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginRight: 5, }}>
                <Typography variant="caption">freelancers, starters, students, etc</Typography>
            </Box>
        </div>
    )
}
