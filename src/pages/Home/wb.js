import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { IncrementalInput, Title, TextInput } from "../../component";
import { useRouter } from "next/router";
import TableTop from "src/assets/svg/TableTop";
import { useAuthState, useAuthDispatch } from "src/context/auth.context";
import { Snackbar, Button } from "@mui/material";
import { capitalize } from "lodash";

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
    <Grid item sm={12} xs={12} md={12}>
      <Box
        sx={{
          display: "flex",
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
            // justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              alignSelf: "center",
            }}
          >
            find workspaces
          </Typography>
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
            variant="contained"
            sx={{
              backgroundColor: "#005451",
              width: "90%",
              alignSelf: "center",
              borderRadius: "16px",
              marginBottom: 3,
              "&:hover": {
                backgroundColor: "#ffff00",
                color: "#000",
              },
            }}
            onClick={() => {
              router.push("./WorkFromIndoor");
            }}
          >
            SEARCH
          </Button>
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
    authDispatch({ type: "SET_USER_TYPE", payload: "seller" });
  }

  function handleHostWorkspace() {
    sellerAccessControl();
    router.push("./hostworkspace");
  }

  function handleHostWorkspaceSignIn() {
    router.push("./signin");
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
        sx={{ display: { xs: "none", md: "flex" }, marginY: 4, marginX: 4 }}
        container
        spacing={2}
      >
        <Grid item md={5} lg={5}>
          <img
            src={`${"https://wallpaperaccess.com/full/3678503.png"}`}
            srcSet={`${"https://wallpaperaccess.com/full/38119.jpg"}`}
            alt={"Title"}
            style={{
              display: "block",
              width: 654,
              height: 772,
              borderRadius: 5,
            }}
          />
        </Grid>
        <Grid item md={7} lg={7}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "80px",
                fontFamily: "Roboto",
                marginX: 1,
              }}
              variant="h4"
            >
              host
            </Typography>
            <Typography
              sx={{
                fontSize: "80px",
                fontFamily: "Roboto",
                marginX: 1,
              }}
              variant="h4"
            >
              your
            </Typography>
            <Typography
              sx={{
                fontSize: "80px",
                fontFamily: "Roboto",
                marginX: 1,
              }}
              variant="h4"
            >
              workspace
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginBottom: 1,
              marginTop: 1,
            }}
          >
            <Typography
              sx={{
                marginX: 1,
                fontSize: 32,
                fontWeight: "600",
              }}
            >
              {"Indoor and Outdoor! Let People"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                fontSize: 32,
                fontWeight: "600",
              }}
            >
              {"Discover your worksapce on our"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                fontSize: 32,
                fontWeight: "600",
              }}
            >
              {"Platform"}
            </Typography>
          </Box>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"Learn"}
          </Typography>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"Study"}
          </Typography>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"Work"}
          </Typography>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"Collaborate"}
          </Typography>
          <Typography
            sx={{
              marginX: 1,
              fontSize: 32,
              fontWeight: "300",
            }}
          >
            {"& More"}
          </Typography>

          {auth?.user?._id ? (
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#005451",
                width: "325px",
                height: "59px",
                alignSelf: "center",
                marginBottom: 3,
                borderRadius: "16px",
                fontSize: "25px",
                "&:hover": {
                  backgroundColor: "#ffff00",
                  color: "#000",
                },
              }}
              onClick={handleHostWorkspace}
            >
              Host Workspace
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#005451",
                width: "325px",
                height: "59px",
                alignSelf: "center",
                marginBottom: 3,
                borderRadius: "16px",
                fontFamily: "Roboto-Regular",
                fontSize: "25px",
                "&:hover": {
                  backgroundColor: "#ffff00",
                  color: "#000",
                },
              }}
              onClick={handleHostWorkspaceSignIn}
            >
              Sign In
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default HostWorkSpaceWb;
