import { memo } from "react";
import "./style.scss";
import { AiOutlineMail, AiOutlineCaretRight, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="row1">
                    <div className="col">
                        <img 
                            width="200"  
                            src="http://localhost:3000/static/media/a.77ccc5c9b66740e1836a.jpg" 
                            alt="Hữu Quý Printing Services Logo" 
                        />
                        <hr />
                        <div className="gradient-line">
                            <span className="highlight">Hữu Quý</span> – Chuyên gia in ấn chất lượng cao <br /> 
                            Với dịch vụ từ thiết kế đến in ấn các sản phẩm quảng cáo như danh thiếp, tờ rơi và brochure. 
                            Khám phá dịch vụ của chúng tôi để biến ý tưởng của bạn thành hiện thực!
                            <hr />
                        </div>
                    </div>
                    
                    <div className="col">
                        <h3>Thông tin liên hệ</h3>
                        <hr />
                        <h6>Giờ làm việc: Từ 9:00 sáng đến 6:00 chiều <br /><center>Thứ Hai đến Thứ Sáu</center></h6> 
                        <hr />
                        <h6 className="email-id">Email: BBBBBBBB@gmail.com</h6>
                        <h6>Số điện thoại: +84 987 000 000</h6>
                    </div>
                    
                    <div className="col">
                        <h3>Hướng dẫn và thông tin</h3>
                        <ul>
                            <li><a href="">Hướng dẫn đặt hàng online</a></li>
                            <li><a href="">Giao hàng và Vận Chuyển</a></li>
                            <li><a href="">Hình thức thanh toán</a></li>
                            <li><a href="">Chính sách bảo hành</a></li>
                            <li><a href="">Chính sách đổi trả hàng</a></li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h3>Nhận Báo Giá Qua Email</h3>
                        <form>
                            <AiOutlineMail />
                            <input type="email" placeholder="Nhập tên Email Của Bạn" required />
                            <button type="submit"><AiOutlineCaretRight /></button>
                        </form>
                        <div className="mangxahoi">
                            <ul>
                                <li><a href="#"><AiFillFacebook /></a></li>
                                <li><a href="#"><AiFillInstagram /></a></li>
                                <li><a href="#"><AiFillTwitterCircle /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default memo(Footer);
