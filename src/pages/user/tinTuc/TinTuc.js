import React, { useState } from 'react';
import './TinTuc.scss';
import NewsDetail from './NewsDetail'; // Import NewsDetail component

const TinTuc = () => {
    // Sample news data with six items
    const [news, setNews] = useState([
        {
            id: 1,
            title: 'Breaking News 1',
            description: 'Description for breaking news 1.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 1.'
        },
        {
            id: 2,
            title: 'Breaking News 2',
            description: 'Description for breaking news 2.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 2.'
        },
        {
            id: 3,
            title: 'Breaking News 3',
            description: 'Description for breaking news 3.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 3.'
        },
        {
            id: 4,
            title: 'Breaking News 4',
            description: 'Description for breaking news 4.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 4.'
        },
        {
            id: 5,
            title: 'Breaking News 5',
            description: 'Description for breaking news 5.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 5.'
        },
        {
            id: 6,
            title: 'Breaking News 6',
            description: 'Description for breaking news 6.',
            imageUrl: 'https://via.placeholder.com/300x200',
            content: 'Full content of the breaking news 6.'
        }
    ]);

    const [selectedNews, setSelectedNews] = useState(null);

    const handleSelectNews = (newsItem) => {
        setSelectedNews(newsItem);
    };

    const handleCloseDetail = () => {
        setSelectedNews(null);
    };

    return (
        <div className="tin-tuc">
            <div className="news">News Page</div>
            <div className="news-list">
                {news.map((item) => (
                    <div key={item.id} className="news-card" onClick={() => handleSelectNews(item)}>
                        <img src={item.imageUrl} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            {selectedNews && <NewsDetail newsItem={selectedNews} onClose={handleCloseDetail} />}
        </div>
    );
};

export default TinTuc;
