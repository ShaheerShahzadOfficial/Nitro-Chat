import "./register.css"
import React, { useState } from 'react'
import logo from  "../../Images/favicon.png"
import { toast } from 'react-toastify';

const Register = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = ()=>{
      if (name!=="" && email !=="" && password !=="") {
        
      }else{
        toast.error('Name,Email & password are required !', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
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
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
    
            <button onClick={register}>Register</button>
    </div>
    
        </div>  )
}

export default Register