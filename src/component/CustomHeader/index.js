// import * as React from "react";
// import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import SearchRounded from "@mui/icons-material/Search";
// import CloseRounded from "@mui/icons-material/Close";
// import MenuBox from "@mui/icons-material/Menu";
// import articleStyles from "../../styles/Components.module.css";
// import { useRouter } from "next/router";
// import { useAuthState } from "src/context/auth.context";
// import { useState } from "react";
// import { Snackbar } from "@mui/material";
// import { useAuthDispatch } from "src/context/auth.context";
// import { useSession, signOut } from "next-auth/react";
// import { Button, Menu, MenuItem } from '@mui/material';

// const Header = (props) => {
//   const router = useRouter();
  // const auth = useAuthState();
//   const authDispatch = useAuthDispatch();
//   let [message, setMessage] = useState("");
//   const [display, setDisplay] = useState(false);
//   const [searchBarOpen, setSearchBarOpen] = useState(false);
//   const { data: session } = useSession();
//   const [anchorEl, setAnchorEl] = useState(null);

//   function handleClick(event) {
//     if (!auth?.user?._id) {
//       setAnchorEl(event.currentTarget);
//     } else {
//       router.push("./accountDashboard");
//     }
//   }

//   function handleSearchClick() {
//     if (props.page === "map") {
//       setSearchBarOpen(true);
//     }
//   }

//   function handleCloseClick() {
//     setSearchBarOpen(false);
//   }
//   function handleLogout() {
//     authDispatch({ type: "LOGOUT", payload: "" });
//     setMessage("You have been logged out");
//     setDisplay(true);
//     router.push("./signin");
//     signOut("google");
//     signOut("facebook");
//   }

//   return (
//     <>
//       <Snackbar
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         open={display}
//         onClose={() => {
//           setDisplay(false);
//         }}
//         ContentProps={{
//           "aria-describedby": "message-id",
//         }}
//         message={<span id="message-id">{message}</span>}
//       />
//       <Card
//         sx={{
//           width: '90%',
//           flex: 1,
//           padding: { xs: 1, md: 2 },
//           marginX: 5,
//           marginY: 1,
//           marginBottom: '20px',
//           alignItems: "center",
//           justifyContent: "space-between",
//           borderRadius: 5,
//           position: "fixed",
//           top: 0,
//           zIndex: 100,
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             position: "relative",
//             justifyContent: "space-between",
//             width: "100%",
//           }}
//         >
//           {!searchBarOpen && (
//             <Typography
//               onClick={() => {
//                 router.push("./");
//               }}
//               style={{ cursor: "pointer", fontSize: '50px' }}
//               component="h5"
//               variant="h4"
//             >
//               balcony
//             </Typography>
//           )}

