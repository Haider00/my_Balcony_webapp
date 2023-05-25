import React, { useEffect, useState } from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import Calendar from "../../components/calendar/calendar";
import styledcomp from "styled-components";
import { useWorkspaceDetailState, useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import { useRouter } from 'next/router'
import { api } from "../../utils/api";
import { useAuthState } from '../../context/auth.context';
import moment from "moment";
import styled from 'styled-components';


const Listcontainer = styledcomp.ul``;
const ListItem = styledcomp.li``;

const PopupContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PopupMenu = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled(Button)`
  background-color: #f0f0f0 !important;
  border: none !important;
  padding: 5px 10px !important;
  border-radius: 4px !important;
  cursor: pointer;
  top:20px;
  display: block;
  color:#000;
`;


export default function HoursOfServices() {
  const number = 9223232323;
  const router = useRouter();
  const [dayTime, setDayTime] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  //Use This
  const auth = useAuthState();
  const workspaceDetailState = useWorkspaceDetailState();
  const dispatch = useWorkspaceDetailDispatch();

  const handleChat = () => {
    api
      .createChat({
        client: auth.user?._id, owner: workspaceDetailState.workspaceDetail.owner,
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
      <PopupContainer>
        {isOpen && (
          <PopupMenu>

            Host No is: {number}
            <CloseButton variant="contained" onClick={togglePopup}>
              Close
            </CloseButton>
          </PopupMenu>
        )}
      </PopupContainer>
      {workspaceDetailState?.workspaceDetail?.owner !== auth?.user?._id && (
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
              onClick={togglePopup}
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
        </Box>)}
    </Box>
  );
}
