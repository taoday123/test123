import React, { useState } from 'react';
import './TinTuc.scss';
import NewsDetail from './NewsDetail';

const TinTuc = () => {
    const [news, setNews] = useState([
        {
            id: 1,
            title: 'Breaking News 1',
            author: 'Nguyễn Văn A',
            date: '2024-09-18T12:00:00Z',
            description: 'Description for breaking news 1.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 1.'
        },
        {
            id: 2,
            title: 'Breaking News 2',
            author: 'Trần Thị B',
            date: '2024-09-18T12:00:00Z',
            description: 'Description for breaking news 2.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 2.'
        },
        {
            id: 3,
            title: 'Breaking News 3',
            author: 'Trần Thị C',
            date: '2024-09-18T12:00:00Z',
            description: 'Description for breaking news 2.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 2.'
        },
        {
            id: 4,
            title: 'Breaking News 4',
            author: 'Trần Thị D',
            date: '2024-09-18T12:00:00Z',
            description: 'Description for breaking news 2.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 2.'
        },
        {
            id: 5,
            title: 'Breaking News 5',
            author: 'Trần Thị E',
            date: '2024-09-18T12:00:00Z',
            description: 'Description for breaking news 2.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 2.'
        },
        {
            id: 6,
            title: 'Breaking News 6',
            author: 'Trần Thị F',
            date: '2024-09-18T12:00:00Z',
            description: 'Description for breaking news 2.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 2.'
        },
    ]);

    const [selectedNews, setSelectedNews] = useState(null);

    const handleSelectNews = (newsItem) => {
        setSelectedNews(newsItem);
    };

    const handleCloseDetail = () => {
        setSelectedNews(null);
    };

    const handleEditClick = () => {
        if (selectedNews && selectedNews.id === 1) {
            // Logic để chỉnh sửa bài viết số 1
            alert('Bạn có thể chỉnh sửa bài viết số 1!');
        }
    };

    return (
        <div className="tin-tuc">
            <h1>News Page</h1>
            <div className="news-list">
                {news.map((item) => (
                    <div key={item.id} className="news-card" onClick={() => handleSelectNews(item)}>
                        <img src={item.imageUrl} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            {selectedNews && (
                <NewsDetail 
                    newsItem={selectedNews} 
                    onClose={handleCloseDetail} 
                />
            )}

            {selectedNews && selectedNews.id === 1 && (
                <button className="edit-button" onClick={handleEditClick}>
                    Chỉnh sửa bài viết
                </button>
            )}
        </div>
    );
};

export default TinTuc;
