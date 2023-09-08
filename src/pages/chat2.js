// import React, { useEffect, useState } from 'react'
// import { Avatar, Box, Grid, Typography, TextField } from '@mui/material';
// import { CustomHeader } from 'src/component';
// import { WebTabs } from 'src/component';
// import { Divider } from "@mui/material";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { makeStyles } from '@material-ui/core/styles';
// import styles from './chat2.module.css'
// import SendIcon from '@mui/icons-material/Send';
// import { api } from "../utils/api";
// import { useAuthState } from "src/context/auth.context";
// import { socket } from 'src/utils/socket';

// export default function chat2() {
//     const auth = useAuthState();
//     const [chats, setChats] = useState();
//     const [message, setMessage] = useState();
//     const [chatID, setChatID] = useState();
//     const [messageArr, setMessageArr] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const [sendingMessage, setSendingMessage] = useState(false)
//     console.log('chat>>', chats);

//     useEffect(() => {
//         if (auth.user?._id) {
//             if (auth.userType == 'user') {
//                 api
//                     .getChats(`?client=${auth.user?._id}`)
//                     .then((res) => {
//                         setChats(res.data.data);
//                         console.log("Chats>>>>>>", res.data.data);
//                     })
//                     .catch((err) => {
//                         console.log("Chats>>>>>E", err);
//                     });
//             } else if (auth.userType == 'seller') {
//                 api
//                     .getChats(`?owner=${auth.user?._id}`)
//                     .then((res) => {
//                         setChats(res.data.data);
//                         console.log("Chats>>>>>1", res.data.data);
//                     })
//                     .catch((err) => {
//                         console.log("Chats>>>>>E1", err);
//                     });
//             }
//         }

//     }, [auth.user]);

//     const handleMessageText = (e) => {
//         setMessage(e.target.value);
//     }

//     const sendMessage = () => {
//         api
//             .createMessage({ chat: chatID, from: auth.user?._id, text: message })
//             .then((res) => {

//                 setMessageArr([res.data, ...messageArr])
//                 socket.emit('send_msg', res.data);
//                 console.log("message>>>>>>", res.data);
//             })
//             .catch((err) => {
//                 console.log("Error", err);
//             });
//         document.getElementById("message").value = "";
//     }

//     const showMessages = (chatId) => {
//         api
//             .getMessages(`?chat=${chatId}`)
//             .then((res) => {
//                 setMessageArr(res.data.data);
//                 setShowForm(true);
//                 console.log("messageAgay>>>>>>>", res.data.data);
//             })
//             .catch((err) => {
//                 console.log("Error", err);
//             });
//     }

//     useEffect(() => {
//         socket.on('msg_created', (res) => {
//             console.log('MSG_RECEIVE>>>', res)
//             setMessageArr([res, ...messageArr])
//         })

//         return () => {
//             socket.off('msg_created')
//         }
//     })

//     useEffect(() => {
//         socket.on('chat_updated', (res) => {
//             console.log('MSG_UPDATE>>>', res)
//             let chatArr = []
//             for (let i = 0; i < chats.length; i++) {
//                 const chat = chats[i];
//                 if (res._id === chat._id) {
//                     chatArr.push(res)
//                 } else {
//                     chatArr.push(chat)
//                 }

//             }
//             setChats([...chatArr])
//         })

//         return () => {
//             socket.off('chat_updated');
//         }
//     })

//     return (
//         <>
//             <CustomHeader />
//             <WebTabs selectedTab={2} />

//             <Grid item xs={12} sm={12} lg={12} sx={{ mt: 2, display: 'flex', justifyContent: "center" }} container>

//                 <Grid sx={{ textAlign: 'center', minHeight: 200 }} item xs={12} sm={12} md={12} lg={5}>
//                     <Typography variant="h5">Chats</Typography>
//                     <Grid sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         maxHeight: 400,
//                         overflowY: "auto",
//                         scrollbarWidth: "thin",
//                         "&::-webkit-scrollbar": {
//                             width: "0.6em",
//                         },
//                         "&::-webkit-scrollbar-track": {
//                             borderRadius: "8px",
//                             backgroundColor: "#e7e7e7",
//                             border: "1px solid #cacaca",
//                         },
//                         "&::-webkit-scrollbar-thumb": {
//                             backgroundColor: "#363636",
//                             borderRadius: "8px",
//                         },
//                     }}>
//                         {chats?.map((item) => {
//                             return <Card onClick={() => {
//                                 setChatID(item._id);
//                                 showMessages(item._id);
//                                 socket.emit('joinChat', item);
//                             }} sx={{ display: 'flex', justifyContent: 'flex-start', width: 300 }}>
//                                 <Avatar sx={{ mt: 3, ml: 2 }} alt="Remy Sharp" src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" />
//                                 <CardContent sx={{ textAlign: 'left' }}>
//                                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                         {item.client.firstName}
//                                     </Typography>
//                                     <Typography sx={{ fontSize: 14 }}>
//                                         {item.msg}
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         })}
//                     </Grid>
//                 </Grid>

