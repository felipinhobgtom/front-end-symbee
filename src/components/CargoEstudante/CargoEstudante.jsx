import React from "react";
import styles from "./CargoEstudante.module.css";
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
      <div className={styles.PositionContainer}>
        <div className={styles.LayoutContainer}>
          <div className={styles.TitleContainer}>
            <h1>
              Olá, usuário! finalize as informações para deixar seu perfil mais
              atraente!
            </h1>
          </div>
          <div className={styles.SubtitleContainer}>
            <p>Qual é a sua instituição de ensino?</p>
          </div>
          <div className={styles.ContentContainer}>
            Instituição de Ensino
            <div className={styles.InputWrapper}>
              <input
                type="text"
                placeholder="Informe onde você está estudando"
              />
            </div>
            Conclusão
            <div className={styles.InputWrapper}>
              <input
                type="text"
                placeholder="Quando você irá obter seu certificado?"
              />
            </div>
            <div className={styles.buttonEmpregado}>
              <button onClick={handleCargo}>
                <img src={iconeSetaEsquerda} alt="icon seta para esuqerdda" />
                Empregado <br />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.moveButtons}>
        <div className={styles.BackButton}>
          <button onClick={handleBack}>Voltar</button>
        </div>
        <div className={styles.ContinueButton}>
          <button onClick={handleBio}>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default CargoEstudante;
