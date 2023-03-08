import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import {
  CustomHeader,
  CheckBoxLabel,
  CheckBoxInput,
  TimeRange,
  Button,
} from "../component";
import { LeftWallpaperWb, FormWb, WorksapceImages } from "./WorkSpace/wb";
import { Amenities } from "./WorkSpace/Amenities";
import React, { useState } from "react";
import { api } from "../utils/api";
import { Snackbar } from "@mui/material";
import dynamic from "next/dynamic";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CropSquare from "@mui/icons-material/CropSquare";
import Checkbox from "@mui/material/Checkbox";
import CheckBox from "@mui/icons-material/CheckBox";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

const Map = dynamic(() => import("./WorkSpace/map"), { ssr: false });

export default function HostWorkSpace({}) {
  const [PhotoId, setPhotoId] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [photoName, setphotoName] = useState("+Add photo ID");

  const handlePhotoSelect = (event) => {
    setPhotoId(event.target.files[0]);
    const selectedphoto = event.target.files[0];
    setPhotoUrl(selectedphoto ? URL.createObjectURL(selectedphoto) : null);
    const photoName = selectedphoto ? "" : "";
    setphotoName(photoName);
  };

  const [fileName, setfileName] = useState(
    "+Add property lease or ownership documents for this properties ***optional"
  );
  const [FileId, setFileId] = useState(null);

  const handleFileSelect = (event) => {
    setFileId(event.target.files[0]);
    const selectedFile = event.target.files[0];
    const fileName = selectedFile ? (
      <div>
        <CloudDoneIcon />
        <div>{selectedFile.name}</div>
      </div>
    ) : (
      ""
    );
    setfileName(fileName);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    setWorkSpace({ ...workSpace, otherFeeName: e.target.value });
  };
  const [info, setInfo] = useState({});

  const [currency, setcurrency] = React.useState("");

  const handleChange = (event) => {
    setcurrency(event.target.value);
  };
  const [workSpace, setWorkSpace] = useState();
  const [workSpaceAvailability, setWorkSpaceAvailability] = useState();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [workPlaceDayAndTime, setWorkPlaceDayAndTime] = useState([]);
  const [workPlaceDay, setWorkPlaceDay] = useState([]);

  const handleHostWorkSpace = () => {
    api
      .createWorkSpace(workSpace)
      .then((res) => {
        setMessage("workspace hosted successfully");
        setDisplay(true);
        createWorkSpaceTimeAndDay(res);
      })
      .catch((err) => {
        setMessage("something went wrong while create workspace");
        setDisplay(true);
      });
  };
  console.log(workSpace);
  const createWorkSpaceTimeAndDay = (res) => {
    for (let i = 0; i < workPlaceDayAndTime.length; i++) {
      const element = workPlaceDayAndTime[i];
      api
        .createWorkingTimes({ ...element, workSpace: res._id })
        .then((response) => {})
        .catch(() => {
          setMessage("something went wrong while setting time for worksapce");
          setDisplay(true);
        });
    }
  };

  const handleWorkSpaceDayAndTime = (info) => {
    let arr = workPlaceDayAndTime;
    let arrDay = workPlaceDay;
    if (workPlaceDay.includes(info.day)) {
      arr = [];
      console.log(arr);
      for (let i = 0; i < workPlaceDayAndTime.length; i++) {
        const element = workPlaceDayAndTime[i];
        if (element.day === info.day) {
          arr.push(info);
        } else {
          arr.push(element);
        }
      }
    } else {
      arrDay.push(info.day);
      arr.push(info);
    }
    setWorkPlaceDay([...arrDay]);
    setWorkPlaceDayAndTime([...arr]);
  };
  console.log("workSpace>>>>>>", workSpace);

  return (
    <Box sx={{ flexGrow: 1, paddingX: 1 }}>
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
      <Grid sx={{justifyContent: 'center'}}container spacing={2}>
        <Grid item xs={12}>
          <CustomHeader />
        </Grid>
        <LeftWallpaperWb />
        <FormWb
          handleInfo={(e) => {
            setWorkSpace({ ...workSpace, ...e });
          }}
        />
        <WorksapceImages />
      </Grid>
      <Grid
        sx={{
          margin: 10,
          height: 275,
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* {typeof window !== "undefined" && <Map />} */}
        <Map/>
      </Grid>
      <Grid sx={{ marginY: 2 }} container>
        <Typography sx={{ marginY: 1, fontSize: 20, fontWeight: "600" }}>
          Workspace Amenities
        </Typography>
        <Amenities
          handleSelectedAmenities={(e) => {
            setWorkSpace({ ...workSpace, amenities: e });
          }}
        />
      </Grid>
      <Grid sx={{ marginY: 2 }} container>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            flex: 1,
          }}
          item
          md={12}
          lg={4}
          xs={12}
          sm={12}
        >
          <Typography sx={{ marginY: 1, fontSize: 18, fontWeight: "500" }}>
            Pricing
          </Typography>
          <FormControl
            onChange={(e) => {
              setWorkSpace({ ...workSpace, currency: e.target.value });
              const inputValue = e.target.value;
              setValue(inputValue);
            }}
            value={workSpace?.currency}
            fullWidth
          >
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="curreny"
              value={currency}
              label="Currency"
              onChange={handleChange}
            >
              <MenuItem value={10}>POUND</MenuItem>
              <MenuItem value={20}>DOLLAR</MenuItem>
              <MenuItem value={30}>PKR</MenuItem>
            </Select>
          </FormControl>

          <TextField
            sx={{ marginY: 1, width: "100%" }}
            id="per-person"
            label="per person"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setWorkSpace({ ...workSpace, perPerson: e.target.value });
            }}
            value={workSpace?.perPerson}
            type="number"
          />
          <Typography sx={{ marginY: 1, fontSize: 14, fontWeight: "400" }}>
            Do you charge fees?
          </Typography>
          <Typography
            sx={{ marginY: 1, fontSize: 11, fontWeight: "400", width: "100%" }}
          >
            {
              "**Note: We suggest you include cleaning, maintenance, or any other fees included on your per person price. A user may want to book your workspace when there are little to no fees, but you can add fees if you like.\n\n\n We do collect a service fee from the user, along with 20% from the sale amount from each booking. You take 80% from the sale amount.**"
            }
          </Typography>

          <Box
            sx={{
              marginY: 1.5,
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => {
                  setInfo({ ...info, workspaceType: "FlatFee" });
                }}
              >
                {info?.workspaceType === "FlatFee" ? (
                  <CheckBox
                    style={{ color: "#000", fontSize: 15, margin: 10 }}
                  />
                ) : (
                  <CropSquare
                    style={{ color: "#000", fontSize: 15, margin: 10 }}
                  />
                )}
              </div>
              <Typography
                style={{
                  width: "100%",
                  fontSize: 14,
                  color: "#000",
                }}
              >
                Flat Fee
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => {
                  setInfo({ ...info, workspaceType: "Percentage" });
                }}
              >
                {info?.workspaceType === "Percentage" ? (
                  <CheckBox
                    style={{ color: "#000", fontSize: 15, margin: 10 }}
                  />
                ) : (
                  <CropSquare
                    style={{ color: "#000", fontSize: 15, margin: 10 }}
                  />
                )}
              </div>

              <Typography
                style={{
                  width: "100%",
                  fontSize: 14,
                  color: "#000",
                }}
              >
                Percentage
              </Typography>
            </div>
          </Box>

          <CheckBoxInput
            onChange={(e) => {
              setWorkSpace({ ...workSpace, cleaningFee: e.target.value });
            }}
            title="Cleaning Fee Amount"
          />
          <CheckBoxInput
            onChange={(e) => {
              setWorkSpace({ ...workSpace, maintenancesFee: e.target.value });
            }}
            title="Maintenance Fee Amount"
          />
          <Typography
            sx={{ marginY: 1, marginX: 1.5, fontSize: 14, fontWeight: "500" }}
          >
            Not Listed?
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{ height: "12px", width: "12px" }}
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{
                color: "#000",
                fontSize: 15,
                margin: 8,
                transform: "scale(0.56)",
              }}
            />
            <TextField
              sx={{
                marginY: 1.5,
                width: "100%",
                "& label": { top: -6 },
              }}
              inputProps={{
                style: {
                  paddingTop: "8.5px",
                  paddingBottom: "8.5px",
                },
              }}
              label="Enter The Fee Name"
              disabled={!isChecked}
            />
          </div>
          {isChecked && (
            <CheckBoxInput
              onChange={(e) => {
                setWorkSpace({
                  ...workSpace,
                  otherFeeAmount: e.target.value,
                });
              }}
              title="Amount"
            />
          )}
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          item
          md={12}
          lg={4}
          xs={12}
          sm={12}
        >
          <Typography
            sx={{ marginY: 1, marginX: 1.5, fontSize: 16, fontWeight: "600" }}
          >
            Add Workspace Hours
          </Typography>
          <div
            style={{
              display: "flex",
              height: "80%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map(
              (item, index) => (
                <TimeRange
                  key={index}
                  title={item}
                  handleTimeRange={(response) => {
                    if (item === "sun") {
                      handleWorkSpaceDayAndTime({ ...response, day: "sunday" });
                    } else if (item === "mon") {
                      handleWorkSpaceDayAndTime({ ...response, day: "monday" });
                    } else if (item === "wed") {
                      handleWorkSpaceDayAndTime({
                        ...response,
                        day: "wednesday",
                      });
                    } else if (item === "thu") {
                      handleWorkSpaceDayAndTime({
                        ...response,
                        day: "thursday",
                      });
                    } else if (item === "fri") {
                      handleWorkSpaceDayAndTime({ ...response, day: "friday" });
                    } else if (item === "sat") {
                      handleWorkSpaceDayAndTime({
                        ...response,
                        day: "saturday",
                      });
                    }
                  }}
                />
              )
            )}
          </div>
        </Grid>
        <Grid item md={12} lg={4} xs={12} sm={12}>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CheckBoxLabel
              justifyContent="center"
              title="Coworking WorkSpace"
              fontSize={16}
              fontWeight="bold"
            />
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 500,
              }}
            >
              <Typography
                sx={{
                  marginY: 1,
                  fontSize: 11,
                  fontWeight: "400",
                  width: "100%",
                }}
              >
                {
                  "WorkSpaces would be shared by multiple people from different companies within the same dates & time frame. - If not checked, then only one company &/or individual can book the booked date/time."
                }
              </Typography>
              <div
                style={{
                  height: 200,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: 100,
                    width: 100,
                    border: "2px black",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      marginY: 1,
                      fontSize: 11,
                      fontWeight: "400",
                    }}
                  >
                    <input
                      style={{ display: "none" }}
                      id="photo-upload"
                      type="file"
                      onChange={handlePhotoSelect}
                      accept=".jpg, .jpeg, .png"
                    />

                    <label
                      style={{
                        cursor: "pointer",
                      }}
                      for="photo-upload"
                    >
                      {photoName}
                      {photoUrl && (
                        <img
                          src={photoUrl}
                          alt="Selected photo"
                          style={{ maxWidth: "100%" }}
                        />
                      )}
                    </label>
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    height: 100,
                    width: 100,
                    border: "1px black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      marginY: 1,
                      fontSize: 11,
                      fontWeight: "400",
                    }}
                  >
                    <input
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                      onChange={handleFileSelect}
                      accept=".pdf"
                    />

                    <label
                      style={{
                        cursor: "pointer",
                      }}
                      for="file-upload"
                    >
                      {fileName}
                    </label>
                  </Typography>
                </div>
              </div>

              <CheckBoxLabel
                fontSize={11}
                justifyContent="center"
                title="I agree to homework term and services policy and privacy policy"
              />
              <CheckBoxLabel
                fontSize={11}
                justifyContent="center"
                title="I acknowledge that I am going to receive a 1099 form if make
                $600 or more during the entire year. Please Read about tax FAQs."
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          title="List Workspace"
          width="50%"
          onClick={() => {
            handleHostWorkSpace();
          }}
        />
      </div>
      <Grid sx={{ marginY: 4 }} container spacing={2}>
        <Grid item md={3} sm={5} xs={12}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              // marginX: 1,
              marginY: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ marginX: 1, marginY: 2, fontSize: 18, fontWeight: "400" }}
            >
              {"read, discover, explore..."}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"about us"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"term & condition"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"privacy policy"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"faq"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"become a workhost"}
            </Typography>
            <div style={{ height: 100 }} />
          </Card>
        </Grid>
        <Grid item md={9} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <img
              src={`${"https://wallpaperaccess.com/full/3678503.png"}`}
              srcSet={require("../assets/Wallpaper.png")}
              alt={"Title"}
              style={{
                display: "block",
                height: 600,
                borderRadius: 5,
                // resize: "both",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
