import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { IncrementalInput, Title, TextInput } from "../../component";
import { useRouter } from "next/router";
import TableTop from "src/assets/svg/TableTop";
import { useAuthState, useAuthDispatch } from "src/context/auth.context";
import { Snackbar, Button } from "@mui/material";
import { capitalize } from "lodash";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import DatePicker from "@mui/lab/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import GoogleAutoComplete from "../../component/GoogleAutoComplete/index.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const FormWb = () => {
  const [people, setPeople] = useState(null);
  console.log("poppala", people);
  const handleIncrement = () => {
    setPeople((prevCount) => prevCount + 1);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const parsedValue = parseInt(newValue);
    const updatedValue = isNaN(parsedValue) ? 0 : parsedValue;

    setPeople(updatedValue);
  };

  const handleDecrement = () => {
    if (people > 0) {
      setPeople((prevCount) => prevCount - 1);
    }
  };
  const [checkIN, setcheckIN] = useState(null);
  const handleCheckin = (newValue) => {
    setcheckIN(newValue);
  };

  const [checkOut, setcheckOut] = useState(null);
  const handleCheckout = (newValue) => {
    setcheckOut(newValue);
  };

  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        checkin: checkIN?.toISOString(),
        checkout: checkOut?.toISOString(),
        people: people,
        place: placeValue,
      },
    });
  };
  const [selectedcheckinDate, setSelectedcheckinDate] = useState(null);

  const handlecheckinDateChange = (event) => {
    setSelectedcheckinDate(event.target.value);
  };

  const [selectedcheckoutDate, setSelectedcheckoutDate] = useState(null);

  const handlecheckoutDateChange = (event) => {
    setSelectedcheckoutDate(event.target.value);
  };

  const [placeValue, setPlaceValue] = useState("");
  console.log("place", placeValue);
  const handlePlaceSelect = (value) => {
    setPlaceValue(value);
  };
  return (
    <Grid item sm={12} xs={12} md={12}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 7,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: { xs: 1, md: 2 },
            marginX: 3.5,
            marginY: 1.5,
            // justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              marginLeft: "15px",
            }}
          >
            find workspaces
          </Typography>
          <GoogleAutoComplete onplaceSelect={handlePlaceSelect} />

          {/* <TextInput
            alignItems="flex-start"
            id="check-in"
            label="check-in"
            size="small"
            width="75%"
          />
          <TextInput
            alignItems="flex-start"
            id="check-out"
            label="check-out"
            size="small"
            width="75%"
          /> */}
          {/* <div
            style={{
              marginLeft: 15,
              position: "relative",
              marginTop: 15,
              marginBottom: 15,
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              font: "inherit",
              color: "#000",
              backgroundColor: "transparent",
              outline: "1px solid #000",
              width: "75%",
              height: "59px",
              justifyContent: "center",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <label
                style={{
                  position: "absolute",
                  left: 28,
                  top: -13,
                  color: "#000",
                  paddingInline: "5px",
                  backgroundColor: "#fff",
                  fontSize: "20px",
                  transform: "scale(0.9)",
                }}
              >
                {"check-in"}
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TimePicker
                  label=""
                  value={checkIN}
                  onChange={handleCheckin}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      value={checkIN}
                      sx={{ width: 80, marginX: 1.5 }}
                      id="standard-basic"
                      label=""
                      variant="standard"
                      placeholder="hh:mm"
                    />
                  )}
                />
              </div>
            </LocalizationProvider>
          </div>

          <div
            style={{
              marginLeft: 15,
              position: "relative",
              marginTop: 15,
              marginBottom: 15,
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              font: "inherit",
              color: "#000",
              backgroundColor: "transparent",
              outline: "1px solid #000",
              width: "75%",
              height: "59px",
              justifyContent: "center",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <label
                style={{
                  position: "absolute",
                  left: 28,
                  top: -13,
                  color: "#000",
                  paddingInline: "5px",
                  backgroundColor: "#fff",
                  fontSize: "20px",
                  transform: "scale(0.9)",
                }}
              >
                {"check-out"}
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TimePicker
                  label=""
                  value={checkOut}
                  onChange={handleCheckout}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      value={checkOut}
                      sx={{ width: 80, marginX: 1.5 }}
                      id="standard-basic"
                      label=""
                      variant="standard"
                      placeholder="hh:mm"
                    />
                  )}
                />
              </div>
            </LocalizationProvider>
          </div> */}
          <div
            style={{
              marginLeft: 15,
              position: "relative",
              marginTop: 15,
              marginBottom: 15,
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              font: "inherit",
              color: "#000",
              backgroundColor: "transparent",
              outline: "1px solid #000",
              width: "75%",
              height: "59px",
              justifyContent: "center",
            }}
          >
            <label
              style={{
                position: "absolute",
                left: 28,
                top: -13,
                color: "#000",
                paddingInline: "5px",
                backgroundColor: "#fff",
                fontSize: "20px",
                transform: "scale(0.9)",
              }}
              htmlFor="date-picker"
            >
              check-in
            </label>
            <input
              style={{ border: "none", outline: "none" }}
              type="date"
              id="date-picker"
              value={selectedcheckinDate}
              onChange={handlecheckinDateChange}
            />
          </div>
          <div
            style={{
              marginLeft: 15,
              position: "relative",
              marginTop: 15,
              marginBottom: 15,
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              font: "inherit",
              color: "#000",
              backgroundColor: "transparent",
              outline: "1px solid #000",
              width: "75%",
              height: "59px",
              justifyContent: "center",
            }}
          >
            <label
              style={{
                position: "absolute",
                left: 28,
                top: -13,
                color: "#000",
                paddingInline: "5px",
                backgroundColor: "#fff",
                fontSize: "20px",
                transform: "scale(0.9)",
              }}
              htmlFor="date-picker"
            >
              check-out
            </label>
            <input
              style={{ border: "none", outline: "none" }}
              type="date"
              id="date-picker"
              value={selectedcheckoutDate}
              onChange={handlecheckoutDateChange}
            />
          </div>

          <IncrementalInput
            count={people}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleChange={handleChange}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#005451",
              width: "90%",
              alignSelf: "center",
              borderRadius: "16px",
              marginBottom: 3,
              "&:hover": {
                backgroundColor: "#ffff00",
                color: "#000",
              },
            }}
            onClick={handleSearch}
          >
            SEARCH
          </Button>
        </Card>
      </Box>
    </Grid>
  );
};
export const LeftWallpaperWb = () => {
  return (
    <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={12} md={12}>
      <TableTop sx={{ width: "20%", height: "50%" }} />
    </Grid>
  );
};
export const HostWorkSpaceWb = () => {
  const auth = useAuthState();
  const router = useRouter();
  const authDispatch = useAuthDispatch();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");

  function sellerAccessControl() {
    authDispatch({ type: "SET_USER_TYPE", payload: "seller" });
  }

  function handleHostWorkspace() {
    sellerAccessControl();
    router.push("./hostworkspace");
  }

  function handleHostWorkspaceSignIn() {
    router.push("./signup");
  }

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
      <Grid
        sx={{ display: { xs: "none", md: "flex" }, marginY: 4, marginX: 0 }}
        container
        spacing={2}
      >
        <Grid item md={5} lg={5}>
          <img
            src={`${"https://wallpaperaccess.com/full/3678503.png"}`}
            srcSet={`${"https://wallpaperaccess.com/full/38119.jpg"}`}
            alt={"Title"}
            style={{
              display: "block",
              width: 654,
              height: 772,
              borderRadius: 5,
            }}
          />
        </Grid>
        <Grid item md={7} lg={7}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "80px",
                fontFamily: "Roboto",
                marginX: 1,
              }}
              variant="h4"
            >
              host
            </Typography>
            <Typography
              sx={{
                fontSize: "80px",
                fontFamily: "Roboto",
                marginX: 1,
              }}
              variant="h4"
            >
              your
            </Typography>
            <Typography
              sx={{
                fontSize: "80px",
                fontFamily: "Roboto",
                marginX: 1,
              }}
              variant="h4"
            >
              workspace
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginBottom: 1,
              marginTop: 1,
            }}
          >
            <Typography
              sx={{
                marginX: 1,
                fontSize: 32,
                fontWeight: "600",
              }}
            >
              {"Indoor and Outdoor! Let People"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                fontSize: 32,
                fontWeight: "600",
              }}
            >
              {"Discover your workspace on our"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                fontSize: 32,
                fontWeight: "600",
              }}
            >
              {"Platform"}
            </Typography>
          </Box>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"Learn"}
          </Typography>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"Study"}
          </Typography>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"Work"}
          </Typography>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"Collaborate"}
          </Typography>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"& More"}
          </Typography>

          {auth?.user?._id ? (
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#005451",
                width: "325px",
                height: "59px",
                alignSelf: "center",
                marginBottom: 3,
                borderRadius: "16px",
                fontSize: "25px",
                "&:hover": {
                  backgroundColor: "#ffff00",
                  color: "#000",
                },
              }}
              onClick={handleHostWorkspace}
            >
              Host Workspace
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#005451",
                width: "325px",
                height: "59px",
                alignSelf: "center",
                marginBottom: 3,
                borderRadius: "16px",
                fontSize: "25px",
                "&:hover": {
                  backgroundColor: "#ffff00",
                  color: "#000",
                },
              }}
              onClick={handleHostWorkspaceSignIn}
            >
              Sign Up
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default HostWorkSpaceWb;
