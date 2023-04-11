import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Box, Typography } from "@mui/material";
import moment from "moment";


export default function ReactCalendar() {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);


  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  console.log('selectionRange', selectionRange)
  const customRangeStyles = {
    selection: {
      background: "black",
      color: "white",
    },
  };

  const handleSelect = (date) => {
    // console.log("date....", calendar);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  };

  return (
    <div>
      <Typography variant="h5" sx={{mb:3}}>Planner</Typography>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        onShownDateChange={(res) => { moment(res).format("M") }}
        inputRanges={[]}
        staticRanges={[]}
        minDate={new Date()}
        // disabledDates={unavailableDates}
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
      </Box>
    </div>
  );
}
