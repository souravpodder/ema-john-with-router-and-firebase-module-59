import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <div>
      <nav className='header'>
        <img src={logo} alt="" />
        <div>
          <a href="/home">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;