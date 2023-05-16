import { Grid } from "@mui/material";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Divider } from "@mui/material";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import PieChartIcon from "@mui/icons-material/PieChart";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import AddCardRoundedIcon from "@mui/icons-material/AddCardRounded";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import styles from "./admin.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Admin({ selectedTab = 1 }) {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const router = useRouter();

  const handleClick = (page) => {
    // setClickedIndex(index === clickedIndex ? -1 : index);
    switch (page) {
      case 'Dashboard':
        router.push("./dashboard");
        break;
      case 'Workspace Amenities':
        router.push("./workspaceAmenities")
        break;
      case 'File Manager':
        router.push("./fileManager")
        break;
      case 'Traffic Analyzer':
        router.push("./trafficAnalyzer")
        break;
      case 'Users Manager':
        router.push("./usersManager");
        break;
      case 'Calender':
        router.push("./calendar");
        break;
      case 'Messages':
        break;
      case 'Payments':
        router.push("./payments");
        break;
      case 'Promotions':
        router.push("./promotions");
        break;
      default:
        router.push("./dashboard");
        break;
    }
  };
  return (
    <>
      <Grid sx={{ marginTop: 4 }} display="flex" justifyContent="center">
        <Card sx={{ width: "280px" }}>
          <CardContent>
            <Typography sx={{ textAlign: "center", mb: 2 }} variant="h6">
              Admin
            </Typography>
            <Divider sx={{ width: "100%", mb: 2 }} />

            {/* ----- */}
            <Grid
              onClick={() => handleClick('Dashboard')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 1 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <AcUnitIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
                Dashboard
              </Typography>
            </Grid>
            {/* ----- */}

            {/* ----- */}
            <Grid
              onClick={() => handleClick('Workspace Amenities')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 2 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <EqualizerIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
                Workspace Amenities
              </Typography>
            </Grid>
            {/* ----- */}

            {/* ----- */}
            <Grid
              onClick={() => handleClick('File Manager')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 3 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <SwitchAccountIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
                File Manager
              </Typography>
            </Grid>
            {/* ----- */}

            {/* ----- */}
            <Grid
              onClick={() => handleClick('Traffic Analyzer')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 4 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <PieChartIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
                Traffic Analyzer
              </Typography>
            </Grid>
            {/* ----- */}

            {/* ----- */}
            <Grid
              onClick={() => handleClick('Users Manager')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 5 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <GroupIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
                Users Manager
              </Typography>
            </Grid>
            {/* ----- */}

            {/* ----- */}
            <Grid
              onClick={() => handleClick('Calender')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 6 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <CalendarMonthIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
                Calender
              </Typography>
            </Grid>
            {/* ----- */}

            {/* ----- */}
            <Grid
              onClick={() => handleClick('Messages')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 7 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <MessageRoundedIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
              Messages
              </Typography>
            </Grid>
            {/* ----- */}

            {/* ----- */}
            <Grid
              onClick={() => handleClick('Payments')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 8 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <AddCardRoundedIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
              Payments
              </Typography>
            </Grid>
            {/* ----- */}

            {/* ----- */}
            <Grid
              onClick={() => handleClick('Promotions')}
              className={`${styles.grid}`}
              sx={{
                backgroundColor: selectedTab === 9 ? "yellow" : "#fff",
                padding: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <AirplaneTicketIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
              Promotions
              </Typography>
            </Grid>
            {/* ----- */}

            <Divider sx={{ width: "100%", mb: 2, mt: 8 }} />

            <Grid
              className={`${styles.grid}`}
              sx={{ padding: 1, display: "flex", justifyContent: "flex-start" }}
            >
              <LogoutIcon />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
                Logout
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

