import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import AboutLittleLemon from "./components/AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import AssetsClass from "./components/AssetsClass";
import AudioVideoComp from "./components/AudioVideoComp";

function App() {
  return (
    <div>
    <AssetsClass /> 
    <AudioVideoComp />
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>

  );
};

export default App;