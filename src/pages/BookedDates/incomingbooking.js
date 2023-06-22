import React from "react";
import { Grid, Box, Typography, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { api } from "src/utils/api";
import moment from "moment/moment";
export default function incomingbooking(props) {
  if (props && props.inComingBooking) {
    // console.log('propsssss>>>', props.inComingBooking)
  }

  const acceptOrder = (id) => {
    api
      .editBooking({ _id: id, status: "approve" })
      .then((res) => {
        // console.log('status>>>', res);
      })
      .catch((err) => {
        console.log("status>>>1", err);
      });
  };
  const rejectOrder = (id) => {
    api
      .editBooking({ _id: id, status: "rejected" })
      .then((res) => {
        // console.log('status>>>', res);
      })
      .catch((err) => {
        console.log("status>>>1", err);
      });
  };
  return (
    <>
      <Typography sx={{ fontSize: 34, mt: 3, textAlign: "center" }}>
        incoming booking
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 2,
          mt: 2,
        }}
      >
        {props.inComingBooking?.length > 0 ? (
          props.inComingBooking.map((item) => {
            console.log("item...", item.workSpace.name);
            const formattedDates = item.date.map((date) =>
              moment(date).format("DD/MM/YY")
            );
            let Workspace = item.workSpace;
            let cleaningFee = item.workSpace.cleaningFee;
            let maintenancesFee = item.workSpace.maintenancesFee;
            let otherFeeAmount = item.workSpace.otherFeeAmount;
            let perPerson = item.workSpace.perPerson;
            // console.log('item>>>', Workspace)
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      width: 350,
                      height: 155,
                      backgroundColor: "#faf9f6",
                      borderRadius: 3,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 141,
                          height: 120,
                          backgroundColor: "#000000",
                          borderRadius: 6,
                        }}
                      >
                        <img
                          src={
                            item.image
                              ? item.image
                              : "https://wallpaperaccess.com/full/38119.jpg"
                          }
                          alt="Workspace Image"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: 10,
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          flex: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: "bold",
                            marginBottom: 1,
                          }}
                          color="#000"
                          gutterBottom
                        >
                          {item.workSpace.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 9,
                          }}
                          color="#000"
                          gutterBottom
                        >
                          Date of Workspace Check-in:{" "}
                          {formattedDates.join(", ")}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 9,
                          }}
                          color="#000"
                          gutterBottom
                        >
                          Time Frame of Service: 8 AM - 5 PM EST
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 8,
                          }}
                          color="#000"
                          gutterBottom
                        >
                          Total Number of People: {perPerson}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 14,
                          }}
                          color="#000"
                          gutterBottom
                        >
                          Total: $
                          {parseInt(cleaningFee) +
                            parseInt(maintenancesFee) +
                            parseInt(otherFeeAmount) * parseInt(perPerson)}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      columnGap: 2,
                      mt: 2,
                    }}
                  >
                    <Box>
                      <Button
                        onClick={() => {
                          acceptOrder(item._id);
                        }}
                        variant="contained"
                        sx={{
                          backgroundColor: "#005451",
                          textTransform: "lowercase",
                          borderRadius: 5,
                          paddingLeft: 3,
                          paddingRight: 3,
                        }}
                      >
                        accept order
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        onClick={() => {
                          rejectOrder(item._id);
                        }}
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff0000",
                          textTransform: "lowercase",
                          borderRadius: 5,
                          paddingLeft: 3,
                          paddingRight: 3,
                        }}
                      >
                        reject order
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </>
            );
          })
        ) : (
          <Typography>No Incoming bookings.</Typography>
        )}
      </Grid>
    </>
  );
}
