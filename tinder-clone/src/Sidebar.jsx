import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Sidebarchat from "./Sidebarchat";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YLe3D_HN8E7maI-H1Tg6AFXb5EtluLlb3wA6fC7iKA&s" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input type="text" placeholder="serach or star new" />
        </div>
      </div>
      <div className="sidebar_chats">
        <Sidebarchat/>
        <Sidebarchat/>
        <Sidebarchat/>

      </div>
    </div>
  );
}
