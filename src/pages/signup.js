import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { CustomHeader } from "../component";
import FormWb from "./Signup/wb";
import Form from "./Signup/form";
import Image from "next/image";
import Leftewallpaper from "src/assets/images/tabletop.png";

export default function SignUp() {
  return (
    <>
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
            <Grid item xs={6} md={7} lg={7}>
              <Box
                style={{
                  position: "relative",
                  left: -110,
                  top: -155,
                  zIndex: -1,
                }}
              >
                <Image src={Leftewallpaper} alt="" />
              </Box>
            </Grid>
            <Grid
              sx={{ mt: 5, display: { xs: "none", md: "block" } }}
              item
              xs={12}
              md={5}
            >
              <FormWb />
            </Grid>
            <Grid
              sx={{ display: { xs: "block", md: "none" } }}
              item
              xs={12}
              md={5}
            >
              <Form />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
