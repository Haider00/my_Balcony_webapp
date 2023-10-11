import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Card
        sx={{ minWidth: 275, marginLeft: 10, marginRight: 10, marginTop: 5 }}
      >
        <CardContent>
          <Typography sx={{ fontWeight: "bold", mb: 2 }} variant="h3">
            About us
          </Typography>
          <Typography variant="subtitle1">
            Welcome to the Balcony experience, your one-stop destination for
            finding the perfect workspace solutions tailored to your needs. We
            understand that the way we work is evolving rapidly, and flexibility
            is key. That's why we've created a platform that connects you with a
            diverse range of workspace providers, making it easy for you to
            discover and book the ideal workspace, whether you're a freelancer,
            startup, remote worker, or established business.
          </Typography>

          <br />
          <Typography sx={{ fontWeight: "bold", mb: 2 }} variant="h5">
            Our Plans
          </Typography>

          <Typography variant="subtitle1">
            We feel that workspaces should adapt to your needs, not the other
            way around. Our platform is designed to help you find workspaces
            where you may be able to increase productivity, collaboration, and
            innovation, all while offering the flexibility you deserve.
          </Typography>
          <br />
          <Typography sx={{ fontWeight: "bold", mb: 2 }} variant="h5">
            What We Offer
          </Typography>
          <ul>
            <li>
              <strong>Diverse Workspace Options:</strong> We partner with a wide
              array of workspace providers, from cutting-edge coworking spaces
              to serene private offices, ensuring that you'll always find a
              workspace that suits your preferences and requirements.
            </li>
            <br />
            <li>
              <strong>Seamless Booking:</strong> Our user-friendly platform
              simplifies the booking process. Browse available spaces, compare
              amenities, and secure your spot with just a few clicks.
            </li>
            <br />
            <li>
              <strong>Reliability and Quality:</strong> We are committed to
              maintaining high standards across all the workspaces listed on our
              platform. We partner with reputable providers to ensure a
              consistently exceptional experience for our users.
            </li>
            <br />
            <li>
              <strong>Customer Support:</strong> Have questions or need
              assistance? Our dedicated customer support team is here to help.
              We're just a message away, ready to assist you every step of the
              way.
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
