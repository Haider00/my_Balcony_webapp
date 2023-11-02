import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import Google from "@mui/icons-material/Google";
import Apple from "@mui/icons-material/Apple";
import { useEffect, useState } from "react";
import { Button, TextInput } from "../../component";
import { api } from "../../utils/api";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useAuthDispatch } from "../../context/auth.context";
import { Snackbar } from "@mui/material";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import TextInput2 from "../../component/TextInput2/index";
import { CustomHeader } from "../../component";
import { useAuthState } from "src/context/auth.context";
const Form = ({ from = "", onChangeRoute = () => {} }) => {
  const { data: session } = useSession();
  const authDispatch = useAuthDispatch();
  const auth = useAuthState();
  console.log("auth", auth);
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    if (session) {
      console.log("Sign-in error", session);
      if (session?.error) {
        console.log("Sign-in error", session);
      } else {
        const userInfo = session?.token;
        console.log("User info", userInfo);
        if (userInfo) {
          if (userInfo.picture.includes("google")) {
            console.log("Google sign-in SUCCESS", userInfo);
            api
              .socialAuth({
                ...userInfo,
                firstName: userInfo.name,
                image: userInfo.picture,
                email: userInfo.email,
                socialId: userInfo.sub,
                authType: "google",
              })
              .then((res) => {
                console.log("Google sign-in SUCCESS", res);
                authDispatch({ type: "LOGIN", payload: res });
                router.push("./");
              })
              .catch(() => {
                console.log("API error");
              });
          } else if (userInfo.picture.includes("fbsbx")) {
            console.log("Facebook sign-in SUCCESS", userInfo);
            api
              .socialAuth({
                ...userInfo,
                firstName: userInfo.name,
                image: userInfo.picture,
                email: userInfo.email,
                socialId: userInfo.sub,
                authType: "facebook",
              })
              .then((res) => {
                console.log("Facebook sign-in SUCCESS", res);
                authDispatch({ type: "LOGIN", payload: res });
                router.push("./");
              })
              .catch(() => {
                console.log("API error");
              });
          }
        }
      }
    }
  }, [session]);

  const router = useRouter();
  const [info, setInfo] = useState({});
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmitSigInForm = () => {
    if (info && info.email && info.password) {
      api
        .userLogin(info)
        .then((res) => {
          if (res.user.status === "blocked") {
            setBlocked(true);
          } else if (res.user.status === "active") {
            authDispatch({ type: "LOGIN", payload: res });
            router.push("./");
          }
          console.log("resplogin", res.user.status);
        })
        .catch((err) => {
          setMessage("InValid email or Password");
          setDisplay(true);
        });
    } else {
      setMessage("please check your fields");
      setDisplay(true);
    }
  };
  const handleSignInWithGoogle = () => {
    signIn("google");
  };

  const handleSignInWithFacebook = () => {
    signIn("facebook");
  };

  const handleClick = () => {
    if (!from) {
      router.push("./signup");
    } else {
      onChangeRoute("signUp");
    }
  };

  return (
    <>
      {blocked && (
        <>
          <Box
            style={{
              background: "#111",
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              opacity: "0.7",
              zIndex: 101,
            }}
            className="overlay"
          ></Box>
          <Box
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "450px",
              borderRadius: "5px",
              background: "#fff",
              zIndex: 99999,
            }}
          >
            <>
              <Box
                style={{
                  cursor: "pointer",
                  textAlign: "right",
                  paddingRight: 10,
                  paddingTop: 10,
                }}
                onClick={() => setBlocked(false)}
              >
                ✖
              </Box>
              <Box
                style={{
                  padding: "40px 40px 60px",
                }}
                className="otp-popup-content"
              >
                <Typography
                  sx={{ fontSize: 24, marginBottom: "20px" }}
                  component="h1"
                  variant="h5"
                >
                  Your account is blocked.
                </Typography>

                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  Please contact support
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#005451",
                    fontWeight: "600",
                  }}
                >
                  <a href="mailto:info@balcony.ws">info@balcony.ws</a>
                </Box>
              </Box>
            </>
          </Box>
        </>
      )}
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
            onChange={(e) => {
              setInfo({ ...info, email: e.target.value });
            }}
            id="email/phone"
            label="email:"
          />
        </div>
        <div
          style={{ marginBottom: "30px", width: "355px", textAlign: "left" }}
        >
          <div style={{ fontSize: "20px", width: "35%", textAlign: "center" }}>
            or
          </div>
          <div style={{ width: "65%" }}></div>
        </div>
        <div style={{ marginBottom: "30px", width: "355px" }}>
          <TextInput2
            // onChange={(e) => {
            //   setInfo({ ...info, email: e.target.value });
            // }}
            id="phone"
            label="phone:"
          />
        </div>
        <div style={{ marginBottom: "30px", width: "355px" }}>
          <TextInput2
            onChange={(e) => {
              setInfo({ ...info, password: e.target.value });
            }}
            id="password"
            label="password:"
            type="password"
          />
        </div>
        <Button
          onClick={() => {
            handleSubmitSigInForm();
          }}
          title="Sign In"
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
              width: "50%",
              fontSize: "14px",
              fontWeight: "700",
              textAlign: "right",
            }}
          >
            Don’t have an Account?
          </div>
          <div style={{ height: 30, width: 1, backgroundColor: "#000" }} />
          <div
            onClick={handleClick}
            style={{
              width: "40%",
              cursor: "pointer",
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "700",
              textDecoration: "underline",
            }}
          >
            Sign Up
          </div>
        </Box>
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
              width: "50%",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "700",
              textAlign: "right",
            }}
            onClick={() => {
              router.push("./resetPass");
            }}
          >
            Forgot Your Password..
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
            onClick={() => {
              router.push("./resetPass");
            }}
          >
            Reset Password
          </div>
        </Box>
      </div>
    </>
  );
};
export default Form;
