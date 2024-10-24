import React, { useEffect, useRef } from 'react';
import './Carousel.css'; // Ensure you have the necessary styles
import cardData from './CardContent';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Carousel = ({ currentIndex }) => {
    const trackRef = useRef(null);
    const navigate = useNavigate(); // Hook to programmatically navigate

    const goToSlide = (index) => {
        const cardWidth = trackRef.current.querySelector('.card').clientWidth;
        trackRef.current.style.transform = `translateX(${-index * (cardWidth + 20)}px)`;
    };

    useEffect(() => {
        goToSlide(currentIndex);
    }, [currentIndex]);

    const handleViewMore = (category) => {
        navigate(`/product?category=${encodeURIComponent(category)}`); // Navigate to the product page with the selected category
    };

    return (
        <div className="carousel">
            <div className="carousel-track" ref={trackRef}>
                {cardData.map((data, index) => (
                    <div className="card" key={index}>
                        <img className="card__img" src={data.image} alt={data.description} />
                        <div className="card__info">
                            <div className="card__title">{data.title}</div>
                            <h3 className="card__category">{data.description}</h3>
                            <button
                                className="card__link"
                                onClick={() => handleViewMore(data.description)}
                            >
                                VIEW MORE
                            </button>
                        </div>
                    </div>
                ))}
                {/* Duplicating cards for infinite scrolling */}
                {cardData.map((data, index) => (
                    <div className="card" key={`duplicate-${index}`}>
                        <img className="card__img" src={data.image} alt={data.description} />
                        <div className="card__info">
                            <div className="card__title">{data.title}</div>
                            <h3 className="card__category">{data.description}</h3>
                            <button
                                className="card__link"
                                onClick={() => handleViewMore(data.description)}
                            >
                                VIEW MORE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="indicators">
                {cardData.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
