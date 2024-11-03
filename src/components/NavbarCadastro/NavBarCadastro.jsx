import React, { useState } from "react";
import "./NavBarCadastro.css";
import iconeMenu from "./img/iconeMenuHamburguerBranco.png";
import vetorLaranja from "./img/vetorLaranja.png";

const NavBarCadastro = () => {
  // Estado para controlar se o menu está aberto ou fechado
  const [isMenuOpenRegister, setIsMenuOpenRegister] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenuRegister = () => {
    setIsMenuOpenRegister(!isMenuOpenRegister);
  };

  return (
    <>
      <header>
        <nav className="navbarRegister">
          <div className="imageLogoRegister">
            <img src={vetorLaranja} alt="Logo da SymBee" />
            <div className="navbarBrandRegister">Symbee</div>
          </div>
          <div className="navListRegister">
            <ul>
              <li className="navItemRegister">
                <a href="#" className="navLinkRegister">
                  Início
                </a>
              </li>
              <li className="navItemRegister">
                <a href="#" className="navLinkRegister">
                  Projetos
                </a>
              </li>
              <li className="navItemRegister">
                <a href="#" className="navLinkRegister">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-icon-register">
            <button onClick={toggleMenuRegister}>
              <img className="iconRegister" src={iconeMenu} alt="Menu" />
            </button>
          </div>
        </nav>
        <div
          className={`mobile-menu-register ${isMenuOpenRegister ? "open" : ""}`}
        >
          <ul>
            <li className="navItemRegister">
              <a href="#" className="navLinkRegister">
                Início
              </a>
            </li>
            <li className="navItemRegister">
              <a href="#" className="navLinkRegister">
                Projetos
              </a>
            </li>
            <li className="navItemRegister">
              <a href="#" className="navLinkRegister">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default NavBarCadastro;
