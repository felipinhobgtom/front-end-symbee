import "./EscolhaDePerfil.css";
import React from "react";
import iconeLinkedin from "./img/iconeLinkedin.png";
import iconeGitPreto from "./img/iconeGitPreto.png";
import iconeCaneta from "./img/iconeCaneta.png";
import { useNavigate } from "react-router-dom";

const EscolhaDePerfil = () => {
  const navegar = useNavigate();
  const handleCargo = () => {
    navegar("/cargo");
  };

  return (
    <section className="layoutchoice">
      <div className="contents">
        <div className="titleChoice">
          <h1>
            Antes de continuar, precisamos saber de algumas informações suas,
            como quer mostrar elas?
          </h1>
        </div>
        <div className="paragraphChoice">
          <p>Para fornecer as melhores propostas, é vital te conhecermos.</p>
        </div>
        <div className="choices">
          <button>
            <img src={iconeLinkedin} alt="icon Linkedin" />
            <p>Importar do Linkedin</p>
          </button>
          <button>
            <img src={iconeGitPreto} alt="icon GitHub" />
            <p>Importar do GitHub</p>
          </button>
          <button>
            <img src={iconeCaneta} alt="icon Caneta" />
            <p>Fazer manualmente</p>
          </button>
        </div>
      </div>
      <div className="buttonContinueArea">
        <div className="Buttoncontinue">
          <button onClick={handleCargo}>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default EscolhaDePerfil;
