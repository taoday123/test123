import "./style.scss";
import { AiOutlineSearch, AiOutlineShoppingCart, AiFillAppstore, AiFillPhone } from "react-icons/ai";
import { memo } from "react";
import a from './a.png';

const Headers = () => {
    return (
        <header>
            <input type="checkbox" id="chk1" />
            <div className="logo">
                <img className="banner2" src={a} alt="logo" />
            </div>
            <div className="search-box">
                <form action="">
                    <input type="text" name="search" id="srch" placeholder="search" />
                    <button type="submit"><AiOutlineSearch /></button>
                </form>
            </div>
            <ul>
                <li><a href="/">Trang Chủ</a></li>
                <li><a href="/trang1">Bản Đồ</a></li>
                <li><a href="/trang2">Trang Video</a></li>
                <li><a href="/trang3">Tin Tức</a></li>
                <li><a href="/trang4">Về Chúng Tôi</a></li>
                <li><a href="/trang5">Liên Hệ</a></li>
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

export default memo(Headers);
