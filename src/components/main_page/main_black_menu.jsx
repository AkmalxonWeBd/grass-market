import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_img from "../icons/grass-logo.png";
import { CiSearch } from "react-icons/ci";
import { RiStarSLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { PiHandbag } from "react-icons/pi";
import "./style.css";

function Main() {
    const [bagCount, setBagCount] = useState(1);

    return (
        <div>
            <div className='main_black_menu'>
                <Link to="/">
                    <div className="logo">
                        <img className='logo_img' src={logo_img} alt="Logo" />
                        <h1 className='logo_img_grass'>grass</h1>
                    </div>
                </Link>
                <div className="menu">
                    <h1>Mahsulotlar</h1>
                    <h1>To'lov tizimlari</h1>
                    <div className="menu-item">
                        <h1>Xizmatlar</h1>
                        <div className="dropdown-menu">
                            <Link to="#">Yetkazib berish hizmati haqida</Link>
                            <Link to="#">Buyurtma berish haqida</Link>
                            <Link to="#">To'lov tizimlari haqida</Link>
                        </div>
                    </div>
                    <h1>Aloqa</h1>
                </div>
                <div className="buttons">
                    <div>
                        <CiSearch />
                    </div>
                    <div>
                        <RiStarSLine />
                    </div>
                    <div>
                        <LuUser />
                    </div>
                    <div className='bag'>
                        <PiHandbag />
                        {bagCount > 0 && <h1>{bagCount}</h1>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
