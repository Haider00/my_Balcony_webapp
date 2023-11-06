import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Form from "./form";
import TableTop from "src/assets/svg/TableTop";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const FormWb = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.paper",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "75%",
          height: "100%",
          padding: { xs: 1, md: 2 },
          marginX: 3,
          marginY: 1.5,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Form />
      </Card>
    </Box>
  );
};
export const LeftWallpaperWb = () => {
  return (
    <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={12} md={7}>
      <TableTop />
    </Grid>
  );
};

export default FormWb;
