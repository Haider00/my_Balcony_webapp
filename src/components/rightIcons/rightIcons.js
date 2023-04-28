import React from "react";
import MapIcon from "@mui/icons-material/Map";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Typography, Rating, Button } from "@mui/material";
import { fontSize } from "@mui/system";
import { useRouter } from "next/router";

export default function RightIcons() {
  const router = useRouter();

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <MapIcon sx={{ fontSize: 30 }} />
        <FilterAltIcon sx={{ marginLeft: 2, fontSize: 30 }} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            fontSize: 9,
            color: "#000",
            padding: 0,
            minWidth: 0,
            textTransform: "none",
          }}
          onClick={() => {
            router.push("./mapView");
          }}
        >
          Map View
        </Button>

        <Typography marginLeft={2} fontSize={9} variant="caption">
          Filter
        </Typography>
      </Box>
    </>
  );
}
