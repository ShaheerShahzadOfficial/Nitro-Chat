import "./login.css"
import React, { useState } from 'react'
import logo from  "../../Images/favicon.png"
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

        <button>Login</button>
</div>

    </div>
  )
}

export default Login