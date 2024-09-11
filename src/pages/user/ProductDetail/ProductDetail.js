import React from 'react';
import { useParams } from 'react-router-dom';
import './productDetail.scss'; // Đảm bảo có file CSS

const ProductDetail = () => {
    const { id } = useParams();

    // Dữ liệu mẫu, thay thế bằng dữ liệu thực tế
    const productDetails = {
        '1': { title: 'Chi Phí cạnh Tranh 1', description: 'Chi phí tốt nhất thị trường in ấn hiện nay', image: 'https://via.placeholder.com/400x200?text=Product+1' },
        '2': { title: 'Chi Phí cạnh Tranh 2', description: 'Chi phí tốt nhất thị trường in ấn hiện nay', image: 'https://via.placeholder.com/400x200?text=Product+2' },
        // Thêm thông tin cho các sản phẩm khác từ 1 đến 20
        '20': { title: 'Chi Phí cạnh Tranh 20', description: 'Chi phí tốt nhất thị trường in ấn hiện nay', image: 'https://via.placeholder.com/400x200?text=Product+20' }
    };

    // Kiểm tra xem sản phẩm có tồn tại không
    const product = productDetails[id] || { title: 'Sản phẩm không tồn tại', description: '', image: '' };

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            {product.image && <img src={product.image} alt={product.title} className="product-image" />}
            <p dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
    );
};

export default ProductDetail;
