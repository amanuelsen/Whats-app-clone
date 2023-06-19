import { useEffect, useState } from 'react'
import './App.css'
import Chat from './Chat'
import Sidebar from './Sidebar'
import Pusher from "pusher-js"
import instance from './Axios'
function App() {
  const [messages, setmessages]=useState([])

  useEffect(()=>{
instance.get("/messages").then(res => {
  setmessages(res.data)
  
})
  }, [])
  useEffect(()=> {

    
    const pusher = new Pusher('65928977311566ec73ff', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMess) => {
      alert(JSON.stringify(newMess));
      setmessages([...messages, newMess])
    });
    return ()=> {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className="app">
      <div className="app_body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  )
}

export default App
