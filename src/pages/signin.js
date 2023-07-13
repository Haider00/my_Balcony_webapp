import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { CustomHeader } from "../component";
import FormWb, { LeftWallpaperWb } from "./Signin/wb";
import Form from "./Signin/form";
import Image from "next/image";
import Leftewallpaper from "src/assets/images/tabletop.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
export default function SignUp() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <meta name="Sign In" content="Generated by create next app" />

      <Box
        style={{
          marginTop: "70px",
          maxWidth: 1400,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomHeader />
        <Box sx={{ flexGrow: 1, paddingX: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={0} md={0} lg={7}>
              <Box
                style={{
                  position: "relative",
                  left: -110,
                  top: -155,
                  zIndex: -1,
                  display: isMediumScreen ? "none" : "block",
                }}
              >
                <Image src={Leftewallpaper} alt="" />
              </Box>
            </Grid>
            <Grid
              sx={{ mt: 5, display: { xs: "none", md: "block" } }}
              item
              xs={12}
              md={12}
              lg={5}
            >
              <FormWb />
            </Grid>
            <Grid
              sx={{ display: { xs: "block", md: "none" }, borderRadius: 30 }}
              item
              xs={12}
              md={12}
            >
              <Form />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
