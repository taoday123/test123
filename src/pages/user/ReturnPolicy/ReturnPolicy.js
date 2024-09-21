// src/ReturnPolicy.js
import React from 'react';
import './ReturnPolicy.scss'; // Import SCSS file

const ReturnPolicy = () => {
  return (
    <div className="return-policy">
      <h1>Chính Sách Đổi Trả Hàng - Dịch Vụ In Ấn</h1>

      <div className="section">
        <h2>Điều Kiện Đổi Trả</h2>
        <ul>
          <li>Sản phẩm phải còn nguyên trạng và không bị hư hỏng do lỗi của khách hàng.</li>
          <li>Cần có hóa đơn và chứng từ đi kèm khi yêu cầu đổi trả.</li>
          <li>Đơn hàng phải được yêu cầu đổi trả trong vòng 7 ngày kể từ ngày nhận hàng.</li>
          <li>Sản phẩm phải được trả lại trong bao bì gốc nếu có.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Quy Trình Đổi Trả</h2>
        <ol>
          <li>Liên hệ với bộ phận chăm sóc khách hàng qua email hoặc điện thoại để thông báo về yêu cầu đổi trả.</li>
          <li>Gửi lại sản phẩm đến địa chỉ được cung cấp bởi bộ phận chăm sóc khách hàng.</li>
          <li>Chúng tôi sẽ kiểm tra tình trạng sản phẩm và tiến hành hoàn tiền hoặc in lại sản phẩm tùy theo yêu cầu của bạn.</li>
        </ol>
      </div>

      <p>
        Để biết thêm chi tiết hoặc nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email support@example.com hoặc gọi đến số điện thoại (123) 456-7890.
      </p>
    </div>
  );
};

export default ReturnPolicy;
