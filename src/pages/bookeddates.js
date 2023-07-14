import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { CustomHeader } from "../component";
import { WebTabs } from "../component";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/images/tablebottom2.png";
import { Divider, Box } from "@mui/material";
import Incomingbooking from "./BookedDates/incomingbooking";
import Ongoingbooking from "./BookedDates/ongoingbooking";
import Bookinghistory from "./BookedDates/bookinghistory";
import { useAuthState } from "src/context/auth.context";
import moment from "moment";
import { api } from "src/utils/api";
import Image from "next/image";

export default function bookeddates() {
  const [bookingHistoryPage, setBookingHistoryPage] = useState(1);
  const [bookinghistory, setBookingHistory] = useState({});
  const [onGoingBooking, setOnGoingBooking] = useState({});
  const [inComingBooking, setInComingBooking] = useState({});
  const [page, setPage] = useState(1);
  const [inComingPage, setInComingPage] = useState(1);

  const auth = useAuthState();

  // console.log("authState>>>", auth.userType);

  useEffect(() => {
    let query = `?page=${bookingHistoryPage}&limit=20&status=approve&date[$lt]=${moment().startOf(
      "D"
    )}`;
    if (auth.user && auth.user.userType && auth.user.userType === "seller") {
      query += `&seller=${auth.user?._id}`;
    } else {
      query += `&user=${auth.user?._id}`;
    }
    api
      .getBooking({
        query: query,
      })
      .then((res) => {
        // console.log("res<<<<", res.data);
        setBookingHistory(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [bookingHistoryPage, auth.user]);

  useEffect(() => {
    let query = `?page=${page}&limit=10&status=pending&date[$gte]=${moment().startOf(
      "D"
    )}&date[$lte]=${moment().endOf("D")}`;
    if (auth.user && auth.user.userType && auth.user.userType === "seller") {
      query += `&seller=${auth.user?._id}`;
    } else {
      query += `&user=${auth.user?._id}`;
    }
    api
      .getBooking({
        query,
      })
      .then((res) => {
        // console.log("res>>>>222", res);
        setOnGoingBooking(res.data);
      })
      .catch((err) => {
        // console.log("err>>>>>>>", err);
      });
  }, [page, auth.user]);

  useEffect(() => {
    let query = `?page=${inComingPage}&limit=3&status=pending&date[$gt]=${moment().startOf(
      "D"
    )}`;
    if (auth.user && auth.user.userType && auth.user.userType === "seller") {
      query += `&seller=${auth.user?._id}`;
    } else {
      query += `&user=${auth.user?._id}`;
    }
    api
      .getBooking({
        query: query,
      })
      .then((res) => {
        // console.log("resss", res.data);
        setInComingBooking(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [inComingPage, auth.user]);

  return (
    <>
      <div
        style={{
          marginLeft: 20,
          top: "160px",
          position: "fixed",
          zIndex: 10,
        }}
      >
        <WebTabs selectedTab={4} />
      </div>
      <Box
        style={{
          maxWidth: 1400,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box>
          <CustomHeader />
        </Box>

        <Grid
          container
          style={{
            marginTop: 120,
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={4} lg={4}>
            {auth.userType == "seller" ? (
              <Incomingbooking inComingBooking={inComingBooking} />
            ) : null}
            <Ongoingbooking onGoingBooking={onGoingBooking} />
          </Grid>
          <Divider
            sx={{ backgroundColor: "#000" }}
            orientation="vertical"
            flexItem
          />
          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Bookinghistory bookinghistory={bookinghistory} />
          </Grid>
        </Grid>
      </Box>
      <Grid
        sx={{
          marginTop: 4,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
        container
        spacing={2}
      >
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{
            marginBottom: 4,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <MenuSection />
        </Grid>
        <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Image
              style={{ objectFit: "contain", width: "100%", height: "1000px" }}
              src={TableBottom}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
