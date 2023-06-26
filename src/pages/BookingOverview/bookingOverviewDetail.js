import React, { useEffect, useState } from "react";
import { Divider, Button } from "@mui/material";
import { Box, Typography, Rating } from "@mui/material";
import {
  useWorkspaceDetailState,
  useWorkspaceDetailDispatch,
} from "src/context/workspaceDetail.context";
import { useAuthState } from "src/context/auth.context";
import { useRouter } from "next/router";
import moment from "moment";
import { api } from "src/utils/api";
import { Snackbar, Grid } from "@mui/material";

export default function BookingOverviewDetail() {
  const router = useRouter();
  const workspaceDetailState = useWorkspaceDetailState();
  // console.log("WSD", workspaceDetailState);
  const auth = useAuthState();
  // console.log('auth', auth.user._id)
  const dispatch = useWorkspaceDetailDispatch();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [ratingStar, setRatingStar] = useState(2);
  const totalPeople = workspaceDetailState.workspaceDetail.perPerson;
  const maintenancesFee = workspaceDetailState.workspaceDetail.maintenancesFee;

  const otherFeeAmount = workspaceDetailState.workspaceDetail.otherFeeAmount;

  // console.log("WWW", workspaceDetailState.workspaceDetail.owner);

  const otherFeeName = workspaceDetailState.workspaceDetail.otherFeeName;
  const totalAmount =
    (parseInt(maintenancesFee) + parseInt(otherFeeAmount)) *
    parseInt(totalPeople);

  const selDates = workspaceDetailState.selectedDatesarr;
  // console.log("selDates", selDates);

  const selDatesLength = selDates?.length;

  const currentDate = () => {
    const currentDate = moment();
    const formattedDate = currentDate.format("DD-MM-YYYY");
    // console.log("formattedDate", formattedDate);
    return formattedDate;
  };

  const [stripeDetails, setStripeDetails] = useState({});
  const [cards, setCards] = useState({});

  useEffect(() => {
    if (auth.user && auth.user.stripeCustomer) {
      api
        .getStripeCustomer({
          query: `?stripeCustomer=${auth.user.stripeCustomer}`,
        })
        .then((res) => {
          setStripeDetails(res);
        })
        .catch((err) => {
          toastEvent("something went wrong while getting stripe details");
        });
    }
  }, [auth.user]);

  useEffect(() => {
    const rating = workspaceDetailState?.workspaceDetail?.rating;
    const sum = rating
      ?.map((rating) => {
        return rating?.rating?.$numberDecimal || 0.0;
      })
      .reduce((a, b) => a + b, 0);
    const average = sum / rating?.length;
    setRatingStar(average);
  }, []);

  const handleCardNumber = () => {
    return (
      cards &&
      cards.length &&
      cards.length > 0 &&
      cards.map((item) => {
        if (item.id === stripeDetails.default_source) {
          return "** ** ** " + item.last4;
        }
        return "";
      })
    );
  };

  useEffect(() => {
    if (auth.user && auth.user.stripeCustomer) {
      api
        .getCard({ query: `?stripeCustomer=${auth.user.stripeCustomer}` })
        .then((res) => {
          setCards(res.data);
        })
        .catch((err) => {
          toastEvent("something went wrong while getting cards");
        });
    }
  }, [auth.user]);

  const handleCheckout = () => {
    api
      .createBooking({
        date: selDates,
        workSpace: workspaceDetailState?.workspaceDetail?._id,
        buyer: auth?.user?._id,
        seller: workspaceDetailState?.workspaceDetail?.owner,
      })
      .then((res) => {
        // console.log("response>>", res);
        setMessage("Booking Completed Successfully");
        setDisplay(true);
        router.push("./");
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
  };

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
        <Typography variant="h6">
          {workspaceDetailState?.workspaceDetail?.name}
        </Typography>
        <Rating value={ratingStar} name="simple-controlled" readOnly />

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
        <Typography variant="h5">
          Would you like to cancle your order
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "flex-start",
        }}
      >
        <Typography sx={{ mt: 1 }} variant="subtitle1">
          You can cancle before 24 Hours of
        </Typography>
        <Typography sx={{ mb: 2 }} variant="subtitle1">
          The book start Date/Time for a full refund
        </Typography>
        <Typography variant="subtitle1">
          Failure to cancel before 24 results in a
        </Typography>
        <Typography variant="subtitle1">25% late cancelation charge</Typography>
      </Box>

      <Divider
        sx={{ mt: 2, mb: 2, alignSelf: "center" }}
        className="divider"
        orientation="horizontal"
        flexItem
        style={{ background: "black", width: "50%" }}
      />
      {handleCardNumber() && (
        <Typography variant="h6">Pay with Card No. Ending in </Typography>
      )}
      <Typography variant="h6">{handleCardNumber()}</Typography>
      <Divider
        sx={{ mt: 3, alignSelf: "center" }}
        className="divider"
        orientation="horizontal"
        flexItem
        style={{ background: "black", width: "50%" }}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
        <Button
          onClick={() => {
            if (handleCardNumber()) {
              handleCheckout();
            } else {
              setMessage("Card Not Found. Please Attach Your Card For Payment");
              setDisplay(true);
            }
          }}
          sx={{
            height: 30,
            backgroundColor: "#005451",
            fontSize: 18,
            fontWeight: "500",
            borderRadius: 4,
            textTransform: "capitalize",
            paddingX: 5,
            paddingY: 3,
            marginX: 1,
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
            marginX: 1,
          }}
          variant="contained"
        >
          Cancle Booking
        </Button>
      </Box>
      <Grid
        item
        xs={12}
        lg={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Grid>
    </>
  );
}
