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
                    <h1>Hizmatlar</h1>
                    <h1>Aloqa</h1>
                </div>
                <div className="buttons">
                    <CiSearch />
                    <RiStarSLine />
                    <LuUser />
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
