import React from "react";
import "./Statistics.css";

function Social(props) {
  return (
    <>
      <div className="account">
        <span className="username">
          <i className={props.classe} style={{ color: props.iconColor }}></i>
          {props.conta}
        </span>
        <a href={props.linkar} target="_blank" id="link">
          {props.link}
        </a>
      </div>
    </>
  );
}

function Linguagem(props) {
  return (
    <>
      <span>{props.linguagem}</span>
      <div className="status">
        <div
          className="status-filled"
          style={{ height: "100%", width: props.qntd, background: props.cor }}
        ></div>
      </div>
      <span id="percentage">{props.porcentagem}</span>
    </>
  );
}

function Statistics() {
  const linguas = [
    {
      linguagem: "Python",
      quantidade: "50%",
      cor: "linear-gradient(to right, #7100b2 0%, #ee9b11 100%)",
    },
    {
      linguagem: "JavaScript",
      quantidade: "30%",
      cor: "linear-gradient(to right, #eaeaea 0%, #f9d503 100%)",
    },
    {
      linguagem: "PHP",
      quantidade: "10%",
      cor: "linear-gradient(to right, #eaeaea 0%, #1d1d1d 100%)",
    },
    {
      linguagem: "HTML",
      quantidade: "100%",
      cor: "linear-gradient(to right, #7100b2 0%, #2800b1 100%)",
    },
    {
      linguagem: "Java",
      quantidade: "45%",
      cor: "linear-gradient(to right, #eaeaea 0%, #ee9b11 100%)",
    },
  ];

  const contas = [
    {
      site: "GitHub",
      link: "Kay_bonjour",
      classe: "fa-brands fa-github",
      iconColor: "#1e1d1d",
      linkar: "https://www.github.com/kayblack",
    },
    {
      site: "Instagram",
      link: "@Kaybonjour",
      classe: "fa-brands fa-instagram",
      iconColor: "#ef0075",
      linkar: "https://www.instagram.com/realkayblack",
    },
    {
      site: "Twitter",
      link: "Kaybonjour",
      classe: "fa-brands fa-x-twitter",
      iconColor: "#1e1d1d",
      linkar: "https://www.x.com/Realkayblack1",
    },
    {
      site: "LinkedIn",
      link: "kabonjour943",
      classe: "fa-brands fa-linkedin",
      iconColor: "#086bc9",
      linkar: "https://www.linkedin.com/kayblack",
    },
  ];

  return (
    <div className="statistics">
      <h2>Ferramentas mais utilizadas</h2>
      {linguas.map((linguas) => (
        <Linguagem
          linguagem={linguas.linguagem}
          qntd={linguas.quantidade}
          porcentagem={linguas.quantidade}
          cor={linguas.cor}
        />
      ))}
      <div className="social-media">
        {contas.map((contas) => (
          <Social
            conta={contas.site}
            link={contas.link}
            classe={contas.classe}
            iconColor={contas.iconColor}
            linkar={contas.linkar}
          />
        ))}
      </div>
    </div>
  );
}

export default Statistics;