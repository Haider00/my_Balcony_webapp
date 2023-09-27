import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { CustomHeader } from "../component";
import { FormWb } from "./ResetPass/wb";
import { Form } from "./ResetPass/form";
import Head from "next/head";
import Leftewallpaper from "src/assets/images/tabletop.png";
import Image from "next/image";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function ResetPass() {
  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Head>
        <title>Reset Pass</title>
      </Head>
      <Box sx={{ flexGrow: 1, paddingX: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomHeader />
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            lg={7}
            style={{ display: isMediumScreen ? "none" : "block" }}
          >
            <Box>
              <Image
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "1000px",
                }}
                src={Leftewallpaper}
                alt=""
              />
            </Box>
          </Grid>
          <Grid
            style={{
              marginTop: "100px",
            }}
            sx={{ justifyContent: "center", alignItems: "center" }}
            item
            xs={12}
            md={12}
            lg={4}
            sm={12}
          >
            <FormWb />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
