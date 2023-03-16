import * as React from "react";
import Card from "@mui/material/Card";
import {
  PersonOutline,
  ChatOutlined,
  HomeOutlined,
  GifBoxOutlined,
  BookmarksOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";

const WebTabs = ({ selectedTab = 1, marginLeft = 0 }) => {
  const router = useRouter();
  return (
    <Card
      style={{
        height: 300,
        width: 60,
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: 125,
        marginLeft: marginLeft,
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
        <HomeOutlined
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
        <GifBoxOutlined
          onClick={() => {
            router.push("./workFromIndoor");
          }}
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
        <ChatOutlined
          onClick={() => {
            router.push("./chat");
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
        <BookmarksOutlined
          onClick={() => {
            router.push("./bookingOverview");
          }}
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
        <PersonOutline
          onClick={() => {
            router.push("./accountDashboard");
          }}
          style={{
            color: selectedTab === 5 ? "#fff" : "#000",
            fontSize: 35,
            cursor: "pointer",
          }}
        />
      </div>
    </Card>
  );
};
export default WebTabs;
