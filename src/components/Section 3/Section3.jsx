import React from "react";
import "./Section3.css";

function Cards(props) {
  return (
    <div className="cartao">
      <img src={props.url} />
      <h2>{props.nome}</h2>
    </div>
  );
}

function Section3() {
  const membros = [
    { nome: "Felipe Barros", foto: "./public/profile-icon.png" },
    { nome: "Guilherme Antônio", foto: "./public/profile-icon-1.png" },
    { nome: "Luiz Guilherme", foto: "./public/profile-icon-2.png" },
    { nome: "Vinicius Mendes", foto: "./public/profile-icon-3.png" },
    { nome: "Beatriz Chagas", foto: "./public/profile-icon-4.png" },
    { nome: "Davi Ballestero", foto: "./public/profile-icon-5.png" },
    { nome: "Vitor Nascimento", foto: "./public/profile-icon-6.png" },
  ];

  return (
    <section className="section-three">
      <div className="liquify3">
        <img src="./public/liquify-section3.svg" />
      </div>

      <div className="membros">
        {membros.map((membros) => (
          <Cards nome={membros.nome} url={membros.foto} />
        ))}
      </div>

      <div className="lower-liquify3">
        <img src="./public/lower-liquify-section3.svg" />
      </div>
    </section>
  );
}

export default Section3;
