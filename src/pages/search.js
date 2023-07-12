import React, { useState } from "react";
import { CustomHeader, Filter, WebTabs } from "../component";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import MenuSection from "./MenuSection/menuSection";
import SearchWorkSpaces from "@components/searchWorkSpaces/searchWorkSpaces";
import Image from "next/image";
import TableBottom from "src/assets/images/tablebottom.png";
import * as Icons from "@mui/icons-material";
// import TableBottom from 'src/assets/svg/TableBottom';

export default function WorkFromIndoor() {
  const [showFilter, setShowFilter] = useState(false);
  const [workSpaceFilter, setWorkSpaceFilter] = useState({});
  return (
    <>
      <div
        style={{
          marginLeft: 20,
          position: "fixed",
          zIndex: 10,
        }}
      >
        <WebTabs selectedTab={3} />
      </div>
      <div>
        <CustomHeader />
        <div
            style={{
              width: "95%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop:"130px"
            }}
          >
            <Icons.MapOutlined
              onClick={() => {
                router.push("./map");
              }}
              style={{
                color: "#000",
                fontSize: 35,
                margin: 10,
                marginRight: 10,
                cursor: "pointer",
              }}
            />
            <div
              onClick={() => {
                setShowFilter(true);
              }}
            >
              <Icons.FilterAlt
                style={{
                  color: "#000",
                  fontSize: 35,
                  margin: 10,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
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
      <Filter
        open={showFilter}
        workSpaceFilterVal={workSpaceFilter}
        onClose={(e) => {
          setWorkSpaceFilter(e);
          setShowFilter(false);
        }}
      />
    </>
  );
}
