import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { WorksapceImages } from "../WorkSpace/wb";
import Workimages from "../WorkspaceDetail/workspaceimages";
import { useEffect } from "react";
// import Amenities from './WorkSpace/Amenities';

export default function BushwickLofts({name='',rating=2, noOfRating=2}) {
  
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: "20%" }}>
        <Typography variant="h5">{name}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mr: "20%" }}>
        <ShareIcon />
        <Box sx={{ display: "flex" }}>
          <Rating value={rating} name="simple-controlled" readOnly/>
          <Typography variant="small">({noOfRating})</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Workimages />
      </Box>
    </div>
  );
}
