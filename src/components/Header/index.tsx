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
    <header className="header py-4 shadow">
      <FiMenu className="hamburger" onClick={toggleMenu} />
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="left-side">
          <a target="blank" href="https://www.instagram.com/cagiufpr/">
            <img className="img-fluid logo-cagi" src={logoCagi} alt="Logo do CAGI" />
          </a>
          <a href='/' className='mx-2'>
            <p>CAGI</p>
          </a>
          <a href="#" className='mx-2'>
            <p>Home</p>
          </a>
          <a href="#" className='mx-2'>
            <p>Produtos</p>
          </a>
          <a href="#" className='mx-2'>
            <p>Sobre o curso</p>
          </a>
        </div>
      </nav>
      <div className="right-side">
          <a href='Login'><LogIn /></a>
          <ShoppingCart />
        </div>
    </header>
  );
}

export default Header;
export {};