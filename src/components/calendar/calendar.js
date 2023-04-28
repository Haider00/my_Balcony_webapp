// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { DateRangePicker } from "react-date-range";

// export default function ReactCalendar() {
//   const defaultStartDate = new Date(2023, 2, 14);
//   const defaultEndDate = new Date(2023, 2, 17);

//   const [startDate, setStartDate] = useState(defaultStartDate);
//   const [endDate, setEndDate] = useState(defaultEndDate);

//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };
//   const customRangeStyles = {
//     selection: {
//       background: "black",
//       color: "white",
//     },
//   };

//   const handleSelect = (date) => {
//     setStartDate(date.selection.startDate);
//     setEndDate(date.selection.endDate);
//     console.log("date....", date);
//   };

//   return (
//     <div>
//       <DateRangePicker
//         ranges={[selectionRange]}
//         onChange={handleSelect}
//         inputRanges={[]}
//         staticRanges={[]}
//         rangesStyles={customRangeStyles.selection.background}
//         rangeColors={[]}
//       />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { api } from "src/utils/api";
import { Box, Button } from "@mui/material";
import { useWorkspaceState } from "src/context/workspace.context";
import { useWorkspaceDetailState } from "src/context/workspaceDetail.context";
import { useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import { useRouter } from "next/router";
import moment from "moment";
export default function ReactCalendar() {
  const router = useRouter();
  const WorkspaceDetailDispatch = useWorkspaceDetailDispatch();
  const workspaceState = useWorkspaceState();
  const workspaceDetailState = useWorkspaceDetailState();
  console.log("popo", workspaceDetailState);
  const defaultStartDate = new Date(2023, 2, 14);
  const defaultEndDate = new Date(2023, 2, 17);

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [disableDates, setdisableDates] = useState([]);

  console.log("jhjh:", disableDates);
  const [selectedMonth, setSelectedMonth] = useState(moment().format("M"));
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
    console.log(
      "TESTING>>>>>",
      `?date[$gt]=${moment(selectedMonth, "M").startOf(
        "month"
      )}&date[$lt]=${moment(selectedMonth, "M").endOf("month")}`
    );
    api
      .getBooking({
        query: `?date[$gt]=${moment(selectedMonth, "M").startOf(
          "month"
        )}&date[$lt]=${moment(selectedMonth, "M").endOf("month")}&workSpace=${
          workspaceDetailState.workspaceDetail._id
        }`,
      })
      .then((response) => {
        console.log("datak:", response);
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
      })
      .catch((err) => {
        console.log("datak:err", err);
      });
  }, [selectedMonth, workspaceDetailState.workspaceDetail._id]);
  // const [selectedMonth, setSelectedMonth] = useState(moment().format("M"));

  // useEffect(() => {
  //   api
  //     .getBooking({
  //       query: `?date[$gt]=${moment(selectedMonth, "M").startOf(
  //         "month"
  //       )}&date[$lt]=${moment(selectedMonth, "M").endOf("month")}&workSpace=${
  //         workspaceDetailState.workspaceDetail._id
  //       }`,
  //     })
  //     .then((response) => {
  //       console.log("fgfgf", response.data);

  //       setUnavailableDates(response.data);
  //     });
  // }, [selectedMonth, workspaceDetailState.workspaceDetail._id]);
  // const [selectedMonth, setSelectedMonth] = useState(moment().format("M"));
  // useEffect(() => {
  //   api.getBooking({
  //     query: `?date[$gt]=${moment(selectedMonth, "M").startOf(
  //       "month"
  //     )}&date[$lt]=${moment(selectedMonth, "M").endOf("month")}&workSpace=${
  //       workspaceDetailState.workspaceDetail._id
  //     }`,
  //   });
  //   // const res = [
  //   //   {
  //   //     date: [
  //   //       new Date(2023, 2, 11),
  //   //       new Date(2023, 2, 12),
  //   //       new Date(2023, 2, 13),
  //   //     ],
  //   //   },
  //   //   {
  //   //     date: [
  //   //       new Date(2023, 2, 18),
  //   //       new Date(2023, 2, 19),
  //   //       new Date(2023, 2, 20),
  //   //       new Date(2023, 2, 21),
  //   //       new Date(2023, 2, 22),
  //   //     ],
  //   //   },
  //   // ];
  //   // let arr = [];

  //   // for (let i = 0; i < res.length; i++) {
  //   //   const element = res[i];
  //   //   for (let a = 0; a < element.date.length; a++) {
  //   //     const element2 = element.date[a];
  //   //     arr.push(element2);
  //   //   }
  //   // }
  //   // setUnavailableDates([...arr]);
  //   setUnavailableDates(selectedMonth);
  // }, []);

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
    console.log("poli>>", selectedDates);
    WorkspaceDetailDispatch({
      type: "SELECTED_DATES",
      payload: selectedDates,
    });
    // const updatedDates = [...unavailableDates, ...selectedDates];
    const disDates = [...disableDates, ...selectedDates];
    setdisableDates(disDates);

    api
      .createBooking({ date: selectedDates })
      .then((res) => {
        console.log("response>>1", res);
      })
      .catch(() => {
        console.log("error1");
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
          onClick={() => {
            router.push("./bookingOverview");
            handleBooking();
          }}
          sx={{ backgroundColor: "#005451" }}
          variant="contained"
        >
          Book Workspace
        </Button>
      </Box>
    </div>
  );
}
