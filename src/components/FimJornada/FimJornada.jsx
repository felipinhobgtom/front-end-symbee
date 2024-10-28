import "./FimJornada.css"
import LogoEnd from "./img/logoEnd.png"

import React from 'react'

const FimJornada = () => {
  return (
    <section className="EndPage">
        <div className="contentsEnd">
            <h1 className="titleEnd">O seu perfil está pronto, usuário!</h1>
            <div className="img"><img src={LogoEnd} alt="" /></div>
            <div className="txtEnd"><p>A SymBee agradece pela sua confiança, e por escolher o nosso site. Aproveite nossos recursos!</p></div>
            <div className="buttonEnd">
                <button>Finalizar</button>
            </div>
        </div>
    </section>
  )
}

export default FimJornada