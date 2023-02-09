import React from 'react'
import { Divider, Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { Box, Typography, Rating } from '@mui/material'
import { Card, CardContent } from '@mui/material'
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function EditPortion() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 20 }}>
                <Typography variant="h5">Edit</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: 2 }}>
                <Card sx={{ bgcolor: '#f2f7f6', width: '60%' }}>
                    <CardContent>

                        <Typography variant='h6'>
                            BushwickLofts
                        </Typography>

                        <Typography sx={{ marginTop: 1 }} variant='body2'>
                            Time Frame of services 8AM - 5PM EST
                        </Typography>


                        <Typography sx={{ marginTop: 1 }} variant='body2'>
                            Total Number of People 5
                        </Typography>

                        <Typography sx={{ marginTop: 1 }} variant='h5'>
                            Total $179.20
                        </Typography>

                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: 3 }}>
                <FormControlLabel control={<Checkbox />} fontSize='25px' label={<Typography sx={{fontWeight:'bold', color:'black    '}} variant="h5" color="textSecondary">CoWorking Workspace</Typography>} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
                <Typography variant="caption">Workspace would be shared by multiple </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
                <Typography variant="caption">People from different companies </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Typography variant="caption">Within the same date & time frame </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Typography variant="caption">-If not checked, than only one company &/or</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Typography variant="caption">individual can book the booked date/time</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop:4 }}>
                <Typography variant="h5">Chat &/or Text us for</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
                <Typography variant="h5">Assistant!</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 5 }}>
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
        </>
    )
}
