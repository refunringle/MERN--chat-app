import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Chat from './Pages/Chat/Chat';
import Register from './Pages/Register/Register';  


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Chat/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
      </Routes>
      </BrowserRouter>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload..
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 9e69544347d13a774e3435c39a99c3c9dde57ac1
    </div>
  );
}

export default App;
