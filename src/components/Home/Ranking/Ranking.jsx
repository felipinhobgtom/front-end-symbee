import Num from "./Num";
import "./Ranking.css";
import React from "react";

const Ranking = () => {
  return (
    <section className="ranking">
      <div className="layoutRanking">
        <h1 className="titleRanking">Ranking Mensal</h1>
        <div className="users-ranking">
          <Num
            nome="Kay_bonjour"
            colocacao="1"
            stroke="#EE9B11"
            dotColor="#EE9B11"
          />
          <Num
            nome="KyanMaloca"
            colocacao="2"
            stroke="#7100B2"
            dotColor="#7100B2"
          />
          <Num
            nome="takeshi_SixNine"
            colocacao="3"
            stroke="#3D1B11"
            dotColor="#3D1B11"
          />
          <Num nome="CactusJack" colocacao="4" stroke="#1E1D1D" />
          <Num nome="MuuhPro" colocacao="5" stroke="#1E1D1D" />
        </div>
        <div className="see-all">
          <span>Ver todos</span>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
