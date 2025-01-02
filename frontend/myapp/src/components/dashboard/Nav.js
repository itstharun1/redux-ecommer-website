// src/components/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Nav.css';

function Navbar() {
  const cart=useSelector((state)=>state.product.cart)
  const cartLength = cart.length;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">E-Shop</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href='/products' className="nav-links">Products</a>
          </li>
          <li className="nav-item">
            <a href="/cart" className="nav-links">Cart:{cartLength}</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-links">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
