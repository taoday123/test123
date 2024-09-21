import { memo } from "react";
import "./style.scss";
import { AiOutlineMail, AiOutlineCaretRight, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo-section">
                    <img 
                        width="200"  
                        src="http://localhost:3000/static/media/a.76f50542a360e166324f.png" 
                        alt="Hữu Quý Printing Services Logo" 
                    />
                    <p className="description">
                        <span className="highlight">Hữu Quý</span> – Chuyên gia in ấn chất lượng cao. Khám phá dịch vụ của chúng tôi để biến ý tưởng của bạn thành hiện thực!
                    </p>
                </div>

                <div className="contact-info">
                    <h3>Thông tin liên hệ</h3>
                    <p>Giờ làm việc: Từ 9:00 sáng đến 6:00 chiều <br /> Thứ Hai đến Thứ Sáu</p>
                    <p>Email: BBBBBBBB@gmail.com</p>
                    <p>Số điện thoại: +84 987 000 000</p>
                </div>

                <div className="guide-info">
                    <h3>Hướng dẫn và thông tin</h3>
                    <ul>
                        <li><a href="/huong-dan-dat-hang-online">Hướng dẫn đặt hàng online</a></li>
                        <li><a href="/giao-hang-va-van-chuyen">Giao hàng và Vận Chuyển</a></li>
                        <li><a href="/hinh-thuc-thanh-toan">Hình thức thanh toán</a></li>
                        <li><a href="/chinh-sach-bao-hanh">Chính sách bảo hành</a></li>
                        <li><a href="/chinh-sach-doi-tra-hang">Chính sách đổi trả hàng</a></li>
                    </ul>
                </div>

                <div className="subscribe-section">
                    <h3>Nhận Báo Giá Qua Email</h3>
                    <form>
                        <AiOutlineMail />
                        <input type="email" placeholder="Nhập Email của bạn" required />
                        <button type="submit"><AiOutlineCaretRight /></button>
                    </form>
                    <div className="social-media">
                        <ul>
                            <li><a href="#"><AiFillFacebook /></a></li>
                            <li><a href="#"><AiFillInstagram /></a></li>
                            <li><a href="#"><AiFillTwitterCircle /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
