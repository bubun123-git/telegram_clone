import { Avatar } from "@mui/material";
import React from "react";
import "./Message.css"

function Message() {
  return (
    <div className="message">
      <Avatar className="message_photo" />
      <div className="message_contents">
        <p className="message_content">This is Message</p>
        <small className="message_timeStamp">TimeStamp</small>
      </div>
    </div>
  );
}

export default Message;
