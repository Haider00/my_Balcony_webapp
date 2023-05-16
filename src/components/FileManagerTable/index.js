import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid, Typography, Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


export default function TableRow() {

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [selectedValue, setSelectedValue] = useState('');

    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredbg, setIsHoveredbg] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnterbg = () => {
        setIsHoveredbg(true);
    };

    const handleMouseLeavebg = () => {
        setIsHoveredbg(false);
    };
    return (
        <>
            <tr
                onMouseEnter={handleMouseEnterbg}
                onMouseLeave={handleMouseLeavebg} style={{ paddingLeft: '10px', backgroundColor: isHoveredbg ? '#eaf2ff' : 'inherit' }}>
                <td style={{ alignItems: 'center' }}>
                    <Typography variant="subtitle2">1325440</Typography>
                </td>
                <td style={{ paddingLeft: '10px', marginTop: 10 }}>
                    <Typography variant="subtitle2">Commercial, Office</Typography>
                </td>
                <td style={{ alignSelf: 'center', paddingLeft: '10px', marginTop: 10 }}>
                    <Typography variant="subtitle2">Commercial, Office</Typography>
                </td>
                <td style={{ alignItems: 'center', marginRight: 3 }}>
                    <FormControl style={{
                        width: '120px', height: '70px', borderColor:
                            selectedValue === 10 ? 'green' :
                                selectedValue === 20 ? 'yellow' :
                                    selectedValue === 30 ? 'red' :
                                        'inherit'
                    }}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedValue}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value={10} style={{ backgroundColor: selectedValue === 10 ? 'green' : 'inherit' }}>
                                Accept
                            </MenuItem>
                            <MenuItem value={20} style={{ backgroundColor: selectedValue === 20 ? 'yellow' : 'inherit' }}>
                                Hold
                            </MenuItem>
                            <MenuItem value={30} style={{ backgroundColor: selectedValue === 30 ? 'red' : 'inherit' }}>
                                Reject
                            </MenuItem>
                        </Select>
                    </FormControl>
                </td>
                <td style={{ alignItems: 'center', marginTop: 10 }}>
                    <Typography variant="subtitle2">Commercial, Office</Typography>
                </td>
                <td style={{ alignItems: 'center', marginTop: 10 }}>
                    <FilePresentIcon />
                </td>
                <td style={{ alignItems: 'center', marginTop: 10 }}>
                    <MoreHorizIcon />
                </td>
            </tr>
        </>
    )
}
