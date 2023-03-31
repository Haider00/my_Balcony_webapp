import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { api } from "src/utils/api";
import { Box, Button } from "@mui/material";
import { useWorkspaceState } from "src/context/workspace.context";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";
import moment from "moment";
export default function ReactCalendar() {
  const workspaceState = useWorkspaceState();
  const workspaceDetailState = useWorkspaceDetailState();
  console.log("popo", workspaceDetailState);
  const defaultStartDate = new Date(2023, 2, 14);
  const defaultEndDate = new Date(2023, 2, 17);

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [disableDates, setdisableDates] = useState([]);
  const [byDefaultDisable, setByDefaultDisable] = useState([]);


  const [selectedMonth, setSelectedMonth] = useState(moment().format("M"));

  console.log('ffff',byDefaultDisable);

  useEffect(() => {
    if (workspaceDetailState && workspaceDetailState.workspaceDayTime) {
      
      setByDefaultDisable(workspaceDetailState.workspaceDayTime);
    }

  }, [workspaceDetailState.workspaceDayTime])

  const currentDate = moment();
  const monthDays = Array(currentDate.daysInMonth())
    .fill()
    .map((_, index) => moment(currentDate).date(index + 1));

  const filteredDays = monthDays.filter(
    (day) => !byDefaultDisable.find((time) => time.day === day.format("dddd").toLowerCase())
  );
  console.log('days>>', filteredDays)

  filteredDays.forEach((day) => {
    const formattedDay = moment(day._d).format('YYYY-MM-DD');
    console.log('pppp',formattedDay)
    const isAlreadyDisabled = disableDates.find(disabledDay => moment(disabledDay).isSame(formattedDay, 'day'));
    if (!isAlreadyDisabled) {
      // setdisableDates(prevState => [...prevState, formattedDay]);
    }
  });

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
    api
      .getBooking({
        query: `?date[$gt]=${moment(selectedMonth, "M").startOf(
          "month"
        )}&date[$lt]=${moment(selectedMonth, "M").endOf("month")}&workSpace=${workspaceDetailState.workspaceDetail._id
          }`,
      })
      .then((response) => {
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
            const range = getRange2(element.date[0], element.date[1], "days");
            for (let a = 0; a < range.length; a++) {
              const date = range[a];
              let key = moment(date).format("YYYY-MM-DD");
              dates.push(key);
            }
          }
        }
        setdisableDates(dates.map((dateString) => new Date(dateString)));
        console.log("disableDates:", dates);
        console.log("datak:", response.data);
      });
  }, [selectedMonth, workspaceDetailState.workspaceDetail._id]);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const customRangeStyles = {
    selection: {
      background: "black",
      color: "white",
    },
  };

  const handleSelect = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    console.log("date....", date);
  };

  const handleBooking = () => {
    const selectedDates = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      selectedDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // const updatedDates = [...unavailableDates, ...selectedDates];
    const disDates = [...disableDates, ...selectedDates];
    setdisableDates(disDates);
    // setUnavailableDates(updatedDates);
    // console.log("bahibahi", updatedDates);
    api
      .createBooking({ date: selectedDates })
      .then((res) => {
        console.log("response>>", res);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        inputRanges={[]}
        staticRanges={[]}
        disabledDates={disableDates}
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
        <Button
          onClick={handleBooking}
          sx={{ backgroundColor: "#005451" }}
          variant="contained"
        >
          Book Workspace
        </Button>
      </Box>
    </div>
  );
}
