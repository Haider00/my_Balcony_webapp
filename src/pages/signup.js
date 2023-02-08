import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { CustomHeader } from "../component";
import { LeftWallpaperWb, FormWb } from "./Signup/wb";
import { Form } from "./Signup/form";

export default function SignUp() {
  return (
    <Box sx={{ flexGrow: 1, paddingX: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomHeader />
        </Grid>

        <LeftWallpaperWb />
        <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={12} md={5}>
          <FormWb />
        </Grid>
        <Grid sx={{ display: { xs: "block", md: "none" } }} item xs={12} md={5}>
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
}
