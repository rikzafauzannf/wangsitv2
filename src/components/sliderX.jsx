"use client"
import React from 'react'
import Slider from "react-slick";

const SliderX = ({children}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }; 
  return (
    <Slider {...settings}>
        {children}      
    </Slider>   
  )
}

export default SliderX