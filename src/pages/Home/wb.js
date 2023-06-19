import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { IncrementalInput, Title, Button, TextInput } from "../../component";
import { useRouter } from "next/router";
import TableTop from "src/assets/svg/TableTop";
import { useAuthState, useAuthDispatch } from "src/context/auth.context";
import { Snackbar } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const FormWb = () => {
  const router = useRouter();
  return (
    <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={12} md={12}>
      <Box
        sx={{
          display: "flex",
          bgcolor: "background.paper",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 7,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
            height: "100%",
            padding: { xs: 1, md: 2 },
            marginX: 3.5,
            marginY: 1.5,
            justifyContent: "space-between",
          }}
        >
          <Title title="find workspaces" />
          <TextInput
            alignItems="flex-start"
            id="place"
            label="place"
            size="small"
          />
          <TextInput
            alignItems="flex-start"
            id="check-in"
            label="check-in"
            size="small"
            width="75%"
          />
          <TextInput
            alignItems="flex-start"
            id="check-out"
            label="check-out"
            size="small"
            width="75%"
          />

          <IncrementalInput />
          <Button
            width="90%"
            onClick={() => {
              router.push("./workspaceDetail");
            }}
            title="SEARCH"
          />
        </Card>
      </Box>
    </Grid>
  );
};
export const LeftWallpaperWb = () => {
  return (
    <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={12} md={12}>
      <TableTop sx={{ width: "20%", height: "50%" }} />
    </Grid>
  );
};
export const HostWorkSpaceWb = () => {
  const auth = useAuthState();
  const router = useRouter();
  const authDispatch = useAuthDispatch();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");

  function sellerAccessControl() {
    // const userType = "seller"
    // console.log('typeCheck')
    authDispatch({ type: "SET_USER_TYPE", payload: "seller" });
  }

  function handleHostWorkspace() {
    if (!auth.user) {
      setMessage("You must be login first");
      setDisplay(true);
      router.push("./signin");
    } else {
      sellerAccessControl();
      router.push("./hostworkspace");
    }
  }

  return (
    <>
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
      <Grid
        sx={{ display: { xs: "none", md: "flex" }, marginY: 4 }}
        container
        spacing={2}
      >
        <Grid item md={4} lg={3.5}>
          <img
            src={`${"https://wallpaperaccess.com/full/3678503.png"}`}
            srcSet={`${"https://wallpaperaccess.com/full/38119.jpg"}`}
            alt={"Title"}
            style={{
              display: "block",
              width: "100%",
              height: 400,
              borderRadius: 5,
            }}
          />
        </Grid>
        <Grid item md={4} lg={5}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ marginX: 1 }} variant="h4">
              {"host"}
            </Typography>
            <Typography sx={{ marginX: 1 }} variant="h4">
              {"Your"}
            </Typography>
            <Typography sx={{ marginX: 1 }} variant="h4">
              {"Workspace"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginBottom: 5,
            }}
          >
            <Typography sx={{ marginX: 1, fontSize: 14, fontWeight: "600" }}>
              {"Indoor and Outdoor! Let People"}
            </Typography>
            <Typography sx={{ marginX: 1, fontSize: 14, fontWeight: "600" }}>
              {"Discover your worksapce on our"}
            </Typography>
            <Typography sx={{ marginX: 1, fontSize: 14, fontWeight: "600" }}>
              {"Platform"}
            </Typography>
          </Box>
          <Typography sx={{ marginX: 1, fontSize: 18, fontWeight: "300" }}>
            {"Learn"}
          </Typography>
          <Typography sx={{ marginX: 1, fontSize: 18, fontWeight: "300" }}>
            {"Study"}
          </Typography>
          <Typography sx={{ marginX: 1, fontSize: 18, fontWeight: "300" }}>
            {"Work"}
          </Typography>
          <Typography sx={{ marginX: 1, fontSize: 18, fontWeight: "300" }}>
            {"Collaborate"}
          </Typography>
          <Typography sx={{ marginX: 1, fontSize: 18, fontWeight: "300" }}>
            {"& More"}
          </Typography>

          <Button
            onClick={handleHostWorkspace}
            title="Host WorkSpace"
            width="75%"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default HostWorkSpaceWb;
