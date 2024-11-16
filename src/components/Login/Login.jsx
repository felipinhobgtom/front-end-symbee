import React from "react";
import Vetor from "./img/vetor.png";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navegar = useNavigate();

  const handleProfileChoice = () => {
    navegar("/profile-choice");
  };

  return (
    <section className="LoginPage">
      <div className="layout">
        <div className="fieldInformations">
          <div className="titleInf">
            <h2>Bem-vindo de volta!</h2>
          </div>
          <div className="outerInf">
            <input type="email" placeholder="Endereço de Email " />
            <input type="password" placeholder="Senha" />
          </div>
          <div className="checkbox">
            <input type="checkbox" name="terms" id="remember" />
            <p>Lembrar dessas informações?</p>
          </div>
          <div className="entrar">
            <button onClick={handleProfileChoice}>Entrar</button>
          </div>
        </div>
        <div className="LogoSvg">
          <img src={Vetor} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Login;
