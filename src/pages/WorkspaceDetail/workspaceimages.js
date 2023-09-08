import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styledcomp from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "src/utils/api";

const Img = styledcomp.img``;

export const WorksapceImages = () => {
  const [firstImage, setFirstimage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdimage] = useState("");
  const router = useRouter();

  useEffect(() => {
    api
      .getImages({ query: `?workSpace=${router.query.wd}` })
      .then((res) => {
        setFirstimage(res.data[0].Location);
        setSecondImage(res.data[1].Location);
        setThirdimage(res.data[2].Location);
      })
      .catch((err) => {
        console.log("Error3", err);
      });
  }, [router.query.wd]);

  return (
    <Grid
      item
      xs={12}
      md={6}
      sm={12}
      style={{ paddingRight: "10px" }}
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="file"
        style={{ display: "none" }}
        id="group_image"
        accept="image/*"
      />
      <div
        style={{
          height: 200,
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#000",
          margin: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img
          style={{
            height: "inherit",
            width: "auto",
            objectFit: "cover",
            aspectRatio: "9/2",
            borderRadius: "10px",
          }}
          resizeMode="contain"
          src={firstImage}
          alt="image"
        />
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            height: 200,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            margin: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img
            style={{
              height: "inherit",
              width: "auto",
              objectFit: "cover",
              aspectRatio: "8/2",
              borderRadius: "10px",
            }}
            src={secondImage}
            alt="image"
          />
        </div>

        <div
          style={{
            height: 200,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            margin: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img
            style={{
              height: "inherit",
              width: "auto",
              objectFit: "cover",
              aspectRatio: "8/2",
              borderRadius: "10px",
            }}
            src={thirdImage}
            alt="image"
          />
        </div>
      </div>
    </Grid>
  );
};

export default WorksapceImages;
