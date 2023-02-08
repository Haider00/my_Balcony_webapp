import React, { createRef, useCallback, useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import InputEmoji from "react-input-emoji";
import { ChatlogicStyling, isSameSender } from "../../component";
import io from "socket.io-client";
import { useAuthState } from "../../context/auth.context";
const SERVER_POINT = "https://messenger-clo.herokuapp.com";
var socket, currentChattingWith;

const ChattingPage = () => {
  const auth = useAuthState();
  const { user, token } = auth;
  const messages = [];

  const scrolldiv = createRef();
  useEffect(() => {
    socket = io(SERVER_POINT);
    socket.emit("setup", user);
    socket.on("connected", () => {
      // setconnectedtosocket(true);
    });
  }, []);
  useEffect(() => {
    //_id is of selected chat so that user can join same chat room
    if (!user?._id) return;

    currentChattingWith = user?._id;
  }, [user]);
  useEffect(() => {
    const scrollToBottom = (node) => {
      node.scrollTop = node.scrollHeight;
    };
    scrollToBottom(scrolldiv.current);
  });

  useEffect(() => {
    socket.on("message recieved", (newMessage) => {
      if (!currentChattingWith || currentChattingWith !== newMessage.chat._id) {
        handleNotyfy(newMessage);
      } else {
        // dispatch(sendMessage(newMessage));
      }
    });
  }, []);
  const handleNotyfy = (newMessage) => {};
  return (
    <div className="chattingpage">
      <div className="top-header">
        <div className="user-header">
          <Avatar src={""} />
          <p className="user-name">{"name"}</p>
        </div>
      </div>
      <div ref={scrolldiv} className="live-chat">
        {messages.map((el, index) => (
          <div
            key={index}
            className={
              el.sender._id != user._id ? "rihgtuser-chat" : "leftuser-chat"
            }
          >
            <div
              className={el.sender._id != user._id ? "right-avt" : "left-avt"}
            >
              <div className={ChatlogicStyling(el.sender._id, user._id)}>
                <p>{el.content}</p>
                <p className="time chat-time">
                  {new Date(el.createdAt).getHours() +
                    ":" +
                    new Date(el.createdAt).getMinutes()}
                </p>
              </div>

              {isSameSender(messages, index) ? (
                <Avatar
                  src={el.sender._id != user._id ? el.sender.pic : user.pic}
                />
              ) : (
                <div className="blank-div"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="sender-cont">
        <InputContWithEmog id={user?._id} token={token} socket={socket} />
      </div>
    </div>
  );
};
const ColorButton = styled(Button)(() => ({
  color: "white",
  fontSize: "20px",
  textTransform: "none",
  padding: "12px",
  marginRight: "15px",
  backgroundColor: "#5865f2",
  "&:hover": {
    backgroundColor: "#3a45c3",
  },
}));
function InputContWithEmog({ id, token, socket }) {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    // dispatch(
    //   sendMessageApi(
    //     {
    //       content: text,
    //       chatId: id,
    //     },
    //     token,
    //     socket
    //   )
    // );
  }
  function handleChatClick() {
    // dispatch(
    //   sendMessageApi(
    //     {
    //       content: text,
    //       chatId: id,
    //     },
    //     token,
    //     socket
    //   )
    // );
    setText("");
  }

  return (
    <>
      <div className="search-cont send-message">
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
      </div>
      <ColorButton
        onClick={handleChatClick}
        variant="contained"
        endIcon={<SendIcon />}
      ></ColorButton>
    </>
  );
}

export default ChattingPage;
