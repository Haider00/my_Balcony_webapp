import React, { useState, useEffect } from "react";
import { Box, Typography, Rating } from "@mui/material";
import { Divider } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import Amenities from "../WorkSpace/AmenitiesForOutput";
import styledcomp from "styled-components";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";
const Listcontainer = styledcomp.ul`
padding:0;
margin: 0;
`;
const ListItem = styledcomp.li`
list-style: none;
`;

export default function  () {
  const workspaceDetailState = useWorkspaceDetailState();
  console.log("ame", workspaceDetailState);
  const perPersons = workspaceDetailState.workspaceDetail.perPerson;
  const sharedWorkSpace = workspaceDetailState.workspaceDetail.sharedWorkSpace;

  const [coworkspace, setCoworkspace] = useState(false);
  // console.log("coworkspace", coworkspace);

  useEffect(() => {
    const coworkspaceValue = workspaceDetailState.workspaceDetail.coworkspace;
    setCoworkspace(coworkspaceValue);
  }, []);

  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box style={{ width: "100%", paddingLeft: 25 }}>
          <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
            amenities
          </Typography>
        </Box>
        <Amenities />

        <Divider sx={{ width: "95%", my: 3 }} variant="middle" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, alignSelf:"center" }}>
          <Listcontainer
            style={{
              padding: 0,
            }}
          >
            {[workspaceDetailState].map((item, index) => (
              <ListItem
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  listStyle: "none",
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                key={index}
              >
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  ${perPersons}&nbsp;per person
                </p>
              </ListItem>
            ))}
          </Listcontainer>
        </Typography>
        {sharedWorkSpace && (
          <>
            <Typography
              variant="button"
              sx={{ mb: 1, fontSize: "24px", fontWeight: "400", alignSelf:"center"}}
            >
              Shared Workspace
            </Typography>
            <GroupIcon sx={{ mb: 1, alignSelf:"center" }} fontSize="large" />
            <Typography
              sx={{ width: "95%", textAlign: "center" }}
              variant="caption"
            >
              This space is shared with other people such as freelancers,
              starters, students, etc
            </Typography>
          </>
        )}
        <Divider sx={{ width: "100%", my: 3, mb: 0 }} variant="middle" />
      </Box>
    </div>
  );
}
