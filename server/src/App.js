import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavBar from './components/BSNvar';
import imgoverley from './components/imgoverley';


import 'bootstrap/dist/css/bootstrap.min.css';
import ImgOverlayExample from './components/imgoverley';


function App() {
  return (
    
    <div className="App">
        <NavBar />
        <ImgOverlayExample>
      
        </ImgOverlayExample>
        
   
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
