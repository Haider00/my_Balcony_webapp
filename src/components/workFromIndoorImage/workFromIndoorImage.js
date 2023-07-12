import React, { useState, useEffect } from "react";
import { Typography, Rating } from "@mui/material";
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

  useEffect(() => {}, []);

  const hanldeRating = (item) => {
    // console.log('item',item.rating)
    const sum = item?.rating
      ?.map((rating) => rating.rating.$numberDecimal)
      .reduce((a, b) => a + b, 0);
    const average = sum / item?.rating?.length;
    return <Rating value={average} name="simple-controlled" readOnly />;
  };

  return (
    <div style={{ width: "100%", marginTop: 150 }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: 50,
        }}
      >
        <Typography variant="h5">Work from Indoor</Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {indoorWorkspace.data?.map((item) => (
          <div
            style={{
              height: 300,
              width: 325,
            }}
          >
            <div
              onClick={() => {
                router.push(`./workspaceDetail?wd=${item._id}`);
              }}
              style={{
                cursor: "pointer",
                height: 200,
                width: "280px",
                borderRadius: 10,
                backgroundColor: "#000",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                display: "flex",
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
                $
                {parseInt(item.cleaningFee) +
                  parseInt(item.maintenancesFee) +
                  parseInt(item.otherFeeAmount) * parseInt(item.perPerson)}
              </div>
            </div>
            <Typography sx={{ marginTop: 1 }}>{item.name}</Typography>
            {hanldeRating(item)}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          page={page}
          count={Math.ceil(indoorWorkspace.total / indoorWorkspace.limit)}
          color="primary"
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
}
