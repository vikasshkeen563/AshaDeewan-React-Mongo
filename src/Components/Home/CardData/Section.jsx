import React, { useState } from 'react';
import Carousel from './CardData';
import cardData from './CardContent';

const OurProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cardData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < cardData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <section className="our-product-section">
      <div className="col-md-12 text-center heading-main heading-main-white">
        <h2 className="heading">OUR PRODUCTS</h2>
        <div className="separator"><i className="fa fa-gift below-line-about-icon"></i></div>
      </div>

      <div className="carousel-container">
        <Carousel currentIndex={currentIndex} />
        <div className="carousel-buttons">
          <button className="carousel-button" id="prevButton" onClick={handlePrev}>Prev</button>
          <button className="carousel-button" id="nextButton" onClick={handleNext}>Next</button>
        </div>
      </div>
      <br />
    </section>
  );
};

export default OurProductsSection;
