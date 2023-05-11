import React, { useEffect, useState } from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import Calendar from "../../components/calendar/calendar";
import styledcomp from "styled-components";
import { useWorkspaceDetailState, useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import { useRouter } from 'next/router'
import { api } from "../../utils/api";
import { useAuthState } from '../../context/auth.context';
import moment from "moment";



const Listcontainer = styledcomp.ul``;
const ListItem = styledcomp.li``;


export default function HoursOfServices() {
  const router = useRouter();
  const [dayTime, setDayTime] = useState([]);
  console.log('nana', dayTime);

  // const currentDate = moment();
  // const monthDays = Array(currentDate.daysInMonth())
  //   .fill()
  //   .map((_, index) => moment(currentDate).date(index + 1));

  // const filteredDays = monthDays.filter(
  //   (day) => !dayTime.find((time) => time.day === day.format("dddd").toLowerCase())
  // );

  // console.log('days>>', filteredDays)

  //Use This
  const authState = useAuthState();
  const workspaceDetailState = useWorkspaceDetailState();
  const dispatch = useWorkspaceDetailDispatch();

  const handleChat = () => {
    api
      .createChat({
        client: authState.user?._id, owner: workspaceDetailState.workspaceDetail.owner,
        workspace: workspaceDetailState.workspaceDetail._id
      })
      .then((res) => {
        // console.log('res>>>', res.data);
      })
      .catch((err) => {
        console.log('error1', err);
      });
  };

  useEffect(() => {
    api
      .getWorkingTime({ query: `?workSpace=${workspaceDetailState.workspaceDetail._id}` })
      .then((res) => {
        // console.log('res>>>', res.data);
        if (res.data) {
          
          dispatch({
            type: "WORKSPACE_DAY_AND_TIME",
            payload: res.data,
          });

          setDayTime(res.data);
        }
      })
      .catch((err) => {
        console.log('error2', err);
      });
  }, [workspaceDetailState.workspaceDetail])


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
            {dayTime.map((item, index) => {
              if (item.day.trim() === "") {
                return null;
              }
              return (
                <ListItem key={index} style={{ listStyle: "none" }}>
                  <span>Time Frame of Services&nbsp;{item.day}</span>
                  <span>&nbsp;From&nbsp;{moment(item.from).format('hh:mm')}</span>
                  <span>&nbsp;To&nbsp;{moment(item.to).format('hh:mm')}</span>
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
            onClick={() => {
              handleChat();
              router.push('/chat2');
            }}
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
