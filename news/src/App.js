import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousels from './Components/Carousel/carousel.js'
import NavBar from './Components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar></NavBar>
        <div className="Carousel-container">
         
            <Carousels></Carousels>
            
        </div>
        </div>
    );
  }
}

export default App;
