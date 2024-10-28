import React from "react";
import "./CargoEstudante.css";
import iconeSetaEsquerda from "./img/iconeSetaEsquerda.png";
const CargoEstudante = () => {
  return (
    <section>
      <div className="PositionContainer">
        <div className="LayoutContainer">
          <div className="TitleContainer">
            <h1>
            Olá, usuário! finalize as informações para deixar seu perfil mais atraente!
            </h1>
          </div>
          <div className="SubtitleContainer">
            <p>Qual é a sua instituição de ensino?</p>
          </div>
          <div className="ContentContainer">
            Instituição de Ensino
            <div className="InputWrapper">
              <input type="text" placeholder="Informe onde você está estudando" />
            </div>
            Conclusão
            <div className="InputWrapper">
              <input
                type="text"
                placeholder="Quando você irá obter seu certificado?"
              />
            </div>
            <div className="StudentButtonWrapper">
              <button>
              <img src={iconeSetaEsquerda} alt="icon seta para esuqerdda" />
                Empregado <br /> 
                
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="photoButton">
        <div className="BackButton">
          <button>Voltar</button>
        </div>
        <div className="ContinueButton">
            <button>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default CargoEstudante;
