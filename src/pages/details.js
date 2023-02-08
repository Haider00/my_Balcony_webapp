import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import {
  CustomHeader,
  CheckBoxLabel,
  CheckBoxInput,
  TimeRange,
  Button,
} from "../component";
import { LeftWallpaperWb, FormWb, WorksapceImages } from "./WorkSpace/wb";
import { Amenities } from "./WorkSpace/Amenities";
import React, { useState } from "react";
import { api } from "../utils/api";
import { Snackbar } from "@mui/material";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function HostWorkSpace({}) {
  const [workSpace, setWorkSpace] = useState();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [mainImage, setMainImage] = useState({});
  const [secondImage, setSecondImage] = useState({});
  const [thirdImage, setThirdImage] = useState({});
  const [map, setMap] = React.useState(null);

  return (
    <Box sx={{ flexGrow: 1, paddingX: 1 }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={display}
        onClose={() => {
          setDisplay(false);
        }}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{message}</span>}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomHeader />
        </Grid>
        <WorksapceImages />
        <LeftWallpaperWb />
        <FormWb
          handleInfo={(e) => {
            setWorkSpace({ ...workSpace, ...e });
          }}
        />
      </Grid>
    </Box>
  );
}
