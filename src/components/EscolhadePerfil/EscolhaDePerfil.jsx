import "./EscolhaDePerfil.css";
import React from "react";
import iconeLinkedin from "./img/iconeLinkedin.png";
import iconeGitPreto from "./img/iconeGitPreto.png";
import iconeCaneta from "./img/iconeCaneta.png";

const EscolhaDePerfil = () => {
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
            Importar do Linkedin
          </button>
          <button>
            <img src={iconeGitPreto} alt="icon GitHub" />
            Importar do GitHub
          </button>
          <button>
            <img src={iconeCaneta} alt="icon Caneta" />
            Fazer manualmente
          </button>
        </div>
      </div>
      <div className="buttonContinueArea">
        <div className="Buttoncontinue">
        <button>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default EscolhaDePerfil;
