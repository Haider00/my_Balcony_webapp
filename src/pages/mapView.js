import React, { useEffect, useState, useRef } from "react";
import { CustomHeader, Filter } from "../component";
import Map from "@components/Map";
import { Box } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
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
import * as Icons from "@mui/icons-material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
export default function MapView() {
  const [showFilter, setShowFilter] = useState(false);
  const [workSpaceFilter, setWorkSpaceFilter] = useState({});
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
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "130px",
        }}
      >
        <div
          onClick={() => {
            router.push("./search");
          }}
          style={{ display: "flex", flexDirection: "column", marginRight: 7 }}
        >
          <FormatListBulletedIcon
            style={{
              color: "#000",
              fontSize: 35,
              cursor: "pointer",
              zIndex: 9999,
            }}
          />

          <Typography
            sx={{ cursor: "pointer", alignSelf: "center", zIndex: 9999 }}
            variant="caption"
          >
            list view
          </Typography>
        </div>
        <div
          onClick={() => {
            setShowFilter(true);
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Icons.FilterAlt
            style={{
              color: "#000",
              fontSize: 35,
              cursor: "pointer",
              zIndex: 9999,
            }}
          />
          <Typography
            sx={{ cursor: "pointer", alignSelf: "center", zIndex: 9999 }}
            variant="caption"
          >
            filter
          </Typography>
        </div>
      </div>

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
        <Filter
          open={showFilter}
          workSpaceFilterVal={workSpaceFilter}
          WorkSpace={WorkSpace}
          setWorkSpace={setWorkSpace}
          onClose={(e) => {
            console.log("e", e);
            setWorkSpaceFilter(e);
            setShowFilter(false);
          }}
        />
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
