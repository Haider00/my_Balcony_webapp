import * as React from "react";
import Card from "@mui/material/Card";
import * as Icons from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FormatAlignCenterOutlinedIcon from "@mui/icons-material/FormatAlignCenterOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useAuthState } from "src/context/auth.context";
import { useState } from "react";
import { Snackbar, Typography } from "@mui/material";
import Image from "next/image";
import AccountBlack from "src/assets/images/accountBlack.png"
import AccountWhite from "src/assets/images/accountWhite.png"
import PlannerWhite from "src/assets/images/calendarWhite.png"
import PlannerBlack from "src/assets/images/calendarBlack.png"
import BookedBlack from "src/assets/images/BookedBlack.png"
import BookedWhite from "src/assets/images/BookedWhite.png"
import ChatBlack from "src/assets/images/chatBlack.png"
import ChatWhite from "src/assets/images/chatWhite.png"


const WebTabs = ({ selectedTab = 1, marginLeft = 0 }) => {
  const router = useRouter();
  const auth = useAuthState();
  let [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  function handleAccountDashboardClick() {
    if (!auth?.user?._id) {
      setMessage("You must be logged in first");
      setDisplay(true);
    } else {
      router.push("./accountDashboard");
    }
  }
  function handleBookedDatesClick() {
    if (!auth?.user?._id) {
      setMessage("You must be logged in first");
      setDisplay(true);
    } else {
      router.push("./bookeddates");
    }
  }
  function handleChatClick() {
    if (!auth?.user?._id) {
      setMessage("You must be logged in first");
      setDisplay(true);
    } else {
      router.push("./chat2");
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobileScreen) {
    return null;
  }
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={display}
        onClose={() => {
          setDisplay(false);
          router.push("./signin");
        }}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{message}</span>}
      />
      <Card
        style={{
          position:'absolute',
          height: 400,
          width: 80,
          backgroundColor: "#fff",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <div
          style={{
            height: 50,
            width: 50,
            backgroundColor: selectedTab === 1 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons.HomeOutlined
            onClick={() => {
              router.push("./");
            }}
            style={{
              color: selectedTab === 1 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
        </div>
        <Typography variant="caption">home</Typography>
        <div
          style={{
            height: 50,
            width: 50,
            backgroundColor: selectedTab === 2 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedTab === 2 ? <Image style={{
              color: selectedTab === 2 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }} onClick={handleChatClick} src={ChatWhite} alt="" /> : 
            <Image style={{
              color: selectedTab === 2 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }} onClick={handleChatClick} src={ChatBlack} alt="" />}
        </div>
          <Typography variant="caption">chat</Typography>
        <div
          style={{
            height: 50,
            width: 50,
            backgroundColor: selectedTab === 3 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons.GifBoxOutlined
            onClick={() => {
              router.push("./workFromIndoor");
            }}
            style={{
              color: selectedTab === 3 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
        </div>
        <Typography variant="caption">lists</Typography>
        <div
          style={{
            height: 60,
            width: 60,
            backgroundColor: selectedTab === 4 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedTab === 4 ? <Image style={{
              color: selectedTab === 4 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }} onClick={handleBookedDatesClick} src={BookedWhite} alt="" /> : 
            <Image style={{
              color: selectedTab === 4 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }} onClick={handleBookedDatesClick} src={BookedBlack} alt="" />}
        </div>
        <Typography variant="caption">booked</Typography>

        <div
          style={{
            height: 60,
            width: 60,
            backgroundColor: selectedTab === 5 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedTab === 5 ? <Image style={{
              color: selectedTab === 5 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }} onClick={() => {
              router.push("./planner");
            }} src={PlannerWhite} alt="" /> : 
            <Image style={{
              color: selectedTab === 5 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }} onClick={() => {
              router.push("./planner");
            }} src={PlannerBlack} alt="" />}
        </div>
        <Typography variant="caption">planer</Typography>

        <div
          style={{
            height: 60,
            width: 60,
            backgroundColor: selectedTab === 6 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedTab === 6 ? <Image style={{
              color: selectedTab === 6 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }} onClick={handleAccountDashboardClick} src={AccountWhite} alt="" /> : 
            
            <Image style={{
              color: selectedTab === 6 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }} onClick={handleAccountDashboardClick} src={AccountBlack} alt="" />}
        </div>
        <Typography variant="caption">account</Typography>
      </Card>
    </>
  );
};
export default WebTabs;
