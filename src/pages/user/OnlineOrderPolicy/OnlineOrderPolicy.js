import React from 'react';
import './OnlineOrderPolicy.scss'; // Import SCSS file

const OnlineOrderPolicy = () => {
  return (
    <div className="online-order-policy">
      <h1>Chính Sách Đặt Hàng Online</h1>

      <div className="section">
        <h2>Quy Trình Đặt Hàng</h2>
        <p>
          Để đặt hàng online, bạn chỉ cần thực hiện theo các bước sau:
        </p>
        <ol>
          <li>Chọn sản phẩm bạn muốn mua và thêm vào giỏ hàng.</li>
          <li>Kiểm tra lại giỏ hàng và xác nhận đơn hàng.</li>
          <li>Nhập thông tin giao hàng và phương thức thanh toán.</li>
          <li>Xác nhận đơn hàng và chờ nhận thông báo từ chúng tôi.</li>
        </ol>
      </div>

      <div className="section">
        <h2>Thay Đổi Đơn Hàng</h2>
        <p>
          Nếu bạn cần thay đổi thông tin trong đơn hàng, hãy liên hệ với chúng tôi ngay sau khi đặt hàng. Chúng tôi sẽ cố gắng hỗ trợ bạn trong khả năng có thể.
        </p>
      </div>

      <div className="section">
        <h2>Hủy Đơn Hàng</h2>
        <p>
          Bạn có quyền hủy đơn hàng trong vòng 24 giờ kể từ khi đặt hàng. Sau khoảng thời gian này, chúng tôi sẽ không thể hủy đơn hàng nếu đã bắt đầu quá trình vận chuyển.
        </p>
      </div>

      <div className="section">
        <h2>Thông Tin Liên Hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về chính sách đặt hàng online, vui lòng liên hệ với chúng tôi qua email support@example.com hoặc gọi đến số điện thoại (123) 456-7890.
        </p>
      </div>
    </div>
  );
};

export default OnlineOrderPolicy;
