import React from "react";
import Admin from "../components/Admin/admin";
import { Grid, Typography } from "@mui/material";
import CustomHeader from "../component/CustomHeader/index";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import TextInput from "src/component/TextInput/index";
import { CheckBoxLabel } from "src/component";
import { width } from "@mui/system";

export default function Promotions() {
  return (
    <>
      <CustomHeader />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={3}>
          <Admin />
        </Grid>
        <Grid sx={{ mt: 6 }} item xs={12} sm={12} md={6} lg={9}>
          <Grid
            sx={{ mr: 6, display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6">Promotion Manager</Typography>
            <HelpOutlineIcon />
          </Grid>
          <Divider sx={{ width: "96%", mb: 2, mb: 6 }} />
          <Grid
            sx={{
              mr: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1">Add new Promo</Typography>
            <Grid sx={{ display: "flex" }}>
              <Grid>
                <TextInput
                  alignItems="flex-start"
                  id="check-in"
                  label="Promo Code"
                  size="small"
                  width="100%"
                />
              </Grid>
              <Grid
                sx={{ display: "flex", flexDirection: "column", width: "30%" }}
              >
                <CheckBoxLabel
                  fontSize={14}
                  justifyContent="center"
                  title="% - Percentage"
                />
                <CheckBoxLabel
                  fontSize={14}
                  justifyContent="center"
                  title="$ - Dollar Amount ____ if you spend____ or more "
                />
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex", mt: 2 }}>
              <Grid sx={{ display: "flex", width: "22%" }}>
                <Button
                  sx={{
                    width: "50%",
                    height: 40,
                    backgroundColor: "#005451",
                    fontSize: 13,
                    fontWeight: "300",
                    borderRadius: 3,
                    textTransform: "capitalize",
                    paddingRight: 3,
                    paddingLeft: 3,
                    marginBottom: 5,
                  }}
                  variant="contained"
                >
                  Add promo
                </Button>
              </Grid>
              <Grid
                sx={{ display: "flex", flexDirection: "column", width: "30%" }}
              >
                <Typography variant="caption">
                  Promo code running for ____ this many days
                </Typography>
                <Typography variant="caption">
                  Promo code running for ____ this many days
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ color: "black", width: "96%", mb: 3 }} />
            <Grid>
              <Typography sx={{ mb: 2 }} variant="h6">
                Add new Promo
              </Typography>
              <Grid
                style={{
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexDirection: "row",
                }}
                sx={{ marginY: 2 }}
                container
                spacing={4}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
                  <div style={{ display: "flex", margin: 2 }}>
                    <div
                      style={{
                        height: 150,
                        width: "150px",
                        borderRadius: 10,
                        backgroundColor: "yellow",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{ mb: 1, marginTop: 4 }}
                        variant="subtitle2"
                      >
                        Promo 20323
                      </Typography>
                      <Typography sx={{ mb: 1 }} variant="subtitle2">
                        Expires 03/03/23
                      </Typography>
                      <Button
                        sx={{
                          width: "70%",
                          height: 40,
                          backgroundColor: "#005451",
                          fontSize: 13,
                          fontWeight: "300",
                          borderRadius: 3,
                          textTransform: "capitalize",
                          paddingRight: 3,
                          paddingLeft: 3,
                          marginBottom: 5,
                        }}
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
