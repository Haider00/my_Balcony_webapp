import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchRounded from "@mui/icons-material/Search";
import articleStyles from "../../styles/Components.module.css";
import { useRouter } from "next/router";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuBox from "@mui/icons-material/Menu";
import { useAuthState } from "src/context/auth.context";
import Formsignin from "src/pages/Signin/form";
import Formsignup from "src/pages/Signup/form";
import { FormWb } from "src/pages/Home/wb";
import { Translate } from "@mui/icons-material";

const Header = () => {
  const [route, setRoute] = useState("signIn");
  const router = useRouter();
  const auth = useAuthState();

  const [isMenuOpen, setMenuOpen] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const open = Boolean(anchorE2);
  const mobileopen = Boolean(isMenuOpen);
  const handleMenuClick = (event) => {
    setMenuOpen(event.currentTarget);
  };
  const handlesearchClick = (event) => {
    if (!auth?.user?._id) {
      setAnchorE2(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorE2(null);
  };

  const handlemobileClose = () => {
    setMenuOpen(null);
  };

  function handleClick(event) {
    if (!auth?.user?._id) {
      setAnchorEl(event.currentTarget);
    } else {
      router.push("./accountDashboard");
    }
  }
  return (
    <>
      <Card
        style={{ maxWidth: "1300px", margin: "0 auto" }}
        sx={{
          width: "100%",
          flex: 1,
          display: { xs: "none", lg: "flex" },
          padding: { xs: 1, lg: 2 },
          marginY: 1,
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 5,

          position: "fixed",
          zIndex: 100,
          top: "55px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          onClick={() => {
            router.push("./");
          }}
          style={{ fontSize: "50px", lineHeight: "55px", cursor: "pointer" }}
          component="h5"
          variant="h4"
        >
          balcony
        </Typography>
        <Box
          sx={{
            display: "flex",
            minWidth: 150,
            justifyContent: "space-between",
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
              borderRadius: 4,
              textTransform: "lowercase",
              paddingRight: 3,
              paddingLeft: 3,
              mr: 2,
              "&:hover": {
                backgroundColor: "#ffff00",
                color: "#000",
              },
            }}
            variant="contained"
          >
            account
          </Button>
          <div className="form-popup">
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                style: {
                  borderRadius: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                },
              }}
            >
              {route === "signUp" ? (
                <Formsignup
                  from={"header"}
                  onChangeRoute={(res) => {
                    setRoute(res);
                  }}
                />
              ) : (
                <Formsignin
                  from={"header"}
                  onChangeRoute={(res) => {
                    setRoute(res);
                  }}
                />
              )}
            </Menu>
          </div>
          <Button
            onClick={handlesearchClick}
            style={{
              display: "flex",
              backgroundColor: "#005451",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 42,
              width: 42,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#ffff00",
                color: "#000",
              },
            }}
          >
            <SearchRounded
              style={{
                height: 30,
                width: 30,
                fontSize: 20,
                color: "#fff",
              }}
            />
          </Button>
          <Menu
            anchorE2={anchorE2}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              style: {
                borderRadius: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
              },
            }}
          >
            <FormWb />
          </Menu>
        </Box>
      </Card>

      <div style={{ position: "relative" }}>
        <Card
          sx={{
            width: "95%",
            flex: 1,
            display: { md: "flex", lg: "none" },
            padding: { xs: 1, md: 2 },

            alignItems: "center",
            justifyContent: "space-between",
            border: "1px black",
            position: "fixed",
            top: "55px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        >
          <Box style={{ display: "flex", width: "100%" }}>
            <div className="mobile-header-search" style={{ width: "80%" }}>
              <TextField
                className={articleStyles.inputRounded}
                placeholder="Search"
                variant="outlined"
                size="small"
                sx={{ width: "100%" }}
              />
            </div>
            <div
              className="mobile-header-icons"
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  backgroundColor: "#005451",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: 30,
                }}
              >
                <SearchRounded
                  style={{
                    backgroundColor: "#005451",
                    fontSize: 20,
                    color: "#fff",
                    position: "relative",
                    top: "3px",
                  }}
                />
              </div>
              <div className="mobile-dropdown">
                <Button onClick={handleMenuClick}>
                  <MenuBox
                    style={{
                      fontSize: 30,
                      color: "#000",
                    }}
                  />
                </Button>

                <Menu
                  sx={{
                    padding: "15px",
                  }}
                  isMenuOpen={isMenuOpen}
                  open={mobileopen}
                  onClose={handlemobileClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    style: {
                      borderRadius: "10px",
                    },
                  }}
                >
                  <MenuItem>home</MenuItem>
                  <MenuItem>chat</MenuItem>
                  <MenuItem>lists</MenuItem>
                  <MenuItem>booked</MenuItem>
                  <MenuItem>planner</MenuItem>
                  <MenuItem>account</MenuItem>
                </Menu>
              </div>
            </div>
          </Box>
        </Card>
      </div>
    </>
  );
};
export default Header;
