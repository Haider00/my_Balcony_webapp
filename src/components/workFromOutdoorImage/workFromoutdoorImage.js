import React, { useState, useEffect } from 'react'
import Grid from "@mui/material/Grid";
import { Typography, Rating } from '@mui/material'
import { useAuthState } from "../../context/auth.context";
import { api } from 'src/utils/api';
import { Pagination } from '@mui/material';
import { useRouter } from "next/router";




export default function WorkFromOutdoorImage() {

    const router = useRouter();
    const [outdoorWorkspace, setOutdoorWorkSpace] = useState([]);
    const [inComingPage, setInComingPage] = useState(1);
    const [page, setPage] = useState(1);
    console.log('aaaaa', outdoorWorkspace)

    useEffect(() => {
        api
            .getWorkSpace({ query: `?workspaceType=outdoor&page=${inComingPage}` })
            .then((res) => {
                console.log("indoar>>>", res);
                console.warn("auth.accessToken...");
                console.log("jjj", res.data);
                setOutdoorWorkSpace(res);
            })
            .catch((err) => {
                console.warn("auth.accessToken...");
                console.log("Error WorkSpaceList:", err);
            });
    }, [inComingPage]);

    const handleChangePage = (event, value) => {
        setInComingPage(value);
    };

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
                    <Typography variant="h5">Work from Outdoor</Typography>
                </Grid>
            </Grid>

            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row' }} sx={{ marginY: 2, }} container spacing={4}>
                {outdoorWorkspace.data?.map((item) => (

                    <div style={{ flexDirection: 'column', margin: 10 }}>
                        <div
                            onClick={() => {
                                router.push(
                                    `./workspaceDetail?wd=${item._id}`
                                );
                            }}
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
                            }}>{parseInt(item.cleaningFee) + parseInt(item.maintenancesFee) + parseInt(item.maintenancesFee) + parseInt(item.otherFeeAmount) * parseInt(item.perPerson)}</div>
                        </div>

                        <Typography sx={{ marginTop: 1 }}>Name of workspace</Typography>
                        <Rating
                            defaultValue={2.5}
                            name="simple-controlled" />
                    </div>
                ))}
            </Grid>
            <Pagination
                page={page}
                count={Math.ceil(outdoorWorkspace.total / outdoorWorkspace.limit)}
                color="primary"
                onChange={handleChangePage}
            />
        </>
    )
}
