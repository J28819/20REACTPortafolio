
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/BSNvar';
import imgoverley from './components/imgoverley';
import AboutMe from './pages/AboutMe';
import ContactUs from './pages/Contact';
import Portafolio from './pages/Portafolio';
import Resume from './pages/Resume';
import Form from "./components/Form";
import GridCards from "./components/GridCards";



import 'bootstrap/dist/css/bootstrap.min.css';
import ImgOverlayExample from './components/imgoverley';


function App() {
let Component
switch (window.location.pathname) {
  case "/":
    Component = <AboutMe />
    break
  case "/aboutme":
    Component = <AboutMe />
    break
  case "/portafolio":
    Component = <Portafolio />
    break
  case "/contact":
    Component = <Form />
    break
  case "/resume":
    Component = <Resume />
    break
}

  return (
    <div className="App">
      <NavBar />
      {Component}
      <header className="App-header">
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to know more about my Projects
        </a>
      </header>

      
    </div>
  );
}

export default App;