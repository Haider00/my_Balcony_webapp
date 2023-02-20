import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchRounded from "@mui/icons-material/Search";
import MenuBox from "@mui/icons-material/Menu";
import articleStyles from "../../styles/Components.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <Card
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          padding: { xs: 1, md: 2 },
          marginX: 5,
          marginY: 1,
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 5,
        }}
      >
        <Typography
          onClick={() => {
            router.push("./");
          }}
          style={{ cursor: "pointer" }}
          component="h5"
          variant="h4"
        >
          Balcony
        </Typography>
        <Box
          sx={{
            display: "flex",
            minWidth: 150,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              height: 30,
              backgroundColor: "#005451",
              fontSize: 13,
              fontWeight: "300",
              borderRadius: 3,
              textTransform: "lowercase",
              paddingRight: 3,
              paddingLeft: 3,
            }}
            variant="contained"
          >
            account
          </Button>
          <div
            onClick={() => {
              router.push("./map");
            }}
            style={{
              display: "flex",
              backgroundColor: "#005451",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              width: 30,
              cursor: "pointer",
            }}
          >
            <SearchRounded
              style={{
                //   backgroundColor: "#005451",
                fontSize: 20,
                color: "#fff",
              }}
            />
          </div>
        </Box>
      </Card>

      <Box
        sx={{
          flex: 1,
          display: { xs: "flex", md: "none" },
          padding: { xs: 1, md: 2 },
          marginX: 3,
          marginY: 1,
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: 40,
            marginRight: 1,
            // backgroundColor: "red",
          }}
        >
          <TextField
            className={articleStyles.inputRounded}
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{ flex: 1 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#005451",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              width: 30,
            }}
          >
            <SearchRounded
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
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              width: 30,
              marginLeft: 10,
            }}
          >
            <MenuBox
              style={{
                //   backgroundColor: "#005451",
                fontSize: 30,
                color: "#000",
              }}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};
export default Header;
