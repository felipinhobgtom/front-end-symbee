import "./Ranking.css";
import Bee from "./assets/Bee";

import React from "react";

const Ranking = () => {
  return (
    <section className="ranking">
      <div className="layoutRanking">
        <div className="titleRanking">
          <h1>Ranking Mensal</h1>
        </div>
        <div className="numberRanking">
          <div>1</div>
          <div>
            <p>.</p>
          </div>
          <div>
            <Bee />
          </div>
          <div>
            <p>Kay_bonjour</p>
          </div>
        </div>
        <div className="numberRanking">
          <div>2</div>
          <div>
            <p>.</p>
          </div>
          <div>
            <Bee />
          </div>
          <div>
            <p>Kay_bonjour</p>
          </div>
        </div>
        <div className="numberRanking">
          <div>3</div>
          <div>
            <p>.</p>
          </div>
          <div>
            <Bee />
          </div>
          <div>
            <p>Kay_bonjour</p>
          </div>
        </div>
        <div className="numberRanking">
          <div>4</div>
          <div>
            <p>.</p>
          </div>
          <div>
            <Bee />
          </div>
          <div>
            <p>Kay_bonjour</p>
          </div>
        </div>
        <div className="numberRanking">
          <div>5</div>
          <div>
            <p>.</p>
          </div>
          <div>
            <Bee />
          </div>
          <div>
            <p>Kay_bonjour</p>
          </div>
        </div>
        <div className="buttonRanking"></div>
      </div>
    </section>
  );
};

export default Ranking;
