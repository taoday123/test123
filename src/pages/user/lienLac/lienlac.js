import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './lienlac.scss';
import { memo } from 'react';

const Lienlac = () => {
  return (
    <div className="contact-container">
      <div className="chat-phone-container">
        {/* Hộp Chat Zalo */}
        <div className="chat-box">
          <a
            href="https://zalo.me/0376294960"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-link"
          >
            <FaWhatsapp className="chat-icon" />
            <span className="tooltip-text">Chat với chúng tôi trên Zalo</span>
          </a>
        </div>

        {/* Nút Gọi Điện */}
        <div className="phone-box">
          <a
            href="tel:+84376294960"
            className="phone-link"
          >
            <FaPhoneAlt className="phone-icon" />
            <span className="tooltip-text">Gọi cho chúng tôi</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Lienlac);
