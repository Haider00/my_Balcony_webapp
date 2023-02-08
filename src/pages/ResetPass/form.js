import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Button } from "../../component";

export const Form = () => {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        sx={{ marginY: 1.5, width: "80%", marginTop: 6 }}
        id="email"
        label="email"
        variant="outlined"
        size="small"
      />
      <div style={{ width: "65%", margin: 10 }}>or</div>
      <TextField
        sx={{ marginY: 1.5, width: "80%", marginBottom: 6 }}
        id="phone"
        label="phone"
        variant="outlined"
        size="small"
      />

      <Button title="Reset Password" width="80%" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "80%",
          marginY: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          style={{
            width: "50%",
          }}
        >
          Already Have an accountt?
        </Typography>
        <div style={{ height: 30, width: 1, backgroundColor: "#000" }} />
        <div
          onClick={() => {
            router.push("./signin");
          }}
          style={{ width: "40%", cursor: "pointer" }}
        >
          Sign In
        </div>
      </Box>
    </div>
  );
};
export default Form;
