import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import MobileStoreButton from 'react-mobile-store-button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

export default function MenuSection() {
    return (
        <Box sx={{ marginLeft: 20, marginBottom: 10 }} width='250px'>
            <Card>
                <CardContent>

                    <Typography variant='h6'>
                        Read, Discover, Explore
                    </Typography>

                    <Link href='http://'>
                        <Typography sx={{ marginTop: 1 }} variant='subtitle1'>
                            About Us
                        </Typography>
                    </Link>
                    <Link href='http://'>
                        <Typography sx={{ marginTop: 1 }} variant='subtitle1'>
                            Term & Conditions
                        </Typography>
                    </Link>
                    <Link href='http://'>
                        <Typography sx={{ marginTop: 1 }} variant='subtitle1'>
                            Privacy policy
                        </Typography>
                    </Link>
                    <Link href='http://'>
                        <Typography sx={{ marginTop: 1 }} variant='subtitle1'>
                            FAQ
                        </Typography>
                    </Link>
                    <Link href='http://'>
                        <Typography sx={{ marginTop: 1 }} variant='subtitle1'>
                            Become a workspace Host
                        </Typography>
                    </Link>
                </CardContent>
                <div>
                    <MobileStoreButton
                        width='150px'
                        store="android"
                        //   url={iOSUrl}
                        linkProps={{ title: 'iOS Store Button' }}
                    />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <MobileStoreButton
                        width='150px'
                        store="ios"
                        //   url={iOSUrl}
                        linkProps={{ title: 'iOS Store Button' }}
                    />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <InstagramIcon />
                    <TwitterIcon sx={{ marginLeft: 1 }} />
                    <FacebookOutlinedIcon sx={{ marginLeft: 1 }} />
                </div>

                <div style={{ marginLeft: '10px' }}>
                    <Typography sx={{ marginTop: 1 }} variant='subtitle1'>
                        <CopyrightOutlinedIcon sx={{marginTop:1}} fontSize='small' />
                        <Typography sx={{ marginLeft:1}} variant='subtitlesubtitle1'>
                            Homework Workspace LLC
                        </Typography>
                    </Typography>
                </div>

            </Card>
        </Box>
    )
}
