import React from "react";
import Vetor from "./img/vetor.png";
import "./login.css";

const Login = () => {
  return (
    <section className="LoginPage">
      <div className="layout">
        <div className="fieldInformations">
          <div className="titleInf">
            <h2> Bem-vindo de volta!</h2>
          </div>
          <div className="informations">
            <div className="outerInf">
              <input type="email" placeholder="Endereço de Email " />
              <input type="password" placeholder="Senha" />
            </div>
            <div className="checkbox">
              <input type="checkbox" name="terms" id="remember" />
              <p>Lembrar dessas informações?</p>
            </div>
            <div
              className="register">
              <button>Entrar</button>
            </div>
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
