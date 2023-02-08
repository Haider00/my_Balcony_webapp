import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CustomHeader, WebTabs } from "../component";
import ChattingPage from "./Chat/ChattingPage";
import { MyChat } from "./Chat/MyChat";

const Chat = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingX: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomHeader />
        </Grid>
        <WebTabs selectedTab={3} marginLeft={15} />
        <Grid
          style={{
            width: "95%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <MyChat />
          <ChattingPage />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Chat;
