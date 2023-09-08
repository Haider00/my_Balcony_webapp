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
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
export default function PlannerCalendar() {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [messages, setMessages] = useState({});
  const [selectedDate, setSelectedDate] = useState(
    moment(defaultStartDate).format("YYYY-MM-DD")
  );
  const auth = useAuthState();

  useEffect(() => {
    api
      .getPlanner(`?id=${auth.user?._id}`)
      .then((res) => {
        const messagesForDates = {};
        res.data.forEach((item) => {
          const dateStr = moment(item.date).format("YYYY-MM-DD");
          if (!messagesForDates[dateStr]) {
            messagesForDates[dateStr] = [];
          }
          messagesForDates[dateStr].push(item);
        });
        setMessages(messagesForDates);
      })
      .catch((err) => {
        console.log("planner>>>1", err);
      });
  }, [auth.user?._id]);

  function handleCardClick(title) {
    alert(`Note: ${title}`);
  }
  return (
    <>
      <Grid container sx={{ justifyContent: "space-evenly", mt: 15, gap: 1 }}>
        <Grid sx={{ textAlign: "center" }} item xs={12} sm={12} md={5} lg={5}>
          <Typography variant="h5" sx={{ mb: 2, fontSize: 34 }}>
            planner
          </Typography>

          <div className="planner-calendar">
            <DatePicker
              selected={new Date(selectedDate)}
              onChange={(date) => {
                const dateStr = moment(date).format("YYYY-MM-DD");
                setSelectedDate(dateStr);
              }}
              dateFormat="MM/dd/yyyy"
              inline
              highlightDates={Object.keys(messages).map((date) =>
                moment(date, "YYYY-MM-DD").toDate()
              )}
            />
          </div>
        </Grid>

        {!isMediumScreen && (
          <Divider className="divider" orientation="vertical" flexItem />
        )}
        <Grid
          style={{ marginLeft: "15px", marginRight: "15px" }}
          sx={{ textAlign: "center" }}
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
        >
          <div>
            {messages[selectedDate] ? (
              messages[selectedDate].map((message, index) => (
                <div onClick={() => handleCardClick(message.title)}>
                  <Card
                    key={index}
                    sx={{
                      minWidth: "100%",
                      minHeight: 100,
                      borderRadius: 5,
                      mt: 3,
                      backgroundColor: "#faf9f6",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: 22,
                          fontWeight: 600,
                          textAlign: "left",
                          marginTop: 1,
                          maxWidth: "15ch", // Set the maximum width to 15 characters
                          whiteSpace: "nowrap", // Prevent text from wrapping
                          overflow: "hidden", // Hide overflow text
                          textOverflow: "ellipsis", // Display ellipsis for overflow text
                        }}
                        color="text.secondary"
                      >
                        {message.title}
                      </Typography>
                      <Grid
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 22,
                            fontWeight: 600,
                            textAlign: "left",
                            marginTop: 1,
                          }}
                          color="text.secondary"
                        >
                          Date: {moment(message.date).format("MMMM Do, YYYY")}
                        </Typography>
                        <ChevronRightIcon sx={{ mt: 1, cursor: "pointer" }} />
                      </Grid>
                      <Typography
                        sx={{
                          fontSize: 22,
                          fontWeight: 600,
                          textAlign: "left",
                          marginTop: 1,
                        }}
                        color="text.secondary"
                      >
                        Time: {moment(message.date).format("h:mm A")}{" "}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : (
              <Typography variant="body1">
                No events for selected date.
              </Typography>
            )}
          </div>
        </Grid>
        {!isMediumScreen && (
          <Divider className="divider" orientation="vertical" flexItem />
        )}
      </Grid>
    </>
  );
}
