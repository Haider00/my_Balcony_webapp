import React from 'react';
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from '@mui/material';
import MenuSection from './MenuSection/menuSection';
import TableBottom from 'src/assets/svg/TableBottom';

export default function BookingOverview() {
    return (
        <>
            <CustomHeader />
            <WebTabs selectedTab={5} />
            <Grid sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        mt:5
                    }} container>
                <Grid
                    item
                    xs={12}
                    lg={4}
                    md={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Profile</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Payout</Typography>
                    </div>
                </Grid>
                
                <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Profile</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Wallet</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Promotion</Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6'sx={{cursor:'pointer'}}>Profile</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Wallet</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Promotion</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, textAlign:'center' }}>
                    <Typography variant='h6'>Become a workspace host</Typography>
                    </div>
                </Grid>
            </Grid>

            <Grid sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        mt:5
                    }} container>
                <Grid
                    item
                    xs={12}
                    lg={4}
                    md={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Contact<br/> Support</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Switch to <br/> user access</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>logout</Typography>
                    </div>
                </Grid>
                
                <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Contact<br/> Support</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Switch to <br/> host access</Typography>
                    </div>
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>logout</Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{width:'40%' ,padding:20, borderBottom: '1px solid black', textAlign:'center' }}>
                    <Typography variant='h6' sx={{cursor:'pointer'}}>Logout</Typography>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ display: 'flex', marginTop: 10 }}>
                <Grid sx={{ display: 'flex', marginTop: 8, justifyContent: 'center' }} item xs={12} sm={12} md={3} lg={3}>
                    <MenuSection />
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={12} md={7} lg={8}>
                    <TableBottom />
                </Grid>
            </Grid>
        </>
    )
}