import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import instance from "./Axios";
export default function Chat({messages}) {
  const [input, setinput]=useState("")

  const sendmessage= async(e)=>{
    e.preventDefault()
    await instance.post("/new", {
      message:input,
      name:"demo app",
      timestamp:"just now",
      received:false
    })
    setinput("")

  }
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3> room name</h3>
          <p>last seen at..</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((mes)=> {
          <p className="chat_message">
          <span className="chat_name">{mes.name}</span>
          {mes.message}
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
          </p>
        })}   
        
          <p className="chat_message">
          <span className="chat_name">sonny</span>
          this  is a messgae
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
          </p>
          <p className=" chat_message chat_reciver">
          <span className="chat_name">sonny</span>
          this  is a messgae
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
          </p>

      </div>
      <div className="chat_footer">
      <SentimentSatisfiedAltOutlinedIcon/>
      <form action="">
        <input value={input} onChange={e=> setinput(e.target.value)}  o type="text"  placeholder="type a text" />
        <button onClick={sendmessage} type="submit" > send a messgage</button>
      </form>
      <KeyboardVoiceOutlinedIcon/>
      </div>
    </div>
  );
}
