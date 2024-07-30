import React from 'react';

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow prev-arrow" onClick={onClick}>
      <span>&lt;</span>
    </div>
  );
};

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow next-arrow" onClick={onClick}>
      <span>&gt;</span>
    </div>
  );
};
