
import React from 'react';
import logo from '../../images/Logo.svg';
import './Head1.css'
const Head1 = () => {
    return (
       
            <nav className='head1-sec'>
                <img src={logo} alt="" />
                <div className='content-section'>
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About</a>
                </div>
            </nav>
        
    );
};

export default Head1;