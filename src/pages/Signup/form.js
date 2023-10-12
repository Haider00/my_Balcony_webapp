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
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import Google from "@mui/icons-material/Google";
import Link from "next/link";
import TextInput2 from "../../component/TextInput2/index";
const Form = ({ from = "", onChangeRoute = () => {} }) => {
  const router = useRouter();
  const [info, setInfo] = useState({});
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const authDispatch = useAuthDispatch();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleSubmitSigupForm = () => {
    if (
      info &&
      info.email &&
      info.firstName &&
      info.lastName &&
      info.password &&
      info.phone &&
      /^\d+$/.test(info.phone)
    ) {
      if (isCheckboxChecked) {
        api
          .userRegistration(info)
          .then((res) => {
            setMessage("You have registered successfully");
            setDisplay(true);
            authDispatch({ type: "LOGIN", payload: res });
            router.push("./signin");
          })
          .catch((error) => {
            if (
              error.response &&
              error.response.data &&
              error.response.data.message
            ) {
              setMessage(error.response.data.message);
              setDisplay(true);
            } else {
              setMessage("Something went wrong while registration.");
              setDisplay(true);
            }
          });
      } else {
        setMessage("You must agree to the terms and privacy policy.");
        setDisplay(true);
      }
    } else {
      setMessage("Please fill in all the required fields correctly.");
      setDisplay(true);
    }
  };

  // const handleSubmitSigupForm = () => {
  //   if (
  //     info &&
  //     info.email &&
  //     info.firstName &&
  //     info.lastName &&
  //     info.password &&
  //     info.phone &&
  //     /^\d+$/.test(info.phone)
  //   ) {
  //     api
  //       .userRegistration(info)
  //       .then((res) => {
  //         setMessage("You have registered successfully");
  //         setDisplay(true);
  //         authDispatch({ type: "LOGIN", payload: res });
  //         router.push("./signin");
  //       })
  //       .catch((error) => {
  //         if (
  //           error.response &&
  //           error.response.data &&
  //           error.response.data.message
  //         ) {
  //           setMessage(error.response.data.message);
  //           setDisplay(true);
  //         } else {
  //           setMessage("something went wrong while registration ");
  //           setDisplay(true);
  //         }
  //       });
  //   } else {
  //     setMessage("Phone number should be in digits");
  //     setDisplay(true);
  //   }
  // };

  const handleSignInWithFacebook = () => {
    signIn("facebook");
  };

  const handleSignInWithGoogle = () => {
    signIn("google");
  };

  const handleClick = () => {
    if (!from) {
      router.push("./signin");
    } else {
      onChangeRoute("signIn");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "40px",
        paddingBottom: "40px",
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
      <div style={{ marginBottom: "30px", width: "355px" }}>
        <TextInput2
          width="75%"
          onChange={(e) => {
            setInfo({ ...info, firstName: e.target.value });
          }}
          id="firstName"
          label="first name:"
          size="small"
        />
      </div>
      <div style={{ marginBottom: "30px", width: "355px" }}>
        <TextInput2
          width="75%"
          onChange={(e) => {
            setInfo({ ...info, lastName: e.target.value });
          }}
          // sx={{ marginY: 1.5, width: "80%" }}
          id="lastName"
          label="last name:"
          // variant="outlined"
          size="small"
        />
      </div>
      <div style={{ marginBottom: "30px", width: "355px" }}>
        <TextInput2
          width="75%"
          onChange={(e) => {
            setInfo({ ...info, email: e.target.value });
          }}
          // sx={{ marginY: 1.5, width: "80%" }}
          id="email"
          label="email:"
          // variant="outlined"
          size="small"
        />
      </div>
      <div style={{ marginBottom: "30px", width: "355px" }}>
        <TextInput2
          width="75%"
          onChange={(e) => {
            setInfo({ ...info, password: e.target.value });
          }}
          // sx={{ marginY: 1.5, width: "80%" }}
          id="password"
          label="password:"
          // variant="outlined"
          size="small"
          type="password"
        />
      </div>
      <div style={{ marginBottom: "30px", width: "355px" }}>
        <TextInput2
          width="75%"
          onChange={(e) => {
            setInfo({ ...info, phone: e.target.value });
          }}
          // sx={{ marginY: 1.5, width: "80%", marginBottom: 3 }}
          id="phone"
          label="phone:"
          // variant="outlined"
          size="small"
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "80%",
          marginY: 2,
        }}
      >
        <input
          style={{
            color: "#000",
            fontSize: 15,
            margin: 10,
            backgroundColor: "#000",
          }}
          type="checkbox"
          id="myCheckbox"
          name="checkboxName"
          value="checkboxValue"
          onChange={handleCheckboxChange}
        />
        <Typography
          component="h1"
          variant="h6"
          fontFamily="Roboto-Regular"
          style={{
            width: "100%",
          }}
        >
          I agree to Balcony{" "}
          <Link href="/termsOfServices" passHref>
            <Typography
              component="span"
              variant="inherit"
              sx={{ textDecoration: "underline" }}
            >
              Term of Services
            </Typography>
          </Link>{" "}
          and{" "}
          <Link href="/privacyPolicy" passHref>
            <Typography
              component="span"
              variant="inherit"
              sx={{ textDecoration: "underline" }}
            >
              Privacy Policy
            </Typography>
          </Link>
        </Typography>
      </Box>
      <Button
        onClick={() => {
          handleSubmitSigupForm();
        }}
        title="Register"
        width="302px"
        height="55.8px"
        color="#fff"
        fontSize="23px"
        textTransform="none"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "50%",
          marginY: 3,
        }}
      >
        <div
          style={{
            height: 1,
            width: "35%",
            backgroundColor: "#000",
          }}
        />
        <div>or</div>
        <div style={{ height: 1, width: "35%", backgroundColor: "#000" }} />
      </Box>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "302px",
        }}
      >
        <FacebookRounded style={{ color: "#1877F2", fontSize: 30 }} />
        <Button
          onClick={handleSignInWithFacebook}
          title="Continue with Facebook"
          width="85%"
          backgroundColor="#1877F2"
          fontSize="14"
          textTransform="none"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "302px",
        }}
      >
        <Button
          onClick={handleSignInWithGoogle}
          title="Continue with Google"
          width="85%"
          color="#444"
          backgroundColor="#F0F0F0"
          textTransform="none"
        />
        <Google style={{ color: "#FE2B25", fontSize: 30 }} />
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "80%",
          marginY: 2,
        }}
      >
        <div
          style={{
            width: "54%",
            fontSize: "14px",
            fontWeight: "700",
            textAlign: "right",
          }}
        >
          Already Have an account?
        </div>

        <div style={{ height: 30, width: 1, backgroundColor: "#000" }} />
        <div
          style={{
            width: "40%",
            cursor: "pointer",
            textAlign: "left",
            fontSize: "18px",
            fontWeight: "700",
            textDecoration: "underline",
          }}
          onClick={handleClick}
        >
          Sign In
        </div>
      </Box>
    </div>
  );
};

export default Form;
