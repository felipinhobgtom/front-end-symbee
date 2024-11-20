import React from "react";
import styles from "./SobreNos.module.css";
import Footer from "../footer/Footer";

function Card(props) {
  return (
    <>
      <div className={styles.memberAndFunction}>
        <div className={styles.member}>
          <div className={styles.imgAndName}>
            <img src={props.img} alt={`${props.name} foto`} />
            <h2>{props.name}</h2>
          </div>
        </div>
        <div className={styles.function}>
          <h2>{props.function}</h2>
        </div>
      </div>
    </>
  );
}

const SobreNos = () => {
  const funcoes = [
    {
      name: "Felipe Barros",
      img: "./public/profile-icon.png",
      function: "UI/UX, Front-End,  Designer",
    },
    {
      name: "Beatriz Chagas",
      img: "./public/profile-icon-4.png",
      function: "Database,  Back-End",
    },

    {
      name: "luiz Miguel",
      img: "./public/profile-icon-2.png",
      function: "Full-stack, Social Media",
    },
    {
      name: "Davi ballestero",
      img: "./public/profile-icon-5.png",
      function: ["Product Owner, Back-End, DevOps"],
    },
    {
      name: "Vitor Nascimento",
      img: "./public/profile-icon-6.png",
      function: "Back-End, AI Developer",
    },

    {
      name: "vinius Mendes",
      img: "./public/profile-icon-3.png",
      function: "Scrum Master, Front-End",
    },
    {
      name: "Guilherme Cruz",
      img: "./public/profile-icon-1.png",
      function: "Front-End, Financeiro, Social Media",
    },
  ];

  return (
    <>
    <section className={styles.sectionAboutUs}>
      <div className={styles.layoutAboutUs}>
        <div className={styles.titleAboutUs}>
          <h1>Conheça os desenvolvedores da</h1>
          <h1 id={styles.orangeSymbee}>SymBee!</h1>
        </div>
        <div className={styles.TeamAboutUs}>
          {funcoes.map((funcoes) => (
            <Card
              name={funcoes.name}
              img={funcoes.img}
              function={funcoes.function}
            />
          ))}
        </div>

        <svg
          width="852"
          height="8"
          viewBox="0 0 852 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.42578 4.2002L847.575 4.2002"
            stroke="black"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
      
      <div className={styles.MVV}>
        <div className={styles.conteudo}>
          <h2>Missão</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Cursus fringilla consequat pulvinar eget vivamus. Sit nec vitae amet orci ultrices porta. Rhoncus commodo nunc orci ut. Aliquam semper fusce tellus et semper. Porta viverra in at justo nunc lacus diam. Fames adipiscing diam consequat vitae. Mauris ac convallis lectus dolor et enim sit diam condimentum.
          Orci erat suspendisse.
          </p>
        </div>
        <div className={styles.conteudo}>
        <h2>Visão</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Cursus fringilla consequat pulvinar eget vivamus. Sit nec vitae amet orci ultrices porta. Rhoncus commodo nunc orci ut. Aliquam semper fusce tellus et semper. Porta viverra in at justo nunc lacus diam. Fames adipiscing diam consequat vitae. Mauris ac convallis lectus dolor et enim sit diam condimentum.
          Orci erat suspendisse.
            </p>
        </div>
        <div className={styles.conteudo}>
        <h2>Valores</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Cursus fringilla consequat pulvinar eget vivamus. Sit nec vitae amet orci ultrices porta. Rhoncus commodo nunc orci ut. Aliquam semper fusce tellus et semper. Porta viverra in at justo nunc lacus diam. Fames adipiscing diam consequat vitae. Mauris ac convallis lectus dolor et enim sit diam condimentum.
          Orci erat suspendisse.
            </p>
        </div>
      </div>
      </div>
      <Footer symbee={{color:"black"}} footer={{backgroundImage:"none"}} links={{color: "black"}} icones={{backgroundColor: "rgba(0,0,0,0.5)",}} stroke="black"/>
    </section>
   
    </>
  );
};

export default SobreNos;
