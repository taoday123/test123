import React from 'react';
import './styles2.scss'; // Đảm bảo rằng CSS được nhập vào đúng

// Thành phần ReadingIndicator
const ReadingIndicator = ({ currentSection, totalSections, onSectionClick }) => {
    const handleClick = (index) => {
        if (onSectionClick) onSectionClick(index);
    };

    const dots = Array.from({ length: totalSections }, (_, index) => (
        <span
            key={index}
            className={`dot ${index === currentSection ? 'active' : ''}`}
            onClick={() => handleClick(index)}
        ></span>
    ));

    return (
        <div className="reading-indicator">
            {dots}
        </div>
    );
};

export default ReadingIndicator;
