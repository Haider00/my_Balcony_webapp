import React, { useEffect, useState } from "react";
import { CustomHeader } from "../component";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import BushwickLofts from "./WorkspaceDetail/bushwickLofts";
import HoursOfServices from "./WorkspaceDetail/hoursOfServices";
import AmenitiesPortion from "./WorkspaceDetail/amenitiesPortion";
import MenuSection from "./MenuSection/menuSection";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import TableBottom from "src/assets/images/tablebottom2.png";
import Mapsection from "./WorkspaceDetail/map";
import { useRouter } from "next/router";
import { useWorkspaceDetailDispatch } from "src/context/workspaceDetail.context";
import { api } from "src/utils/api";
import Image from "next/image";
import Box from "@mui/material/Box";
export default function WorkspaceDetail() {
  const dispatch = useWorkspaceDetailDispatch();
  const router = useRouter();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [name, setName] = useState("");
  const [rating, setRating] = useState();
  const [noOfRating, setNoOfRating] = useState(0);

  useEffect(() => {
    if (router.query?.wd) {
      api
        .getWorkSpace({ query: `?_id=${router.query.wd}` })
        .then((res) => {
          // console.log("resp>>>", res.data[0]);
          setName(res.data[0].name);

          const ratings = res.data[0].rating;
          // console.log("ratings", ratings);
          const sum = ratings
            .map((rating) => rating.rating.$numberDecimal)
            .reduce((a, b) => a + b, 0);
          const average = sum / ratings.length;
          setNoOfRating(ratings.length);
          setRating(average);

          dispatch({
            type: "WORKSPACE_DETAIL",
            payload: res.data[0],
          });
        })
        .catch((err) => {
          console.log("Error3", err);
        });
    }
  }, [router.query]);

  return (
    <>
      <Box style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto" }}>
        <CustomHeader />

        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", mt: 18 }}
        >
          <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={4}>
            <BushwickLofts
              name={name}
              rating={rating}
              noOfRating={noOfRating}
            />
          </Grid>
          {!isMediumScreen && (
            <Divider className="divider" orientation="vertical" flexItem />
          )}
          <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={5} lg={3}>
            <AmenitiesPortion />
          </Grid>
          {!isMediumScreen && (
            <Divider className="divider" orientation="vertical" flexItem />
          )}
          <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={12} lg={4}>
            <HoursOfServices />
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: 10 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Mapsection />
          </Grid>
        </Grid>
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
              style={{ objectFit: "contain", width: "100%", height: "1000px" }}
              src={TableBottom}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
