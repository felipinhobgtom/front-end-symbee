import React from "react";
import Bee from "../assets/Bee";
import "./Num.css";

function Num(props) {
  return (
    <div className="numberRanking">
      <div className="colocacao" style={{background: props.bg, color: props.color}}>{props.colocacao}</div>
      <div id="dot">
        <i class="fa-solid fa-circle" style={{ color: props.dotColor }}></i>
      </div>
      <div>
        <Bee stroke={props.stroke} />
      </div>
      <div>
        <p>{props.nome}</p>
      </div>
    </div>
  );
}

export default Num;
