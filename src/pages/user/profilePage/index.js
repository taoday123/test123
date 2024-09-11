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
const Box = ({ title, link, image }) => {
    return (
        <a href={link} className="box">
            <img src={image} alt={title} className="box-image" />
            <h4>{title}</h4>
        </a>
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
        { title: 'Chi Phí cạnh Tranh' },
        { title: 'PrintNow 2h' },
        { title: 'Giao Hàng Miễn Phí' },
        { title: 'Kinh Kiểm' },
        { title: 'Chất Lượng' },
    ];

    return (
        <div className="promotional-boxes-container">
            {boxes.map((box, index) => (
                <Box key={index} title={box.title} link={box.link} image={box.image} />
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
    const [discountError, setDiscountError] = useState('');
    const [currentSection, setCurrentSection] = useState(0);

    const slides = [
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 1', subTitle: 'Subtitle 1', interval: 3000 },
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 2', subTitle: 'Subtitle 2', interval: 3000 },
        { image: 'https://via.placeholder.com/800x400', title: 'Slide 3', subTitle: 'Subtitle 3', interval: 3000 },
    ];

    // Danh sách các liên kết cho các hộp
    const boxLinks = Array.from({ length: 20 }, (_, index) => `/box-${index + 1}`);

    // Tạo danh sách các hộp với liên kết tương ứng
    const existingBoxes = [
        { title: 'Box 1', link: '/box-1', image: 'https://tanphat.com.vn/media/product/2986_35760_neverstop_laser_1000w_ha1.jpg?text=Image+1' },
        { title: 'Box 2', link: '/box-2', image: 'https://via.placeholder.com/150x150?text=Image+2' },
        { title: 'Box 3', link: '/box-3', image: 'https://via.placeholder.com/150x150?text=Image+3' },
        { title: 'Box 4', link: '/box-4', image: 'https://via.placeholder.com/150x150?text=Image+4' },
        { title: 'Box 5', link: '/box-5', image: 'https://via.placeholder.com/150x150?text=Image+5' },
        { title: 'Box 6', link: '/box-6', image: 'https://via.placeholder.com/150x150?text=Image+6' },
        { title: 'Box 7', link: '/box-7', image: 'https://via.placeholder.com/150x150?text=Image+7' },
        { title: 'Box 8', link: '/box-8', image: 'https://via.placeholder.com/150x150?text=Image+8' },
        { title: 'Box 9', link: '/box-9', image: 'https://via.placeholder.com/150x150?text=Image+9' },
        { title: 'Box 10', link: '/box-10', image: 'https://via.placeholder.com/150x150?text=Image+10' },
        { title: 'Box 11', link: '/box-11', image: 'https://via.placeholder.com/150x150?text=Image+11' },
        { title: 'Box 12', link: '/box-12', image: 'https://via.placeholder.com/150x150?text=Image+12' },
        { title: 'Box 13', link: '/box-13', image: 'https://via.placeholder.com/150x150?text=Image+13' },
        { title: 'Box 14', link: '/box-14', image: 'https://via.placeholder.com/150x150?text=Image+14' },
        { title: 'Box 15', link: '/box-15', image: 'https://via.placeholder.com/150x150?text=Image+15' },
        { title: 'Box 16', link: '/box-16', image: 'https://via.placeholder.com/150x150?text=Image+16' },
        { title: 'Box 17', link: '/box-17', image: 'https://via.placeholder.com/150x150?text=Image+17' },
        { title: 'Box 18', link: '/box-18', image: 'https://via.placeholder.com/150x150?text=Image+18' },

    ];
    

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
        let errorMessage = '';

        switch (discountCode.toLowerCase()) {
            case 'duongdeptraivn':
                discount = 20;
                break;
            case 'duongdeptraivnn':
                discount = 50;
                break;
            case 'duongdeptraivnnn':
                discount = 80;
                break;
            case 'duongtyphu':
                discount = 100;
                break;
            default:
                errorMessage = 'Mã giảm giá không hợp lệ';
                discount = 0;
        }

        if (errorMessage) {
            setDiscountError(errorMessage);
            setDiscountApplied(false);
            setDiscountPercent(0);
        } else {
            setDiscountError('');
            setDiscountApplied(true);
            setDiscountPercent(discount);
        }
    };

    const printInvoice = () => {
        if (cart.length === 0) {
            alert('Giỏ hàng trống');
            return;
        }
    
        const companyName = "Công Ty XYZ";
        const companyAddress = "123 Đường ABC, TP. HCM, Việt Nam";
        const companyPhone = "+84 123 456 789";
        const companyEmail = "contact@xyz.com";
        const currentDateTime = new Date();
        const currentDate = currentDateTime.toLocaleDateString();
        const currentTime = currentDateTime.toLocaleTimeString();
        const taxRate = 0.1; // Example: 10% tax rate
        const taxAmount = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0) * taxRate;
        const totalBeforeTax = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
        const totalWithTax = totalBeforeTax + taxAmount;
        const discountedTotal = discountApplied ? totalWithTax * (1 - discountPercent / 100) : totalWithTax;
    
        // Generate invoice items
        const invoiceItems = cart.map(item => `
            <tr>
                <td>${item.title1}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
            </tr>
        `).join('');
    
        // Construct invoice content
        const invoiceContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .invoice-container { width: 80%; margin: auto; padding: 20px; border: 1px solid #ddd; }
            .invoice-header, .invoice-footer { text-align: center; margin-bottom: 20px; }
            .invoice-header h1 { margin: 0; }
            .invoice-details { margin-bottom: 20px; }
            .invoice-details h2 { margin: 0; font-size: 16px; }
            .invoice-details p { margin: 5px 0; }
            .invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .invoice-table th, .invoice-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .invoice-table th { background-color: #f4f4f4; }
            .thank-you { text-align: center; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="invoice-container">
            <div class="invoice-header">
                <h1>Hóa Đơn</h1>
                <p>${companyName}</p>
                <p>${companyAddress}</p>
                <p>Điện thoại: ${companyPhone}</p>
                <p>Email: ${companyEmail}</p>
                <p>Ngày: ${currentDate} | Giờ: ${currentTime}</p>
            </div>
            <div class="invoice-details">
                <h2>Chi Tiết Đơn Hàng</h2>
                <table class="invoice-table">
                    <thead>
                        <tr>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${invoiceItems}
                    </tbody>
                </table>
                <p>Tổng tiền trước thuế: $${totalBeforeTax.toFixed(2)}</p>
                <p>Thuế (${(taxRate * 100).toFixed(0)}%): $${taxAmount.toFixed(2)}</p>
                <p>Tổng tiền sau thuế: $${totalWithTax.toFixed(2)}</p>
                ${discountApplied ? `<p>Giảm giá: ${discountPercent}%</p>` : ''}
                <h3>Tổng cộng: $${discountedTotal.toFixed(2)}</h3>
            </div>
            <div class="thank-you">
                <p>Xin cám ơn đã mua hàng!</p>
            </div>
        </div>
    </body>
    </html>
    `;
    
        // Open the invoice in a new window
        const newWindow = window.open('', '', 'width=800,height=600');
        newWindow.document.write(invoiceContent);
        newWindow.document.close();
    };
    

    return (
        <div className="app-container">
            <Slider slides={slides} />
            <hr />
            <h2>Danh Mục In Ấn</h2>
            <div className="box-container">
                {existingBoxes.map((box, index) => (
                    <Box key={index} title={box.title} link={box.link} image={box.image} />
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
            <ReadingIndicator currentSection={currentSection} totalSections={2} />
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
                            {discountError && <p className="discount-error">{discountError}</p>}
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
