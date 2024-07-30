"use client";
import React from 'react';
import Slider from "react-slick";

const SliderX = ({children}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 10000, 
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default SliderX;
