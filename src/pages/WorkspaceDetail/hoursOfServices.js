import React from 'react'
import { Box, Typography, Rating, Button } from '@mui/material'
import Calendar from '../../components/calendar/calendar';

export default function HoursOfServices() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Typography variant="h5">Hours of Services</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Typography variant="subtitle1">Time Frame of Services 8AM to 5PM EST</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, width: '100%', maxWidth: 500 }}>
                <Calendar />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, width: '100%', maxWidth: 500 }}>
                <Button sx={{ width: '50%', backgroundColor:'#005451' }} variant="contained">Book Workspace</Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <Typography sx={{textAlign:'center'}} variant="h5">Chat &/or Call with Workspace Host Before Booking!</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', width: '100%', maxWidth: 500 }}>
                    <Button sx={{color:'#000', mr: 1, mt: 2, width: '30%', borderRadius:3, borderColor: '#000', borderWidth:'2px'}} variant="outlined">CHAT</Button>
                    <Button sx={{color:'#000', ml: 1, mt: 2, width: '30%', borderRadius:3, borderColor: '#000', borderWidth:'2px' }} variant="outlined">CALL</Button>
                </Box>
            </Box>
        </Box>
    )
}



