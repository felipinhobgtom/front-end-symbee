import React from "react";
import "./header.css";
 import LogoHeader from '/img/LogoHeader.png'; // importando foto do logo

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logoEnome">
            <div className="imageLogo">
              <img src={LogoHeader} alt="Logo da SymBee" />
            </div>
            <div className="navbar-brand">Symbee</div>
          </div>

          <ul className="navbar-links">
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Serviços</a>
            </li>
            <li>
              <a href="#services">Contatos</a>
            </li>
            <li>
              <a href="#contact">Sobre nós</a>
            </li>
          </ul>
          <div className="buttons">
            <div>
              <button className="btn-entrar">Entrar</button>
            </div>
            <div>
              <button className="btn-registrar">Registrar</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
