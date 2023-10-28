import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderCard from '../Components/SliderCard';

const CardContainer = (props) => {
    const [hoveredCardId, setHoveredCardId] = useState(null);

    const handleCardHover = (cardId) => {
        setHoveredCardId(cardId);
    };

    const handleCardUnhover = () => {
        setHoveredCardId(null);
    };
    
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 8000,
        loop: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        cssEase: 'linear',
        swipe: false,
        pauseOnHover: false,
        variableWidth: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, 
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, 
                },
            },
        ],

    };

    return (
        <div className="slider-container ">
            <div className="flex ">
                <Slider {...sliderSettings}>
                    {props.cards.map((card) => (
                        <div key={card.id} className="card-wrapper flex-shrink-0">
                            <button className={`title-card py-1 md:py-1  ml-4 bg-white rounded-3xl ${hoveredCardId === card.id ? 'fade-in' : ''}`}>
                                <h2 className={`text-black px-4 font-semibold text-slate-700 text-lg lg:text-xl ${hoveredCardId === card.id ? '' : 'hidden'}`}>{card.title}&nbsp;</h2>
                            </button>
                            <div className=' mb-10 md:mb-14 lg:mb-14'></div>
                            <SliderCard imgUrl={card.imgUrl} onCardHover={() => handleCardHover(card.id)} onCardUnhover={handleCardUnhover} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CardContainer;