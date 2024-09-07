import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaShoppingCart } from 'react-icons/fa';
import './styles2.scss';

// Thành phần cho Thanh trượt Carousel
const Slider = ({ slides }) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}>
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

// Thành phần cho Hộp riêng lẻ
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

// Thành phần cho Hình ảnh bổ sung
const AdditionalImage = () => {
    return (
        <div className="additional-image">
            <img src="https://via.placeholder.com/1200x400?text=Additional+Image" alt="Additional" className="img-fluid" />
        </div>
    );
};

// Thành phần cho Hộp Khuyến mại
const PromotionalBoxes = () => {
    const boxes = [
        { title: 'Chi Phí cạnh Tranh', description: 'Chi phí tốt nhất thị trường in ấn hiện nay', icon: 'piggy-bank' },
        { title: 'PrintNow 2h', description: 'In và Giao hàng Trong vòng 2h<br>Trong ngày Chủ nhật', icon: 'telegram-plane' },
        { title: 'Giao Hàng Miễn Phí', description: 'Áp dụng cho đơn hàng trong nội thành.', icon: 'truck' },
        { title: 'Kinh Kiểm', description: 'Với hơn 8 năm làm việc nhiều loại dịch vụ.', icon: 'trophy' },
        { title: 'Chất Lượng', description: 'Đảm bảo theo đúng nhu cầu của khách hàng.', icon: 'bolt' },
    ];

    return (
        <div className="promotional-boxes-container">
            {boxes.map((box, index) => (
                <Box key={index} title={box.title} description={box.description} icon={box.icon} />
            ))}
        </div>
    );
};

// Thành phần cho Chỉ số đọc
const ReadingIndicator = ({ currentSection, totalSections }) => {
    const dots = Array.from({ length: totalSections }, (_, index) => (
        <span key={index} className={`dot ${index === currentSection ? 'active' : ''}`}></span>
    ));

    return (
        <div className="reading-indicator">
            {dots}
        </div>
    );
};

