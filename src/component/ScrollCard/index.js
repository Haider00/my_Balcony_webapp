import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarOutline from "@mui/icons-material/StarOutline";

export default function Card({ title, itemId, image, onClick }) {
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
            height: 135,
            borderRadius: 10,
            objectFit: "contain",
          }}
        />
        <Typography sx={{ fontSize: 13, marginX: 1 }}>{title}</Typography>
        <div style={{ display: "flex", marginLeft: 7 }}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <StarOutline
              key={index}
              style={{
                fontSize: 12,
              }}
            />
          ))}
        </div>
      </Box>
    </div>
  );
}
