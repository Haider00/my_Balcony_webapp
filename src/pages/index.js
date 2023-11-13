import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CustomHeader, ScrollCard, WebTabs } from "../component";
import { LeftWallpaperWb, FormWb, HostWorkSpaceWb } from "./Home/wb";
import { HostWorkSpaceMb } from "./Home/mb";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useEffect, useRef, useState } from "react";
import { api } from "../utils/api";
import { useAuthState } from "../context/auth.context";
import { useRouter } from "next/router";
import TableBottom from "src/assets/images/tablebottom.png";
import Leftewallpaper from "src/assets/images/tabletop.png";
import { useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import MenuSection from "./MenuSection/menuSection";
import Image from "next/image";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function SignUp() {
  const router = useRouter();
  const [indoorWorkSpace, setIndoorWorkSpace] = useState([]);
  const [outdoorWorkSpace, setOutdoorWorkSpace] = useState([]);
  const auth = useAuthState();
  const menu = useRef();
  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.history.pushState(null, "", window.location.href);
  //     window.onpopstate = function () {
  //       window.history.pushState(null, "", window.location.href);
  //     };
  //   }
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      menu.current?.scrollToItem(
        menu.current?.getItemById("1"),
        // OR if you not sure about id for first item
        // apiRef.current.getItemById(apiRef.current.items.toItems()[0]),
        "auto",
        "start"
      );
    }, 100);
  }, []);
  useEffect(() => {
    api
      .getWorkSpace({ query: "?workspaceType=indoor" })
      .then((res) => {
        console.log("indoor>>>", res.data);
        setIndoorWorkSpace(res.data);
      })
      .catch((err) => {
        console.warn("auth.accessToken...");
        console.log("Error WorkSpaceList:", err);
      });
  }, [auth.accessToken]);
  useEffect(() => {
    api
      .getWorkSpace({ query: "?workspaceType=outdoor" })
      .then((res) => {
        console.log("outdoor>>>", res.data);
        setOutdoorWorkSpace(res.data);
      })
      .catch((err) => {
        console.log("Error WorkSpaceList:", err);
      });
  }, [auth.accessToken]);

  return (
    <>
      <Box style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <div
          style={{
            marginLeft: 20,
            top: "160px",
            position: "fixed",
            zIndex: 10,
          }}
        >
          <WebTabs selectedTab={1} />
        </div>
        <Box
          style={{
            marginTop: "70px",
          }}
        >
          <Box>
            <CustomHeader />
          </Box>
        </Box>
        <Grid container>
          <Grid
            item
            lg={7}
            style={{
              display: isMediumScreen ? "none" : "block",
            }}
          >
            <Box>
              <Image
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
                src={Leftewallpaper}
                alt=""
              />
            </Box>
          </Grid>

          <Grid
            sx={{ justifyContent: "center", alignItems: "center" }}
            item
            xs={12}
            md={12}
            lg={4}
            sm={12}
          >
            <FormWb />
          </Grid>
        </Grid>
        <Box
          style={{
            marginTop: "70px",
            maxWidth: 1300,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Grid className="scrollbar" container xs={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: 10,
              }}
            >
              <div className="scrollHomePage">
                <Typography
                  sx={{ textAlign: "end", fontSize: 33 }}
                  component="h1"
                  variant="h5"
                >
                  work from outside
                </Typography>
                <ScrollMenu className="scrollMenu" apiRef={menu}>
                  {outdoorWorkSpace?.reverse().map((item, index) => (
                    <ScrollCard
                      onClick={() => {
                        router.push(`./workspaceDetail?wd=${item._id}`);
                      }}
                      title={item.name}
                      itemId={item._id}
                      key={item._id}
                      image={item.image}
                      rating={item.rating}
                    />
                  ))}
                </ScrollMenu>
              </div>
            </Box>
          </Grid>

          <Grid className="scrollbar" container xs={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: 10,
              }}
            >
              <Typography
                sx={{ marginX: 1, fontSize: 33 }}
                component="h1"
                variant="h5"
              >
                work indoor
              </Typography>

              <ScrollMenu apiRef={menu}>
                {indoorWorkSpace?.reverse().map((item, index) => (
                  <ScrollCard
                    onClick={() => {
                      router.push(`./workspaceDetail?wd=${item._id}`);
                    }}
                    title={item.name}
                    itemId={item._id}
                    key={item._id}
                    image={item.image}
                    rating={item.rating}
                  />
                ))}
              </ScrollMenu>
            </Box>
          </Grid>
          <HostWorkSpaceWb />
        </Box>
        <Grid
          sx={{
            marginTop: 4,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
          container
          spacing={2}
        >
          <Grid
            item
            md={3}
            sm={12}
            xs={12}
            sx={{
              marginBottom: 4,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <MenuSection />
          </Grid>
          <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Image
                style={{
                  width: "100%",
                }}
                src={TableBottom}
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
