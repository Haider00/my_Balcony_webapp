import React, { useState } from 'react'
import { FormControl, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { Grid } from '@mui/material';

export default function DropDown() {

    const [selectedOption, setSelectedOption] = useState("About Us");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const GridDropDown = styled(Grid)({
        "@media (max-width: 900px)": {
            display: "flex",
        },
    })
    return (
        <>
            <GridDropDown container sx={{ display: "flex", justifyContent: "center", width: '100%', display: "none" }}>
                <FormControl sx={{ width: '90%', marginTop: '10px', boxShadow: 6, borderRadius: '20px' }}>

                    <Select sx={{borderRadius:'20px'}}
                        value={selectedOption}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={'About Us'}>About Us</MenuItem>
                        <MenuItem value={'WorkSpace Amenities'}>WorkSpace Amenities</MenuItem>
                        <MenuItem value={'File Manager'}>File Manager</MenuItem>
                        <MenuItem value={'Trafic Analyzer'}>Trafic Analyzer</MenuItem>
                        <MenuItem value={'User Manager'}>User Manager</MenuItem>
                        <MenuItem value={'Calendar'}>Calendar</MenuItem>
                        <MenuItem value={'Messages'}>Messages</MenuItem>
                        <MenuItem value={'Payments'}>Payments</MenuItem>
                        <MenuItem value={'Promotions'}>Promotions</MenuItem>
                        <MenuItem sx={{color:'red', fontWeight:'bold'}} value={90}>Logout</MenuItem>
                    </Select>
                </FormControl>
            </GridDropDown>
        </>
    )
}
