import React, { useState, useEffect, useRef } from 'react';
import './style.scss'; // Import CSS file
import { AiOutlineSearch, AiOutlineShoppingCart, AiFillAppstore, AiFillPhone, AiOutlineHome } from 'react-icons/ai';
import a from './a.png'; // Import logo image
import { FaMap, FaVideo, FaNewspaper, FaAddressCard } from 'react-icons/fa';

// Sample data for suggestions with links
const suggestionsData = [
    { name: 'Apple', link: '/apple' },
    { name: 'Banana', link: '/banana' },
    { name: 'Cherry', link: '/cherry' },
    { name: 'Date', link: '/date' },
    { name: 'Fig', link: '/fig' },
    { name: 'Grape', link: '/grape' },
    { name: 'Kiwi', link: '/kiwi' },
    { name: 'Lemon', link: '/lemon' },
    { name: 'Mango', link: '/mango' },
    { name: 'Orange', link: '/orange' },
    { name: 'Peach', link: '/peach' },
    { name: 'Pear', link: '/pear' },
    { name: 'Plum', link: '/plum' },
    { name: 'Strawberry', link: '/strawberry' },
    { name: 'Watermelon', link: '/watermelon' }
];

const dropdownItems = [
    {
        title: 'Hệ Thống Quản Lý Nhà',
        link: '/he-thong-quan-ly-nha',
        icon: <AiOutlineHome style={{ marginRight: '8px' }} />,
        subItems: [
            {
                title: 'Quản Lý Phòng',
                link: '/quan-ly-phong',
                icon: <AiOutlineHome style={{ marginRight: '8px' }} />,
                subItems: [
                    {
                        title: 'Phòng Khách',
                        link: '/phong-khach',
                        icon: <AiOutlineHome style={{ marginRight: '8px' }} />,
                        subItems: [
                            {
                                title: 'Thiết Bị Phòng Khách',
                                link: '/thiet-bi-phong-khach',
                                icon: <AiOutlineHome style={{ marginRight: '8px' }} />,
                                subItems: [
                                    {
                                        title: 'Điều Hòa',
                                        link: '/dieu-hoa',
                                        icon: <AiOutlineHome style={{ marginRight: '8px' }} />,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: 'Dịch Vụ Hỗ Trợ',
        link: '/dich-vu-ho-tro',
        icon: <FaMap style={{ marginRight: '8px' }} />,
        subItems: [
            {
                title: 'Dịch Vụ Khách Hàng',
                link: '/dich-vu-khach-hang',
                icon: <FaMap style={{ marginRight: '8px' }} />,
                subItems: [
                    {
                        title: 'Hỗ Trợ Kỹ Thuật',
                        link: '/ho-tro-ky-thuat',
                        icon: <FaMap style={{ marginRight: '8px' }} />
                    }
                ]
            }
        ]
    },
    {
        title: 'Tài Nguyên',
        link: '/tai-nguyen',
        icon: <FaVideo style={{ marginRight: '8px' }} />,
        subItems: [
            {
                title: 'Tài Nguyên Giáo Dục',
                link: '/tai-nguyen-giao-duc',
                icon: <FaVideo style={{ marginRight: '8px' }} />
            }
        ]
    },
    {
        title: 'Tin Tức',
        link: '/tin-tuc',
        icon: <FaNewspaper style={{ marginRight: '8px' }} />,
        subItems: [
            {
                title: 'Tin Tức Mới Nhất',
                link: '/tin-tuc-moi-nhat',
                icon: <FaNewspaper style={{ marginRight: '8px' }} />
            }
        ]
    },
    {
        title: 'Thông Tin Công Ty',
        link: '/thong-tin-cong-ty',
        icon: <FaAddressCard style={{ marginRight: '8px' }} />,
        subItems: [
            {
                title: 'Giới Thiệu',
                link: '/gioi-thieu',
                icon: <FaAddressCard style={{ marginRight: '8px' }} />
            }
        ]
    }
];


const Headers = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (searchTerm.length > 0) {
            const suggestions = suggestionsData.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredSuggestions(suggestions);
        } else {
            setFilteredSuggestions([]);
        }
    }, [searchTerm]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSuggestionClick = (link) => {
        window.location.href = link;
    };

    const renderDropdownItems = (items) => (
        <ul className="dropdown-menu">
            {items.map((item, index) => (
                <li key={index} className="dropdown-item">
                    <a href={item.link}>
                        <span className="icon">{item.icon}</span>
                        {item.title}
                    </a>
                    {item.subItems && item.subItems.length > 0 && (
                        <ul className="sub-menu">
                            {renderDropdownItems(item.subItems)}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
    

    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img className="banner2" src={a} alt="logo" />
                </a>
            </div>
            
            <div className="search-box">
                <form>
                    <input
                        type="text"
                        name="search"
                        id="srch"
                        placeholder="Tìm kiếm"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button type="submit"><AiOutlineSearch /></button>
                    {filteredSuggestions.length > 0 && (
                        <div className="suggestions">
                            {filteredSuggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="suggestion-item"
                                    onClick={() => handleSuggestionClick(suggestion.link)}
                                >
                                    {suggestion.name}
                                </div>
                            ))}
                        </div>
                    )}
                </form>
            </div>
            
            <ul className="main-menu">
                <li className="dropdown" ref={dropdownRef}>
                    <a href="#" onClick={toggleDropdown}>
                        Trang Chủ
                    </a>
                    {isDropdownOpen && renderDropdownItems(dropdownItems)}
                </li>
                <li><a href="/trang1"> Bản Đồ</a></li>
                <li><a href="/trang2"> Trang Video</a></li>
                <li><a href="/trang3">Tin Tức</a></li>
                <li><a href="/trang4"> Về Chúng Tôi</a></li>
                <li><a href="/trang5"> Liên Hệ</a></li>
                <li><a href="/thiet-ke"> Thiết Kế</a></li>
                <li>
                    <a href="#"><AiOutlineShoppingCart /></a>
                    <a href="#"><AiFillPhone /></a>
                </li>
            </ul>
            <div className="menu">
                <label htmlFor="chk1">
                    <AiFillAppstore />
                </label>
            </div>
        </header>
    );
}

export default Headers;