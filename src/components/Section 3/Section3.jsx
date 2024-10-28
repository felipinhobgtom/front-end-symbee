import React from "react";
import "./Section3.css";

function Cards(props) {
  return (
    <div className="cartao">
      <img src={props.url} />
      <h2>{props.nome}</h2>
      <span>{props.funcao}</span>
    </div>
  );
}

function Section3() {
  const membros = [
    {
      nome: "Felipe Barros",
      foto: "./public/profile-icon.png",
      funcao: "Front-End",
    },
    {
      nome: "Guilherme Antônio",
      foto: "./public/profile-icon-1.png",
      funcao: "Front-End",
    },
    {
      nome: "Luiz Guilherme",
      foto: "./public/profile-icon-2.png",
      funcao: "Front-End",
    },
    {
      nome: "Vinicius Mendes",
      foto: "./public/profile-icon-3.png",
      funcao: "Scrum Master",
    },
    {
      nome: "Beatriz Chagas",
      foto: "./public/profile-icon-4.png",
      funcao: "Database",
    },
    {
      nome: "Davi Ballestero",
      foto: "./public/profile-icon-5.png",
      funcao: "P.O",
    },
    {
      nome: "Vitor Nascimento",
      foto: "./public/profile-icon-6.png",
      funcao: "Back-End",
    },
  ];

  return (
    <section className="section-three">
      <div className="liquify3">
        <img src="./public/liquify-section3.svg" />
      </div>
      <div className="the-group">
        <h1>
          <strong>Quem somos nós?</strong>
        </h1>
        <div className="membros">
          {membros.map((membros) => (
            <Cards
              nome={membros.nome}
              url={membros.foto}
              funcao={membros.funcao}
            />
          ))}
        </div>
      </div>
      <img
        src="./public/lower-liquify-section3.svg"
        id="lower-liquify3"
      />
    </section>
  );
}

export default Section3;
