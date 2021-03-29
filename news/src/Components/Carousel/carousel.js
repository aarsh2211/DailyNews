import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './carousel.css'

class MainCarousel extends Component {
    render() {
        return (
            
            <AliceCarousel autoPlay autoPlayInterval= "3000" >
              
                    <img src={require("./../../static/dog1.jfif")} className="sliderimg"></img>
                    
                
                
                    <img src={require("./../../static/dog2.jpg")}  className="sliderimg"></img>
                    
               
                
                    <img src={require("./../../static/dog3.jfif")} className="sliderimg"></img>
                   
                 
                    <img src={require("./../../static/dog4.jpg")} className="sliderimg" ></img>
                   
                
                </AliceCarousel>
               
        )
    }
}

export default MainCarousel;