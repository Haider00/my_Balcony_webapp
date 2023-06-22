import React from "react";
import { Divider, Button } from "@mui/material";
import { Box, Typography, Rating } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";
import { useRouter } from "next/router";
export default function EditPortion() {
  const router = useRouter();
  const workspaceDetailState = useWorkspaceDetailState();
  // console.log("pogo", workspaceDetailState);
  const totalPeople = workspaceDetailState.workspaceDetail.perPerson;
  const maintenancesFee = workspaceDetailState.workspaceDetail.maintenancesFee;

  const otherFeeAmount = workspaceDetailState.workspaceDetail.otherFeeAmount;

  const otherFeeName = workspaceDetailState.workspaceDetail.otherFeeName;
  const totalAmount =
    (parseInt(maintenancesFee) + parseInt(otherFeeAmount)) *
    parseInt(totalPeople);
  const selDates = workspaceDetailState.selectedDatesarr;
  const selDatesLength = selDates.length;
  // console.log("jago", selDatesLength);
  return (
    <>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h5">Edit</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 2,
        }}
      >
        <Card sx={{ bgcolor: "#f2f7f6", width: "100%" }}>
          <CardContent>
            <Typography variant="h6">BushwickLofts</Typography>

            <Typography sx={{ marginTop: 1 }} variant="body2">
              Time Frame of services 8AM - 5PM EST
            </Typography>

            <Typography sx={{ marginTop: 1 }} variant="body2">
              MaintenancesFee :{maintenancesFee}
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="body2">
              OtherFeeAmount : {otherFeeAmount}
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="body2">
              OtherFeeName : {otherFeeName}
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="body2">
              Total Number of People : {totalPeople}
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="body2">
              Number of Days : {selDatesLength}
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="h5">
              Total $ {totalAmount}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 3,
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          fontSize="25px"
          label={
            <Typography
              sx={{ fontWeight: "bold", color: "black    " }}
              variant="h5"
              color="textSecondary"
            >
              CoWorking Workspace
            </Typography>
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="caption">
          Workspace would be shared by multiple{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="caption">
          People from different companies{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="caption">
          Within the same date & time frame{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="caption">
          -If not checked, than only one company &/or
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="caption">
          individual can book the booked date/time
        </Typography>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 4,
        }}
      >
        <Typography variant="h5">Chat &/or Text us for</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h5">Assistant!</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
        <Button
          onClick={() => {
            router.push("./chat");
          }}
          style={{
            color: "black",
            borderRadius: 20,
            borderColor: "black",
            backgroundcolor: "#dehfuu",
            padding: "5px 40px",
            fontSize: "18px",
          }}
          variant="outlined"
        >
          CHAT
        </Button>
        <Button
          style={{
            color: "black",
            borderRadius: 20,
            borderColor: "black",
            backgroundcolor: "#dehfuu",
            padding: "5px 40px",
            fontSize: "18px",
          }}
          variant="outlined"
        >
          CALL
        </Button>
      </Box>
    </>
  );
}
