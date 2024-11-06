import "./FimJornada.css"
import LogoEnd from "./img/logoEnd.png"
import { useNavigate } from "react-router-dom";
import React from 'react'

const FimJornada = () => {
  const navegarParaHome = useNavigate();

  const handleEnd = () => {
    navegarParaHome("/Ranking");
  };
  return (
    <section className="EndPage">
        <div className="contentsEnd">
            <h1 className="titleEnd">O seu perfil está pronto, usuário!</h1>
            <div className="img"><img src={LogoEnd} alt="" /></div>
            <div className="txtEnd"><p>A SymBee agradece pela sua confiança, e por escolher o nosso site. Aproveite nossos recursos!</p></div>
            <div className="buttonEnd">
                <button onClick={handleEnd}>Finalizar</button>
            </div>
        </div>
    </section>
  )
}

export default FimJornada