import React from "react";
import { CustomHeader, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Divider, Box } from "@mui/material";
import { WorksapceImagesWorkspaceEdit } from "./WorkSpace/wb";
import WorkspaceDetailBookingOverview from "./BookingOverview/workspaceDetailBookingOverview";
import BookingOverviewEdit from "./BookingOverview/bookingOverviewEdit";
import MenuSection from "./MenuSection/menuSection";
import TableBottom from "src/assets/images/tablebottom.png";
import Head from "next/head";
import Image from "next/image";
export default function BookingOverview() {
  return (
    <>
      <Head>
        <title>Workspace Edit</title>
      </Head>
      <CustomHeader />
      <Grid sx={{ mt: 15 }} container>
        <Grid
          item
          xs={12}
          lg={6}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WorkspaceDetailBookingOverview />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BookingOverviewEdit />
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
