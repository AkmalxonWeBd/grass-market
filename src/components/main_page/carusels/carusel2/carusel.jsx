import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';
import img from "../main_carusel/Rectangle 1650.jpg";
import { PrevArrow, NextArrow } from '../../../Arrows'; // Import custom arrows
import { Link } from 'react-router-dom';

const ItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true, // Enable arrows
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const items = [
    { name: "Item name 1", price: "Item price", img: img, id: 1 },
    { name: "Item name 2", price: "Item price", img: img, id: 2 },
    { name: "Item name 3", price: "Item price", img: img, id: 3 },
    { name: "Item name 4", price: "Item price", img: img, id: 4 },
    { name: "Item name 5", price: "Item price", img: img, id: 5 },
    { name: "Item name 6", price: "Item price", img: img, id: 6 },
    { name: "Item name 7", price: "Item price", img: img, id: 7 },
    { name: "Item name 8", price: "Item price", img: img, id: 8 ,category:"auto himiya, bht himiya, santexnika, kosmetika"},
  ];

  return (
    <div className="item-carousel">
      <div className='eshe_text'>
        <Link to={"/kosmetika"}><h2>Kosmetika</h2></Link>
        <Link to={"/kosmetika"}><button><h2>Yana ></h2></button></Link>
      </div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ItemCarousel;
