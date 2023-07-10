import React, { useEffect, useState } from "react";
import MapIcon from "@mui/icons-material/Map";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Typography, Rating, Button } from "@mui/material";
import { fontSize } from "@mui/system";
import { useRouter } from "next/router";
import { CustomHeader } from "../../component/CustomHeader/index";
// import "leaflet/dist/leaflet.css";
import Map from "@components/Map";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import { ZoomControl } from "react-leaflet";
import ClearIcon from "@mui/icons-material/Clear";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function RightIcons() {
  const router = useRouter();
  const [open, setopen] = useState();

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            fontSize: 9,
            color: "#000",
            padding: 0,
            minWidth: 0,
            textTransform: "none",
            display:'flex',
            flexDirection:'column'
          }}
          onClick={() => {
            router.push("./mapView");
          }}
        >
          <MapIcon sx={{ fontSize: 30 }} />
          Map View
        </Button>

        <Button
          sx={{
            fontSize: 9,
            color: "#000",
            padding: 0,
            minWidth: 0,
            textTransform: "none",
            ml: 2,
            display:'flex',
            flexDirection:'column'
          }}
          onClick={() => {
            setopen(true);
          }}
        >
        <FilterAltIcon sx={{ fontSize: 30 }} />
          Filter
        </Button>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 85,
          bottom: 0,
          right: 0,
          zIndex: 999,
          height: "100%",
          display: "flex",
        }}
      >
        {open && (
          <Box
            sx={{
              backgroundColor: "#fff",
              width: 330,
              height: "100%",
            }}
          >
            <Box sx={{ marginTop: 1, marginLeft: 1 }}>
              <Button
                sx={{
                  fontSize: 9,
                  color: "#000",
                  padding: 0,
                  minWidth: 0,
                  textTransform: "none",
                }}
                onClick={() => {
                  setopen(false);
                }}
              >
                <ClearIcon />
              </Button>
            </Box>
            <Box>
              <FormGroup>
                <Typography sx={{ textAlign: "right", marginRight: 2 }}>
                  place
                </Typography>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="indoor"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="outdoor"
                  />
                </Box>
              </FormGroup>
            </Box>
            <Box>
              <Typography
                sx={{
                  textAlign: "right",
                  marginRight: 2,
                  marginBottom: 1,
                  marginTop: 2,
                }}
              >
                price range
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  label="min"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  sx={{ width: 80 }}
                  type="number"
                  inputProps={{
                    min: 0,
                    max: 100,
                    step: 1,
                  }}
                />
                <Typography sx={{ marginX: 2 }}>-</Typography>
                <TextField
                  label="max"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  sx={{ width: 80, marginRight: 2 }}
                  type="number"
                  inputProps={{
                    min: 0,
                    max: 100,
                    step: 1,
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  textAlign: "right",
                  marginRight: 2,
                  marginBottom: 1,
                  marginTop: 2,
                }}
              >
                ratings
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Checkbox
                  sx={{ padding: 0 }}
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                />
                <Checkbox
                  sx={{ padding: 0 }}
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                />
                <Checkbox
                  sx={{ padding: 0 }}
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                />
                <Checkbox
                  sx={{ padding: 0 }}
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                />
                <Checkbox
                  sx={{
                    marginRight: 2,
                    padding: 0,
                  }}
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon sx={{ color: "#000" }} />}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  textAlign: "right",
                  marginRight: 2,
                  marginBottom: 1,
                  marginTop: 2,
                }}
              >
                workspace amenities
              </Typography>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="commercial office"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="resedential"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="large table"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="medium table"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="small table"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="chairs"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="wifi"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="ethernet"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="computer"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="mouse"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="keyboard"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="printing, printer"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="tv, television"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="pen, pencil"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="paper, notebook"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="meeting room"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="headset, w.mic"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="headphone"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="coffee"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="couch"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="outdoor, deck"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="wheel chair accessible"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="water nearby"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="swimming pool"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="backyard, frontyard"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="gym"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="ping pong"
                  sx={{ width: 80 }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginLeft: 16,
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="views, roof, balcony, or penthouse"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="outlet, cord, charger"
                  sx={{ width: 80 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
                  }
                  label="billiard, pool"
                  sx={{ width: 80 }}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
