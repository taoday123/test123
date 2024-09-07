import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './NewsDetail.scss';

const NewsDetail = ({ newsItem, onClose }) => {
    if (!newsItem) return null;

    return (
        <div className="news-detail" onClick={onClose}>
            <div className="detail-content" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h1>{newsItem.title}</h1>
                <img src={newsItem.imageUrl} alt={newsItem.title} />
                <p>{newsItem.content}</p>
            </div>
        </div>
    );
};

export default NewsDetail;
