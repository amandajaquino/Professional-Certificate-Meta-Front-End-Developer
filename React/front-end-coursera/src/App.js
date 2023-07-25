import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import AboutLittleLemon from "./components/AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import AssetsClass from "./components/AssetsClass";
import MapSortFilterComp from "./components/MapSortFilterComp";
/* import AudioVideoComp from "./components/AudioVideoComp";
import Calculator from "./components/Calculator"; */

function App() {
  return (
    <div>
    {/*
    <AudioVideoComp />
   <Calculator /> */}
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
      <AssetsClass /> 
      <MapSortFilterComp />
    </div>

  );
};

export default App;