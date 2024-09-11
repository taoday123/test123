import React, { useState } from 'react';
import './ContactUs.scss'; // Import SCSS file

const ContactUs = React.memo(() => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi dữ liệu ở đây
        alert('Tin nhắn của bạn đã được gửi!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div className="contact-us">
            <h1>Liên Hệ Với Chúng Tôi</h1>
            <p>Chúng tôi luôn sẵn sàng lắng nghe và đáp ứng nhu cầu của bạn. Nếu bạn có bất kỳ câu hỏi nào về dịch vụ in ấn của chúng tôi hoặc cần hỗ trợ thêm, hãy điền vào mẫu dưới đây và chúng tôi sẽ phản hồi sớm nhất có thể.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Tên:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập tên của bạn"
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập email của bạn"
                    required
                />

                <label htmlFor="message">Tin Nhắn:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập tin nhắn của bạn"
                    required
                ></textarea>

                <button type="submit">Gửi</button>
            </form>
        </div>
    );
});

export default ContactUs;
