import React from 'react';
import './AboutUs.scss'; // Import SCSS file

const AboutUs = React.memo(() => {
    return (
        <div className="about-us">
            <h1>Về Chúng Tôi</h1>
            <p>Chào mừng bạn đến với [Tên Công Ty], nơi cung cấp dịch vụ in ấn chất lượng hàng đầu. Chúng tôi chuyên cung cấp các giải pháp in ấn cho thiệp cưới, thiệp mời, quần áo và nhiều sản phẩm khác để đáp ứng nhu cầu của bạn.</p>
            <h2>Sứ Mệnh Của Chúng Tôi</h2>
            <p>Sứ mệnh của chúng tôi là mang đến cho khách hàng những sản phẩm in ấn đẹp và chất lượng. Chúng tôi cam kết sử dụng công nghệ in ấn tiên tiến nhất và vật liệu chất lượng cao để đảm bảo sự hài lòng của khách hàng.</p>
            <h2>Đội Ngũ Của Chúng Tôi</h2>
            <p>Đội ngũ của chúng tôi bao gồm những chuyên gia dày dạn kinh nghiệm trong ngành in ấn. Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ khách hàng để thực hiện các ý tưởng và thiết kế của họ một cách hoàn hảo nhất.</p>
            <h2>Giá Trị Cốt Lõi</h2>
            <p>Chúng tôi tin rằng sự sáng tạo, chất lượng và dịch vụ khách hàng xuất sắc là chìa khóa để thành công. Chúng tôi luôn tìm cách đổi mới và cải tiến dịch vụ của mình để phục vụ khách hàng tốt nhất có thể.</p>
            <h2>Những Dự Án Nổi Bật</h2>
            <p>Trong suốt hành trình hoạt động của mình, chúng tôi đã thực hiện nhiều dự án nổi bật, bao gồm các bản in ấn cho các sự kiện lớn, các thương hiệu nổi tiếng và các cá nhân yêu thích sự độc đáo.</p>
            <h2>Liên Hệ Chúng Tôi</h2>
            <p>Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn và hỗ trợ bạn trong mọi nhu cầu về in ấn. Đừng ngần ngại liên hệ với chúng tôi qua email, điện thoại hoặc ghé thăm văn phòng của chúng tôi để được tư vấn trực tiếp.</p>
        </div>
    );
});

export default AboutUs;
