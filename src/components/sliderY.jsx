"use client"
import React from 'react'
import Slider from "react-slick";

const SliderY = ({children}) => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <Slider {...settings}>
        {React.Children.map(children, (child, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
                {child}
            </div>
        ))}      
    </Slider>   
  )
}

export default SliderY