// Thành phần ứng dụng chính
const ProfilePage = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discountPercent, setDiscountPercent] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);

    const slides = [
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 1', subTitle: 'Subtitle 1', interval: 3000 },
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 2', subTitle: 'Subtitle 2', interval: 3000 },
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 3', subTitle: 'Subtitle 3', interval: 3000 },
    ];

    const existingBoxes = Array.from({ length: 20 }, (_, index) => `Box ${index + 1}`);

    const cards = [
        { title1: 'Thẻ 1', title2: 'Mô tả 1', image: 'https://via.placeholder.com/300x200', price: '29,99$' },
        { title1: 'Thẻ 2', title2: 'Mô tả 2', image: 'https://via.placeholder.com/300x200', price: '39,99$' },
        { title1: 'Thẻ 3', title2: 'Mô tả 3', image: 'https://via.placeholder.com/300x200', price: '49,99$' },
        { title1: 'Thẻ 4', title2: 'Mô tả 4', image: 'https://via.placeholder.com/300x200', price: '59,99$' },
        { title1: 'Thẻ 5', title2: 'Mô tả 5', image: 'https://via.placeholder.com/300x200', price: '69,99$' },
        { title1: 'Thẻ 6', title2: 'Mô tả 6', image: 'https://via.placeholder.com/300x200', price: '79,99$' },
        { title1: 'Thẻ 7', title2: 'Mô tả 7', image: 'https://via.placeholder.com/300x200', price: '89,99$' },
        { title1: 'Thẻ 8', title2: 'Mô tả 8', image: 'https://via.placeholder.com/300x200', price: '99,99$' },
        { title1: 'Thẻ 9', title2: 'Mô tả 9', image: 'https://via.placeholder.com/300x200', price: '109,99$' },
        { title1: 'Thẻ 10', title2: 'Mô tả 10', image: 'https://via.placeholder.com/300x200', price: '119,99$' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }

            const sectionHeight = window.innerHeight;
            if (window.scrollY < sectionHeight) setCurrentSection(0);
            else if (window.scrollY < sectionHeight * 2) setCurrentSection(1);
            else if (window.scrollY < sectionHeight * 3) setCurrentSection(2);
            else setCurrentSection(3);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCardClick = (card) => {
        alert(`Nhấp vào ${card.title1} với giá ${card.price}`);
        addToCart(card);
    };

    const addToCart = (card) => {
        setCart(prevCart => {
            const itemIndex = prevCart.findIndex(item => item.title1 === card.title1);
            if (itemIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[itemIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...card, quantity: 1 }];
            }
        });
    };

    const handleRemoveFromCart = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart.splice(index, 1);
            return updatedCart;
        });
    };

    const handleClearCart = () => {
        setCart([]);
    };

    const applyDiscountCode = () => {
        let discount = 0;
        switch (discountCode.toLowerCase()) {
            case 'discount10':
                discount = 10;
                break;
            case 'discount20':
                discount = 20;
                break;
            default:
                discount = 0;
        }
        setDiscountPercent(discount);
        setDiscountApplied(discount > 0);
    };

    const generateInvoice = () => {
        const invoiceData = cart.map(item => ({
            title: item.title1,
            price: item.price,
            quantity: item.quantity,
        }));
        return invoiceData;
    };

    const printInvoice = () => {
        const invoiceData = generateInvoice();
        let invoiceHtml = '<h1>Hóa Đơn</h1><table><thead><tr><th>Tên</th><th>Giá</th><th>Số lượng</th></tr></thead><tbody>';

        invoiceData.forEach(item => {
            invoiceHtml += `<tr><td>${item.title}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`;
        });

        invoiceHtml += '</tbody></table>';
        const newWindow = window.open('', '', 'width=600,height=400');
        newWindow.document.write(invoiceHtml);
        newWindow.document.close();
        newWindow.focus();
        newWindow.print();
    };

    return (
        <div className="app-container">
            <Slider slides={slides} />
            <hr />
            <h2>Danh Mục In Ấn</h2>
            <div className="box-container">
                {existingBoxes.map((title, index) => (
                    <div key={index} className="box">
                        <h4>{title}</h4>
                    </div>
                ))}
            </div>
            <hr />
            <h2>Danh Sách Thẻ</h2>
            <div className="card-grid">
                {cards.map((card, index) => (
                    <div key={index} className="card" onClick={() => handleCardClick(card)}>
                        <img src={card.image} alt={card.title1} />
                        <h3>{card.title1}</h3>
                        <p>{card.title2}</p>
                        <p>{card.price}</p>
                    </div>
                ))}
            </div>
            <hr />
            <AdditionalImage />
            <hr />
            <PromotionalBoxes />
            {/* Reading Indicator */}
            <ReadingIndicator currentSection={currentSection} totalSections={2} />
            {/* Cart Icon and Cart */}
            <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
                <FaShoppingCart />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </div>
            <div className={`cart ${showCart ? 'show' : ''}`}>
                <h3>Giỏ Hàng</h3>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.title1} - {item.price} x {item.quantity}
                            <button className="remove-button" onClick={() => handleRemoveFromCart(index)}>Xóa</button>
                        </li>
                    ))}
                </ul>
                {cart.length > 0 && (
                    <>
                        <div className="discount-code">
                            <input type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} placeholder="Nhập mã giảm giá" />
                            <button onClick={applyDiscountCode}>Áp dụng</button>
                            {discountApplied && <p className="discount-applied">Mã giảm giá đã được áp dụng!</p>}
                        </div>
                        <button onClick={handleClearCart} className="clear-button">Xóa Tất cả</button>
                        <button onClick={printInvoice}>In Hóa Đơn</button>
                    </>
                )}
            </div>
            {showScrollToTop && (
                <button className="scroll-to-top" onClick={scrollToTop}> ↑ </button>
            )}
        </div>
    );
};

export default ProfilePage;
