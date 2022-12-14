import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Chat from './Pages/Chat/Chat';
import Register from './Pages/Register/Register';  



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Chat/>} />
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/Register' element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;