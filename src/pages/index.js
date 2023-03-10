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

export default function SignUp() {
  const router = useRouter();
  const [indoorWorkSpace, setIndoorWorkSpace] = useState([]);
  const [outdoorWorkSpace, setOutdoorWorkSpace] = useState([]);
  const auth = useAuthState();
  const menu = useRef();
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
        console.warn("auth.accessToken...");
        console.log(res.data);
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
        setOutdoorWorkSpace(res.data);
      })
      .catch((err) => {
        console.log("Error WorkSpaceList:", err);
      });
  }, [auth.accessToken]);
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
              {indoorWorkSpace.reverse().map((item, index) => (
                <ScrollCard
                  onClick={() => {
                    router.push("./details");
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
            <ScrollMenu>
              {outdoorWorkSpace.map((item, index) => (
                <ScrollCard
                  onClick={() => {
                    router.push("./details");
                  }}
                  title={item.name}
                  itemId={item._id}
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
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              // marginX: 1,
              marginY: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ marginX: 1, marginY: 2, fontSize: 18, fontWeight: "400" }}
            >
              {"read, discover, explore..."}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"about us"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"term & condition"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"privacy policy"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"faq"}
            </Typography>
            <Typography
              sx={{
                marginX: 1,
                marginBottom: 1.5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {"become a workhost"}
            </Typography>
            <div style={{ height: 100 }} />
          </Card>
        </Grid>
        <Grid item md={9} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <TableBottom/>
            {/* <img
              src={`${"https://wallpaperaccess.com/full/3678503.png"}`}
              srcSet={require("../assets/Wallpaper.png")}
              alt={"Title"}
              style={{
                display: "block",
                height: 600,
                borderRadius: 5,
                // resize: "both",
              }}
            /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
