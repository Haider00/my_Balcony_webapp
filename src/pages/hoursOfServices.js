import React from 'react'
import { Box, Typography, Rating, Button } from '@mui/material'
import Calendar from 'react-calendar'


export default function HoursOfServices() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h5">Hours of Services</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="small">Time Frame of Services 8AM to 5PM EST</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Calendar />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Button variant="contained">Book WorkSpace</Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Typography variant="h5">Chat &/or Call with</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h5">Workspace Host Before</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h5">Booking!</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 5 }}>
                <Button style={{
                    color: 'black',
                    borderRadius: 20,
                    borderColor:'black',
                    backgroundcolor: "#dehfuu",
                    padding: "5px 40px",
                    fontSize: "18px"
                }} variant="outlined">CHAT</Button>
                <Button
                    style={{
                        color: 'black',
                        borderRadius: 20,
                        borderColor:'black',
                        backgroundcolor: "#dehfuu",
                        padding: "5px 40px",
                        fontSize: "18px"
                    }} variant="outlined">CALL</Button>
            </Box>
        </div>
    )
}
