import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SidebarThread from "./SidebarThread";
import { Avatar } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PhoneOutlinedIcon from "@mui/icons-material/Phone";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import "../Component/Sidebar.css";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_search">
          <SearchIcon className="sidebar_search" />
          <input className="sidebar_input" placeholder="Search" />
        </div>
        <BorderColorIcon />
      </div>
      <div className="sidebar_thread">
        <SidebarThread />
        <SidebarThread />
      </div>
      <div className="sidebar_buttom">
        <Avatar className="sidebar_buttom_avatar" />
        <PhoneOutlinedIcon />
        <QuestionAnswerIcon />
        <AppSettingsAltIcon />
      </div>
    </div>
  );
}

export default Sidebar;
