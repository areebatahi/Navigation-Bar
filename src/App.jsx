import { Routes, Route, Link } from "react-router";
import { useState } from 'react';
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Profile from "./assets/components/Profile";
import Login from "./assets/components/Login";
import Signup from "./assets/components/Signup"
import './App.css'

function App() {

  const [isLogin, setIsLink] = useState(true)

  return (
    <>
      {(isLogin) ?
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="navbar-nav">
              <li className="nav-item p-2">
                <Link to={"/"} className="nav-link active"> Home </Link>
              </li>
              <li className="nav-item p-2">
                <Link to={"/about"} className="nav-link active"> About </Link>
              </li>
              <li className="nav-item p-2">
                <Link to={"/profile"} className="nav-link active"> Profile </Link>
              </li>
              <li className="nav-item p-2">
                <button type="button" className="btn btn-danger" onClick={()=>{setIsLink(!isLogin)}} >Toogle Button</button>
              </li>
            </ul>
          </div>
        </nav> : <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="navbar-nav">
              <li className="nav-item p-2">
                <Link to={"/"} className="nav-link active"> Login </Link>
              </li>
              <li className="nav-item p-2">
                <Link to={"/signup"} className="nav-link active"> Signup </Link>
              </li>
              <li className="nav-item p-2">
                <button type="button" className="btn btn-danger" onClick={()=>{setIsLink(!isLogin)}} >Toogle Button</button>
              </li>
            </ul>
          </div>
        </nav>
      }
      {(isLogin) ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<div>page not found 404</div>} />
        </Routes> :
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Login />} />
        </Routes>
      }
    </>
  )
}

export default App
