import React from "react";
import Admin from "../components/Admin/admin";
import { Grid, Typography } from "@mui/material";
import CustomHeader from "../component/CustomHeader/index";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Divider } from "@mui/material";
import { Card } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import LoopIcon from '@mui/icons-material/Loop';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Radio from '@mui/material/Radio';



export default function Promotions() {
    const countries = [
        { name: "USA", visitors: 100 },
        { name: "Spain", visitors: 50 },
        { name: "Germany", visitors: 75 },
        { name: "Russia", visitors: 90 },
    ];

    const [selectedValue, setSelectedValue] = React.useState('Direct');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <CustomHeader />
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={3}>
                    <Admin selectedTab={4} />
                </Grid>
                <Grid sx={{ mt: 6 }} item xs={12} sm={12} md={6} lg={9}>
                    <Grid
                        sx={{ mr: 6, display: "flex", justifyContent: "space-between" }}
                    >
                        <Typography variant="h6">Visitors Online</Typography>
                        <HelpOutlineIcon />
                    </Grid>
                    <Divider sx={{ width: "96%", mb: 2 }} />
                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid
                            item xs={12} sm={12} md={6} lg={9}
                            sx={{
                                mr: 6,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Card sx={{ boxShadow: "5px 5px 9px rgba(0, 0, 0, 0.2)", bgcolor: '#FFF', height: 350, borderRadius: 6 }} variant="outlined">
                                <Grid sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
                                    Map Here
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid
                            item xs={12} sm={12} md={6} lg={3}
                            sx={{
                                mr: 6,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Card sx={{ boxShadow: "5px 5px 9px rgba(0, 0, 0, 0.2)", bgcolor: '#FFF', height: 350, overflowY: 'auto', borderRadius: 6 }} variant="outlined">
                                <Typography sx={{ mt: 1, ml: 2, fontWeight: 'bold' }} variant="h4">37</Typography>
                                <Typography sx={{ opacity: 0.4, ml: 2, fontWeight: 'bold' }} variant="caption">Visitors Online</Typography>
                                {countries.map((item, index) => (
                                    <div>
                                        <Grid><Divider sx={{ mt: 1, mb: 3 }} /></Grid>
                                        <Grid sx={{ display: 'flex', justifyContent: 'space-between', ml: 1, mr: 1 }}>
                                            <Typography sx={{ opacity: 0.4, ml: 2, fontWeight: 'bold' }} variant="subtitle1">{item.name}</Typography>
                                            <Typography sx={{ opacity: 0.4, ml: 2, fontWeight: 'bold' }} variant="subtitle1">{item.visitors}</Typography>
                                        </Grid>
                                    </div>
                                ))}
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <Grid
                            item xs={12} sm={12} md={6} lg={9}
                            sx={{
                                mt: 2,
                                mr: 6,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Card sx={{ boxShadow: "5px 5px 9px rgba(0, 0, 0, 0.2)", bgcolor: '#FFF', borderRadius: 6 }} variant="outlined">
                                <Grid
                                    sx={{ ml: 2, mr: 3, mt: 1, display: "flex", justifyContent: "space-between" }}
                                >
                                    <Typography variant="h6">Trafic Statistics</Typography>
                                    <HelpOutlineIcon />
                                </Grid>
                                <Divider sx={{ width: "100%", mb: 2 }} />

                                <Grid sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <Card sx={{ boxShadow: "5px 5px 9px rgba(0, 0, 0, 0.2)", bgcolor: '#eaf2ff', borderRadius: 6, paddingX: 5, mb: 4 }} variant="outlined">
                                        <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 2 }}>
                                            <GroupIcon sx={{ fontSize: 42 }} />
                                            <Typography sx={{ ml: 2, mt: 1 }} variant="h4">287</Typography>
                                        </Grid>
                                        <Typography variant="caption">New Visitors</Typography>
                                    </Card>
                                    <Card sx={{ boxShadow: "5px 5px 9px rgba(0, 0, 0, 0.2)", bgcolor: '#eaf2ff', borderRadius: 6, paddingX: 5, mb: 4 }} variant="outlined">
                                        <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 2 }}>
                                            <LoopIcon sx={{ fontSize: 42 }} />
                                            <Typography sx={{ ml: 2, mt: 1 }} variant="h4">436</Typography>
                                        </Grid>
                                        <Typography variant="caption">Returned Visitors</Typography>
                                    </Card>
                                    <Card sx={{ boxShadow: "5px 5px 9px rgba(0, 0, 0, 0.2)", bgcolor: '#eaf2ff', borderRadius: 6, paddingX: 5, mb: 4 }} variant="outlined">
                                        <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 2 }}>
                                            <AssessmentIcon sx={{ fontSize: 42 }} />
                                            <Typography sx={{ ml: 2, mt: 1 }} variant="h4">14.5%</Typography>
                                        </Grid>
                                        <Typography variant="caption">Bounce Rate</Typography>
                                    </Card>
                                </Grid>
                            </Card>
                        </Grid>



                        <Grid
                            item xs={12} sm={12} md={6} lg={3}
                            sx={{
                                mt: 2,
                                mr: 6,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Card sx={{ boxShadow: "5px 5px 9px rgba(0, 0, 0, 0.2)", bgcolor: '#FFF', overflowY: 'auto', borderRadius: 6 }} variant="outlined">
                                <Grid
                                    sx={{ ml: 2, mr: 3, mt: 1, display: "flex", justifyContent: "space-between" }}
                                >
                                    <Typography variant="h6">Trafic Sources</Typography>
                                    <HelpOutlineIcon />
                                </Grid>
                                <Divider sx={{ width: "100%", mb: 2 }} />
                                <Grid sx={{ ml: 2, mr: 3, mt: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <Grid sx={{display: "flex", justifyContent: "space-between"}}>
                                        <Grid sx={{ display: 'flex' }}>
                                            <Radio
                                                checked={selectedValue === 'Direct'}
                                                onChange={handleChange}
                                                value="Direct"
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'A' }}
                                            />
                                            <Typography sx={{ mt: '5px' }} variant="h6">Direct</Typography>
                                        </Grid>
                                        <Typography sx={{ mt: '5px' }} variant="h6">25</Typography>
                                    </Grid>

                                    <Grid sx={{display: "flex", justifyContent: "space-between"}}>
                                        <Grid sx={{ display: 'flex' }}>
                                            <Radio
                                                checked={selectedValue === 'Organic'}
                                                onChange={handleChange}
                                                value="Organic"
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'B' }}
                                            />
                                            <Typography sx={{ mt: '5px' }} variant="h6">Organic Search</Typography>
                                        </Grid>
                                        <Typography sx={{ mt: '5px' }} variant="h6">25</Typography>
                                    </Grid>

                                    <Grid sx={{display: "flex", justifyContent: "space-between"}}>
                                        <Grid sx={{ display: 'flex' }}>
                                            <Radio
                                                checked={selectedValue === 'Social'}
                                                onChange={handleChange}
                                                value="Social"
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'C' }}
                                            />
                                            <Typography sx={{ mt: '5px' }} variant="h6">Social</Typography>
                                        </Grid>
                                        <Typography sx={{ mt: '5px' }} variant="h6">25</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    );
}
