import "./Footer.css";
import FooterLogo from "/img/FooterLogo.png";
import React from "react";
import iconeGit from "/img/iconeGit.png"
import iconeInsta from "/img/iconeInsta.png";
import iconeZap from "/img/iconeZap.png";

const Footer = () => {
  return (
    <footer  className="footer">
      
      <div className="FooterLogo">
        <div className="logoFooterImg">
          <img src={FooterLogo} alt="Logo Footer" />
        </div>
        <div className="Point">
          <p>.</p>
        </div>
        <div className="FooterSymbee">
          <h3>Symbee</h3>
        </div>
      </div>
      <div className="icons">
        <div className="iconsSocialNetworks">
          <div>
            <img src={iconeInsta} alt="icone Instagram Footer" />
          </div>
          <div>
            <img src={iconeGit} alt="icone GitHub Footer" />
          </div>
          <div>
            <img src={iconeZap} alt="icone WhatsApp Footer" />
          </div>
        </div>
      </div>
      <div className="FooterContents">
        <div className="geral">
          <h4>Geral</h4>
          <div className="GeralLinks">
            <a href="#">Cadastre-se</a>
            <a href="#">Central</a>
            <a href="#">Sobre</a>
            <a href="#">Imprensa</a>
            <a href="#">Blog</a>
            <a href="#">Carreiras</a>
            <a href="#">Developers</a>
          </div>
        </div>
        <div className="symbeeContentFooter">
          <h4>SymBee</h4>
          <div className="symbeeContentFooterLinks">
            <a href="#">Learning</a>
            <a href="#">Vagas</a>
            <a href="#">Jogos</a>
            <a href="#">Salário</a>
            <a href="#">Mobile</a>
            <a href="#">Serviços</a>
            <a href="#">Soluções</a>
          </div>
        </div>
        <div className="business">
          <h4>Business</h4>
          <div className="BusinessLinks">
            <a href="#">Talentos</a>
            <a href="#">Marketing</a>
            <a href="#">Vendas</a>
            <a href="#">Learning</a>
          </div>
        </div>
        <div className="Diretorio">
          <h4>Diretório</h4>
          <div className="DiretorioLinks">
            <a href="#">Usuários</a>
            <a href="#">Vagas</a>
            <a href="#">Empresas</a>
            <a href="#">Em destaque</a>
            <a href="#">Publicações</a>
            <a href="#">Antigos</a>
            <a href="#">Notícias</a>
            <a href="#">Newsletters</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
