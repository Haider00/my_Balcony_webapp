import * as React from "react";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { TextInput } from "../";
import Box from "@mui/material/Box";

const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      <TextInput
        containerWidth="58%"
        alignItems="flex-start"
        width="85%"
        id="people"
        label="people"
        size="small"
      />
      <div
        style={{
          display: "flex",
          backgroundColor: "#005451",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          height: 30,
          width: 30,
          marginLeft: 10,
        }}
      >
        <Remove
          style={{
            //   backgroundColor: "#005451",
            fontSize: 20,
            color: "#fff",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#005451",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          height: 30,
          width: 30,
          marginLeft: 10,
        }}
      >
        <Add
          style={{
            //   backgroundColor: "#005451",
            fontSize: 20,
            color: "#fff",
          }}
        />
      </div>
    </Box>
  );
};
export default Title;
