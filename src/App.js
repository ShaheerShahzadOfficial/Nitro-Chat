
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Join from "./component/Join.js"
import ChatRoom from "./component/ChatRoom.js"


function App() {  
  return (
    // <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Join/>}/>
      <Route  path='/ChatApp' element={<ChatRoom/>}/>

    </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
