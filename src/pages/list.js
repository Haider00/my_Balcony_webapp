import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import { CustomHeader, Filter, ScrollCard } from "../component";
import { Pagination, Typography } from "@mui/material";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { api } from "../utils/api";
import * as Icons from "@mui/icons-material";
import { useRouter } from "next/router";

const center = {
  lat: 31.4504,
  lng: 73.135,
};
export default function Maplist() {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(false);
  const [workSpaceFilter, setWorkSpaceFilter] = useState({});

  const [map, setMap] = React.useState(null);
  const [workSpace, setWorkSpace] = useState([
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
    { name: "name of work space", perPerson: "20" },
  ]);

  useEffect(() => {
    let query = "";
    if (workSpaceFilter.amenities && workSpaceFilter.amenities.length > 0) {
      for (let index = 0; index < workSpaceFilter.amenities.length; index++) {
        const element = workSpaceFilter.amenities[index];
        if (index > 0 || query.length > 1) {
          query += `&amenities[$all]=${element}`;
        } else {
          query += `?amenities[$all]=${element}`;
        }
      }
    }
    if (workSpaceFilter.workspaceType) {
      query +=
        query.length > 0
          ? `&workspaceType=${workSpaceFilter.workspaceType}`
          : `?workspaceType=${workSpaceFilter.workspaceType}`;
    }
    if (workSpaceFilter.maxFee) {
    }
    if (workSpaceFilter.minFee) {
    }
    api
      .getWorkSpace({ query: query })
      .then((res) => {
        setWorkSpace(res.data);
      })
      .catch((err) => {
        console.log("Error WorkSpaceList:", err);
      });
  }, [workSpaceFilter]);
  return (
    <Box sx={{ width: "100%" }}>
      <>
        <div
          style={{
            width: "99%",
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ height: 100, width: "100%" }}>
            <CustomHeader />
          </div>
          <div
            style={{
              width: "95%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => {
                setShowFilter(true);
              }}
            >
              <Icons.FilterAlt
                style={{
                  color: "#000",
                  fontSize: 35,
                  margin: 10,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            </div>
            <Icons.MapOutlined
              onClick={() => {
                router.push("./map");
              }}
              style={{
                color: "#000",
                fontSize: 35,
                margin: 10,
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              width: "90%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    maxHeight: "110vh",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    overflow: "scroll",
                  }}
                >
                  {[
                    { name: "name", perPerson: "20", _id: "0" },
                    { name: "name", perPerson: "20", _id: "1" },
                    { name: "name", perPerson: "20", _id: "2" },
                    { name: "name", perPerson: "20", _id: "3" },
                    { name: "name", perPerson: "20", _id: "4" },
                    { name: "name", perPerson: "20", _id: "5" },
                    { name: "name", perPerson: "20", _id: "6" },
                    { name: "name", perPerson: "20", _id: "7" },
                  ].map((item) => (
                    <ScrollCard
                      title={item._id}
                      itemId={item._id} // NOTE: itemId is required for track items
                      key={item._id}
                    />
                  ))}
                  <div
                    style={{
                      height: 50,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Pagination count={10} color="primary" />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    maxHeight: "110vh",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    overflow: "scroll",
                  }}
                >
                  {[
                    { name: "name", perPerson: "20", _id: "0" },
                    { name: "name", perPerson: "20", _id: "1" },
                    { name: "name", perPerson: "20", _id: "2" },
                    { name: "name", perPerson: "20", _id: "3" },
                    { name: "name", perPerson: "20", _id: "4" },
                    { name: "name", perPerson: "20", _id: "5" },
                    { name: "name", perPerson: "20", _id: "6" },
                    { name: "name", perPerson: "20", _id: "7" },
                  ].map((item) => (
                    <ScrollCard
                      title={item._id}
                      itemId={item._id} // NOTE: itemId is required for track items
                      key={item._id}
                    />
                  ))}
                  <div
                    style={{
                      height: 50,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Pagination count={10} color="primary" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </>

      <Filter
        open={showFilter}
        workSpaceFilterVal={workSpaceFilter}
        onClose={(e) => {
          setWorkSpaceFilter(e);
          setShowFilter(false);
        }}
      />
    </Box>
  );
}
