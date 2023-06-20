import React, { useState, useEffect } from "react";
import Commercial from "../../assets/svg/Commercial";
import Residential from "../../assets/svg/Residential";
import LargeTable from "../../assets/svg/LargeTable";
import MediumTable from "../../assets/svg/MediumTable";
import SmallTable from "../../assets/svg/SmallTable";
import Chairs from "../../assets/svg/Chairs";
import Wifi from "../../assets/svg/Wifi";
import NoWifi from "../../assets/svg/NoWifi";
import Ethernet from "../../assets/svg/Ethernet";
import Computer from "../../assets/svg/Computer";
import Mouse from "../../assets/svg/Mouse";
import Keyboard from "../../assets/svg/Keyboard";
import Printer from "../../assets/svg/Printer";
import TV from "../../assets/svg/TV";
import Pen from "../../assets/svg/Pen";
import Paper from "../../assets/svg/Paper";
import MeetingRoom from "../../assets/svg/MeetingRoom";
import HeadphonewMic from "../../assets/svg/HeadphonewMic";
import Headphone from "../../assets/svg/Headphone";
import Coffee from "../../assets/svg/Coffes";
import Couch from "../../assets/svg/Couch";
import OutDoorDeck from "../../assets/svg/OutDoorDeck";
import Penthouse from "../../assets/svg/Penthouse";
import Outlet from "../../assets/svg/Outlet";
import WheelChair from "../../assets/svg/WheelChair";
import NoWheelChair from "../../assets/svg/NoWheelChair";
import Gym from "../../assets/svg/Gym";
import FrontYard from "../../assets/svg/FrontYard";
import Water from "../../assets/svg/Water";
import SwimmingPool from "../../assets/svg/SwimmingPool";
import Billiard from "../../assets/svg/Billiyard";
import PingPong from "../../assets/svg/PingPong";
import { Box, Typography, Rating } from "@mui/material";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";
export const Amenities = ({ handleSelectedAmenities = ([]) => {} }) => {
  const workspaceDetailState = useWorkspaceDetailState();
  // console.log("cme", workspaceDetailState);

  // useEffect(() => {
  //   // const amenities = workspaceDetailState.perPerson; // make sure amenities is an array
  //   // console.log("amenities:", amenities);
  //   // // const amenityTitles = amenities.map((amenity) => amenity.title);

  //   // // console.log("btao", amenityTitles);

  //   const titles = workspaceDetailState.workspaceDetail.amenities || [];
  //   const amenitiesTitle = titles.map((amenity) => amenity.title || "");
  //   console.log("faran", amenitiesTitle);
  // }, []);
  const [amenitiesTitle, setAmenitiesTitle] = useState([]);
  useEffect(() => {
    const titles = workspaceDetailState.workspaceDetail.amenities || [];
    const amenitiesTitle = titles.map(
      (amenity) => amenity.title.toLowerCase() || ""
    );
    setAmenitiesTitle(amenitiesTitle);
    console.log("faran", amenitiesTitle);

    // setAmenitiesTitle(amenitiesTitle + "".toLowerCase());
  }, [workspaceDetailState]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        marginLeft: 3,
        marginRight: 3,
        height: "65vh",
        overflowY: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.6em",
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: "8px",
          backgroundColor: "#e7e7e7",
          border: "1px solid #cacaca",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#363636",
          borderRadius: "8px",
        },
      }}
    >
      {amenitiesTitle.includes("commercial".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Commercial fill="#000" />
        </div>
      )}

      {amenitiesTitle.includes("residential".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Residential fill="#000" />
        </div>
      )}

      {amenitiesTitle.includes("largeTable".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <LargeTable fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("mediumTable".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <MediumTable fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("smallTable".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <SmallTable fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("chairs".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Chairs fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Wifi".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Wifi fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("NoWifi".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <NoWifi fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Ethernet".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Ethernet fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Computer".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Computer fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Mouse".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Mouse fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Keyboard".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Keyboard fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Printer".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Printer fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Tv".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <TV fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Pen".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Pen fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Paper".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Paper fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("MeetingRoom".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <MeetingRoom fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("HeadphonewMic".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <HeadphonewMic fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Headphone".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Headphone fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Coffee".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Coffee fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("Couch".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Couch fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("OutdoorDeck".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <OutDoorDeck fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("PentHouse".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Penthouse fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("outlet".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Outlet fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("WheelChair".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <WheelChair fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("NoWheelChair".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <NoWheelChair fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("gym".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Gym fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("frontYard".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <FrontYard fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("water".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Water fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("swimmingPool".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <SwimmingPool fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("billiard".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <Billiard fill="#000" />
        </div>
      )}
      {amenitiesTitle.includes("pingPong".toLowerCase()) && (
        <div style={{ padding: 5 }}>
          <PingPong fill="#000" />
        </div>
      )}
    </Box>
  );
};
export default Amenities;
