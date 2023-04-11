import React, {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import { CustomHeader } from "../component";
import { WebTabs } from "../component";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/svg/TableBottom";
import { Divider } from "@mui/material";
import Incomingbooking from "./BookedDates/incomingbooking";
import Ongoingbooking from "./BookedDates/ongoingbooking";
import Bookinghistory from "./BookedDates/bookinghistory";
import { useAuthState } from "src/context/auth.context";
import moment from "moment";
import { api } from "src/utils/api";

export default function bookeddates() {

  const [bookingHistoryPage, setBookingHistoryPage] = useState(1);
  const [bookinghistory, setBookingHistory] = useState({});
  const [onGoingBooking, setOnGoingBooking] = useState({});
  const [inComingBooking, setInComingBooking] = useState({});
  const [page, setPage] = useState(1);
  const [inComingPage, setInComingPage] = useState(1);




  const auth = useAuthState();

  console.log('authState>>>', auth.userType);

  useEffect(() => {
    let query = `?page=${bookingHistoryPage}&limit=20&status=approve&date[$lt]=${moment().startOf(
      'D',
    )}`;
    if (auth.user && auth.user.userType && auth.user.userType === 'seller') {
      query += `&seller=${auth.user?._id}`;
    } else {
      query += `&user=${auth.user?._id}`;
    }
    api
      .getBooking({
        query: query,
      })
      .then(res => {
        console.log('res<<<<',res.data);
        setBookingHistory(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [bookingHistoryPage, auth.user]);

  useEffect(() => {
    let query = `?page=${page}&limit=10&status=approve&date[$gte]=${moment().startOf(
      'D',
    )}&date[$lte]=${moment().endOf('D')}`;
    if (auth.user && auth.user.userType && auth.user.userType === 'seller') {
      query += `&seller=${auth.user?._id}`;
    } else {
      query += `&user=${auth.user?._id}`;
    }
    api
      .getBooking({
        query,
      })
      .then(res => {
        console.log('res>>>>222',res);
        setOnGoingBooking(res.data);
      })
      .catch(err => {
        console.log('err>>>>>>>',err);
      });
  }, [page, auth.user]);

  useEffect(() => {
    let query = `?page=${inComingPage}&limit=3&status=pending&date[$gt]=${moment().startOf(
      'D',
    )}`;
    if (auth.user && auth.user.userType && auth.user.userType === 'seller') {
      query += `&seller=${auth.user?._id}`;
    } else {
      query += `&user=${auth.user?._id}`;
    }
    api
      .getBooking({
        query: query,
      })
      .then(res => {
        console.log('resss',res.data);
        setInComingBooking(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [inComingPage, auth.user]);

  return (
    <>
      <CustomHeader />
      <WebTabs selectedTab={4}/>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
        }}
        container
      >
        <Grid
          item
          xs={12}
          lg={4}
          md={12}
          sx={{
            // display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {auth.userType == 'seller' ? <Incomingbooking inComingBooking={inComingBooking} /> : null}
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

      <Grid container spacing={4} sx={{ display: "flex", marginTop: 10 }}>
        <Grid
          sx={{ display: "flex", marginTop: 8, justifyContent: "center" }}
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
        >
          <MenuSection />
        </Grid>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
          sm={12}
          md={7}
          lg={8}
        >
          <TableBottom />
        </Grid>
      </Grid>
    </>
  );
}