//                 <Divider orientation="vertical" flexItem />

//                 <Grid sx={{ textAlign: 'center', minHeight: '200px' }} item xs={12} sm={12} md={12} lg={5}>
//                     <Typography variant="h5">Chat Name</Typography>
//                     <Grid sx={{
//                         display: 'flex',
//                         justifyContent: 'flex-start',
//                         flexDirection: 'column-reverse',
//                         alignItems: 'center',
//                         height: 500,
//                         marginTop: 3,

//                         overflowY: "auto",
//                         scrollbarWidth: "thin",
//                         "&::-webkit-scrollbar": {
//                             width: "0.6em",
//                         },
//                         "&::-webkit-scrollbar-track": {
//                             borderRadius: "8px",
//                             backgroundColor: "#e7e7e7",
//                             border: "1px solid #cacaca",
//                         },
//                         "&::-webkit-scrollbar-thumb": {
//                             backgroundColor: "#363636",
//                             borderRadius: "8px",
//                         },
//                     }}>
//                         {messageArr.map((item) => {
//                             return <div className={`${auth.user?._id == (item.from?._id || item.from) ? styles.chat_box_right : styles.chat_box_left}`}>
//                                 <div className={`${styles.user_input}`}>
//                                     {item.text}
//                                 </div>
//                                 <div className={`${styles.user_icon}`}>
//                                     <Avatar alt="Remy Sharp" src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" />
//                                 </div>
//                             </div>
//                         })}
//                     </Grid>
//                     <form>
//                         <Grid sx={{ display: 'flex', justifyContent: 'center' }}  >
//                             <Grid>
//                                 <input
//                                     className={`${styles.input}`}
//                                     id="message"
//                                     placeholder='Write Message'
//                                     variant="outlined"
//                                     margin="normal"
//                                     onChange={handleMessageText}
//                                 />
//                             </Grid>
//                             <Grid onClick={() => {
//                                 sendMessage();
//                             }} sx={{ alignSelf: 'center' }}>
//                                 <SendIcon sx={{ cursor: 'pointer' }} style={{ fontSize: 30 }} />
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Grid>
//             </Grid>
//         </>
//     )
// }

