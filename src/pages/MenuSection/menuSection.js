import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import MobileStoreButton from 'react-mobile-store-button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useTheme } from '@mui/material/styles';

export default function MenuSection() {
    const theme = useTheme();
    const isAndroidView = theme.breakpoints.down('sm');

    const handleGetOnGooglePlayClick =  () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.instagram.lite&pli=1';
    }
    const handleGetOnAppStoreClick = () => {
        window.location.href = 'https://apps.apple.com/app/id389801252';
      };
    return (
        <Box sx={{ marginBottom: 2, display: 'flex', flexDirection: isAndroidView ? 'column' : 'row' }}>
            <Box sx={{ width: isAndroidView ? '100%' : '250px' }}>
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
                    <Box sx={{ display: 'flex', flexDirection: isAndroidView ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'flex-start', p: 1 }}>
                        <MobileStoreButton
                            onClick={handleGetOnGooglePlayClick}
                            width='150px'
                            store="android"
                            linkProps={{ title: 'Android Store Button' }}
                        />
                        <MobileStoreButton
                            onClick={handleGetOnAppStoreClick}
                            width='150px'
                            store="ios"
                            linkProps={{ title: 'iOS Store Button' }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <InstagramIcon sx={{ ml: 1 }} />
                            <TwitterIcon sx={{ ml: 1 }} />
                            <FacebookOutlinedIcon sx={{ ml: 1 }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                        <Typography sx={{ fontSize: 12 }}>
                            Homework Workspace LLC © {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}
