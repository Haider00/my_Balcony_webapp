import React from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import MenuSection from "./MenuSection/menuSection";
import RightIcons from "@components/rightIcons/rightIcons";
import WorkFromOutdoorImage from "@components/workFromOutdoorImage/workFromoutdoorImage";
import Pagination from "@mui/material/Pagination";
import TableBottom from "src/assets/images/tablebottom.png";
import Head from "next/head";
import Image from "next/image";
import { Box } from "@mui/material";
export default function WorkFromOutdoor() {
  return (
    <>
      <Head>
        <title>Work From Outdoor</title>
      </Head>
      <CustomHeader />
      <WebTabs selectedTab={3} />

      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
      >
        <Grid
          marginX={6}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            flex: 1,
          }}
          item
          md={12}
          lg={1}
          xs={12}
          sm={12}
        >
          <RightIcons />
        </Grid>

        <Grid
          marginX={6}
          marginY={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexWrap: "wrap",
            flex: 1,
          }}
          item
          md={12}
          lg={12}
          xs={12}
          sm={12}
        >
          <WorkFromOutdoorImage />
        </Grid>
      </Grid>

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
    </>
  );
}
