import React from "react";
import { Grid, Box, Typography, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import moment from "moment/moment";

const bookinghistory = (props) => {
  console.log("propsss>>>", props);
  return (
    <>
      <Typography sx={{ fontSize: 34, mt: 3 }}>booking history</Typography>

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          rowGap: 2,
          mt: 4,
        }}
      >
        {props.bookinghistory.data?.length > 0 ? (
          props.bookinghistory.data.map((item) => {
            let Workspace = item.workSpace;
            const formattedDates = item.date.map((date) =>
              moment(date).format("DD/MM/YY")
            );
            let cleaningFee = item.workSpace.cleaningFee;
            let maintenancesFee = item.workSpace.maintenancesFee;
            let otherFeeAmount = item.workSpace.otherFeeAmount;
            let perPerson = item.workSpace.perPerson;
            return (
              <Card
                sx={{
                  width: 300,
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
                      Date of Workspace Check-in: {formattedDates.join(", ")}
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
            );
          })
        ) : (
          <Typography>No Booking History.</Typography>
        )}
      </Grid>
    </>
  );
};

export default bookinghistory;
