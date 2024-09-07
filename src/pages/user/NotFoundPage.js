// src/pages/user/NotFoundPage.js
import React from 'react';
import './NotFoundPage.scss'; // Import CSS file

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Xin lỗi, trang bạn tìm không tồn tại.</p>
            <a href="/" className="not-found-link">Trở về trang chính</a>
        </div>
    );
};

export default NotFoundPage;
