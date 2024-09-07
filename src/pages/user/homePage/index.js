import { memo, useEffect } from "react";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./styles1.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import L from 'leaflet';

// Đặt kích thước cho bản đồ
const mapStyle = {
  width: '100%',
  height: '600px' // Đặt chiều cao của bản đồ lớn hơn nếu cần
};

// Vị trí trung tâm của bản đồ
const defaultPosition = [10.762622, 106.660172]; // Vĩ độ và Kinh độ

// Component để giữ vị trí mặc định của bản đồ
const CenterMapOnPosition = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(position, map.getZoom(), { animate: true });
  }, [position, map]);

  return null;
};

const FitToBoundsButton = ({ bounds }) => {
  const map = useMap();

  const handleClick = () => {
    map.fitBounds(bounds);
  };

  return (
    <Button variant="secondary" onClick={handleClick} className="fit-to-bounds-button">
      Vị Trí Của Công Ty
    </Button>
  );
};

const HomePage = () => {
  const bounds = [[10.752622, 106.650172], [10.772622, 106.670172]]; // Các góc của vùng cần hiển thị toàn bộ

  // Tạo biểu tượng tùy chỉnh cho Leaflet
  const customIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(
      `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C9.8 12 8 10.2 8 8C8 5.8 9.8 4 12 4C14.2 4 16 5.8 16 8C16 10.2 14.2 12 12 12ZM12 6C10.3 6 9 7.3 9 9C9 10.7 10.3 12 12 12C13.7 12 15 10.7 15 9C15 7.3 13.7 6 12 6ZM12 13C8.4 13 4 14.3 4 17V18H20V17C20 14.3 15.6 13 12 13Z" fill="#FF0000"/>
      </svg>`
    ),
    iconSize: [32, 32], // Kích thước lớn hơn
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <>
      <div className="container">
        {/* Phần giới thiệu */}
        <section className="intro-section">
          <h1>Chào Mừng Đến Với Trang Của Chúng Tôi!</h1>
          <p>
            Đây là phần giới thiệu về dịch vụ của chúng tôi. Chúng tôi cung cấp các giải pháp
            hoàn hảo cho nhu cầu của bạn, bao gồm cả dịch vụ bản đồ và định vị. Hãy khám phá
            những tính năng tuyệt vời mà chúng tôi mang đến cho bạn.
          </p>
          <Button variant="primary" size="lg">
            Tìm Hiểu Thêm
          </Button>
        </section>

        {/* Phần bản đồ */}
        <section className="map-section">
          <h2>Vị Trí Của Chúng Tôi</h2>
          <MapContainer style={mapStyle} center={defaultPosition} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={defaultPosition} icon={customIcon}>
              <Popup>
                Đây là vị trí của bạn.
              </Popup>
            </Marker>
            <FitToBoundsButton bounds={bounds} />
            <CenterMapOnPosition position={defaultPosition} />
          </MapContainer>
        </section>
      </div>
    </>
  );
};

export default memo(HomePage);
