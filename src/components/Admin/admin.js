import { Grid } from '@mui/material';
import React from 'react'
import CustomHeader from "../../component/CustomHeader/index";
import { Card, CardContent, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Divider } from "@mui/material";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import PieChartIcon from '@mui/icons-material/PieChart';
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import styles from './admin.module.css';

export default function Admin() {
    return (
        <>
            <CustomHeader />
            <Grid sx={{marginTop:4}} display="flex" justifyContent='center'>
                <Card sx={{ width: 350 }}>
                    <CardContent>
                        <Typography sx={{textAlign:'center', mb: 2 }} variant='h6'>
                            Admin
                        </Typography>
                        <Divider sx={{ width: '100%', mb:2 }} />

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <AcUnitIcon />
                            <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                About Us
                            </Typography>
                        </Grid>

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <EqualizerIcon />
                            <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                Workspace Amenities
                            </Typography>
                        </Grid>

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <SwitchAccountIcon />
                            <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                File Manager
                            </Typography>
                        </Grid>

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <PieChartIcon />
                            <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                Traffic Analyzer
                            </Typography>
                        </Grid>

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <GroupIcon />
                            <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                Users Manager
                            </Typography>
                        </Grid>

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <CalendarMonthIcon />
                            <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                Calender
                            </Typography>
                        </Grid>

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'space-between' }}>
                            <Grid sx={{ display: 'flex', justifyContent: '' }}>
                                <MessageRoundedIcon />
                                <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                    Messages
                                </Typography>
                            </Grid>
                            <span style={{ paddingTop: 2, backgroundColor: '#000', color: 'yellow', height: 30, width: 30, textAlign: 'center', borderRadius: '100%' }} sx={{ height: '20px', width: '40px', borderRadius: 50 }}>8</span>
                        </Grid>

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <AddCardRoundedIcon />
                            <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                Payments
                            </Typography>
                        </Grid>

                        <Grid className={`${styles.grid}`} sx={{padding: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <AirplaneTicketIcon />
                            <Typography sx={{ marginLeft: 1 }} variant='subtitle1'>
                                Promotions
                            </Typography>
                        </Grid>
                    </CardContent>

                </Card>
            </Grid>
        </>
    )
}
