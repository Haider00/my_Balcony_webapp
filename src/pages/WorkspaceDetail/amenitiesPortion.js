// import React from 'react'
// import { Box, Typography, Rating } from '@mui/material'
// import { Divider } from '@mui/material';
// import GroupIcon from '@mui/icons-material/Group';
// import Amenities from '../WorkSpace/Amenities';

// export default function AmenitiesPortion() {
//     return (
//         <div>
//             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                 <Typography variant="h5">Amenities</Typography>
//             </Box>
//             <Amenities/>
//             <Divider sx={{ display: 'flex', justifyContent: 'flex-end'}} variant="middle" />

//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginRight: 5 }}>
//                 <Typography variant="h6">$56.50 per person</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginRight: 5, marginTop: 3 }}>
//                 <Typography variant="button">Shared Workspace</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginRight: 5, }}>
//                 <GroupIcon sx={{ marginRight: 3, marginTop: -2 }} fontSize="large" />
//                 <Typography variant="caption">This space is shared with other people such as </Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginRight: 5, }}>
//                 <Typography variant="caption">freelancers, starters, students, etc</Typography>
//             </Box>
//         </div>
//     )
// }
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
  const workspaceDetailState = useWorkspaceDetailState();
  console.log("ame", workspaceDetailState);
  const perPersons = workspaceDetailState.workspaceDetail.perPerson;

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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
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
        {coworkspace && (
          <>
            <Typography
              variant="button"
              sx={{ mb: 1, fontSize: "24px", fontWeight: "400" }}
            >
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
        <Divider sx={{ width: "100%", my: 3, mb: 0 }} variant="middle" />
      </Box>
    </div>
  );
}
