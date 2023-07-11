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

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  function handlesearchClick(event) {
    if (!auth?.user?._id) {
      setAnchorEl2(event.currentTarget);
    } else {
      // Open the menu/form

      setAnchorEl2(event.currentTarget);
    }
  }

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
        sx={{
          width: "94%",
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
          <div
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

            <Menu
              anchorE12={anchorEl2}
              open={Boolean(anchorEl2)}
              onClose={() => setAnchorEl2(null)}
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
          </div>
        </Box>
      </Card>

      <div style={{ position: "relative" }}>
        <Card
          sx={{
            width: "95%",
            flex: 1,
            display: { md: "flex", lg: "none" },
            padding: { xs: 1, md: 2 },
            marginX: 3,
            marginY: 1,
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px black",
            position: "fixed",
            top: 0,
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              height: 40,
              marginRight: 1,
              // backgroundColor: "red",
            }}
          >
            <TextField
              className={articleStyles.inputRounded}
              placeholder="Search"
              variant="outlined"
              size="small"
              sx={{ flex: 1 }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
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
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 30,
                width: 30,
                marginLeft: 10,
              }}
            >
              <MenuBox
                onClick={handleMenuClick}
                style={{
                  //   backgroundColor: "#005451",
                  fontSize: 30,
                  color: "#000",
                }}
              />
            </div>
          </Box>
        </Card>
      </div>
    </>
  );
};
export default Header;
