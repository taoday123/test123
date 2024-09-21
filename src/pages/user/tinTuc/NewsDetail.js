import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './NewsDetail.scss';

const NewsDetail = ({ newsItem, onClose }) => {
    if (!newsItem) return null;

    // Định dạng ngày
    const formattedDate = new Date(newsItem.date).toLocaleDateString('vi-VN');
    console.log(newsItem); // Kiểm tra thông tin bài báo

    return (
        <div className="news-detail" onClick={onClose}>
            <div className="detail-content" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h1>{newsItem.title}</h1>
                <p><strong>Tác giả:</strong> {newsItem.author}</p>
                <p><strong>Ngày đăng:</strong> {formattedDate}</p>
                <img src={newsItem.imageUrl} alt={newsItem.title} />
                <p>{newsItem.content}</p>
            </div>
        </div>
    );
};

export default NewsDetail;
