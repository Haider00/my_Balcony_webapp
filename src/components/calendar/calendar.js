import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { api } from "src/utils/api";
import { Box, Button } from "@mui/material";
import { useWorkspaceState } from "src/context/workspace.context";
import {
  useWorkspaceDetailState,
  useWorkspaceDetailDispatch,
} from "src/context/workspaceDetail.context";
import moment from "moment";
import { useRouter } from "next/router";
import { useAuthState } from "src/context/auth.context";
import { Snackbar } from "@mui/material";

export default function ReactCalendar() {
  const router = useRouter();
  const auth = useAuthState();
  const dispatch = useWorkspaceDetailDispatch();
  const workspaceDetailState = useWorkspaceDetailState();
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [disableDates, setdisableDates] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);
  let [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);

  const [selectedMonth, setSelectedMonth] = useState(moment().format("M"));
  const currentDate = moment();

  // console.log('selectedDates', workspaceDetailState?.workspaceDayTime);
  // console.log("endDate", endDate);

  useEffect(() => {
    let days = [];
    let datesInMonth = [];

    if (workspaceDetailState && workspaceDetailState.workspaceDayTime) {
      for (let i = 0; i < workspaceDetailState.workspaceDayTime.length; i++) {
        const element = workspaceDetailState.workspaceDayTime[i];
        days.push(element.day);
      }
      // console.log("days", days);

      const currentMonth = moment().month();
      const currentYear = moment().year();
      const numDaysInMonth = moment().daysInMonth();

      for (let i = 1; i <= numDaysInMonth; i++) {
        const date = moment(`${currentYear}-${currentMonth + 1}-${i}`);
        const dayOfWeek = date.format("dddd").toLowerCase();
        // console.log('dayOfWeek',dayOfWeek)

        if (!days.includes(dayOfWeek)) {
          datesInMonth.push(date.format("YYYY-MM-DD"));
        }
      }
      setUnavailableDates(
        datesInMonth.map((dateString) => new Date(dateString))
      );
      // console.log("datesInMonth", datesInMonth);

      setAvailableDays(workspaceDetailState.workspaceDayTime);
    }
  }, [workspaceDetailState]);

  useEffect(() => {
    function getRange2(startDate, endDate, unit) {
      let dates = [];
      let currentDate = moment(startDate);
      let stopDate = moment(endDate);
      while (currentDate <= stopDate) {
        dates.push(currentDate.format("YYYY-MM-DD"));
        currentDate = currentDate.add(1, unit);
      }
      return dates;
    }
    if (workspaceDetailState?.workspaceDetail?._id) {
      api
        .getBooking({
          query: `?date[$gt]=${moment(selectedMonth, "M").startOf(
            "month"
          )}&date[$lt]=${moment(selectedMonth, "M").endOf("month")}&workSpace=${
            workspaceDetailState.workspaceDetail._id
          }`,
        })
        .then((response) => {
          // console.log("response<<<<", response.data);
          let dates = [];
          if (
            response &&
            response.data &&
            response.data.length &&
            response.data.length > 0
          ) {
            let objs = {};
            for (let i = 0; i < response.data.length; i++) {
              const element = response.data[i];
              let range = [];
              if (element.date.length > 1) {
                range = getRange2(element.date[0], element.date[1], "days");
              } else if (element.date.length > 0) {
                const dateinfo = element.date[0];
                range.push(dateinfo);
              }
              if (range.length > 1) {
                for (let a = 0; a < range.length; a++) {
                  const date = range[a];
                  let key = moment(date).format("YYYY-MM-DD");
                  dates.push(key);
                }
              } else if (range.length > 0) {
                dates.push(moment(range[0]).format("YYYY-MM-DD"));
              }
            }
          }
          setdisableDates(dates.map((dateString) => new Date(dateString)));
        });
    }
  }, [selectedMonth, workspaceDetailState.workspaceDetail._id]);

  // console.log("disableDates:", disableDates);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // console.log("selectionRange", selectionRange);
  const customRangeStyles = {
    selection: {
      background: "black",
      color: "white",
    },
  };

  const handleSelect = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  };

  const handleBooking = () => {
    if (!auth?.user?._id) {
      setMessage("You must be logged in first.");
      setDisplay(true);
      router.push("./signin");
    } else {
      const selectedDates = [];
      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        selectedDates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      dispatch({
        type: "SELECTED_DATES",
        payload: selectedDates,
      });
      const disDates = [...disableDates, ...selectedDates];
      setdisableDates(disDates);
      router.push(`./bookingOverview`);
    }
  };

  return (
    <div>
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
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        onShownDateChange={(res) => {
          moment(res).format("M");
        }}
        inputRanges={[]}
        staticRanges={[]}
        minDate={new Date()}
        disabledDates={[...unavailableDates, ...disableDates]}
        rangesStyles={customRangeStyles.selection.background}
        rangeColors={["#005451"]}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
          width: "100%",
          maxWidth: 500,
        }}
      >
        {workspaceDetailState?.workspaceDetail?.owner !== auth?.user?._id && (
          <Button
            onClick={() => {
              handleBooking();
            }}
            sx={{ backgroundColor: "#005451" }}
            variant="contained"
          >
            book workspace
          </Button>
        )}
      </Box>
    </div>
  );
}
