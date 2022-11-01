
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Join from "./component/Join.js"
import ChatRoom from "./component/ChatRoom.js"
import Login from './component/login/login';
import Register from './component/Register/Register';


function App() {  
  return (
    // <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Join/>}/>
      <Route  path='/ChatApp' element={<ChatRoom/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/register' element={<Register/>}/>


    </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
