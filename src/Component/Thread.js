import { Avatar, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Message from "../Component/Message";
import TimerIcon from "@mui/icons-material/Timer";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import './Thread.css'



function Thread() {
  return (
    <div className="thread">
    <div className="thread_header">
      <div className="thread_headerDetails">
        <Avatar className="thread_headerDetails_avatar" />
        <div className="thread_headerDetails_info">
          <h4>ThreadName</h4>
          <h5>TimeStamp</h5>
        </div>
      </div>
      <IconButton>
        <MoreHorizIcon className="threadHeader_moreHoriz" />
      </IconButton>
    </div>
    <div className="thread_message">
      <Message />
    </div>
    <div className="thread_input">
      <form className="thread_inputForm">
        <input className="thread_inputField" placeholder="Enter a message" type="text" />
        <IconButton className="thread_inputButton">
          <TimerIcon />
        </IconButton>
        <IconButton className="thread_inputButton">
          <SendIcon />
        </IconButton>
        <IconButton className="thread_inputButton">
          <MicIcon />
        </IconButton>
      </form>
    </div>
  </div>
  );
}

export default Thread;
