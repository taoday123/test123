import React from 'react';
import './WarrantyPolicy.scss'; // Import SCSS file

const WarrantyPolicy = () => {
  return (
    <div className="warranty-policy">
      <h1>Chính Sách Bảo Hành</h1>

      <div className="section">
        <h2>Điều Kiện Bảo Hành</h2>
        <ul>
          <li>Sản phẩm phải còn trong thời gian bảo hành theo quy định.</li>
          <li>Cần có hóa đơn mua hàng hoặc chứng từ đi kèm.</li>
          <li>Sản phẩm không được hư hỏng do sự cố từ bên ngoài như va chạm, rơi, nước.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Quy Trình Bảo Hành</h2>
        <ol>
          <li>Liên hệ với bộ phận chăm sóc khách hàng để thông báo về yêu cầu bảo hành.</li>
          <li>Gửi sản phẩm đến địa chỉ bảo hành được cung cấp.</li>
          <li>Chúng tôi sẽ kiểm tra sản phẩm và thông báo về kết quả bảo hành.</li>
        </ol>
      </div>

      <p>
        Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email support@example.com hoặc gọi đến số điện thoại (123) 456-7890.
      </p>
    </div>
  );
};

export default WarrantyPolicy;
