import React from "react";
import "./CargoEstudante.css";
import iconeSetaEsquerda from "./img/iconeSetaEsquerda.png";
import { useNavigate } from "react-router-dom";

const CargoEstudante = () => {

  const navegar = useNavigate();

  const handleCargo = () => {
    navegar('/cargo')
  }
  const handleBio = () => {
    navegar('/bio')
  }
  const handleBack = () => {
    navegar('profile-choice')
  }

  return (
    <section>
      <div className="PositionContainer">
        <div className="LayoutContainer">
          <div className="TitleContainer">
            <h1>
              Olá, usuário! finalize as informações para deixar seu perfil mais
              atraente!
            </h1>
          </div>
          <div className="SubtitleContainer">
            <p>Qual é a sua instituição de ensino?</p>
          </div>
          <div className="ContentContainer">
            Instituição de Ensino
            <div className="InputWrapper">
              <input
                type="text"
                placeholder="Informe onde você está estudando"
              />
            </div>
            Conclusão
            <div className="InputWrapper">
              <input
                type="text"
                placeholder="Quando você irá obter seu certificado?"
              />
            </div>
            <div className="StudentButtonWrapper">
              <button onClick={handleCargo}>
                <img src={iconeSetaEsquerda} alt="icon seta para esuqerdda" />
                Empregado <br />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="photoButton">
        <div className="BackButton">
          <button onClick={handleBack}>Voltar</button>
        </div>
        <div className="ContinueButton">
          <button onClick={handleBio}>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default CargoEstudante;
