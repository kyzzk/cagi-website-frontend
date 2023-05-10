import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { ShoppingCart, LogIn } from 'react-feather';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <FiMenu className="hamburger" onClick={toggleMenu} />
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="left-side">
          <a href='/'>CAGI</a>
          <p>HOME</p>
          <p>PRODUTOS</p>
          <p>SOBRE O CURSO</p>
        </div>
      </nav>
      <div className="right-side">
          <LogIn />
          <ShoppingCart />
        </div>
    </header>
  );
}

export default Header;
export {};