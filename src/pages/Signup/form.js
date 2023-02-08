import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, TextInput } from "../../component";
import CheckBox from "@mui/icons-material/CheckBox";
import { useState } from "react";
import { api } from "../../utils/api";
import { useAuthDispatch } from "../../context/auth.context";
import { useRouter } from "next/router";
import { Snackbar } from "@mui/material";

export const Form = () => {
  const router = useRouter();
  const [info, setInfo] = useState({});
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const authDispatch = useAuthDispatch();
  const handleSubmitSigupForm = () => {
    if (
      info &&
      info.email &&
      info.firstName &&
      info.lastName &&
      info.password &&
      info.phone
    ) {
      api
        .userRegistration(info)
        .then((res) => {
          setMessage("You have registered successfully");
          setDisplay(true);
          authDispatch({ type: "LOGIN", payload: res });
          router.push("./");
        })
        .catch((err) => {
          setMessage("something went wrong while registration");
          setDisplay(true);
        });
    } else {
      setMessage("please check your fields");
      setDisplay(true);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={display}
        onClose={() => {
          setDisplay(false);
        }}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{message}</span>}
      />
      <TextInput
        width="75%"
        onChange={(e) => {
          setInfo({ ...info, firstName: e.target.value });
        }}
        id="firstName"
        label="First Name"
        size="small"
      />
      <TextInput
        width="75%"
        onChange={(e) => {
          setInfo({ ...info, lastName: e.target.value });
        }}
        // sx={{ marginY: 1.5, width: "80%" }}
        id="lastName"
        label="Last Name"
        // variant="outlined"
        size="small"
      />
      <TextInput
        width="75%"
        onChange={(e) => {
          setInfo({ ...info, email: e.target.value });
        }}
        // sx={{ marginY: 1.5, width: "80%" }}
        id="email"
        label="email"
        // variant="outlined"
        size="small"
      />
      <TextInput
        width="75%"
        onChange={(e) => {
          setInfo({ ...info, password: e.target.value });
        }}
        // sx={{ marginY: 1.5, width: "80%" }}
        id="password"
        label="password"
        // variant="outlined"
        size="small"
      />
      <TextInput
        width="75%"
        onChange={(e) => {
          setInfo({ ...info, phone: e.target.value });
        }}
        // sx={{ marginY: 1.5, width: "80%", marginBottom: 3 }}
        id="phone"
        label="phone"
        // variant="outlined"
        size="small"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          marginY: 2,
        }}
      >
        <CheckBox style={{ color: "#000", fontSize: 15, margin: 10 }} />
        <Typography
          component="h1"
          variant="h6"
          style={{
            width: "100%",
          }}
        >
          I agree to Balcony Term of Services and Privacy Policy
        </Typography>
      </Box>
      <Button
        onClick={() => {
          handleSubmitSigupForm();
        }}
        title="Register"
        width="80%"
      />

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
          style={{ width: "40%", cursor: "pointer" }}
          onClick={() => {
            router.push("./signin");
          }}
        >
          Sign In
        </div>
      </Box>
    </div>
  );
};

export default Form;
