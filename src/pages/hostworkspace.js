import { useEffect } from "react";
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
import React, { useContext, useRef, useState } from "react";
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
import { useWorkspaceState } from "src/context/workspace.context";
import Resizer from "react-image-file-resizer";
import MenuSection from './MenuSection/menuSection';
import TableBottom from "src/assets/svg/TableBottom";
import { useRouter } from "next/router";

const Map = dynamic(() => import("./WorkSpace/map"), { ssr: false });

export default function HostWorkSpace({ }) {
  const workspaceState = useWorkspaceState();
  const [PhotoId, setPhotoId] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [photoName, setphotoName] = useState("+Add photo ID");
  const router = useRouter();
  console.log("workspaceState>>>>", workspaceState.firstImage);

  const handlePhotoSelect = (event) => {
    uploadPhotoID(event.target.files[0]);
    setPhotoId(event.target.files[0]);
    const selectedphoto = event.target.files[0];
    setPhotoUrl(selectedphoto ? URL.createObjectURL(selectedphoto) : null);
    const photoName = selectedphoto ? "" : "";
    setphotoName(photoName);
  };
  const handleUploadImageClick = () => {
    uploadFileRef.current.click();
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

  const [isCheckedfeename, setIsCheckedfeename] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckedfeename(!isCheckedfeename);
  };
  const [isChecked, setIsChecked] = React.useState(false);

  const handlebox = (isChecked) => {
    setIsChecked(!isChecked);
  };
  console.log("lll", isChecked);
  const [feeNametext, setFeeName] = useState("");

  const handleFeeNameChangetext = (e) => {
    setFeeName(e.target.value);

    setWorkSpace({ ...workSpace, otherFeeName: e.target.value });
  };

  const [maintenancefeeNametext, setmaintenanceFeeName] = useState("");

  const handlemaintenanceFeeNameChangetext = (e) => {
    setmaintenanceFeeName(e.target.value);

    setWorkSpace({ ...workSpace, maintenancesFee: e.target.value });
  };
  const [isCheckedmaintenancefeename, setIsCheckedmaintenancefeename] =
    useState(false);

  const handlemaintenanceCheckboxChange = (e) => {
    setIsCheckedmaintenancefeename(!isCheckedmaintenancefeename);
  };

  const [res1, setres1] = useState();
  const [workSpace, setWorkSpace] = useState({});
  const [workSpaceAvailability, setWorkSpaceAvailability] = useState();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [workPlaceDayAndTime, setWorkPlaceDayAndTime] = useState([]);
  const [workPlaceDay, setWorkPlaceDay] = useState([]);
  console.log('workPlaceDay', workPlaceDay);

  const handleHostWorkSpace = () => {
    api
      .createWorkSpace({ ...workSpace, coordinates: workspaceState.workSpaceMapCoardinates, image: workspaceState?.firstImage?.Location || '' })
      .then((res) => {
        setMessage("workspace hosted successfully");
        setDisplay(true);
        createWorkSpaceTimeAndDay(res);
        handlePatchImage(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  const handlePatchImage = (res) => {
    alert('upload image called')
    patchWorkspaceImage(workspaceState.firstImage, res)
    patchWorkspaceImage(workspaceState.secondImage, res)
    patchWorkspaceImage(workspaceState.thirdImage, res)
  };

  const patchWorkspaceImage = (item, res) => {
    if (item) {
      api
        .uploadFilesToWorkspace({ ...item, workSpace: res?._id })
        .then((res) => {
          console.log('res....<<<<', res)
        })
        .catch((err) => {
          console.log('res....', err)
        });
    }
  }

  const handleValidations = () => {
    if (isChecked && !workSpace.cleaningFee) {
      setMessage("Please enter cleaning fee");
      setDisplay(true);
    } else if (isCheckedmaintenancefeename && !workSpace.maintenancesFee) {
      setMessage("Please enter maintenance fee");
      setDisplay(true);
    } else if (isCheckedfeename && !workSpace.otherFeeName) {
      setMessage("Please enter fee name");
      setDisplay(true);
    } else if (!workSpace.name) {
      setMessage("Please type Name");
      setDisplay(true);
    } else if (!workSpace.address) {
      setMessage("Please type address");
      setDisplay(true);
    } else if (!workSpace.address2) {
      setMessage("Please type address2");
      setDisplay(true);
    } else if (!workSpace.city) {
      setMessage("Please type city");
      setDisplay(true);
    } else if (!workSpace.state) {
      setMessage("Please type state");
      setDisplay(true);
    } else if (!workSpace.country) {
      setMessage("Please type country");
      setDisplay(true);
    } else if (!workSpace.workspaceType) {
      setMessage("Please select host type");
      setDisplay(true);
    }
    // else if (!workspaceState.firstImage.Location) {
    //   setMessage("Please select first image");
    //   setDisplay(true);
    // } else if (!workspaceState.secondImage.Location) {
    //   setMessage("Please select second image");
    //   setDisplay(true);
    // } else if (!workspaceState.thirdImage.Location) {
    //   setMessage("Please select third image");
    //   setDisplay(true);
    // } 
    else if (workspaceState.workSpaceMapCoardinates.length === 0) {
      setMessage("Please enable your location");
      setDisplay(true);
    } else if (!workSpace.amenities || workSpace.amenities.length === 0) {
      setMessage("Please select amenities");
      setDisplay(true);
    } else if (!workSpace.currency) {
      setMessage("Please select currency");
      setDisplay(true);
    } else if (!workSpace.perPerson) {
      setMessage("Please enter persons");
      setDisplay(true);
    } else if (!workSpace.feeType) {
      setMessage("Please select fees type");
      setDisplay(true);
    } else if (!workSpace.cleaningFee) {
      setMessage("Please enter cleaning fee");
      setDisplay(true);
    } else if (!workSpace.maintenancesFee) {
      setMessage("Please enter maintenance fee");
      setDisplay(true);
    }
    else if (isCheckedfeename && !workSpace.otherFeeName) {
      setMessage("Please enter fee name");
      setDisplay(true);
    }
    else if (!workSpace.otherFeeAmount) {
      setMessage("Please enter amount ");
      setDisplay(true);
    } else if (
      workPlaceDayAndTime.every((obj) => Object.keys(obj).length === 0)
    ) {
      setMessage("Please select Time Frame");
      setDisplay(true);
    }
    // else if (!workSpace.photoId) {
    //   setMessage("Please select a photo");
    //   setDisplay(true);
    // } else if (!FileId) {
    //   setMessage("Please select a file");
    //   setDisplay(true);
    // } 
    else if (!workSpace.agreeToPolicy) {
      setMessage("Please check agreement to policy");
      setDisplay(true);
    } else if (!workSpace.acknowledgement) {
      setMessage("Please check acknowledgement");
      setDisplay(true);
    } else {
      setDisplay(false);
      handleHostWorkSpace();
      router.push('./');
    }
  };

  const createWorkSpaceTimeAndDay = (res) => {
    for (let i = 0; i < workPlaceDayAndTime.length; i++) {
      const element = workPlaceDayAndTime[i];
      api
        .createWorkingTimes({ ...element, workSpace: res._id })
        .then((response) => {
          console.log('timeConsole>>>>', response);
        })
        .catch((err) => {
          console.log('timeConsoleError', err);
          setMessage("something went wrong while setting time for worksapce");
          setDisplay(true);
        });
    }
  };
  // console.log('id>>>>',workSpace);

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
    console.log("chlo>>>>>>", info);
  };

  const uploadFileRef = useRef(null);

  const uploadPhotoID = (element) => {
    Resizer.imageFileResizer(
      element,
      720,
      720,
      "JPEG",
      100,
      0,
      (uri) => {
        console.log("FUNTION>>>>>", uri);
        api
          .uploadImage({ image: uri })
          .then((res) => {
            console.log("RESPONSE....", res.Location);
            setWorkSpace({ ...workSpace, photoId: res.Location });
            // handleUploadProductImage(res.data, product, element.cover);
          })
          .catch((err) => {
            console.log("RESPONSE....E", err);
          });
      },
      "base64"
    );
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
      <Grid sx={{ justifyContent: "center" }} container spacing={2}>
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
        <Map />
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
            inputProps={{
              style: {
                paddingTop: "8.5px",
                paddingBottom: "8.5px",
              },
            }}
            onChange={(e) => {
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
              value={workSpace.currency}
              label="Currency"
              onChange={(e) => {
                setWorkSpace({ ...workSpace, currency: e.target.value });
              }}
            >
              <MenuItem value={"pound"}>POUND</MenuItem>
              <MenuItem value={"dollar"}>DOLLAR</MenuItem>
              <MenuItem value={"pkr"}>PKR</MenuItem>
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
              "*Note: We suggest you include cleaning, maintenance, or any other fees included on your per person price. A user may want to book your workspace when there are little to no fees, but you can add fees if you like.\n\n\n We do collect a service fee from the user, along with 20% from the sale amount from each booking. You take 80% from the sale amount.*"
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
                  setWorkSpace({ ...workSpace, feeType: "FlatFee" });
                }}
              >
                {workSpace?.feeType === "FlatFee" ? (
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
                  setWorkSpace({ ...workSpace, feeType: "Percentage" });
                }}
              >
                {workSpace?.feeType === "Percentage" ? (
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
            onbox={handlebox}
            onChangeInput={(e) => {
              setWorkSpace({ ...workSpace, cleaningFee: e.target.value });
            }}
            title="Cleaning Fee Amount"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{ height: "12px", width: "12px" }}
              checked={isCheckedmaintenancefeename}
              onChange={handlemaintenanceCheckboxChange}
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
              label="Maintenance Fee Amount"
              disabled={!isCheckedmaintenancefeename}
              value={maintenancefeeNametext}
              onChange={handlemaintenanceFeeNameChangetext}
            />
          </div>
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
              checked={isCheckedfeename}
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
              disabled={!isCheckedfeename}
              value={feeNametext}
              onChange={handleFeeNameChangetext}
            />
          </div>
          {isCheckedfeename && (
            <CheckBoxInput
              onChangeInput={(e) => {
                setWorkSpace({ ...workSpace, otherFeeAmount: e.target.value });
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
                    } else if (item === "tue") {
                      handleWorkSpaceDayAndTime({ ...response, day: "tuesday" });
                    } else if (item === "wed") {
                      handleWorkSpaceDayAndTime({ ...response, day: "wednesday" });
                    } else if (item === "thu") {
                      handleWorkSpaceDayAndTime({ ...response, day: "thursday" });
                    } else if (item === "fri") {
                      handleWorkSpaceDayAndTime({ ...response, day: "friday" });
                    } else if (item === "sat") {
                      handleWorkSpaceDayAndTime({ ...response, day: "saturday" });
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
              handleCheckbox={(e) => {
                console.log('e', e)
                setWorkSpace({ ...workSpace, sharedWorkSpace: e });
              }}
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
                      ref={uploadFileRef}
                      onClick={() => {
                        handleUploadImageClick();
                      }}
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
                handleCheckbox={(e) => {
                  setWorkSpace({ ...workSpace, agreeToPolicy: e });
                }}
                title="I agree to homework term and services policy and privacy policy"
              />
              <CheckBoxLabel
                fontSize={11}
                justifyContent="center"
                handleCheckbox={(e) => {
                  setWorkSpace({ ...workSpace, acknowledgement: e });
                }}
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
            handleValidations();
          }}
        />
      </div>
      <Grid sx={{ marginY: 6 }} container spacing={2}>
        <Grid item md={3} sm={5} xs={12}>
          <MenuSection />
        </Grid>
        <Grid item md={9} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <TableBottom />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
