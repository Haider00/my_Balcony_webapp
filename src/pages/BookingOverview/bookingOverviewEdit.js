import React, { useEffect } from "react";
import { Divider, Button } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Box, Typography, Rating } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";
import { useRouter } from "next/router";
import moment from "moment";
import CheckBoxLabel from '../../component/CheckBoxLabel/index';
import { BorderColor } from "@mui/icons-material";
export default function BookingOverviewEdit() {

  const router = useRouter();
  const workspaceDetailState = useWorkspaceDetailState();
  console.log("pogo", workspaceDetailState);
  const totalPeople = workspaceDetailState.workspaceDetail.perPerson;
  const maintenancesFee = workspaceDetailState.workspaceDetail.maintenancesFee;

  const otherFeeAmount = workspaceDetailState.workspaceDetail.otherFeeAmount;

  const otherFeeName = workspaceDetailState.workspaceDetail.otherFeeName;
  const totalAmount =
    (parseInt(maintenancesFee) + parseInt(otherFeeAmount)) *
    parseInt(totalPeople);
  const selDates = workspaceDetailState.selectedDatesarr;
  const selDatesLength = selDates?.length;
  console.log("jago", selDatesLength);

  const currentDate = () => {
    const currentDate = moment();
    const formattedDate = currentDate.format('DD-MM-YYYY');
    console.log('formattedDate', formattedDate);
    return formattedDate;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignContent: "center",
          marginTop: 5,
        }}
      >
        <Typography sx={{ textDecoration: 'underline' }} variant="h6">Edit</Typography>

        <Card sx={{ backgroundColor: '#f0f0f0', mb: 3 }}>
          <CardContent>
            <Typography sx={{ marginTop: 1 }} variant="body2">
              Time Frame of services 8AM - 5PM EST
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="body2">
              Total Number of People : {totalPeople}
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="h5">
              Total $ {totalAmount}
            </Typography>
          </CardContent>
        </Card>
        <CheckBoxLabel
          justifyContent="center"
          title="Coworking WorkSpace"
          fontSize={19}
          fontWeight="bold"
          handleCheckbox={(e) => {
            // setWorkSpace({ ...workSpace, coWorkingWorkspace: e });
          }}
        />
        <Typography sx={{ opacity:0.5, mt: 2 }} variant="body2">
          Workspace would be shared by multiple
        </Typography>
        <Typography sx={{ opacity:0.5}} variant="body2">
          People from different companies
        </Typography>
        <Typography sx={{ opacity:0.5}} variant="body2">
          With the same dates and time frame
        </Typography>
        <Typography sx={{ opacity:0.5}} variant="body2">
          If not checked, than only one coompany &/or
        </Typography>
        <Typography sx={{ opacity:0.5}} variant="body2">
          individual can book the booked date/time.
        </Typography>

        <Typography sx={{ mt: 3, alignSelf: 'center' }} variant="h5">Chat &/or Text Us</Typography>
        <Typography sx={{ alignSelf: 'center' }} variant="h5">Assistant</Typography>

        <Box sx={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          marginTop: 5,
        }}>
          <Button sx={{ color: '#000', paddingX: 4, border: 2, borderRadius: 5, borderColor: '#000' }} variant="outlined">Chat</Button>
          <Button sx={{ color: '#000', paddingX: 4, border: 2, borderRadius: 5, borderColor: '#000' }} variant="outlined">Text</Button>
        </Box>

      </Box>
    </>
  );
}
