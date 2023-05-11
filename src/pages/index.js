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
import TableBottom from "src/assets/svg/TableBottom";
import { useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import MenuSection from './MenuSection/menuSection'
export default function SignUp() {
  const WorkspaceDetailDispatch = useWorkspaceDetailDispatch();
  const router = useRouter();
  const [indoorWorkSpace, setIndoorWorkSpace] = useState([]);
  const [outdoorWorkSpace, setOutdoorWorkSpace] = useState([]);
  const auth = useAuthState();
  const menu = useRef();

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function () {
    window.history.pushState(null, '', window.location.href);
    };
  },[])
  useEffect(() => {
    setTimeout(() => {
      menu.current.scrollToItem(
        menu.current.getItemById("1"),
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
        console.warn("auth.accessToken...");
        console.log("jjj", res.data);
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
        console.log("outside>>>", res.data);
        setOutdoorWorkSpace(res.data);
      })
      .catch((err) => {
        console.log("Error WorkSpaceList:", err);
      });
  }, [auth.accessToken]);
  console.log("indoorWorkSpace", indoorWorkSpace);
  console.log("outdoorWorkSpace", outdoorWorkSpace);

  return (
    <Box sx={{ flexGrow: 1, paddingX: 1 }}>
      <WebTabs selectedTab={1} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomHeader />
        </Grid>
        <LeftWallpaperWb />

        <FormWb />

        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
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

            <div className="scrollmenu-allign">
              <ScrollMenu>
                {outdoorWorkSpace.reverse().map((item, index) => (
                  <ScrollCard
                    onClick={() => {
                      // router.push("./workspaceDetail");
                      router.push(
                        `./workspaceDetail?wd=${item._id}`
                      );
                    }}
                    title={item.name}
                    itemId={item._id}
                    key={item._id}
                    image={item.image}
                  />
                ))}
              </ScrollMenu>
            </div>
          </Box>
        </Grid>

        <HostWorkSpaceMb />

        <Grid item xs={12}>
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
              {indoorWorkSpace.reverse().map((item, index) => (
                <ScrollCard
                  onClick={() => {
                    // router.push("./workspaceDetail");
                    router.push(
                      `./workspaceDetail?wd=${item._id}`
                    );
                  }}
                  title={item.name}
                  itemId={item._id} // NOTE: itemId is required for track items
                  key={item._id}
                  image={item.image}
                />
              ))}
            </ScrollMenu>
          </Box>
        </Grid>
      </Grid>
      <HostWorkSpaceWb />
      <Grid sx={{ marginY: 4 }} container spacing={2}>
        <Grid item md={3} sm={5} xs={12}>
          <MenuSection/>
        </Grid>
        <Grid item md={9} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <TableBottom />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
