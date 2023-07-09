import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography, Rating } from "@mui/material";
import { useAuthState } from "../../context/auth.context";
import { api } from "src/utils/api";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";

export default function WorkFromIndoorImage() {
  const router = useRouter();
  const [indoorWorkspace, setIndoorWorkSpace] = useState([]);
  const [inComingPage, setInComingPage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .getWorkSpace({ query: `?workspaceType=indoor&page=${inComingPage}` })
      .then((res) => {
        // console.log("indoor>>>", res.data);
        // console.log("jjj", res.data);
        setIndoorWorkSpace(res);
        setPage(inComingPage);
      })
      .catch((err) => {
        // console.log("Error WorkSpaceList:", err);
      });
  }, [inComingPage]);

  const handleChangePage = (event, value) => {
    setInComingPage(value);
  };

  useEffect(() => { }, []);

  const hanldeRating = (item) => {
    // console.log('item',item.rating)
    const sum = item?.rating?.map((rating) => rating.rating.$numberDecimal).reduce((a, b) => a + b, 0);
    const average = sum / item?.rating?.length;
    return <Rating value={average} name="simple-controlled" readOnly />;
  };

  return (
    <>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        container
        spacing={4}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
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

      <Grid
        sx={{ marginY: 2, justifyContent:"space-between" }}
        container
        spacing={4}
      >
        {indoorWorkspace.data?.map((item) => (
          <div style={{ margin: 10, width:"35%" }}>
            <div
              onClick={() => {
                router.push(`./workspaceDetail?wd=${item._id}`);
              }}
              style={{
                cursor: "pointer",
                height: 150,
                width: "280px",
                borderRadius: 10,
                backgroundColor: "#000",
                position: "relative", // Add this line to make the parent container a positioning context
              }}
            >
              <img
                src={
                  item.image
                    ? item.image
                    : "https://wallpaperaccess.com/full/38119.jpg"
                }
                alt="Workspace Image"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    height: 20,
                    width: "15%",
                    borderRadius: 10,
                    marginBottom: 7,
                    marginLeft: 7,
                    backgroundColor: "#fff",
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                    lineHeight: 2,
                  }}
                >
                  {parseInt(item.cleaningFee) +
                    parseInt(item.maintenancesFee) +
                    parseInt(item.otherFeeAmount) * parseInt(item.perPerson)}
                </div>
              </div>
            </div>
            <Typography sx={{ marginTop: 1 }}>{item.name}</Typography>
            {hanldeRating(item)}
          </div>
        ))}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          page={page}
          count={Math.ceil(indoorWorkspace.total / indoorWorkspace.limit)}
          color="primary"
          onChange={handleChangePage}
        />
      </div>
    </>
  );
}
