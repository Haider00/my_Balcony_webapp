import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import MobileStoreButton from "react-mobile-store-button";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import PlayStore from "src/assets/svg/googleplay.svg";
import Appstore from "src/assets/images/appStore.svg";
import Instagram from "../../assets/svg/Insta.svg";
import Twitter from "src/assets/svg/Twitter.svg";
import Facebook from "src/assets/svg/Facebook.svg";
import Image from "next/image";

export default function MenuSection() {
  const theme = useTheme();
  const isAndroidView = theme.breakpoints.down("sm");
  const router = useRouter();

  const handleGetOnGooglePlayClick = () => {
    if (typeof window !== "undefined") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.instagram.lite&pli=1";
    }
  };
  const handleGetOnAppStoreClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "https://apps.apple.com/app/id389801252";
    }
  };
  const handleFacebookClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.facebook.com/balconyws";
    }
  };
  const handleTwitterClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "https://twitter.com/balconyws";
    }
  };
  const handleInstagramClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.instagram.com/balconyworkspaces/";
    }
  };

  return (
    <Box
      sx={{
        marginBottom: 2,
        display: "flex",
        flexDirection: isAndroidView ? "column" : "row",
      }}
    >
      <Box sx={{ width: isAndroidView ? "100%" : "250px" }}>
        <Card
          style={{
            paddingTop: 30,
            paddingBottom: 30,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ marginTop: 1, fontSize: 20 }}>
              read, discover, explore..
            </Typography>
            <Typography
              sx={{ cursor: "pointer", marginTop: 1, fontSize: 20 }}
              variant="subtitle1"
            >
              about us
            </Typography>
            <Typography
              onClick={() => router.push("/termsOfServices")}
              sx={{ cursor: "pointer", marginTop: 1, fontSize: 20 }}
              variant="subtitle1"
            >
              terms of services
            </Typography>
            <Typography
              onClick={() => router.push("/privacyPolicy")}
              sx={{ cursor: "pointer", marginTop: 1, fontSize: 20 }}
              variant="subtitle1"
            >
              privacy policy
            </Typography>
            <Typography
              sx={{ cursor: "pointer", marginTop: 1, fontSize: 20 }}
              variant="subtitle1"
            >
              faq
            </Typography>
            <Typography
              sx={{ cursor: "pointer", marginTop: 1, fontSize: 20 }}
              variant="subtitle1"
            >
              become a workspace Host
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: isAndroidView ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              p: 1,
            }}
          >
            <Button onClick={handleGetOnGooglePlayClick}>
              <Image width={152} src={Appstore} alt="" />
            </Button>
            <Button onClick={handleGetOnAppStoreClick}>
              <Image src={PlayStore} alt="" />
            </Button>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button onClick={handleInstagramClick}>
                <Image src={Instagram} alt="" />
              </Button>
              <Button onClick={handleTwitterClick}>
                <Image src={Twitter} alt="" />
              </Button>
              <Button onClick={handleFacebookClick}>
                <Image src={Facebook} alt="" />
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Typography sx={{ fontSize: 16 }}>
              © homework workspaces LLC {new Date().getFullYear()}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
