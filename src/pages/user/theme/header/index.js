import "./style.scss";
import { AiOutlineSearch, AiOutlineShoppingCart, AiFillAppstore, AiFillPhone } from "react-icons/ai";
import { memo } from "react";
import a from './a.jpg';

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
                <li><a href="/">Home1</a></li>
                <li><a href="thong-tin-ca-nhan">Home2</a></li>
                <li><a href="VIDEO">Home3</a></li>
                <li><a href="tin-tuc">Home4</a></li>
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
