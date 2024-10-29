import React from "react";
import "./cadastro.css";
import iconeGitPreto from "./img/iconeGitPreto.png";
import iconeGoogle from "./img/iconeGoogle.png";
import iconeLinkedin from "./img/iconeLinkedin.png";
import Vetor from "./img/vetor.png";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navegar = useNavigate();

  const handleProfileChoice = () => {
    navegar("/profile-choice");
  };
  const handlePremium = () => {
    navegar("/premium");
  };

  return (
    <section className="RegisterPage">
      <div className="layout">
        <div className="fieldInformations">
          <div className="titleInf">
            <h2>Seja muito bem vindo!</h2>
          </div>
          <div className="informations">
            <div className="nameAnSurname">
              <input type="text" placeholder="Primeiro nome" />
              <input type="text" placeholder="Sobrenome" />
            </div>
            <div className="outerInf">
              <input type="email" placeholder="Endereço de e-mail" />
              <input type="text" placeholder="CPF" />
              <input type="text" placeholder="Data de nascimento" />
              <input type="password" placeholder="Senha" />
            </div>
            <div className="checkbox">
              <input type="checkbox" name="terms" id="termsUse" />{" "}
              <p>Eu concordo com os termos de uso do usuário</p>
            </div>
            <div className="register">
              <button onClick={handleProfileChoice}>Cadastrar-se</button>
            </div>
            <div className="social-buttons">
              <button onClick={handlePremium}>
                Entrar com GitHub
                <div className="gitImg">
                  <img src={iconeGitPreto} alt="icon GitHub" />
                </div>
              </button>
              <button onClick={handlePremium}>
                Entrar com Google
                <div className="imgGoogle">
                  <img src={iconeGoogle} alt="icon Google" />
                </div>
              </button>
              <button onClick={handlePremium}>
                {" "}
                <div className="imgLinkedin">
                  Entrar com LinkedIn
                  <img src={iconeLinkedin} alt="icon linkedin" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="svgLogo">
          <img src={Vetor} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
