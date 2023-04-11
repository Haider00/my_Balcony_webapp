import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';


export default function PlannerNotes() {
    const [value, setValue] = useState(2);
    return (
        <Grid container sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <Typography variant='h5'>Date Notes</Typography>
            <Card sx={{ minWidth: 375, minHeight: 200, borderRadius: 5, mt: 3 }}>
                <CardContent sx={{wordWrap: 'break-word'}}>
                    <Typography sx={{ fontSize: 16, fontWeight: 600, textAlign: 'left', marginTop: 1 }} color="text.secondary">
                        Date:
                    </Typography>
                    <TextField sx={{mt:1}} id="standard-basic" placeholder='Start Typing here (100 Characters Limit)' variant="standard" fullWidth multiline rowsMax={2}  />
                </CardContent>
            </Card>
        </Grid>
    )
}
