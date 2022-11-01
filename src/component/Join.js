import React from 'react'
import  "./join.css"
// import logo from "../Images/logo.png"
import {Link} from "react-router-dom"

import Newlogo from "../Images/thunder.png"

const Join = () => {

  return (
    <div className={"joinPage"}>
        <div className={"joinContainer"}>
        <img src={Newlogo} alt="logo"  />
          <h1> Thunder Chat </h1>

          <Link to={"/login"} >  <button className={"loginBtn"} >Login</button> </Link>
        <Link to={"/register"}>  <button className={"loginBtn"} >Register</button> </Link>
        </div>
    </div>
  )
}

export default Join
