// 
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/home';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
