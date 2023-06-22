import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import { WebTabs } from "src/component";
import { api } from "../utils/api";
import { useAuthState } from "src/context/auth.context";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { CustomHeader } from "src/component";

const Wrapper = styled.section`
  .container {
    max-width: 1300px;
    margin: 0 auto;
  }
  .account-dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .dashboard-sidebar {
    width: 80px;
    height: 340px;
    margin: 50px 0 0 0;
    flex: 0 0 5%;
    padding: 35px 15px;
    border-radius: 25px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    background-color: #fff;
  }
  .dashboard-chat {
    margin-top: 50px;
    flex: 0 0 80%;
  }
  .dashboard-chat-wrapper {
    display: flex;
    flex-wrap: nowrap;
    gap: 25px;
    width: 100%;
  }

  .chat-module {
    display: flex;
    flex-direction: column;
    min-height: 75vh;
    justify-content: space-between;
    flex-grow: 1;
    overflow: hidden;
    padding-left: 25px;
    padding-right: 25px;
  }
  .sidebar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 8px;
  }
  .sidebar-menu {
    font-size: 14px;
  }
  .chat-groups .group {
    display: flex;
    width: 320px;
    height: 70px;
    margin: 0 0 17px;
    padding: 10px 30px 10px 8px;
    border-radius: 12px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    background-color: #faf9f6;
  }
  .group-icon {
    flex: 0 0 30%;
  }
  .group-text {
    flex: 0 0 70%;
    position: relative;
    top: -4px;
  }

  .group-text p {
    font-size: 12px;
    margin: 4px 0;
  }
  .chat-heading {
    display: inline-block;
    width: 100%;
    text-align: right;
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: 700;
  }
  .group-text p:nth-child(1),
  .group-text p:nth-child(2) {
    font-weight: 700;
  }
  .chat-groups {
    padding-right: 150px;
  }

  .chat-box-right {
    display: flex;
    justify-content: flex-end;
  }

  .chat-box-left {
    display: flex;
    justify-content: flex-start;
  }
  .chat-box-right .user-icon {
    order: 2;
    width: 20%;
  }
  .chat-box-right .user-input {
    color: #fff;
    width: 80%;
    font-size: 14px;
    margin: 4px 15px 11px 50px;
    padding: 8px 27px 10px 23px;
    border-radius: 20px 0px 20px 20px;
    box-shadow: inset 0 3px 6px 0 rgb(0 0 0 / 16%);
    background-color: #000;
  }
  .chat-box-left .user-input {
    color: #000;
    font-size: 14px;
    margin: 4px 60px 11px 15px;
    padding: 8px 27px 10px 23px;
    border-radius: 0px 20px 20px 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #faf9f6;
  }
  .message {
    width: 338px;
    height: 40px;
    border-radius: 16px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    border: solid 2px #000;
    background-color: #faf9f6;
    padding: 0 75px;
  }
  input[type="text"]::placeholder {
    text-align: center;
    font-size: 18px;
    font-weight: 700px;
  }
  .sidebar-wrapper {
    padding: 0;
    margin: 0;
  }
  .sidebar-wrapper li {
    list-style: none;
  }
  .menu-icon {
    text-align: center;
  }
  .group-icon img {
    width: 52px;
  }
  .user-icon img {
    width: 44px;
  }
  .submit-msg img {
    width: 40px;
  }
  .submit-msg {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }
  .chat-groups a {
    text-decoration: none;
    color: #000;
  }
  .chat-boxes {
    display: flex;
    flex-direction: column-reverse;
    height: 60vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0.6em;
    }
    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: #e7e7e7;
      border: 1px solid #cacaca;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: #363636;
    }
    .ChatPersonName {
      font-size: 20px;
    }
  }
`;
export default function Chat() {
  const auth = useAuthState();
  const [chats, setChats] = useState();
  const [message, setMessage] = useState();
  const [chatID, setChatID] = useState();
  const [messageArr, setMessageArr] = useState([]);

  // console.log('chatTotal>>>', chats);
  // console.log('message>>>', message);
  // console.log('ChatID>>>', chatID);

  // console.log("messageArr>>>>", messageArr);

  useEffect(() => {
    if (auth.user?._id) {
      if (auth.userType == "user") {
        api
          .getChats(`?client=${auth.user?._id}`)
          .then((res) => {
            setChats(res.data.data);
            // console.log("Chats>>>>>>", res.data.data);
          })
          .catch((err) => {
            // console.log("Chats>>>>>E", err);
          });
      } else if (auth.userType == "seller") {
        api
          .getChats(`?owner=${auth.user?._id}`)
          .then((res) => {
            setChats(res.data.data);
            // console.log("Chats>>>>>1", res.data.data);
          })
          .catch((err) => {
            // console.log("Chats>>>>>E1", err);
          });
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
        // console.log("message>>>>>>", res.data);
      })
      .catch((err) => {
        // console.log("Error", err);
      });
    document.getElementById("message").value = "";
  };

  const showMessages = (chatId) => {
    api
      .getMessages(`?chat=${chatId}`)
      .then((res) => {
        setMessageArr(res.data.data);
        // console.log("messageAgay>>>>>>>", res.data.data);
      })
      .catch((err) => {
        // console.log("Error", err);
      });
  };

  return (
    <>
      <CustomHeader />
      <WebTabs selectedTab={2} />
      <Wrapper>
        <div class="container">
          <div class="account-dashboard">
            <div class="dashboard-chat">
              <div class="dashboard-chat-wrapper">
                <div class="chat-groups">
                  <span className="chat-heading">chats</span>
                  {chats?.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setChatID(item._id);
                          showMessages(item._id);
                        }}
                        class="group"
                      >
                        <div class="group-icon">
                          <Avatar
                            alt="Remy Sharp"
                            src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"
                          />
                        </div>
                        <div class="group-text">
                          <p className="ChatPersonName">
                            {item.client.firstName}
                          </p>
                          <p>
                            {chats?.map((item, index) => {
                              if (index === chats.length - 1) {
                                const shortenedMsg =
                                  item.msg.length > 15
                                    ? item.msg.slice(0, 15) + "..."
                                    : item.msg;
                                return shortenedMsg;
                              }
                            })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Divider orientation="vertical" flexItem />

                <div class="chat-module">
                  <div>
                    <span className="chat-heading">
                      Charlie Sean / Jackson Heights Lane
                    </span>
                    <div className="chat-boxes">
                      {messageArr.map((item) => {
                        return (
                          <div
                            className={
                              auth.user?._id == (item.from?._id || item.from)
                                ? "chat-box-right"
                                : "chat-box-left"
                            }
                          >
                            <div className="user-icon">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"
                              />
                            </div>
                            <div className="user-input">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form">
                    <form className="inputForm" action="">
                      <input
                        className="message"
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Typing message here..."
                        onChange={handleMessageText}
                      />
                      <div
                        onClick={() => {
                          sendMessage();
                        }}
                        className="submit-msg"
                      >
                        <SendIcon
                          sx={{ cursor: "pointer" }}
                          style={{ fontSize: 30 }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
