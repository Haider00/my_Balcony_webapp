import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';

export default function TableRow() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <tr style={{ paddingLeft: '10px' }}>
                <td style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" />
                    <Typography sx={{ marginLeft: 1 }} variant="subtitle2">Haider Ijaz</Typography>
                </td>
                <td style={{ paddingLeft: '10px' }}>
                    <Typography variant="subtitle2">USA</Typography>
                </td>
                <td style={{ paddingLeft: '10px' }}>
                    <Typography variant="subtitle2">80% / 20%</Typography>
                </td>
                <td style={{ display: 'flex' }}>
                    <AppleIcon />
                    <AdbIcon />
                    <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>firefox</title>
                        <rect width="24" height="24" fill="none" />
                        <path d="M21,11.7a6.75,6.75,0,0,0-.2-1.4,8.91,8.91,0,0,0-2.3-4.4,4.5,4.5,0,0,0-1-.9,8.76,8.76,0,0,0-3.9-1.8,9,9,0,0,0-8,2.6V5.7c-.1-.2-.1-.2-.2-.2h0c-.1-.2-.1-.3-.2-.4h0c0-.2-.1-.4-.1-.6-.3.1-.3.4-.4.6h0a1.23,1.23,0,0,0-.4.8h0C4.2,6.1,4,7,4.2,7.1h.1v.3c-.2.2-.3.3-.3.4a6.12,6.12,0,0,0-.7,1.7v.4h0V9.8c-.2.2-.2.5-.3.7.1,0,.1-.1.2-.1A9,9,0,0,0,5,17.7a9.2,9.2,0,0,0,10.1,2.8A9.1,9.1,0,0,0,21,12v-.3M13.5,4.1a8.43,8.43,0,0,1,4,2,1.44,1.44,0,0,1,.2.3c-.3-.3-1-.8-1.4-.6a15.63,15.63,0,0,0,1.4,1.9,10.26,10.26,0,0,0,.4,1.4h0c0,.2-.7,2.8-.7,3.2,0,.1-.9,1.9-.8,1.9a1.34,1.34,0,0,1-.7.8c-.1,0-.7.2-1.4.4a5.84,5.84,0,0,1-1.8.2,1.8,1.8,0,0,1-1-.2,10.91,10.91,0,0,0-1.1-.6,1.79,1.79,0,0,1-.7-.5H11c.6-.1,3.2-1,3.1-1.4s-.5-.5-.7-.7a5.12,5.12,0,0,0-2,.3A10.7,10.7,0,0,1,9,11.6c0-.1-.1-.7-.1-.8s.3-.4.3-.4a11,11,0,0,0,1-1.1.85.85,0,0,0,.5-.3c-.1,0,.1-.1.4-.3h0c.3-.2.5-.2.5-.5,0,0,.5-.9-.1-.8,0,0-.9-.1-1.2-.1-.3.2-.4.1-.7,0,0,0-.2-.2-.2-.3s.8-1.7,1.1-1.8c-.2-.4-1.2-.1-1.4.2a5.35,5.35,0,0,1-1.2.7h0c0-.1-.5-.2-1-.2A8.21,8.21,0,0,1,13.5,4.1Z" />
                    </svg>
                    <svg fill="#000000" width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>chrome</title>
                        <path d="M21.25 11.031h-10.063c-0.969 0-1.844 0.313-2.625 0.781-1.344 0.844-2.25 2.344-2.313 4.031l-3.875-6.719c2.063-2.625 5.219-4.344 8.813-4.344 4.406 0 8.25 2.563 10.063 6.25zM1.875 9.75l5 8.688c0.031 0.031 0.031 0.063 0.063 0.094 0.438 0.781 1.125 1.406 1.938 1.844 0.719 0.344 1.469 0.594 2.313 0.594s1.625-0.25 2.344-0.594l-3.906 6.719c-5.438-0.781-9.625-5.438-9.625-11.094 0-2.313 0.688-4.469 1.875-6.25zM13.813 11.813h7.781c0.5 1.281 0.813 2.719 0.813 4.188 0 6.188-5.031 11.188-11.219 11.188-0.25 0-0.469 0-0.719-0.031l5-8.625c0.031-0.031 0.031-0.063 0.063-0.094 0.406-0.75 0.625-1.563 0.625-2.438v-0.156c-0.063-1.688-1-3.188-2.344-4.031zM7.469 16c0-2.094 1.625-3.75 3.719-3.75s3.75 1.656 3.75 3.75-1.656 3.75-3.75 3.75-3.719-1.656-3.719-3.75z"></path>
                    </svg>
                </td>

                <td style={{ paddingLeft: '10px' }}>
                    <Typography variant="subtitle2">Host / User</Typography>
                </td>

                <td style={{ paddingLeft: '10px' }}><Switch
                    // checked={checked}
                    // onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                /></td>
            </tr>
        </>
    )
}
