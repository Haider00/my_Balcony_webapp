import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchRounded from "@mui/icons-material/Search";
import CloseRounded from "@mui/icons-material/Close";
import MenuBox from "@mui/icons-material/Menu";
import articleStyles from "../../styles/Components.module.css";
import { useRouter } from "next/router";
import { useAuthState } from "src/context/auth.context";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { useAuthDispatch } from "src/context/auth.context";
import { useSession, signOut } from "next-auth/react";
const Header = (props) => {
  const router = useRouter();
  const auth = useAuthState();
  const authDispatch = useAuthDispatch();
  let [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const { data: session } = useSession();

  function handleClick() {
    if (!auth?.user?._id) {
      setMessage("You must be logged in first");
      setDisplay(true);
    } else {
      router.push("./signin");
    }
  }

  function handleSearchClick() {
    if (props.page === "map") {
      setSearchBarOpen(true);
    }
  }

  function handleCloseClick() {
    setSearchBarOpen(false);
  }
  function handleLogout() {
    authDispatch({ type: "LOGOUT", payload: "" });
    setMessage("You have been logged out");
    setDisplay(true);
    router.push("./signin");
    signOut("google");
    signOut("facebook");
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
      <Card
        sx={{
          width:'90%',
          flex: 1,
          display: { xs: "none", md: "flex" },
          padding: { xs: 1, md: 2 },
          marginX: 5,
          marginY: 1,
          marginBottom:'20px',
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 5,
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {!searchBarOpen && (
            <Typography
              onClick={() => {
                router.push("./");
              }}
              style={{ cursor: "pointer", fontSize: '50px' }}
              component="h5"
              variant="h4"
            >
              balcony
            </Typography>
          )}
          {searchBarOpen ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextField
                className={articleStyles.inputRounded}
                placeholder="Search"
                variant="outlined"
                size="small"
                sx={{ width: "100%", marginRight: 2 }}
              />
              <Button
                onClick={handleCloseClick}
                sx={{
                  height: 30,
                  backgroundColor: "#005451",
                  fontSize: 13,
                  fontWeight: "300",
                  borderRadius: 3,
                  textTransform: "lowercase",
                  paddingRight: 3,
                  paddingLeft: 3,
                  marginLeft: 2,
                }}
                variant="contained"
              >
                <CloseRounded style={{ color: "#fff" }} />
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleClick}
                sx={{
                  height: 42,
                  width: 120,
                  backgroundColor: "#005451",
                  fontSize: 20,
                  fontWeight: "300",
                  borderRadius: 3,
                  textTransform: "lowercase",
                  paddingRight: 3,
                  paddingLeft: 3,
                  marginRight: 2,
                  "&:hover": {
                    backgroundColor: "#ffff00",
                    color: '#000'
                  },
                }}
                variant="contained"
              >
                account
              </Button>
              {session ? (
                <Button
                  onClick={handleLogout}
                  sx={{
                    height: 30,
                    backgroundColor: "#005451",
                    fontSize: 13,
                    fontWeight: "300",
                    borderRadius: 3,
                    textTransform: "lowercase",
                    paddingRight: 3,
                    paddingLeft: 3,
                    marginRight: 2,
                  }}
                  variant="contained"
                >
                  Logout
                </Button>
              ) : null}

              <div
                onClick={handleSearchClick}
                style={{
                  display: "flex",
                  backgroundColor: "#005451",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: 30,
                  cursor: "pointer",
                  fontSize: 20,
                  color: "#fff",
                  marginRight: 10,
                }}
              >
                <SearchRounded />
              </div>
            </Box>
          )}
        </Box>
      </Card>
    </>
  );
};

export default Header;
