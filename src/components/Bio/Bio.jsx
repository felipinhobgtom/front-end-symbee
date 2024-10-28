import "./Bio.css";
import React, { useState } from "react";
const Bio = () => {
  const [bioText, setBioText] = useState("");
  const maxLength = 500;

  return (
    <section>
      <div className="PositionContainer">
        <div className="LayoutContainer">
          <div className="TitleContainer">
            <h1>Nos fale um pouco sobre você</h1>
          </div>
          <div className="Biograph">
            <p>Biográfia</p>
            <div className="BioContainer">
              <textarea
                id="bioTextarea"
                className="BioTextarea"
                placeholder="Escreva sua biografia..."
                maxLength={maxLength}
                value={bioText}
                onChange={(e) => setBioText(e.target.value)}
              />
              <span className="CharCount">
                {bioText.length}/{maxLength}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ButtonContainer">
        <div className="BackButton">
          <button>Voltar</button>
        </div>
        <div className="Jump">
          <button>Pular</button>
        </div>
        <div className="ContinueButton">
          <button>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default Bio;
