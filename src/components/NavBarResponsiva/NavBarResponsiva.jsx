import React, { useState } from "react";
import "./NavBarResponsiva.css";
import iconeMenu from "./img/iconeMenuHamburguerBranco.png";
import LogoNav from "./img/LogoNav.png";
import { Route, useNavigate } from "react-router-dom";

const NavBarResponsiva = () => {
  // Estado para controlar se o menu está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

     const navegar = useNavigate();
    const handleCadastro = () => {
      navegar("/Cadastro");
    };

    const handleLogin = () => {
      navegar("/Login");
    }

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="imageLogo">
            <img src={LogoNav} alt="Logo da SymBee" />
            <div className="navbar-brand">Symbee</div>
          </div>
          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <div className="login-button">
              <button onClick={handleLogin}>Entrar</button>
            </div>
            <div className="btn-registrar">
              <button onClick={handleCadastro}>Registrar</button>
            </div>
          </div>
          <div className="mobile-menu-icon">
            <button onClick={toggleMenu}>
              <img className="icon" src={iconeMenu} alt="Menu" />
            </button>
          </div>
        </nav>
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sobre
              </a>
            </li>
          </ul>
          <div className="login-button">
            <button onClick={handleLogin}>
              <a>Entrar</a>
            </button>
          </div>
          <div className="btn-registrar">
            <button>
              <a onClick={handleCadastro}>Registrar</a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBarResponsiva;

