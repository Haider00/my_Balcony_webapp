import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import * as Icons from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import { amenitiesArr } from "../../utils/amenities";
import CheckBoxLabel from "../CheckBoxLabel";
import { api } from "src/utils/api";

export const Filter = ({
  onClose = ({}) => {},
  open,
  workSpaceFilterVal = {},
}) => {
  const [workSpaceFilter, setWorkSpaceFilter] = useState({});
  const [amenitiesFilter, setAmenitiesFilter] = useState([]);

  const [workSpaces, setWorkspaces] = useState([]);

  let myQuery = "";
  const handleFilterClose = (filterValues) => {
    if (filterValues.workspaceType === "indoor") {
      myQuery = "?workspaceType=indoor";
    } else if (filterValues.workspaceType === "outdoor") {
      myQuery = "?workspaceType=outdoor";
    }
    if (filterValues.amenities && filterValues.amenities.length > 0) {
      // Add amenities to the query string
      filterValues.amenities.forEach((amenity, index) => {
        // If it's the first amenity, add "amenities=" before it
        if (index === 0) {
          myQuery += "amenities=" + amenity;
        }
        // If it's not the first amenity, just add a comma before it
        else {
          myQuery += "," + amenity;
        }
      });
    }
    console.log("filterValues", filterValues);
    api
      .getWorkSpace({ query: myQuery })
      .then((res) => {
        console.log("res", res);
        setWorkspaces(res.data);
      })
      .catch((err) => {
        console.warn("auth.accessToken...");
        console.log("Error WorkSpaceList:", err);
      });
    onClose(filterValues);
  };

  useEffect(() => {
    setWorkSpaceFilter(workSpaceFilterVal);
    if (
      workSpaceFilterVal.amenities &&
      workSpaceFilterVal.amenities.length > 0
    ) {
      setAmenitiesFilter(workSpaceFilterVal.amenities);
    }
  }, [workSpaceFilterVal]);
  const handleAmenities = (item) => {
    let arr = amenitiesFilter;
    if (arr.includes(item)) {
      const index = arr.indexOf(item);
      if (index > -1) {
        arr.splice(index, 1);
      }
      setAmenitiesFilter([...arr]);
    } else {
      arr.push(item);
      setAmenitiesFilter([...arr]);
    }
    setWorkSpaceFilter({ ...workSpaceFilter, amenities: arr });
  };
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        handleFilterClose(workSpaceFilter);
      }}
    >
      <div
        onClick={() => {
          onClose(workSpaceFilter);
        }}
      >
        <Icons.CloseOutlined
          style={{
            color: "#000",
            fontSize: 25,
            margin: 10,
            cursor: "pointer",
          }}
        />
      </div>
      <Box
        sx={{
          marginX: 1,
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography sx={{ fontSize: 18, fontWeight: "400" }}>Places</Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CheckBoxLabel
            value={workSpaceFilter.workspaceType === "indoor" ? true : false}
            handleCheckbox={(e) => {
              if (e) {
                setWorkSpaceFilter({
                  ...workSpaceFilter,
                  workspaceType: "indoor",
                });
              } else if (workSpaceFilter.workspaceType === "indoor") {
                setWorkSpaceFilter({
                  ...workSpaceFilter,
                  workspaceType: "",
                });
              }
            }}
            title="indoor"
          />
          <CheckBoxLabel
            value={workSpaceFilter.workspaceType === "outdoor" ? true : false}
            handleCheckbox={(e) => {
              if (e) {
                setWorkSpaceFilter({
                  ...workSpaceFilter,
                  workspaceType: "outdoor",
                });
              } else if (workSpaceFilter.workspaceType === "outdoor") {
                setWorkSpaceFilter({
                  ...workSpaceFilter,
                  workspaceType: "",
                });
              }
            }}
            title="outdoor"
          />
        </div>
        <Typography sx={{ fontSize: 18, fontWeight: "400" }}>
          Price Range
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            onChange={(e) => {
              setWorkSpaceFilter({
                ...workSpaceFilter,
                minFee: e.target.value,
              });
            }}
            sx={{ marginY: 1, width: "45%" }}
            id="min"
            label="min"
            variant="outlined"
            size="small"
          />
          <TextField
            onChange={(e) => {
              setWorkSpaceFilter({
                ...workSpaceFilter,
                maxFee: e.target.value,
              });
            }}
            sx={{ marginY: 1, width: "45%" }}
            id="max"
            label="max"
            variant="outlined"
            size="small"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {amenitiesArr.map((item, index) => (
            <div
              onClick={() => {
                handleAmenities(item.value);
              }}
              key={index}
              style={{ display: "flex", flex: 30 }}
            >
              <CheckBoxLabel
                value={amenitiesFilter.includes(item.value)}
                title={item.title}
                width={90}
                fontSize={12}
              />
            </div>
          ))}
        </div>
      </Box>
    </Drawer>
  );
};
