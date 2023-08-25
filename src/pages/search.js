import React, { useState } from "react";
import { CustomHeader, Filter, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import SearchWorkSpaces from "@components/searchWorkSpaces/searchWorkSpaces";
import Image from "next/image";
import TableBottom from "src/assets/images/tablebottom.png";
import * as Icons from "@mui/icons-material";
import Head from "next/head";

export default function WorkFromIndoor() {
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <div
        style={{
          marginLeft: 20,
          top: "160px",
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
            <SearchWorkSpaces />
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
