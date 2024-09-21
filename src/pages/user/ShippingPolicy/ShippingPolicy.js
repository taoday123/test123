import React from 'react';
import './ShippingPolicy.scss'; // Import SCSS file

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy">
      <h1>Chính Sách Giao Hàng và Vận Chuyển</h1>

      <div className="section">
        <h2>Phạm Vi Giao Hàng</h2>
        <p>
          Chúng tôi cung cấp dịch vụ giao hàng trên toàn quốc. Sản phẩm sẽ được vận chuyển đến địa chỉ mà bạn cung cấp trong đơn hàng.
        </p>
      </div>

      <div className="section">
        <h2>Thời Gian Giao Hàng</h2>
        <p>
          Thời gian giao hàng sẽ từ 3-7 ngày làm việc tùy thuộc vào vị trí của bạn và phương thức vận chuyển bạn chọn.
        </p>
      </div>

      <div className="section">
        <h2>Chi Phí Vận Chuyển</h2>
        <p>
          Chi phí vận chuyển sẽ được tính dựa trên trọng lượng và kích thước của sản phẩm, cũng như địa điểm giao hàng. Chúng tôi sẽ thông báo rõ ràng về chi phí này trước khi bạn xác nhận đơn hàng.
        </p>
      </div>

      <div className="section">
        <h2>Thông Tin Liên Hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về chính sách giao hàng, vui lòng liên hệ với chúng tôi qua email support@example.com hoặc gọi đến số điện thoại (123) 456-7890.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
