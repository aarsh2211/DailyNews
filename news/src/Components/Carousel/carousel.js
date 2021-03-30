import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './carousel.css'
import Sliderimage from './../SliderImages/sliderimages'
import axios from 'axios';
class MainCarousel extends Component {
    state = {
        posts: [],
        
    }
    
    componentDidMount() {
    
}

    render() {
        return (
            
            <AliceCarousel autoPlay autoPlayInterval= "3000" >
                <Sliderimage
                path = {require("./../../static/dog1.jfif")} >
                    
              </Sliderimage>
                   
                    
                
                
                    
                   
                
                </AliceCarousel>
               
        )
    }
}

export default MainCarousel;