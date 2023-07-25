import React, { useState } from "react";
import { CustomHeader, Filter, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import SearchWorkSpaces from "@components/searchWorkSpaces/searchWorkSpaces";
import Image from "next/image";
import TableBottom from "src/assets/images/tablebottom.png";
import * as Icons from "@mui/icons-material";

export default function WorkFromIndoor() {
  return (
    <>
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
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <Grid container>
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
                <Box
                  sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
                >
                  <Image src={TableBottom} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
