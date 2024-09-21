import React from 'react';
import './PaymentMethods.scss'; // Import SCSS file

const PaymentMethods = () => {
  return (
    <div className="payment-methods">
      <h1>Hình Thức Thanh Toán</h1>

      <div className="section">
        <h2>Thanh Toán Qua Zalo</h2>
        <p>
          Bạn có thể thực hiện thanh toán nhanh chóng và dễ dàng qua Zalo. 
          Để thanh toán, hãy truy cập vào đường dẫn dưới đây hoặc quét mã QR để kết nối với chúng tôi:
        </p>
        <p>
          <a href="https://zalo.me/0376294960" target="_blank" rel="noopener noreferrer">
            Zalo: 0376294960
          </a>
        </p>
        <p>
          Sau khi liên hệ, chúng tôi sẽ hướng dẫn bạn thực hiện thanh toán một cách an toàn và tiện lợi.
        </p>
      </div>

      <div className="section">
        <h2>Các Hình Thức Thanh Toán Khác</h2>
        <ul>
          <li>Chuyển khoản ngân hàng</li>
          <li>Thanh toán khi nhận hàng (COD)</li>
          <li>Thanh toán qua thẻ tín dụng</li>
        </ul>
      </div>

      <p>
        Nếu bạn có bất kỳ câu hỏi nào về hình thức thanh toán, vui lòng liên hệ với chúng tôi qua email support@example.com hoặc gọi đến số điện thoại (123) 456-7890.
      </p>
    </div>
  );
};

export default PaymentMethods;
