import React, { useEffect, useState } from 'react'
import "./chat.css"
// import {user} from "./Join"
import socketIo from "socket.io-client"
import { useNavigate } from 'react-router-dom'
import ReactScrollToBottom from "react-scroll-to-bottom";
import Message from './Message'
import Newlogo from "../Images/thunder.png"

let socket;
let user = "Name"
const ENDPOINT = "https://thunder-chat-app-backend.herokuapp.com/"

const ChatRoom = () => {
const [message, setMessage] = useState("")
const [id, setid] = useState("")
const [messages, setMessages] = useState([])




const sendmsg =()=>{
  socket.emit("message",{message:message,id})
  setMessage("")
}


  const route = useNavigate()

  socket = socketIo(ENDPOINT,{transports:["websocket"]})


  useEffect(() => {
    window.addEventListener("beforeunload", async function (e) {
      socket?.on("disconnect");
      socket?.off()     
      route("/")
      })


    socket?.on("connect",()=>{
      setid(socket.id);
        })
    socket?.emit("joined",{user})

    socket?.on("welcome",(data)=>{
      setMessages([...messages, data]);
    })

    socket?.on("userJoined",(data)=>{
      setMessages([...messages, data]);
    })

    socket?.on("leave",(data)=>{
      setMessages([...messages, data]);
    })

return ()=>{
  socket?.on("disconnect");
  socket?.off()
}

  }, [route])


  useEffect(() => {
    socket?.on("sendMessage",(data)=>{
      setMessages([...messages, data]);
    });

  }, [messages])
  

  return (
    <div className={"ChatRoom"}>
      <div className={"chatContainer"}>
        <div className={"header"}> <img src={Newlogo} alt="logo" />
        <h2>Thunder Chat</h2>
         </div>
        <ReactScrollToBottom className={"chatBox"}>
                    {messages.map((item, i) => <Message  key={i} user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
        <div className={"InputBox"}>
          <input onKeyPress={(event) => event.key === 'Enter' ? sendmsg() : null} placeholder='Message' type="text" id={"chatInput"} value={message} onChange={e=> setMessage(e.target.value)} />
          <button className={"sendbtn"} disabled={message === "" ? true : false} onClick={sendmsg}>Send</button>
        </div>
      </div>
     
    </div>
  )
}

export default ChatRoom