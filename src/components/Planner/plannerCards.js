import React, {useState} from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Rating from '@mui/material/Rating';


export default function PlannerCards() {
    
    const [values, setValues] = useState([]);
    
    const handleRatingChange = (index, newValue) => {
        const newValues = [...values];
        newValues[index] = newValue;
        setValues(newValues);
    }
    return (
        <Grid container sx={{ display: "flex", flexDirection:'column' ,justifyContent: "center", alignItems: "center" }}>
            <Typography variant='h5'>Scheduled Booking</Typography>
            {[1, 2].map(() => {
                return <Card sx={{ minWidth: 375, minHeight: 100, borderRadius: 5, mt: 3 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16, fontWeight: 600, textAlign: 'left', marginTop: 1 }} color="text.secondary">
                            Name of Workspace
                        </Typography>
                        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: 16, fontWeight: 600, textAlign: 'left', marginTop: 1 }} color="text.secondary">
                                Date:
                            </Typography>
                            <ChevronRightIcon sx={{ mt: 1, cursor: 'pointer' }} />
                        </Grid>
                        <Typography sx={{ fontSize: 16, fontWeight: 600, textAlign: 'left', marginTop: 1 }} color="text.secondary">
                            Time:
                        </Typography>
                    </CardContent>
                </Card>
            })}

            <Typography variant='h5' sx={{ mt: 3 }}>Complete Booking</Typography>
            {[1, 2].map((index) => {
                return <>
                    <Card sx={{ minWidth: 375, minHeight: 100, borderRadius: 5, mt: 3 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16, fontWeight: 600, textAlign: 'left', marginTop: 1 }} color="text.secondary">
                                Name of Workspace
                            </Typography>
                            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: 16, fontWeight: 600, textAlign: 'left', marginTop: 1 }} color="text.secondary">
                                    Date:
                                </Typography>
                                <ChevronRightIcon sx={{ mt: 1, cursor: 'pointer' }} />
                            </Grid>
                            <Typography sx={{ fontSize: 16, fontWeight: 600, textAlign: 'left', marginTop: 1 }} color="text.secondary">
                                Time:
                            </Typography>
                        </CardContent>
                    </Card>
                    <Grid sx={{mt:1, display: 'flex', justifyContent:'flex-start' }}>
                        <Typography sx={{mr:1}}>Rate Experience:</Typography>
                        <Rating
                            name={`simple-controlled-${index}`}
                            value={values[index]}
                            onChange={(event, newValue) => {
                                handleRatingChange(index, newValue);
                            }}
                        />
                    </Grid>
                </>
            })}
        </Grid>
    )
}
