import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { CustomHeader } from "../component";
import FormWb, { LeftWallpaperWb } from "./Signin/wb";
import Form from "./Signin/form";
import Image from "next/image";
import Leftewallpaper from "src/assets/images/tabletop.png";
export default function SignUp() {
  return (
    <>
      <meta name="Sign In" content="Generated by create next app" />
      <Box sx={{ flexGrow: 1, paddingX: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomHeader />
          </Grid>

          <Grid sx={{mt:5}} item xs={6} md={7}>
            <Box style={{ position: "relative", top: -120, zIndex: -1 }}>
              <Image src={Leftewallpaper} alt="" />
            </Box>
          </Grid>
          <Grid
            sx={{mt:15, display: { xs: "none", md: "block" } }}
            item
            xs={12}
            md={5}
          >
            <FormWb />
          </Grid>
          <Grid
            sx={{ display: { xs: "block", md: "none" }, borderRadius: 30 }}
            item
            xs={12}
            md={5}
          >
            <Form />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
