import styles from "./EscolhaDePerfil.module.css";
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
    <section className={styles.layoutchoice}>
      <div className={styles.contents}>
        <div className={styles.titleChoice}>
          <h1>
            Antes de continuar, precisamos saber de algumas informações suas,
            como quer mostrar elas?
          </h1>
        </div>
        <div className={styles.paragraphChoice}>
          <p>Para fornecer as melhores propostas, é vital te conhecermos.</p>
        </div>
        <div className={styles.choices}>
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
      <div className={styles.buttonContinueArea}>
        <div className={styles.Buttoncontinue}>
          <button onClick={handleCargo}>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default EscolhaDePerfil;
