import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const GridDropDown = styled(Grid)({
    "@media (max-width: 900px)": {
      display: "flex",
    },
  });
  const router = useRouter();
  return (
    <>
      <GridDropDown
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          display: "none",
        }}
      >
        <FormControl
          sx={{
            width: "90%",
            marginTop: "10px",
            boxShadow: 6,
            borderRadius: "20px",
          }}
        >
          <Select
            sx={{ borderRadius: "20px" }}
            value={selectedOption}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"Dashboard"}>Dashboard</MenuItem>
            <MenuItem value={"WorkSpace Amenities"}>WorkSpace Amenities</MenuItem>
            <MenuItem value={"File Manager"}>File Manager</MenuItem>
            <MenuItem value={"Trafic Analyzer"}>Trafic Analyzer</MenuItem>
            <MenuItem value={"User Manager"}>User Manager</MenuItem>
            <MenuItem value={"Calendar"}>Calendar</MenuItem>
            <MenuItem value={"Messages"}>Messages</MenuItem>
            <MenuItem value={"Payments"}>Payments</MenuItem>
            <MenuItem value={"Promotions"}>Promotions</MenuItem>
            <MenuItem sx={{ color: "red", fontWeight: "bold" }} value={90}>
              Logout
            </MenuItem>
          </Select>
        </FormControl>
      </GridDropDown>
    </>
  );
}
