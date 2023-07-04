import * as React from "react";
import Card from "@mui/material/Card";
import * as Icons from "@mui/icons-material";
import { useRouter } from "next/router";
import FormatAlignCenterOutlinedIcon from "@mui/icons-material/FormatAlignCenterOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useAuthState } from "src/context/auth.context";
import { useState } from "react";
import { Snackbar } from "@mui/material";
const WebTabs = ({ selectedTab = 1, marginLeft = 0 }) => {
  const router = useRouter();
  const auth = useAuthState();
  let [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);

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
          position:'relative',
          height: 300,
          width: 60,
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
          <Icons.ChatOutlined
            onClick={handleChatClick}
            style={{
              color: selectedTab === 2 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
        </div>
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

        <div
          style={{
            height: 50,
            width: 50,
            backgroundColor: selectedTab === 4 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormatAlignCenterOutlinedIcon
            onClick={handleBookedDatesClick}
            style={{
              color: selectedTab === 4 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
        </div>

        <div
          style={{
            height: 50,
            width: 50,
            backgroundColor: selectedTab === 5 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CalendarMonthIcon
            onClick={() => {
              router.push("./planner");
            }}
            style={{
              color: selectedTab === 5 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
        </div>

        <div
          style={{
            height: 50,
            width: 50,
            backgroundColor: selectedTab === 6 ? "#005451" : "#fff",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons.PersonOutline
            onClick={handleAccountDashboardClick}
            style={{
              color: selectedTab === 6 ? "#fff" : "#000",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
        </div>
      </Card>
    </>
  );
};
export default WebTabs;
