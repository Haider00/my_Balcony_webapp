import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { WorksapceImages } from "../WorkSpace/wb";
import Workimages from "../WorkspaceDetail/workspaceimages";
// import Amenities from './WorkSpace/Amenities';

export default function BushwickLofts() {
  
    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'My Website',
            text: 'Check out this awesome website!',
            url: window.location.href
          });
          console.log('Successfully shared');
        } catch (error) {
          console.error('Error sharing:', error);
        }
      } else {
        console.log('Web Share API not supported');
      }
    };
  
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: "20%" }}>
        <Typography variant="h5">Bushwick Lofts</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mr: "20%" }}>
        <ShareIcon onClick={handleShare} />
        <Box sx={{ display: "flex" }}>
          <Rating defaultValue={2.5} name="simple-controlled" />
          <Typography variant="small">(151)</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Workimages />
      </Box>
    </div>
  );
}
