import React, { useState, useEffect } from "react";
import { Typography, Rating } from "@mui/material";
import { api } from "src/utils/api";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import { CustomHeader, Filter, WebTabs } from "../../component";
import * as Icons from "@mui/icons-material";
export default function WorkFromIndoorImage() {
  const [showFilter, setShowFilter] = useState(false);
  const [workSpaceFilter, setWorkSpaceFilter] = useState({});

  const [inComingPage, setInComingPage] = useState(1);
  const [page, setPage] = useState(1);
  const [paginationcount, setPaginationcount] = useState({});
  console.log("paginationcount", paginationcount);
  console.log("pagesdddd", page);
  const router = useRouter();
  const [updatedworkSpaces, setupdatedWorkSpaces] = useState([]);
  console.log("gngu", updatedworkSpaces);
  React.useEffect(() => {
    const { checkin, checkout, people } = router.query;
    const checkinDate = checkin ? new Date(checkin) : null;
    const checkoutDate = checkout ? new Date(checkout) : null;

    const formatTime = (date) => {
      if (!date) return null;
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    };
    const from = formatTime(checkinDate);
    const formattedFrom = from?.replace(/\s+/g, "");
    const to = formatTime(checkoutDate);
    const formattedto = to?.replace(/\s+/g, "");
    const totalPerson = people;
    console.log("from", formattedFrom);
    console.log("to", formattedto);
    console.log("totalPerson", people);
    let myQuery = "";
    const conditions = [];

    if (formattedFrom) {
      conditions.push(`from[$gte]=${formattedFrom}`);
    }

    if (formattedto) {
      conditions.push(`to[$lte]=${formattedto}`);
    }

    if (totalPerson) {
      conditions.push(`totalPerson[$gte]=${totalPerson}`);
    }
    if (
      workSpaceFilter.workspaceType &&
      workSpaceFilter.workspaceType === "indoor"
    ) {
      conditions.push(`workspaceType=${workSpaceFilter.workspaceType}`);
    }

    if (
      workSpaceFilter.workspaceType &&
      workSpaceFilter.workspaceType === "outdoor"
    ) {
      conditions.push(`workspaceType=${workSpaceFilter.workspaceType}`);
    }

    if (workSpaceFilter.maxFee) {
      conditions.push(`perPerson[$lte]=${workSpaceFilter.maxFee}`);
    }

    if (workSpaceFilter.minFee) {
      conditions.push(`perPerson[$gte]=${workSpaceFilter.minFee}`);
    }

    if (workSpaceFilter.amenities) {
      conditions.push(`amenities[$all]=${workSpaceFilter.amenities}`);
    }

    if (inComingPage) {
      conditions.push(`page=${inComingPage}`);
    }

    const queryString = conditions.length > 0 ? `?${conditions.join("&")}` : "";
    myQuery = `${queryString}`;
    console.log("query", myQuery);

    api
      .getWorkSpace({ query: myQuery })
      .then((res) => {
        console.log("res3333", res);
        setPaginationcount(res);
        setupdatedWorkSpaces(res.data);
        setPage(inComingPage);
        console.log("suceesgoonbute:");
      })
      .catch((err) => {
        console.log("Error WorkSpaceList:", err);
      });
  }, [workSpaceFilter, inComingPage]);

  const handleChangePage = (event, value) => {
    setInComingPage(value);
  };

  const hanldeRating = (item) => {
    const sum = item?.rating
      ?.map((rating) => rating.rating.$numberDecimal)
      .reduce((a, b) => a + b, 0);
    const average = sum / item?.rating?.length;
    return <Rating value={average} name="simple-controlled" readOnly />;
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "130px",
        }}
      >
        <div
          onClick={() => {
            router.push("./mapView");
          }}
          style={{ display: "flex", flexDirection: "column", marginRight: 7 }}
        >
          <Icons.MapOutlined
            style={{
              color: "#000",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
          <Typography
            sx={{ cursor: "pointer", alignSelf: "center" }}
            variant="caption"
          >
            Map
          </Typography>
        </div>
        <div
          onClick={() => {
            setShowFilter(true);
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Icons.FilterAlt
            style={{
              color: "#000",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
          <Typography
            sx={{ cursor: "pointer", alignSelf: "center" }}
            variant="caption"
          >
            filter
          </Typography>
        </div>
      </div>
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
        <Typography variant="h5">Workspaces</Typography>
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
        {updatedworkSpaces.map((item) => (
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
                margin: "0 auto",
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
            <Typography
              style={{ width: "280px", margin: "0 auto" }}
              sx={{ marginTop: 1 }}
            >
              {item.name}
            </Typography>
            <div style={{ width: "280px", margin: "0 auto" }}>
              {hanldeRating(item)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          page={page}
          count={Math.ceil(paginationcount.total / paginationcount.limit)}
          color="primary"
          onChange={handleChangePage}
        />
      </div>
      <Filter
        open={showFilter}
        workSpaceFilterVal={workSpaceFilter}
        updatedworkSpaces={updatedworkSpaces}
        setupdatedWorkSpaces={setupdatedWorkSpaces}
        onClose={(e) => {
          console.log("e", e);
          setWorkSpaceFilter(e);
          setShowFilter(false);
        }}
      />
    </div>
  );
}
