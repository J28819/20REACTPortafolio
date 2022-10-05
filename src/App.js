
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/BSNvar';
import imgoverley from './components/imgoverley';
import AboutMe from './pages/AboutMe';
import ContactUs from './pages/Contact';
import Portafolio from './pages/Portafolio';
import Resume from './pages/Resume';
import Form from "./components/Form/index";
import Footer from "./components/Footer";
import GridCards from "./components/GridCards";




import 'bootstrap/dist/css/bootstrap.min.css';
import ImgOverlayExample from './components/imgoverley';


function App() {
let Component
switch (window.location.pathname) {
  case "/20REACTPortfolio/home":
    Component = <AboutMe />
    break
  case "/20REACTPortfolio/":
    Component = <AboutMe />
    break
  case "/20REACTPortfolio/aboutme":
    Component = <AboutMe />
    break
  case "/20REACTPortfolio/portafolio":
    Component = <Portafolio />
    break
  case "/20REACTPortfolio/contact":
    Component = <Form />
    break
  case "/20REACTPortfolio/resume":
    Component = <Resume />
    break
}

  return (
    <div className="App">
      <NavBar />
      {Component}
      <br></br>
      <footer className='App-footer'>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
