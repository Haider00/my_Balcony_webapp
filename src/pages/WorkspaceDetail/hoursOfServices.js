import React from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import Calendar from "../../components/calendar/calendar";
import styledcomp from "styled-components";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";
const Listcontainer = styledcomp.ul`

`;
const ListItem = styledcomp.li`

`;

const workspaceTime = [
  {
    day: "sunday",
    to: "6pm",
    from: "8am",
    available: true,
  },
  {
    day: "",
    to: "9pm",
    from: "7am",
    available: true,
  },
  {
    day: "tuesday",
    to: "5pm",
    from: "9am",
    available: true,
  },
  {
    day: "wednesday",
    to: "12pm",
    from: "3am",
    available: true,
  },
  {
    day: "thursday",
    to: "7pm",
    from: "5am",
    available: true,
  },
  {
    day: "",
    to: "4pm",
    from: "8am",
    available: true,
  },
  {
    day: "saturday",
    to: "2pm",
    from: "4am",
    available: true,
  },
];

export default function HoursOfServices() {
  const workspaceDetailState = useWorkspaceDetailState();
  console.log("hhhhh", workspaceDetailState);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Typography variant="h5">Hours of Services</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Typography variant="subtitle1">
          <Listcontainer style={{ padding: 0, margin: 0 }}>
            {workspaceTime.map((item, index) => {
              if (item.day.trim() === "") {
                return null;
              }
              return (
                <ListItem key={index} style={{ listStyle: "none" }}>
                  <span>Time Frame of Services&nbsp;{item.day}</span>
                  <span>&nbsp;From&nbsp;{item.from}</span>
                  <span>&nbsp;To&nbsp;{item.to}</span>
                </ListItem>
              );
            })}
          </Listcontainer>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Calendar />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Chat &/or Call with Workspace Host Before Booking!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            width: "100%",
            maxWidth: 500,
          }}
        >
          <Button
            sx={{
              color: "#000",
              mr: 1,
              mt: 2,
              width: "30%",
              borderRadius: 3,
              borderColor: "#000",
              borderWidth: "2px",
            }}
            variant="outlined"
          >
            CHAT
          </Button>
          <Button
            sx={{
              color: "#000",
              ml: 1,
              mt: 2,
              width: "30%",
              borderRadius: 3,
              borderColor: "#000",
              borderWidth: "2px",
            }}
            variant="outlined"
          >
            CALL
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
