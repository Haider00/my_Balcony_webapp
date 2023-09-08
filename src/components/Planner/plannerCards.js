import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Rating from "@mui/material/Rating";
import { api } from "src/utils/api";
import moment from "moment";
import { useAuthState } from "src/context/auth.context";

export default function PlannerCards() {
  const [messages, setMessages] = useState([]);

  const auth = useAuthState();

  React.useEffect(() => {
    api
      .getPlanner(`?id=${auth.user?._id}`)
      .then((res) => {
        console.log("plannercards>>>", res.data);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log("plannererrorcards", err);
      });
  }, [auth.user?._id]);

  const [values, setValues] = useState([]);

  const handleRatingChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
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
      <Box style={{ width: "100%", paddingLeft: 25 }}>
        <Typography variant="h5" sx={{ textAlign: "left", fontSize: 30 }}>
          scheduled booking
        </Typography>
      </Box>
      {messages.map((message, index) => {
        const time = moment(message.date).format("h:mm A");

        return (
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
                }}
                color="text.secondary"
              >
                {message.title}
              </Typography>
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
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
                Time: {time} {/* Display the extracted time */}
              </Typography>
            </CardContent>
          </Card>
        );
      })}

      {/* <Box style={{ width: "100%", paddingLeft: 25 }}>
        <Typography
          variant="h5"
          sx={{ mt: 3, textAlign: "left", fontSize: 30 }}
        >
          complete booking
        </Typography>
      </Box>
      {[1, 2].map((index) => {
        return (
          <>
            <Card
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
                  }}
                  color="text.secondary"
                >
                  Name of Workspace
                </Typography>
                <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      fontSize: 22,
                      fontWeight: 600,
                      textAlign: "left",
                      marginTop: 1,
                    }}
                    color="text.secondary"
                  >
                    Date:
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
                  Time:
                </Typography>
              </CardContent>
            </Card>

            <Grid sx={{ mt: 1, display: "flex", justifyContent: "flex-start" }}>
              <Typography sx={{ mr: 1, fontSize: 20 }}>
                Rate Experience:
              </Typography>
              <Rating
                name={`simple-controlled-${index}`}
                value={values[index]}
                onChange={(event, newValue) => {
                  handleRatingChange(index, newValue);
                }}
              />
            </Grid>
          </>
        );
      })} */}
    </Grid>
  );
}
