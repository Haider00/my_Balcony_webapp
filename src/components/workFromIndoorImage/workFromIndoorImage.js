import React from 'react'
import Grid from "@mui/material/Grid";
import { Typography, Rating } from '@mui/material'


export default function WorkFromIndoorImage() {

    return (
        <>
            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }} container spacing={4}>
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flex: 1,
                    }}
                    item
                    md={12}
                    lg={12}
                    xs={12}
                    sm={12}
                >
                    <Typography variant="h5">Work from Indoor</Typography>
                </Grid>
            </Grid>

            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row' }} sx={{ marginY: 2, }} container spacing={4}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
                    <div style={{ flexDirection: 'column', margin: 10 }}>
                        <div
                            style={{
                                height: 250,
                                width: "380px",
                                borderRadius: 10,
                                backgroundColor: "#000",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-end",
                            }}>
                            <div style={{
                                height: 20,
                                width: "15%",
                                borderRadius: 10,
                                marginBottom: 7,
                                marginLeft: 7,
                                backgroundColor: "#fff",
                                fontSize: 10,
                                fontWeight: 'bold',
                                textAlign: "center",
                                lineHeight: 2
                            }}>$56.50</div>
                        </div>

                        <Typography sx={{ marginTop: 1 }}>Bushwick Lofts</Typography>
                        <Rating
                            defaultValue={2.5}
                            name="simple-controlled" />
                    </div>
                ))}
            </Grid>
        </>
    )
}
