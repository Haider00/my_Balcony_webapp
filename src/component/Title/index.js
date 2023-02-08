import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Title = ({ title = "" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ marginY: 1 }} component="h1" variant="h4">
        {title}
      </Typography>
    </Box>
  );
};
export default Title;
