

import React, { useState } from 'react';

const SliderCard = (props) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        props.onCardHover(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        props.onCardUnhover();
    };

    return (
        <div
            className={`card relative ${hovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >  

            <img
                className={`h-full ${hovered ? 'h-200' : ''}`}
                src={props.imgUrl}
                alt={props.alt || 'Image'}
            />  
        </div>
    );
}

export default SliderCard;
