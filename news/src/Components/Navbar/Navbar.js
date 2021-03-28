import React, { Component } from 'react';
import './Navbar.css';
const navbar = props => {
   
    return (
       <nav className="nav">
            <div className="nav-logo nav-item"> D news </div>
            <div className="nav-item--1 nav-item">
                <input id="search" className="Sbox" type="text" name="search" placeholder="Topic"></input>
            </div>
            <div className="nav-item--2 nav-item"> Third element </div>
            
              </nav>
    );
    

    
}

export default navbar;