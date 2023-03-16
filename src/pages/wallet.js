import React from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/svg/TableBottom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import CreditCardInput from 'react-credit-card-input';
import {Button} from "@mui/material";


export default function BookingOverview() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleCardNumberChange = (event) => {
        // console.log(event.target.value);
    }
    const handleCardExpiryChange = (event) => {
        // console.log(event.target.value);
    }
    const handleCardCVCChange = (event) => {
        // console.log(event.target.value);
    }


    return (
        <>
            <CustomHeader />
            <WebTabs selectedTab={5} />
            <Grid
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    mt: 5,
                }}
                container
            >
                <Grid
                    item
                    xs={12}
                    lg={4}
                    md={12}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            width: 50,
                        }}
                    >
                        <FormControl
                            sx={{ justifyContent: "flex-start", width: "50px" }}
                            variant="standard"
                        >
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography sx={{ width: '300px', fontWeight: 'bold', textAlign: 'end', mt: 3 }} variant='h6'>Wallet</Typography>

                        <Card sx={{ minWidth: 350, mt: "20px" }}>
                            <CardContent sx={{ display: "flex", flexDirection: 'column', justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="subtitle2" sx={{ fontSize: 14, alignSelf: "flex-end", mb: 2 }}>Your Card</Typography>
                                <CreditCardInput
                                    cardNumberInputProps={{ onChange: handleCardNumberChange() }}
                                    cardExpiryInputProps={{ onChange: handleCardExpiryChange() }}
                                    cardCVCInputProps={{ onChange: handleCardCVCChange() }}
                                    fieldClassName="input"
                                />
                                <TextField sx={{ alignSelf: 'start', mt: 4, width: '80%' }} id="outlined-basic" label="Full Name on Card" variant="outlined" />
                            </CardContent>
                        </Card>
                        <Button sx={{width:150, mt:5, borderRadius:20, bgcolor:'#005451'}} variant="contained">+ Add card</Button>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Divider sx={{mt:15,alignSelf:'center'}} className="divider" orientation="horizontal" flexItem style={{background:'black', width: '50%' }} />
                    <Box sx={{width:'50%', display:'flex', justifyContent:'space-between', mt:3}}>
                        <img width={40} src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"/>
                        <Typography>****2344</Typography>
                        <Typography sx={{opacity:'0.4'}}>(default)</Typography>
                    </Box>
                    <Box sx={{width:'50%', display:'flex', justifyContent:'flex-start', mt:5}}>
                        <img width={50} src="https://1000logos.net/wp-content/uploads/2017/03/MasterCard-Logo-1990.png"/>
                        <Typography sx={{ml:5}}>****6432</Typography>
                    </Box>
                    <Divider sx={{mt:3,alignSelf:'center'}} className="divider" orientation="horizontal" flexItem style={{background:'black', width: '50%' }} />
                    <Box sx={{width:'50%', display:'flex', justifyContent:'flex-start', mt:5}}>
                        <img width={70} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"/>
                    </Box>

                    



                </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ display: "flex", marginTop: 10 }}>
                <Grid
                    sx={{ display: "flex", marginTop: 8, justifyContent: "center" }}
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                >
                    <MenuSection />
                </Grid>
                <Grid
                    sx={{ display: "flex", justifyContent: "center" }}
                    item
                    xs={12}
                    sm={12}
                    md={7}
                    lg={8}
                >
                    <TableBottom />
                </Grid>
            </Grid>
        </>
    );
}
