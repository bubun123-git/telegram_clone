import { Avatar } from "@mui/material";
import React from "react";
import '../Component/SidebarThread.css'


function SidebarThread({ id, threadName }) {
  return (
    <div className="sidebarThread">
    <Avatar className="sidebarThread_Avatar" />
    <div className="sidebarThread_Details">
      <h3>{threadName}</h3>
      <p>Last message in the thread</p>
      <small>timestamp</small>
    </div>
  </div>
  );
}

export default SidebarThread;
