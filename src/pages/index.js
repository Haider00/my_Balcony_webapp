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
export default function SignUp() {
  const router = useRouter();
  const [indoorWorkSpace, setIndoorWorkSpace] = useState([]);
  const [outdoorWorkSpace, setOutdoorWorkSpace] = useState([]);
  const auth = useAuthState();
  const menu = useRef();

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
        // console.warn("auth.accessToken...");
        // console.log("jjj", res.data);
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
        // console.log("outside>>>", res.data);
        setOutdoorWorkSpace(res.data);
      })
      .catch((err) => {
        console.log("Error WorkSpaceList:", err);
      });
  }, [auth.accessToken]);
  console.log("indoorWorkSpace", indoorWorkSpace);
  console.log("outdoorWorkSpace", outdoorWorkSpace);

  return (
    <>
      <Box style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto" }}>
        <Box>
          <CustomHeader />
        </Box>
        <Grid container>
          <Grid style={{ marginTop: 56 }} item xs={1} md={1}>
            <WebTabs />
          </Grid>
          <Grid item xs={6} md={7}>
            <Box style={{ position: "relative", top: -120, zIndex: -1 }}>
              <Image src={Leftewallpaper} alt="" />
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            <FormWb />
          </Grid>
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
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Typography sx={{ marginX: 1 }} component="h1" variant="h5">
                work from outside
              </Typography>
            </div>
            <ScrollMenu apiRef={menu}>
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
          </Box>
        </Grid>
        <HostWorkSpaceMb />
        <Grid className="scrollbar" item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ marginX: 1 }} component="h1" variant="h5">
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
          sm={5}
          xs={12}
          sx={{
            marginBottom: 4,
            marginLeft: 7,
          }}
        >
          <MenuSection />
        </Grid>
        <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <Image src={TableBottom} alt="" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
