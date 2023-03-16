import React, { useState, useEffect } from "react";
import { Box, Typography, Rating } from "@mui/material";
import { Divider } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import Amenities from "../WorkSpace/AmenitiesForOutput";
import styledcomp from "styled-components";
const Listcontainer = styledcomp.ul`
padding:0;
margin: 0;
`;
const ListItem = styledcomp.li`
list-style: none;
`;
const workspaceDetails = {
  name: "Sanan's Workspace",
  coordinates: [23.7, -72.88],
  image: "image Location",
  address: "Nazar shah street",
  address2: "Ghona",
  city: "LHR",
  cleaningFee: 200,
  country: "Pakistan",
  currency: "USD",
  flatFee: true,
  workspaceType: "Indoor",
  maintenancesFee: 400,
  otherFeeAmount: 100,
  otherFeeName: "Other Fee",
  perPerson: 10,
  percentage: false,
  state: "Punjab",
  coworkspace: true,
};

export default function AmenitiesPortion() {
  const [coworkspace, setCoworkspace] = useState(false);

  useEffect(() => {
    const coworkspaceValue = workspaceDetails.coworkspace;
    setCoworkspace(coworkspaceValue);
  }, []);

  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Amenities
        </Typography>
        <Amenities />
        <Divider sx={{ width: "95%", my: 3 }} variant="middle" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            <Listcontainer>
              {[workspaceDetails].map((item, index) => (
                <ListItem key={index}>
                  <p>{item.name}</p>
                  <p>${item.perPerson}&nbsp;per person</p>
                  <p>{item.address}</p>
                  <p>{item.address2}</p>
                  <p>{item.city}</p>
                  <p>{item.state}</p>
                  <p>{item.country}</p>
                  <p>{item.currency}</p>
                  <p>{item.flatFee.toString()}</p>
                  <p>{item.maintenancesFee}</p>
                  <p>{item.percentage.toString()}</p>
                </ListItem>
              ))}
            </Listcontainer>
          </Typography>
          {coworkspace && (
            <>
              <Typography variant="button" sx={{ mb: 1 }}>
                Shared Workspace
              </Typography>
              <GroupIcon sx={{ mb: 1 }} fontSize="large" />
              <Typography
                sx={{ width: "95%", textAlign: "center" }}
                variant="caption"
              >
                This space is shared with other people such as freelancers,
                starters, students, etc
              </Typography>
            </>
          )}
          <Divider sx={{ width: "95%", my: 3 }} variant="middle" />
        </Box>
      </Box>
    </div>
  );
}
