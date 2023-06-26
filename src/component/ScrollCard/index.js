import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import StarOutline from "@mui/icons-material/StarOutline";
import Rating from "@mui/material/Rating";

export default function Card({ title, itemId, image, onClick, rating = [] }) {
  const [ratingStar, setRatingStar] = useState(2);
  const [noOfRating, setNoOfRating] = useState(2);
  // console.log("rating", rating);

  useEffect(() => {
    const sum = rating
      .map((rating) => {
        return rating.rating?.$numberDecimal || 0.0;
      })
      .reduce((a, b) => a + b, 0);
    const average = sum / rating.length;
    setNoOfRating(rating.length);
    setRatingStar(average);
  }, [rating]);

  return (
    <div onClick={onClick}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 160,
          width: 220,
          margin: 1,
        }}
      >
        <img
          src={`${
            image ? image : "https://wallpaperaccess.com/full/3678503.png"
          }`}
          srcSet={`${
            image ? image : "https://wallpaperaccess.com/full/38119.jpg"
          }`}
          alt={"Title"}
          style={{
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            display: "block",
            width: "100%",
            height: 120,
            borderRadius: 10,
            objectFit: "cover",
          }}
        />
        <Typography sx={{ fontSize: 13, marginX: 1 }}>{title}</Typography>
        <div style={{ display: "flex", marginLeft: 7 }}>
          <Rating
            style={{ fontSize: 20 }}
            fontSize={2}
            value={ratingStar}
            name="simple-controlled"
            readOnly
          />
          <Typography sx={{ fontSize: 13, marginX: 1 }}>
            ({noOfRating})
          </Typography>
        </div>
      </Box>
    </div>
  );
}
