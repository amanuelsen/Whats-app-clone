import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@mui/material'

export default function Sidebarchat() {
  return (
    <div className='sidebarChat'>
      <Avatar/>
      <div className="sidebarChat_info">
        <h2> room name</h2>
        <p>this is the last message</p>
      </div>
    </div>
  )
}
