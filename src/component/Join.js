import React, { useState } from 'react'
import  "./join.css"
import logo from "../Images/logo1.png"
import {Link} from "react-router-dom"

let user ;

const Join = () => {
  const [userval, setUserval] = useState("")
  const sendUser = () =>{
user = userval
  }
  return (
    <div className={"joinPage"}>
        <div className={"joinContainer"}>
        <img src={logo} alt="logo"  />
          <h1> WhatsApp </h1>

          <input placeholder='Enter Your Name' value={userval} onChange={e=>setUserval(e.target.value)} type="text" id={"joinInput"} />
        <Link onClick={e=> !userval ? e.preventDefault() : null } to={"/chatapp"}>  <button className={"loginBtn"} onClick={sendUser} >Login</button> </Link>
        </div>
    </div>
  )
}

export default Join

export {user}