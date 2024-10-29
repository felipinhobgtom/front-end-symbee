import React from "react";
import "./Cargo.css";
import iconeSeta from "./img/iconeSeta.png";
import { useNavigate } from "react-router-dom";

const Cargo = () => {

  const navegar = useNavigate()
  const handleEstudante = () => {
    navegar('/estudante')
  }
  const handleBio = () => {
    navegar('/bio')
  }
  const handleBack = () => {
    navegar('/profile-choice')
  }

  return (
    <section>
      <div className="Position">
        <div className="layoutPosition">
          <div className="TitlePosition">
            <h1>
              Olá, usuário! finalize as informações para deixar seu perfil mais
              atraente!
            </h1>
          </div>
          <div className="paragraphPosition">
            <p>Qual o seu cargo mais recente?</p>
          </div>
          <div className="contents">
            Empresa
            <div className="inputPosition">
              <input type="text" placeholder="Digite o cargo da empresa" />
            </div>{" "}
            <p></p>
            Localização
            <div className="inputPosition">
              <input
                type="text"
                placeholder="Digite qual é a localização da empresa"
              />
            </div>
            <div className="doubleInput">
              <div className="inputProhibited" style={{ minWidth: "45%" }}>
                <p>Entrada</p>
                <div id="entrada">
                  {" "}
                  <input type="date" placeholder="Ano de entrada" />
                </div>
              </div>
              <div style={{ minWidth: "45%" }}>
                <p>Saída</p>
                <input type="date" placeholder="Ano de saída" />
                <div className="inputExit"></div>
              </div>
            </div>
            <div className="buttonStudent">
              <button onClick={handleEstudante}>
                Estudante <img src={iconeSeta} alt="icone seta" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonsMoving">
        <div id="buttonBack">
          <button onClick={handleBack}>Voltar</button>
        </div>
        <div id="buttonContinue">
          <button onClick={handleBio}>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default Cargo;
