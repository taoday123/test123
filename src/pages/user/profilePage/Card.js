import React, { useState } from 'react';
import './Card.scss'; // Import the CSS module or SCSS for styling

const Card = ({ title1, title2, image, price, onClick }) => {
    const [showPrice, setShowPrice] = useState(false);

    const handleClick = () => {
        setShowPrice(!showPrice); // Toggle price visibility
        if (onClick) onClick(price); // Call onClick prop with price if provided
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={image} alt={title1} className="card-image" />
            <div className="card-content">
                <h4>{title1}</h4>
                <p>{title2}</p>
                {showPrice && <div className="card-price">{price}</div>} {/* Example price */}
            </div>
        </div>
    );
};

export default Card;
