import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { api } from "src/utils/api";
import moment from "moment";
import { useAuthState } from "src/context/auth.context";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Grid, Typography, Box } from "@mui/material";

export default function PlannerCalendar() {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [messages, setMessages] = useState({});
  const [selectedDate, setSelectedDate] = useState();
  const auth = useAuthState();

  useEffect(() => {
    api
      .getPlanner(`?id=${auth.user?._id}`)
      .then((res) => {
        // console.log("planner>>>", res.data);
        const messagesForDates = {};
        res.data.forEach((item) => {
          // console.log(">>>>>", item.title);
          messagesForDates[moment(item.date).format("YYYY-MM-DD")] = item.title;
        });
        setMessages(messagesForDates);
      })
      .catch((err) => {
        // console.log("planner>>>1", err);
      });
  }, [auth.user?._id]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontSize: 34 }}>
          planner
        </Typography>
      </Box>
      <div className="planner-calendar">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            const dateStr = moment(date).format("YYYY-MM-DD");
            setSelectedDate(date);
            if (messages[dateStr]) {
              alert(messages[dateStr]);
            }
          }}
          dateFormat="MM/dd/yyyy"
          inline
          highlightDates={Object.keys(messages).map((date) =>
            moment(date, "YYYY-MM-DD").toDate()
          )}
        />
      </div>
    </>
  );
}
