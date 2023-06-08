import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { ShoppingCart, LogIn } from 'react-feather';
import './Header.css';
import logoCagi from '../../img/LogoCagiPreta.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header py-4">
      <FiMenu className="hamburger" onClick={toggleMenu} />
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="left-side">
          <a target="blank" href="https://www.instagram.com/cagiufpr/">
            <img className="img-fluid logo-cagi" src={logoCagi} alt="Logo do CAGI" />
          </a>
          <a href='/cagi' className='mx-2'>
            <p className='text-underline'>CAGI</p>
          </a>
          <a href="/" className='mx-2'>
            <p className='text-underline'>HOME</p>
          </a>
          <a href="/produtos" className='mx-2'>
            <p className='text-underline'>PRODUTOS</p>
          </a>
          <a href="/sobre" className='mx-2'>
            <p className='text-underline'>SOBRE O CURSO</p>
          </a>
        </div>
      </nav>
      <div className="right-side">
  <a href='Login' className="login-link">
    <span className="login-text">LOGAR</span>
    <LogIn className="login-icon" />
  </a>
  <a href='mycart' className="cart-link">
    <ShoppingCart className="cart-icon" />
  </a>
</div>



    </header>
  );
}

export default Header;
export { };