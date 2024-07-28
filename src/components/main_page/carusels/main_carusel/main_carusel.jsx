import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "./Carousel.css";
import img from "./Rectangle 1650.jpg"

const Carousel = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBeforeChange = (current, next) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      sliderRef.current.slickGoTo(next);
    }, 1000);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: handleBeforeChange,
    afterChange: () => setIsAnimating(false),
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        <div className={`carousel-slide ${isAnimating ? 'shrinking' : ''}`}>
          <img src={img} alt="Carousel Slide" />
        </div>
        <div className={`carousel-slide ${isAnimating ? 'shrinking' : ''}`}>
          <img src={img} alt="Carousel Slide" />
        </div>
        <div className={`carousel-slide ${isAnimating ? 'shrinking' : ''}`}>
          <img src={img} alt="Carousel Slide" />
        </div>
        <div className={`carousel-slide ${isAnimating ? 'shrinking' : ''}`}>
          <img src={img} alt="Carousel Slide" />
        </div>
        <div className={`carousel-slide ${isAnimating ? 'shrinking' : ''}`}>
          <img src={img} alt="Carousel Slide" />
        </div>
      </Slider>
    </div>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "2%", display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "2%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default Carousel;
