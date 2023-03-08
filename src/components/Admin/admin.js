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

export default function Admin() {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleClick = (index) => {
    setClickedIndex(index === clickedIndex ? -1 : index);
    switch (index) {
      case 0:
        router.push("./dashboard");
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        router.push("./usersManager");
        break;
      case 5:
        router.push("./calendar");
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        router.push("./promotions");
        break;
      default:
        break;
    }
  };
  const router = useRouter();
  return (
    <>
      <Grid sx={{ marginTop: 4 }} display="flex" justifyContent="center">
        <Card sx={{ width: "280px" }}>
          <CardContent>
            <Typography sx={{ textAlign: "center", mb: 2 }} variant="h6">
              Admin
            </Typography>
            <Divider sx={{ width: "100%", mb: 2 }} />

            {menuItems.map((item, index) => (
              <Grid
                key={index}
                onClick={() => handleClick(index)}
                className={`${styles.grid}`}
                sx={{
                  backgroundColor: clickedIndex === index ? "yellow" : "#FFF",
                  padding: 1,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {item.icon}
                <Typography sx={{ marginLeft: 1 }} variant="subtitle1">
                  {item.label}
                </Typography>
              </Grid>
            ))}

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

const menuItems = [
  { label: "Dashboard", icon: <AcUnitIcon /> },
  { label: "Workspace Amenities", icon: <EqualizerIcon /> },
  { label: "File Manager", icon: <SwitchAccountIcon /> },
  { label: "Traffic Analyzer", icon: <PieChartIcon /> },
  { label: "Users Manager", icon: <GroupIcon /> },
  { label: "Calender", icon: <CalendarMonthIcon /> },
  { label: "Messages", icon: <MessageRoundedIcon /> },
  { label: "Payments", icon: <AddCardRoundedIcon /> },
  { label: "Promotions", icon: <AirplaneTicketIcon /> },
];
