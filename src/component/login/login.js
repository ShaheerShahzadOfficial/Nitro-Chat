import "./login.css"
import React, { useState } from 'react'
import logo from  "../../Images/favicon.png"
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
const login = ()=>{
  if (email !=="" && password !=="") {
    
  }else{
    toast.error('Email & password are required !', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
  }
}



  return (
    <div className='login'>

<div className='loginForm'>
    <div className='formHeader'>
        <img src={logo} alt="logo" />
</div>

<input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          type={'password'}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
</div>

    </div>
  )
}

export default Login