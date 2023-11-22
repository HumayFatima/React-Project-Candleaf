import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaUser, FaShoppingCart} from 'react-icons/fa';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src="./candle.png" alt="" />
      <h2>Candleaf</h2></div> 
      <div className="center-menu">
        <ul>
          <li>Discovery <FaChevronDown icon="fa-solid fa-chevron-down" /> </li> 
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="right-menu">
        <div className="login-icon"><FaUser style={{ color: '#030408' }} /></div>
        <div className="cart-icon"><FaShoppingCart style={{ color: '#000000' }} /></div>
      </div>
    </header>
  );
};

export default Header;