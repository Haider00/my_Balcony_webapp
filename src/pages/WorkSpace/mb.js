import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const HostWorkSpaceMb = () => {
  return (
    <Grid
      sx={{ display: { xs: "block", md: "none" }, marginY: 3 }}
      item
      xs={12}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Typography component="h1" variant="h5">
          host your workspace
        </Typography>
      </div>
      <img
        src={`${"https://wallpaperaccess.com/full/3678503.png"}`}
        srcSet={`${"https://wallpaperaccess.com/full/38119.jpg"}`}
        alt={"Title"}
        style={{
          display: "block",
          width: "100%",
          height: 400,
          borderRadius: 5,
        }}
      />
    </Grid>
  );
};
export default HostWorkSpaceMb;
