import { Routes, Route, Link } from "react-router";
import { useState } from 'react'
import Home from "./assets/components/Home"
import About from "./assets/components/About"
import Profile from "./assets/components/Profile"
import './App.css'

function App() {

  return (
    <>
{
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link to={"/"}> Home </Link>
            </li>
            <li className="nav-item p-2">
              <Link to={"/about"}> About </Link>
            </li>
            <li className="nav-item p-2">
              <Link to={"/profile"}> Profile </Link>
            </li>
          </ul>
        </div>
      </nav>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>page not found 404</div>} />
      </Routes>
    </>
  )
}

export default App
