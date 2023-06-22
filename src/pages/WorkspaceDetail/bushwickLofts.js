import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { WorksapceImages } from "../WorkSpace/wb";
import Workimages from "../WorkspaceDetail/workspaceimages";
import { useEffect } from "react";
// import Amenities from './WorkSpace/Amenities';

export default function BushwickLofts({
  name = "",
  rating = 2,
  noOfRating = 2,
}) {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "WorkSpace",
        text: "This is my Workspace Detail",
        url: window.location.href,
      });
      // console.log('Shared successfully');
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: "20%" }}>
        <Typography variant="h5">{name}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mr: "20%" }}>
        <ShareIcon sx={{ cursor: "pointer" }} onClick={handleShare} />
        <Box sx={{ display: "flex" }}>
          <Rating value={rating} name="simple-controlled" readOnly />
          <Typography variant="small">({noOfRating})</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Workimages />
      </Box>
    </div>
  );
}