//           {searchBarOpen ? (
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 width: "100%",
//               }}
//             >
//               <TextField
//                 className={articleStyles.inputRounded}
//                 placeholder="Search"
//                 variant="outlined"
//                 size="small"
//                 sx={{ width: "100%", marginRight: 2 }}
//               />
//               <Button
//                 onClick={handleCloseClick}
//                 sx={{
//                   height: 30,
//                   backgroundColor: "#005451",
//                   fontSize: 13,
//                   fontWeight: "300",
//                   borderRadius: 3,
//                   textTransform: "lowercase",
//                   paddingRight: 3,
//                   paddingLeft: 3,
//                   marginLeft: 2,
//                 }}
//                 variant="contained"
//               >
//                 <CloseRounded style={{ color: "#fff" }} />
//               </Button>
//             </Box>
//           ) : (
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Button
//                 onClick={handleClick}
//                 sx={{
//                   height: 42,
//                   width: 120,
//                   backgroundColor: "#005451",
//                   fontSize: 20,
//                   fontWeight: "300",
//                   borderRadius: 3,
//                   textTransform: "lowercase",
//                   paddingRight: 3,
//                   paddingLeft: 3,
//                   marginRight: 2,
//                   "&:hover": {
//                     backgroundColor: "#ffff00",
//                     color: '#000'
//                   },
//                 }}
//                 variant="contained"
//               >
//                 account
//               </Button>
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={() => setAnchorEl(null)}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 PaperProps={{
//                   style: {
//                     borderRadius:'10px',
//                     paddingTop:'5px',
//                     paddingBottom:'5px'
//                   },
//                 }}
//               >
//                 <MenuItem sx={{
//                   '&:hover': {
//                     backgroundColor: 'yellow',
//                     color: 'black',
//                   },
//                 }} onClick={() => router.push('./signin')}>Sign In</MenuItem>
//                 <MenuItem sx={{
//                   '&:hover': {
//                     backgroundColor: 'yellow',
//                     color: 'black',
//                   },
//                 }} onClick={() => router.push('./signup')}>Sign Up</MenuItem>
//               </Menu>
//               {session ? (
//                 <Button
//                   onClick={handleLogout}
//                   sx={{
//                     height: 30,
//                     backgroundColor: "#005451",
//                     fontSize: 13,
//                     fontWeight: "300",
//                     borderRadius: 3,
//                     textTransform: "lowercase",
//                     paddingRight: 3,
//                     paddingLeft: 3,
//                     marginRight: 2,
//                   }}
//                   variant="contained"
//                 >
//                   Logout
//                 </Button>
//               ) : null}

//               <div
//                 onClick={handleSearchClick}
//                 style={{
//                   display: "flex",
//                   backgroundColor: "#005451",
//                   borderRadius: 20,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: 30,
//                   width: 30,
//                   cursor: "pointer",
//                   fontSize: 20,
//                   color: "#fff",
//                   marginRight: 10,
//                 }}
//               >
//                 <SearchRounded />
//               </div>
//             </Box>
//           )}
//         </Box>
//       </Card>
//     </>
//   );
// };

// export default Header;




import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchRounded from "@mui/icons-material/Search";
import articleStyles from "../../styles/Components.module.css";
import { useRouter } from "next/router";
import { Button, Menu, MenuItem } from '@mui/material';
import MenuBox from "@mui/icons-material/Menu";
import { useAuthState } from "src/context/auth.context";
import FormWb from "src/pages/Signin/wb";




const Header = () => {
  const router = useRouter();
  const auth = useAuthState();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  function handleClick(event) {
    if (!auth?.user?._id) {
      setAnchorEl(event.currentTarget);
    } else {
      router.push("./accountDashboard");
    }
  }
  return (
    <>
      <Card
        sx={{
          width: '94%',
          flex: 1,
          display: { xs: "none", md: "flex" },
          padding: { xs: 1, md: 2 },
          // marginX: 5,
          marginY: 1,
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 5,
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      >
        <Typography
          onClick={() => {
            router.push("./");
          }}
          style={{ fontSize: '50px', lineHeight: '55px', cursor: "pointer" }}
          component="h5"
          variant="h4"
        >
          balcony
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
            onClick={handleClick}
            sx={{
              height: 42,
              width: 120,
              backgroundColor: "#005451",
              fontSize: 20,
              fontWeight: "300",
              borderRadius: 4,
              textTransform: "lowercase",
              paddingRight: 3,
              paddingLeft: 3,
              mr: 2,
              "&:hover": {
                backgroundColor: "#ffff00",
                color: '#000'
              },
            }}
            variant="contained"
          >
            account
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              style: {
                borderRadius: '10px',
                paddingTop: '5px',
                paddingBottom: '5px'
              },
            }}
          >
            <FormWb/>
            {/* <MenuItem sx={{
              '&:hover': {
                backgroundColor: 'yellow',
                color: 'black',
              },
            }} onClick={() => router.push('./signin')}>Sign In</MenuItem>
            <MenuItem sx={{
              '&:hover': {
                backgroundColor: 'yellow',
                color: 'black',
              },
            }} onClick={() => router.push('./signup')}>Sign Up</MenuItem> */}
          </Menu>
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
              height: 42,
              width: 42,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#ffff00",
                color: '#000'
              },
            }}
          >
            <SearchRounded
              style={{
                height: 30,
                width: 30,
                fontSize: 20,
                color: "#fff",
              }}
            />
          </div>
        </Box>
      </Card>

      <div style={{ position: "relative" }}>
        <Card
          sx={{
            width: '95%',
            flex: 1,
            display: { xs: "flex", md: "none" },
            padding: { xs: 1, md: 2 },
            marginX: 3,
            marginY: 1,
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px black",
            position: 'fixed',
            top: 0,
            zIndex: 9999,
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
                  backgroundColor: "#005451",
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
                onClick={handleMenuClick}
                style={{
                  //   backgroundColor: "#005451",
                  fontSize: 30,
                  color: "#000",
                }}
              />
            </div>
          </Box>
        </Card>
      </div>
    </>
  );
};
export default Header;


