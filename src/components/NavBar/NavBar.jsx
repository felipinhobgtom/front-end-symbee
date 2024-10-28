import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import LogoNav from './img/LogoNav.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logoEnome">
          <div className="imageLogo">
            <img src={LogoNav} alt="Logo da SymBee" />
          </div>
          <div className="navbar-brand">Symbee</div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="Services" onClick={toggleMenu}>Serviços</Link>
          </li>
          <li>
            <Link to="Contact" onClick={toggleMenu}>Contatos</Link>
          </li>
          <li>
            <Link to="AboutUs" onClick={toggleMenu}>Sobre nós</Link>
          </li>
        </ul>
        <div className="buttons">
          <button className="btn-entrar" to="Login">Entrar</button>
          <button className="btn-registrar" to="Register">Registrar</button>
        </div>
        
      </nav>
    </header>
  );
};

export default NavBar;
