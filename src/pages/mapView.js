import React, { useEffect, useState, useRef } from "react";
import { CustomHeader } from "../component";
import Map from "@components/Map";
import { Box } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useRouter } from "next/router";
import { useAuthState } from "../context/auth.context";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { api } from "../utils/api";
import { ScrollCard } from "../component";
import GoogleMapView from "../component/GooglemapView/index";
export default function MapView() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [open, setopen] = useState();
  const [WorkSpace, setWorkSpace] = useState([]);
  console.log("popo,", WorkSpace);
  const auth = useAuthState();
  const menu = useRef();

  useEffect(() => {
    setTimeout(() => {
      menu?.current?.scrollToItem(
        menu?.current?.getItemById("1"),
        "auto",
        "start"
      );
    }, 100);
  }, []);

  useEffect(() => {
    api
      .getWorkSpace({ query: "" })
      .then((res) => {
        console.log("indoor>>>", res.data);
        setWorkSpace(res.data);
      })
      .catch((err) => {
        console.warn("auth.accessToken...");
        console.log("Error WorkSpaceList:", err);
      });
  }, [auth.accessToken]);

  console.log("currentlocation>>>", currentLocation);
  const router = useRouter();
  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .leaflet-top {
        display: none;
      }
      .leaflet-bottom.leaflet-right {
        display: none;
      }
      .css-ahj2mt-MuiTypography-root{
        font-size:8px
      }
    `;
    document?.head?.appendChild(style);
  }, []);

  function handleMarkerDragEnd(event) {
    setCurrentLocation(event?.target?.getLatLng());
  }

  const coordinates = [
    { lat: 27.712776, lng: 65.005974 },
    { lat: 29.712776, lng: 65.005974 },
    { lat: 28.712776, lng: 65.005974 },
    { lat: 26.712776, lng: 65.005974 },
  ];
  const apiKey = "AIzaSyAmQ5I4ArxGPrvpfT3zY8dsLscVz7muvy4";
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            height: "fit-content",
          }}
        >
          <CustomHeader page={"map"} />
        </Box>
        <GoogleMapView />

        {/* <Box
          sx={{
            position: "fixed",
            top: "130px", // Adjust the top position as needed
            right: "10px", // Adjust the right position as needed
            zIndex: 999,
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="commercial office"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="resedential"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="medium table"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="small table"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="wifi"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="ethernet"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="mouse"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="keyboard"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="tv, television"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="pen, pencil"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="meeting room"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="headset, w.mic"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="coffee"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="couch"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="wheel chair accessible"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="water nearby"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="backyard, frontyard"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="gym"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
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
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="views, roof, balcony, or penthouse"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="outlet, cord, charger"
                    sx={{ width: 80 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    }
                    label="billiard, pool"
                    sx={{ width: 80 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          <FormatListBulletedIcon
            onClick={() => {
              router.push("./workFromIndoor");
            }}
            sx={{ fontSize: 30, cursor: "pointer" }}
          />

          <FilterAltIcon
            onClick={() => {
              setopen(true);
            }}
            sx={{ fontSize: 30, cursor: "pointer", marginLeft: "10px" }}
          />
        </Box> */}
        {/* <Map center={currentLocation} zoom={10} ZoomControl={true}>
          {({ TileLayer, Marker }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={currentLocation}
                draggable={true}
                eventHandlers={{ dragend: handleMarkerDragEnd }}
              />

              <ZoomControl position="bottomleft" />
              {coordinates.map((coordinate, index) => (
                <Marker key={index} position={coordinate} />
              ))}
            </>
          )}
        </Map> */}
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          display: "flex",
          overflowX: "auto",
          marginBottom: "60px",
        }}
      >
        <ScrollMenu apiRef={menu}>
          {WorkSpace.reverse().map((item, index) => (
            <ScrollCard
              onClick={() => {
                router.push(`./workspaceDetail?wd=${item._id}`);
              }}
              title={item.name}
              itemId={item._id}
              key={item._id}
              image={item.image}
              rating={item.rating}
              customWidth="220px"
              customHeight="113px"
            />
          ))}
        </ScrollMenu>
      </Box>
    </>
  );
}
