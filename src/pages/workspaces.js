import React from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import RightIcons from "@components/rightIcons/rightIcons";
import WorkFromIndoorImage from "@components/workFromIndoorImage/workFromIndoorImage";
import Image from "next/image";
import WorkFromOutdoorImage from "@components/workFromOutdoorImage/workFromoutdoorImage";
import Pagination from "@mui/material/Pagination";
import TableBottom from "src/assets/images/tablebottom.png";
import { Divider } from "@mui/material";
// import TableBottom from 'src/assets/svg/TableBottom';
import Head from "next/head";
export default function WorkFromIndoor() {
  return (
    <>
      <Head>
        <title>Workspaces</title>
      </Head>
      <div
        style={{
          marginLeft: 20,
          marginTop: 150,
          position: "fixed",
          zIndex: 10,
        }}
      >
        <WebTabs selectedTab={3} />
      </div>
      <div>
        <CustomHeader />

        <Grid container>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <Grid container>
              <Grid item md={12} lg={6} xs={12} sm={12}>
                <WorkFromIndoorImage />
              </Grid>
              <Grid item md={12} lg={6} xs={12} sm={12}>
                <WorkFromOutdoorImage />
              </Grid>
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
        </Grid>
      </div>
    </>
  );
}
