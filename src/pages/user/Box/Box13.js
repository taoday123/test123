import React, { useState } from 'react';
import Slider from 'react-slick';
import './Box.scss'; // Import SCSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Box13 = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState('');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Thêm thuộc tính autoplay
    autoplaySpeed: 3000, // Thay đổi tốc độ tự động chuyển slide (3000ms = 3 giây)
  };

  const handleClickImage = (src) => {
    setZoomedImage(src);
    setIsZoomed(true);
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsZoomed(false);
    }
  };

  return (
    <div className="product-detail">
      <header className="product-header">
        <h1>Thiệp Mời Cưới</h1>
        <p>Danh mục: Thiệp Cưới</p>
      </header>

      <section className="product-slider">
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src="https://c.wallhere.com/photos/40/29/1200x800_px_photography-1334669.jpg!d" alt="Product Image 1" />
          </div>
          <div className="slide">
            <img src="https://c.wallhere.com/photos/af/82/1200x800_px_photography-1348111.jpg!d" alt="Product Image 2" />
          </div>
          <div className="slide">
            <img src="https://c.wallhere.com/photos/42/17/1200x800_px_insect-529949.jpg!d" alt="Product Image 3" />
          </div>
        </Slider>
      </section>

      <section className="product-info">
        <div className="info">
          <h2>Thông Tin Sản Phẩm</h2>
          <p><strong>Giá:</strong> 499.99 VNĐ</p>
          <p><strong>Mô Tả:</strong> Đây là một mẫu thiệp mời cưới sang trọng với thiết kế tinh tế. Chúng tôi cung cấp nhiều tùy chọn cá nhân hóa để phù hợp với nhu cầu của bạn.</p>
          <p><strong>Chi Tiết:</strong></p>
          <ul>
            <li>Chất liệu giấy cao cấp</li>
            <li>Thiết kế tùy chỉnh</li>
            <li>In màu chất lượng cao</li>
          </ul>
        </div>
        <div className="product-image">
          <img
            src="https://anhcuoiviet.wordpress.com/wp-content/uploads/2015/08/thiep-cuoi-ren-dep.jpg?w=665"
            alt="Product Main"
            onClick={() => handleClickImage("https://anhcuoiviet.wordpress.com/wp-content/uploads/2015/08/thiep-cuoi-ren-dep.jpg?w=665")}
          />
        </div>
      </section>

      {isZoomed && (
        <div className="zoomed-img" onClick={handleClickOutside}>
          <img src={zoomedImage} alt="Zoomed" />
        </div>
      )}

      <section className="customer-reviews">
        <h2>Khách Hàng Phản Hồi</h2>
        <div className="review">
          <h3>Nguyễn Văn A</h3>
          <p>★★★★☆</p>
          <p>Thiệp rất đẹp và chất lượng. Tôi rất hài lòng với dịch vụ của bạn.</p>
        </div>
        <div className="review">
          <h3>Trần Thị B</h3>
          <p>★★★☆☆</p>
          <p>Thiệp đẹp nhưng giao hàng hơi chậm.</p>
        </div>
        {/* Add more reviews as needed */}
      </section>

      <section className="contact-seller">
        <h2>Liên Hệ Người Bán</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Tên:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Tin nhắn:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Gửi Tin Nhắn</button>
        </form>
      </section>
    </div>
  );
};

export default Box13;
