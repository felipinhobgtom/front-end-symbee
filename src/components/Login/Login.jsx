import React from "react";
import "./login.css";



const       Login = () => {
  return (
    <section className="LoginPage">
      <div className="layout">
      <div className="fieldInformations">
        <div className="titleInf">
          <h2> bem-vindo de volta!</h2>
        </div>
        <div className="informations">
          <div className="outerInf">
            <input type="email" placeholder="Endereço de Email " />
            <input type="password" placeholder="Senha" />
          </div>
          <div className="checkbox">
            <input type="checkbox" name="terms" id="remember" />
            Lembrar dessas informações?
          </div>
          <div
            className="
register"
          >
            <button>Entrar</button>
          </div>
        </div>
      </div>
      <div className="svgLogo">.</div>
      </div>
    </section>
  );
};

export default Login;