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

const Map = dynamic(() => import("./WorkSpace/map"), { ssr: false });

export default function HostWorkSpace({}) {
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
          <TextField
            onChange={(e) => {
              setWorkSpace({ ...workSpace, currency: e.target.value });
            }}
            value={workSpace?.currency}
            sx={{ marginY: 1, width: "100%" }}
            id="curreny"
            label="curreny"
            variant="outlined"
            size="small"
          />
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

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <CheckBoxLabel title="Flat Fee" />
            <CheckBoxLabel title="Percentage" />
          </div>
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
          <CheckBoxInput
            onChange={(e) => {
              setWorkSpace({ ...workSpace, otherFeeName: e.target.value });
            }}
            title="Enter The Fee Name"
          />
          <CheckBoxInput
            onChange={(e) => {
              setWorkSpace({ ...workSpace, otherFeeAmount: e.target.value });
            }}
            title="Amount"
          />
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
                    {"+ \nAdd photo ID"}
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
                    {
                      "+ \nAdd property lease or ownership documents for this properties ***optional"
                    }
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
