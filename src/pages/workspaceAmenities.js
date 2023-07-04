import React from 'react'
import Admin from '../components/Admin/admin'
import { Grid, Typography } from '@mui/material';
import CustomHeader from "../component/CustomHeader/index";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Divider } from "@mui/material/";
import SearchRounded from "@mui/icons-material/Search";
import WorkspaceAmenitiesTable from '@components/WorkspaceAmenitiesTable/index';
import { styled } from "@mui/system";
import AdminMobileDropDown from '../component/AdminMobileDropDown/index';

export default function UsersManager() {

    const StyledGrid = styled(Grid)({
        "@media (max-width: 900px)": {
            display: "none",
        },
    });

    return (
        <>
            <CustomHeader />
            <AdminMobileDropDown/>
            <Grid container sx={{mt:10, display: "flex", justifyContent: "center" }}>
                <StyledGrid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={3}>
                    <Admin selectedTab={2}/>
                </StyledGrid>
                <Grid sx={{ mt: 6 }} item xs={12} sm={12} md={6} lg={9}>
                    <Grid sx={{ mr: 6, display: 'flex', justifyContent: 'space-between' }}>

                        <div>
                            <Typography variant="h6">Workspace Amenities</Typography>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '5px' }}>
                            <div
                                style={{
                                    display: "flex",
                                    backgroundColor: "#edf3f5",
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 35,
                                    width: 35,
                                    marginRight: '20px',
                                    cursor: 'pointer'
                                }}>
                                <SearchRounded
                                    style={{
                                        fontSize: 20,
                                        color: "#000",
                                    }}
                                />
                            </div>
                            <HelpOutlineIcon sx={{ marginTop: '5px', cursor: 'pointer' }} />
                        </div>
                    </Grid>
                    <Divider sx={{ width: '96%', mb: 1, mb: 2 }} />
                    <Grid sx={{ mr: 6, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <table cellSpacing={0} style={{ textAlign: 'left' }}>
                            <thead style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                <tr style={{ backgroundColor: '#f7e860'}}>
                                    <th style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px' }}>ID</th>
                                    <th style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px' }}>Amenity Name</th>
                                    <th style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px' }}>File Format</th>
                                    <th style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px' }}>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5, 6].map(() => (
                                    <WorkspaceAmenitiesTable />
                                ))}
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
