import React from "react";
import "./Cargo.css";
import iconeSeta from "./img/iconeSeta.png";

const Cargo = () => {
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
            </div>
            Localização
            <div className="inputPosition">
              <input
                type="text"
                placeholder="Digite qual é a localização da empresa"
              />
            </div>
            <div className="doubleInput">
              <div className="inputProhibited">
                <p>Entrada</p>
                <div>
                  {" "}
                  <input type="date" placeholder="Ano de entrada" />
                </div>
              </div>
              <div>
                <p>Saída</p>
                <input type="date" placeholder="Ano de saída" />
                <div className="inputExit"></div>
              </div>
            </div>
            <div className="buttonStudent">
              <button>
                Estudante <br /> <img src={iconeSeta} alt="icone seta" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonsMoving">
        <div id="buttonBack">
          <button>Voltar</button>
        </div>
        <div id="buttonContinue">
          <button>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default Cargo;
