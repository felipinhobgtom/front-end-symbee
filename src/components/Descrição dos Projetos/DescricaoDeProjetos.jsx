import React from "react";
import Devance from "./Assets/Devance";
import BeeProjects from "./Assets/BeeProjects";
import styles from "./DescricaoDeProjetos.module.css";

const DescricaoDeProjetos = () => {
  return (
    <main>
      <section className={styles.ectionDescriptionProjects}>
        {/* --------//----------- */}

        <div className={styles.principalProject}>
          <div className={styles.perfil}>
            <div className={styles.img}>
              <img
                src="https://i.imgur.com/8Q8u6QF.png"
                alt="Imagem do perfil do usuário"
              />
              <h2>Te Vejoo</h2>
            </div>
            <p>Prazo: 5 Dias</p>
            <p>Publicado há: 10 minutos</p>
          </div>
          <div className={styles.informations}>
            <h1>Página de Captura de Leads para Campanha Publicitária </h1>
            <h2>Requisitos</h2>
            <div className={styles.ilustrations}>
              <Devance />
              <p>intermediário</p>
            </div>
            <div className={styles.ilustrations}>
              <BeeProjects />
              <p>nivel 3</p>
            </div>
          </div>
          <div className={styles.assets}>
            <div className={styles.closePage}>X</div>
            <div className={styles.moneyAnHoney}>
              <div className={styles.money}>
                <p>R$60/h</p>
              </div>
              <div className={styles.honey}>
                <p>500XP</p>
              </div>
              <button>Aceitar</button>
              <div className={styles.icons}></div>
            </div>
          </div>
        </div>
        {/* --------//----------- */}
        <div className={styles.descriptionContainer}></div>
        div
        {/* --------//----------- */}
        <div className={styles.imagesProjects}></div>
      </section>
    </main>
  );
};

export default DescricaoDeProjetos;
