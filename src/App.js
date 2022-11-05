
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Join from "./component/Join.js"
import ChatRoom from "./component/ChatRoom.js"
import Login from './component/login/login';
import Register from './component/Register/Register';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {  

  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route exact path='/' element={<Join/>}/>
      <Route  path='/ChatApp' element={<ChatRoom/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/register' element={<Register/>}/>


    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
