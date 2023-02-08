import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import {
  CustomHeader,
  CheckBoxLabel,
  CheckBoxInput,
  TimeRange,
} from "../../component";
import { LeftWallpaperWb, FormWb } from "./wb";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useEffect, useRef } from "react";
import { Amenities } from "./Amenities";

export default function WorkSpace() {
  const menu = useRef();
  useEffect(() => {
    setTimeout(() => {
      menu.current.scrollToItem(menu.current.getItemById("1"), "auto", "start");
    }, 100);
  }, []);
  return (
    <Box sx={{ flexGrow: 1, paddingX: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomHeader />
        </Grid>
        <LeftWallpaperWb />
        <FormWb />
      </Grid>
      <Grid sx={{ marginY: 2 }} container>
        <Typography sx={{ marginY: 1, fontSize: 20, fontWeight: "600" }}>
          Workspace Amenities
        </Typography>
        <Amenities handleSelectedAmenities={() => {}} />
      </Grid>
      <Grid sx={{ marginY: 2 }} container>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            flex: 1,
          }}
          item
          md={12}
          lg={4}
          xs={12}
          sm={12}
        >
          <Typography sx={{ marginY: 1, fontSize: 18, fontWeight: "500" }}>
            Pricing
          </Typography>
          <TextField
            sx={{ marginY: 1, width: "100%" }}
            id="curreny"
            label="curreny"
            variant="outlined"
            size="small"
          />
          <TextField
            sx={{ marginY: 1, width: "100%" }}
            id="per-person"
            label="per person"
            variant="outlined"
            size="small"
          />
          <Typography sx={{ marginY: 1, fontSize: 14, fontWeight: "400" }}>
            Do you charge fees?
          </Typography>
          <Typography
            sx={{ marginY: 1, fontSize: 11, fontWeight: "400", width: "100%" }}
          >
            {
              "**Note: We suggest you include cleaning, maintenance, or any other fees included on your per person price. A user may want to book your workspace when there are little to no fees, but you can add fees if you like.\n\n\n We do collect a service fee from the user, along with 20% from the sale amount from each booking. You take 80% from the sale amount.**"
            }
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <CheckBoxLabel title="Flat Fee" />
            <CheckBoxLabel title="Percentage" />
          </div>
          <CheckBoxInput title="Cleaning Fee Amount" />
          <CheckBoxInput title="Maintenance Fee Amount" />
          <Typography
            sx={{ marginY: 1, marginX: 1.5, fontSize: 14, fontWeight: "500" }}
          >
            Not Listed?
          </Typography>
          <CheckBoxInput title="Enter The Fee Name" />
          <CheckBoxInput title="Amount" />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          item
          md={12}
          lg={4}
          xs={12}
          sm={12}
        >
          <Typography
            sx={{ marginY: 1, marginX: 1.5, fontSize: 16, fontWeight: "600" }}
          >
            Add Workspace Hours
          </Typography>
          <div
            style={{
              display: "flex",
              height: "80%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map(
              (item, index) => (
                <TimeRange
                  key={index}
                  title={item}
                  handleTimeRange={() => {}}
                />
              )
            )}
          </div>
        </Grid>
        <Grid item md={12} lg={4} xs={12} sm={12}>
          <div
            style={{
              height: 100,
              display: "flex",
              flex: 1,
              backgroundColor: "green",
            }}
          />
        </Grid>
      </Grid>
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
            <img
              src={`${"https://wallpaperaccess.com/full/3678503.png"}`}
              srcSet={require("../../assets/Wallpaper.png")}
              alt={"Title"}
              style={{
                display: "block",
                height: 600,
                borderRadius: 5,
                // resize: "both",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
