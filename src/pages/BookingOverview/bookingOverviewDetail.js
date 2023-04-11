import React, { useEffect, useState } from "react";
import { Divider, Button } from "@mui/material";
import { Box, Typography, Rating } from "@mui/material";
import { useWorkspaceDetailState,useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import { useRouter } from "next/router";
import moment from "moment";
import { api } from "src/utils/api";
import { Snackbar } from "@mui/material";

export default function BookingOverviewDetail() {

  const router = useRouter();
  const workspaceDetailState = useWorkspaceDetailState();
  const dispatch = useWorkspaceDetailDispatch();
  console.log("WorkspaceID", workspaceDetailState.workspaceDetail._id);
  console.log("SelectedDates", workspaceDetailState.selectedDatesarr);
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
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
    console.log('formattedDate',formattedDate);
    return formattedDate;
  }

  const handleCheckout=()=>{
    api
      .createBooking({ date: workspaceDetailState.selectedDatesarr, workSpace: workspaceDetailState.workspaceDetail._id })
      .then((res) => {
        console.log("response>>", res);
        setMessage("Booking Completed Successfully");
        setDisplay(true);
        router.push('./');
        dispatch({
          type: "WORKSPACE_DETAIL",
          payload: {},
        });
        dispatch({
          type: "SELECTED_DATES",
          payload: [],
        });
      })
      .catch(() => {
        // console.log("error");
      });
  }

  return (
    <>
    <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={display}
        onClose={() => {
          setDisplay(false);
        }}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{message}</span>}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 5,
        }}
      >
        <Typography variant="h6">BushwickLofts</Typography>
        <Rating
          defaultValue={2.5}
          name="simple-controlled" />

        <Typography sx={{ marginTop: 1 }} variant="body2">
          Date of Workspace Checkin: {currentDate()}
        </Typography>

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
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          marginTop: 4,
        }}
      >
        <Typography variant="h5">Would you like to cancle your order</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "flex-start",
        }}
      >
        <Typography sx={{ mt: 1 }} variant="subtitle1">You can cancle before 24 Hours of</Typography>
        <Typography sx={{ mb: 2 }} variant="subtitle1">The book start Date/Time for a full refund</Typography>
        <Typography variant="subtitle1">Failure to cancel before 24 results in a</Typography>
        <Typography variant="subtitle1">25% late cancelation charge</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
        <Button
        onClick={handleCheckout}
          sx={{
            height: 30,
            backgroundColor: "#005451",
            fontSize: 18,
            fontWeight: "500",
            borderRadius: 4,
            textTransform: "capitalize",
            paddingX: 5,
            paddingY: 3,
            marginX:1
          }}
          variant="contained"
        >
          CheckOut
        </Button>
        <Button
          sx={{
            height: 30,
            backgroundColor: "#005451",
            fontSize: 18,
            fontWeight: "500",
            borderRadius: 4,
            textTransform: "capitalize",
            paddingX: 2,
            paddingY: 3,
            marginX:1
          }}
          variant="contained"
        >
          Cancle Booking
        </Button>
      </Box>
    </>
  );
}
// import React from 'react'
// import { Divider, Button } from '@mui/material';
// import GroupIcon from '@mui/icons-material/Group';
// import { Box, Typography, Rating } from '@mui/material'
// import { Card, CardContent } from '@mui/material'
// import { FormControlLabel } from '@mui/material';
// import { Checkbox } from '@mui/material';

// export default function EditPortion() {
//     return (
//         <>
//             <Box sx={{mt:4, display: 'flex', justifyContent: 'flex-start'}}>
//                 <Typography variant="h5">Edit</Typography>
//             </Box>

//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: 2 }}>
//                 <Card sx={{ bgcolor: '#f2f7f6', width: '100%' }}>
//                     <CardContent>

//                         <Typography variant='h6'>
//                             BushwickLofts
//                         </Typography>

//                         <Typography sx={{ marginTop: 1 }} variant='body2'>
//                             Time Frame of services 8AM - 5PM EST
//                         </Typography>


//                         <Typography sx={{ marginTop: 1 }} variant='body2'>
//                             Total Number of People 5
//                         </Typography>

//                         <Typography sx={{ marginTop: 1 }} variant='h5'>
//                             Total $179.20
//                         </Typography>

//                     </CardContent>
//                 </Card>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: 3 }}>
//                 <FormControlLabel control={<Checkbox />} fontSize='25px' label={<Typography sx={{fontWeight:'bold', color:'black    '}} variant="h5" color="textSecondary">CoWorking Workspace</Typography>} />
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
//                 <Typography variant="caption">Workspace would be shared by multiple </Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
//                 <Typography variant="caption">People from different companies </Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
//                 <Typography variant="caption">Within the same date & time frame </Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
//                 <Typography variant="caption">-If not checked, than only one company &/or</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
//                 <Typography variant="caption">individual can book the booked date/time</Typography>
//             </Box>

//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop:4 }}>
//                 <Typography variant="h5">Chat &/or Text us for</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
//                 <Typography variant="h5">Assistant!</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 5 }}>
//                 <Button style={{
//                     color: 'black',
//                     borderRadius: 20,
//                     borderColor:'black',
//                     backgroundcolor: "#dehfuu",
//                     padding: "5px 40px",
//                     fontSize: "18px"
//                 }} variant="outlined">CHAT</Button>
//                 <Button
//                     style={{
//                         color: 'black',
//                         borderRadius: 20,
//                         borderColor:'black',
//                         backgroundcolor: "#dehfuu",
//                         padding: "5px 40px",
//                         fontSize: "18px"
//                     }} variant="outlined">CALL</Button>
//             </Box>
//         </>
//     )
// }
