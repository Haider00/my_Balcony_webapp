import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useEffect, useRef, useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Avatar, Badge } from "@mui/material";
import { useAuthState } from "../../context/auth.context";
export const MyChat = () => {
  const auth = useAuthState();
  const recent_chat = [];
  const { user, token } = auth;
  const chatting = {};
  const [chats, setChats] = useState({});

  const ref = useRef();
  useEffect(() => {
    // api
    //   .getChats({ query: `?users[$in]=${auth.user._id}&&sort[updatedAt]=-1` })
    //   .then((response) => {
    //     setChats(response);
    //   })
    //   .catch(() => {});
  }, []);
  const handleUserName = (item) => {
    if (item && item.users && item.users.length) {
      for (let i = 0; i < item.users.length; i++) {
        const element = item.users[i];
        if (element._id !== "") {
          return element.userName;
        }
      }
    }
  };
  const handleUserImage = (item) => {
    if (item && item.users && item.users.length) {
      for (let i = 0; i < item.users.length; i++) {
        const element = item.users[i];
        if (element._id !== "") {
          if (element.image) {
            return element.image;
          }
          return element.userName;
        }
      }
    }
  };
  return (
    <div className="mychat-cont">
      <div>
        <div className="notification">
          <h2>Chats</h2>
          {/* <NotificationsIcon /> */}
          <Badge badgeContent={"1"} color="error">
            <Notificationcomp />
          </Badge>
          {/* <AddIcon /> */}
        </div>
      </div>
      <div className="recent-chat">
        <p className="Recent">Recent</p>
        <div className="recent-user">
          {chats?.data?.map((el, index) => (
            <ChatUserComp
              key={el._id}
              index={index}
              latestMessage={el.msg}
              name={handleUserName(el)}
              image={handleUserImage(el)}
              _id={el._id}
              data={el}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Notificationcomp() {
  const unseenmsg = [];
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {};

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <NotificationsIcon aria-describedby={id} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {!unseenmsg.length ? (
          <Typography sx={{ p: 2, width: 170 }}>No new messages.</Typography>
        ) : (
          unseenmsg.map((el, index) => (
            <Typography key={index} sx={{ p: 2, width: 170 }}>
              {el.sender.name + " " + el.content.substring(0, 15) + "..."}
            </Typography>
          ))
        )}
      </Popover>
    </div>
  );
}
const ChatUserComp = ({
  latestMessage = "",
  _id,
  name = "",
  image = "S",
  data = {},
}) => {
  const handleSelectChat = () => {
    alert("" + _id);
  };
  return (
    <div style={{ padding: 5 }} onClick={handleSelectChat}>
      <div className="history-cont">
        <div>{<Avatar src={image} />}</div>
        <div>
          <p className="name">{name}</p>
          <p className="chat">
            {latestMessage
              ? latestMessage.length > 8
                ? latestMessage.substring(0, 30) + " . . ."
                : latestMessage
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};
