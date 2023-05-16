import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid, Typography, Button } from '@mui/material';
import Switch from '@mui/material/Switch';

export default function TableRow() {
    const [checked, setChecked] = useState(true);
    const [status, setStatus] = useState('proceed');

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'canceled':
                return 'red';
            case 'proceed':
                return 'green';
            case 'onHold':
                return 'yellow';
            default:
                return 'blue'; // Default color if status doesn't match any of the cases
        }
    };
    const divStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        marginRight: '5px',
        backgroundColor: getStatusColor(status), // Call a helper function to get the background color based on the status
    };

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
                onMouseLeave={handleMouseLeavebg} style={{ paddingLeft: '10px' ,backgroundColor: isHoveredbg ? '#faf2c0' : 'inherit' }}>
                <td style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                    <div style={divStyle} />
                    <Typography sx={{ marginLeft: 1 }} variant="subtitle2">
                        {status === 'canceled' ? 'Canceled' : status === 'proceed' ? 'Proceed' : 'On Hold'}
                    </Typography>
                </td>
                <td style={{ paddingLeft: '10px', marginTop: 10 }}>
                    <Typography variant="subtitle2">$5655</Typography>
                </td>
                <td style={{ paddingLeft: '10px', marginTop: 10 }}>
                    <Typography variant="subtitle2">20-10-23</Typography>
                </td>
                <td style={{ display: 'flex', marginTop: 10 }}>
                    <Typography variant="subtitle2">Payment via Master Card</Typography>
                </td>

                <td style={{ paddingLeft: '10px', marginTop: 10 }}>
                    <td style={{ paddingLeft: '10px', marginTop: 10 }}>
                        <Button
                            sx={{
                                mt: 1,
                                backgroundColor: isHovered ? 'black' : 'inherit',
                                color: isHovered ? 'yellow' : 'inherit',
                                '&:hover': {
                                    backgroundColor: 'black',
                                    color: 'yellow',
                                },
                            }}
                            variant="outlined"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >Details</Button>
                    </td>
                </td>
            </tr>
        </>
    )
}
