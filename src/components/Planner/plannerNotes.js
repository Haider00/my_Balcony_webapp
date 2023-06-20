import React, { useEffect, useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DatePicker from "react-datepicker";
import TextField from "@mui/material/TextField";
import { api } from "src/utils/api";
import { useAuthState } from "src/context/auth.context";
import { Snackbar, Box } from "@mui/material";
import { useRouter } from "next/router";

export default function PlannerNotes() {
  // const [value, setValue] = useState(2);
  let [message, setMessage] = useState("");
  let [message1, setMessage1] = useState("");
  const [display, setDisplay] = useState(false);
  const router = useRouter();
  console.log("message>>>", message);

  const authState = useAuthState();

  const [selectedDate, setSelectedDate] = useState(new Date());

  // console.log('selectedDate', selectedDate)

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  function saveData() {
    if (!authState?.user?._id) {
      setMessage1("You must be logged in");
      setDisplay(true);
      router.push("./signin");
    } else {
      api
        .createPlanner({
          user: authState.user?._id,
          title: message,
          date: selectedDate,
        })
        .then((res) => {
          setMessage("");
          setMessage1("Planner Saved");
          setDisplay(true);
        })
        .catch((err) => {
          console.log("resp>>>1", err);
        });
    }
  }

  const customStyles = {
    input: {
      fontSize: "20px",
      padding: "10px",
      textAlign: "center",
      borderRadius: "10px",
      borderColor: "#005451",
    },
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={display}
        onClose={() => {
          setDisplay(false);
        }}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{message1}</span>}
      />
      <Box style={{ width: "100%", paddingLeft: 25 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "left" }}>
          date notes
        </Typography>
      </Box>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
        customInput={<input style={customStyles.input} />}
        minDate={new Date()}
      />
      <Card sx={{ minWidth: 300, minHeight: 200, borderRadius: 5, mt: 3 }}>
        <CardContent sx={{ wordWrap: "break-word" }}>
          <TextField
            sx={{ mt: 2 }}
            id="standard-basic"
            placeholder="Start Typing here (100 Characters Limit)"
            variant="standard"
            fullWidth
            multiline
            rowsMax={2}
            value={message}
            onChange={(e) => {
              {
                if (e.target.value.length >= 100) {
                  alert("100 characters allowed");
                  message = "";
                } else {
                  setMessage(e.target.value);
                }
              }
            }}
          />
        </CardContent>
      </Card>
      <Button
        sx={{ marginTop: 2, paddingX: 4, backgroundColor: "#005451" }}
        variant="contained"
        onClick={() => {
          saveData();
        }}
      >
        SAVE
      </Button>
    </Grid>
  );
}
