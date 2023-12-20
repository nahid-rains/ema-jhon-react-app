import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header-navigation'>
        <img src={logo} alt=''></img>
        <div className='call-stack'>
            <a href='/home'>Shop</a>
            <a href='/offers'>Orders</a>
            <a href='/services'>Inventory</a>
            <a href='/about'>About</a>
           

        </div>
        </nav>
    );
};

export default Header;