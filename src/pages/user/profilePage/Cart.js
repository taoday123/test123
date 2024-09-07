import React, { useState, memo } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from './Card';
import { FaShoppingCart } from 'react-icons/fa';
import './styles2.scss';

// Component for Carousel Slider
const Slider = ({ slides }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />} >
            {slides.map((slide, idx) => (
                <Carousel.Item key={idx} interval={slide.interval}>
                    <img className="d-block w-100" src={slide.image} alt={slide.title} />
                    <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        <p>{slide.subTitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

// Component for Individual Box
const Box = ({ title, description, icon }) => {
    return (
        <div className="box">
            <div className="box-icon">
                <i className={`fas fa-${icon}`}></i>
            </div>
            <div className="box-content">
                <h5>{title}</h5>
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
};

// Component for Additional Image
const AdditionalImage = () => {
    return (
        <div className="additional-image">
            <img src="https://via.placeholder.com/1200x400?text=Additional+Image" alt="Additional" className="img-fluid" />
        </div>
    );
};

// Component for Promotional Boxes
const PromotionalBoxes = () => {
    const boxes = [
        { title: 'Chi Phí Cạnh Tranh', description: 'Chi phí tốt nhất thị trường in ấn hiện nay', icon: 'piggy-bank' },
        { title: 'PrintNow 2h', description: 'In và Giao hàng Trong vòng 2h<br>In ngày Chủ nhật', icon: 'telegram-plane' },
        { title: 'Giao Hàng Miễn Phí', description: 'Áp dụng cho các đơn hàng trong nội thành.', icon: 'truck' },
        { title: 'Kinh Nghiệm Làm Việc', description: 'Với hơn 8 năm làm việc với nhiều loại ngành dịch vụ.', icon: 'trophy' },
        { title: 'Chất Lượng Đảm Bảo', description: 'Đảm bảo chất lượng sản phẩm theo đúng nhu cầu của khách hàng.', icon: 'bolt' },
    ];

    return (
        <div className="promotional-boxes-container">
            {boxes.map((box, index) => (
                <Box 
                    key={index} 
                    title={box.title} 
                    description={box.description} 
                    icon={box.icon} 
                />
            ))}
        </div>
    );
};

// Main App Component
const ProfilePage = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const slides = [
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 1', subTitle: 'Subtitle 1', interval: 3000 },
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 2', subTitle: 'Subtitle 2', interval: 3000 },
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 3', subTitle: 'Subtitle 3', interval: 3000 },
    ];

    const existingBoxes = Array.from({ length: 20 }, (_, index) => `Box ${index + 1}`);

    const cards = [
        { title1: 'Card 1', title2: 'Description 1', image: 'https://via.placeholder.com/300x200', price: '$29.99' },
        { title1: 'Card 2', title2: 'Description 2', image: 'https://via.placeholder.com/300x200', price: '$39.99' },
        { title1: 'Card 3', title2: 'Description 3', image: 'https://via.placeholder.com/300x200', price: '$49.99' },
        { title1: 'Card 4', title2: 'Description 4', image: 'https://via.placeholder.com/300x200', price: '$59.99' },
        { title1: 'Card 5', title2: 'Description 5', image: 'https://via.placeholder.com/300x200', price: '$69.99' },
        { title1: 'Card 6', title2: 'Description 6', image: 'https://via.placeholder.com/300x200', price: '$79.99' },
        { title1: 'Card 7', title2: 'Description 7', image: 'https://via.placeholder.com/300x200', price: '$89.99' },
        { title1: 'Card 8', title2: 'Description 8', image: 'https://via.placeholder.com/300x200', price: '$99.99' },
        { title1: 'Card 9', title2: 'Description 9', image: 'https://via.placeholder.com/300x200', price: '$109.99' },
        { title1: 'Card 10', title2: 'Description 10', image: 'https://via.placeholder.com/300x200', price: '$119.99' },
    ];

    const handleCardClick = (card) => {
        addToCart(card);
    };

    const addToCart = (card) => {
        setCart([...cart, card]);
    };

    const handleRemoveFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const handleClearCart = () => {
        setCart([]);
    };

    const handleCheckout = () => {
        // Send email with cart details
        const email = 'phandaiduong97@gmail.com';
        const cartDetails = cart.map(item => `${item.title1} - ${item.price}`).join('\n');
        const body = `Giỏ hàng của bạn:\n\n${cartDetails}`;
        window.location.href = `mailto:${email}?subject=Đặt Hàng&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="app-container">
            <Slider slides={slides} />
            <h2>Danh Mục In Ấn</h2>
            <hr />
            <div className="box-container">
                {existingBoxes.map((title, index) => (
                    <div key={index} className="box">
                        <h4>{title}</h4>
                    </div>
                ))}
            </div>
            <hr />
            <h2>Card Grid</h2>
            <div className="card-grid">
                {cards.map((card, index) => (
                    <Card 
                        key={index} 
                        title1={card.title1} 
                        title2={card.title2} 
                        image={card.image} 
                        price={card.price}
                        onClick={() => handleCardClick(card)} 
                    />
                ))}
            </div>
            <hr />
            <AdditionalImage />
            <hr />
            <PromotionalBoxes />

            {/* Cart Icon */}
            <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
                <FaShoppingCart />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </div>

            {/* Cart Box */}
            <div className={`cart ${showCart ? 'show' : ''}`}>
                <h3>Giỏ Hàng</h3>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.title1} - {item.price}
                            <button className="remove-button" onClick={() => handleRemoveFromCart(index)}>Xóa</button>
                        </li>
                    ))}
                </ul>
                {cart.length > 0 && (
                    <>
                        <button onClick={handleClearCart} className="clear-button">Xóa Tất Cả</button>
                        <button onClick={handleCheckout}>Thanh Toán</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default memo(ProfilePage);