import React, { useEffect, useState } from "react";
import { Avatar, Box, Grid, Typography, TextField } from "@mui/material";
import { CustomHeader } from "src/component";
import { WebTabs } from "src/component";
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./chat2.module.css";
import SendIcon from "@mui/icons-material/Send";
import { api } from "../utils/api";
import { useAuthState } from "src/context/auth.context";
import { socket } from "src/utils/socket";
import TableBottom from "src/assets/images/tablebottom2.png";
import Image from "next/image";
import MenuSection from "./MenuSection/menuSection";
import Head from "next/head";
export default function chat2() {
  const auth = useAuthState();
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [chatID, setChatID] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  const [showForm, setShowForm] = useState(false);
  console.log("chat>>", chats);

  useEffect(() => {
    if (auth.user?._id) {
      if (auth.userType === "user") {
        api
          .getChats(`?client=${auth.user?._id}`)
          .then((res) => {
            setChats(res.data.data);
          })
          .catch((err) => {});
      } else if (auth.userType === "seller") {
        api
          .getChats(`?owner=${auth.user?._id}`)
          .then((res) => {
            setChats(res.data.data);
          })
          .catch((err) => {});
      }
    }
  }, [auth.user]);

  const handleMessageText = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    api
      .createMessage({ chat: chatID, from: auth.user?._id, text: message })
      .then((res) => {
        setMessageArr([res.data, ...messageArr]);
        socket.emit("send_msg", res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
    document.getElementById("message").value = "";
  };

  const showMessages = (chatId) => {
    api
      .getMessages(`?chat=${chatId}`)
      .then((res) => {
        setMessageArr(res.data.data);
        setShowForm(true);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    socket.on("msg_created", (res) => {
      setMessageArr([res, ...messageArr]);
    });

    return () => {
      socket.off("msg_created");
    };
  }, [messageArr]);

  useEffect(() => {
    socket.on("chat_updated", (res) => {
      const updatedChats = chats.map((chat) =>
        res._id === chat._id ? res : chat
      );
      setChats(updatedChats);
    });

    return () => {
      socket.off("chat_updated");
    };
  }, [chats]);

  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <div
        style={{
          marginLeft: 20,
          top: "160px",
          position: "fixed",
          zIndex: 10,
        }}
      >
        <WebTabs selectedTab={2} />
      </div>
      <Box
        style={{
          maxWidth: 1300,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box>
          <CustomHeader />
        </Box>

        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          sx={{ mt: 18, display: "flex", justifyContent: "space-evenly" }}
          container
        >
          <Grid
            sx={{ textAlign: "center", minHeight: 200 }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
          >
            <Typography
              style={{ textAlign: "right", marginBottom: "20px" }}
              variant="h5"
            >
              Chats
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "end",
                maxHeight: 400,
                overflowY: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  width: "0.6em",
                },
                "&::-webkit-scrollbar-track": {
                  borderRadius: "8px",
                  backgroundColor: "#e7e7e7",
                  border: "1px solid #cacaca",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#363636",
                  borderRadius: "8px",
                },
              }}
            >
              {chats.length > 0 ? (
                chats.map((item) => (
                  <Card
                    style={{
                      backgroundColor: "#faf9f6",
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                      borderRadius: "15px",
                    }}
                    key={item._id}
                    onClick={() => {
                      setChatID(item._id);
                      showMessages(item._id);
                      socket.emit("joinChat", item);
                    }}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: 300,
                    }}
                  >
                    <Avatar
                      sx={{ mt: 3, ml: 2 }}
                      alt="Remy Sharp"
                      src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                    />
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item.client.firstName}
                      </Typography>
                      <div className="text-container">
                        <Typography sx={{ fontSize: 14 }}>
                          {item.msg}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Typography sx={{ mt: 30 }} variant="body1">
                  No chats available.
                </Typography>
              )}
            </Grid>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid
            sx={{ textAlign: "center", minHeight: "200px" }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={7}
          >
            {chatID && (
              <>
                <Typography style={{ marginBottom: "20px" }} variant="h5">
                  Chat Name
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column-reverse",
                    alignItems: "end",
                    height: 500,
                    marginTop: 3,
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": {
                      width: "0.6em",
                    },
                    "&::-webkit-scrollbar-track": {
                      borderRadius: "8px",
                      backgroundColor: "#e7e7e7",
                      border: "1px solid #cacaca",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#363636",
                      borderRadius: "8px",
                    },
                  }}
                >
                  {messageArr.length > 0 ? (
                    messageArr.map((item) => (
                      <div
                        key={item._id}
                        className={`${
                          auth.user?._id === (item.from?._id || item.from)
                            ? styles.chat_box_right
                            : styles.chat_box_left
                        }`}
                      >
                        <div className={`${styles.user_input}`}>
                          {item.text}
                        </div>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                        />
                        {/* <div className={`${styles.user_output}`}>
                                        {item.from?.firstName || item.from}
                                    </div> */}
                      </div>
                    ))
                  ) : (
                    <Typography variant="body1">
                      No Messages Available.
                    </Typography>
                  )}
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="message"
                    label="Typing message here..."
                    size="small"
                    variant="filled"
                    onChange={handleMessageText}
                    sx={{ width: "40%", marginTop: 3, marginRight: 1 }}
                    style={{
                      border: "2px solid #000",
                      backgroundColor: "#faf9f6",
                      borderRadius: "10px",
                    }}
                  />
                  <SendIcon
                    onClick={sendMessage}
                    sx={{ cursor: "pointer", marginTop: 3 }}
                  />
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
      <Grid
        sx={{
          marginTop: 4,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
        container
        spacing={2}
      >
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{
            marginBottom: 4,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <MenuSection />
        </Grid>
        <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Image style={{ width: "100%" }} src={TableBottom} alt="" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
