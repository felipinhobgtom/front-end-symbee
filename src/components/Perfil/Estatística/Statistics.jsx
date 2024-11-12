import React from "react";
import "./Statistics.css";

function Social (props){
  return(
    <>
    <div className="account">
      <span className="username"><i className={props.classe}></i>{props.conta}</span>
      <span>{props.link}</span>
    </div>
    </>
  )
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
    { linguagem: "Python", quantidade: "50%", cor: '#f9d504' },
    { linguagem: "JavaScript", quantidade: "30%", cor: '#ee9b11' },
    { linguagem: "PHP", quantidade: "10%", cor: '#7100B2' },
   
    { linguagem: "HTML", quantidade: "100%", cor: '#3D1B11' },

    { linguagem: "Java", quantidade: "45%", cor: '#f9d504' },
  ];

  const contas = [
    { site: "GitHub", link:"Kay_bonjour", classe:"fa-brands fa-github" }, 
    { site: "Instagram", link:"@Kaybonjour", classe:"fa-brands fa-instagram"},
    { site: "Twitter", link:"Kaybonjour", classe:"fa-brands fa-x-twitter"},
  ]

  return (
    <div className="statistics">
      <h2>Linguagens mais utilizadas</h2>
      {linguas.map((linguas) => (
        <Linguagem
          linguagem={linguas.linguagem}
          qntd={linguas.quantidade}
          porcentagem={linguas.quantidade}
          cor={linguas.cor}
        />
      ))}
      <div className="social-media">
          {contas.map((contas) => <Social conta={contas.site} link={contas.link} classe ={contas.classe} />)}
      </div>
    </div>
  );
}

export default Statistics;
