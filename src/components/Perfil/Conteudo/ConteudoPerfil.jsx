import React from "react";
import Bee from "../MenuLateral/assets/Bee";
import "./ConteudoPerfil.css";

const ConteudoPerfil = () => {
  return (
    <div className="ContentsProfileUnique">
      {/* ---------/--------- */}
      <div className="layoutProfileUnique">
        {/* ---------/--------- */}
        <div className="UserThings">
          <h1>Olá, Kay!</h1>
          <div className="ExprerienceUser">
            <div className="UserProgressBar">
              <div className="ProgressBarpercentage"></div>
            </div>
          </div>
          <div className="level">
            <div className="levelCamp">
              <span>nível 37</span>
            </div>
            <div className="count">
              <p>experiência:</p>
              <p id="numbers">5360/8000</p>
            </div>
          </div>
          {/* ---------/--------- */}
          <div className="skills">
            <div className="titleSkills">
              <h2>Projetos</h2>
              <div className="numberSkills">
                <h3>321</h3>
              </div>
            </div>
            <div className="titleSkills">
              <h2>Conquistas</h2>
              <div className="numberSkills">
                <h3>5</h3>
              </div>
            </div>
            <div className="titleSkills">
              <h2>Skills</h2>
              <div className="numberSkills">
                <h3>18</h3>
              </div>
            </div>
          </div>
          {/* ---------/--------- */}
          <div className="Classification">
            <div className="ClassificationTitle">
              <h2>Classificação</h2>
              <div className="stars">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i> <p>5</p>
              </div>
            </div>
          </div>
          {/* ---------/--------- */}
          <div className="ComentsUserProfile">
            <h2>Comentários</h2>
            <div className="userFriends">
              <Bee stroke="purple" />{" "}
              <div className="users">
                <p id="nameuser">KyanMaloca</p>
                <p id="decorationUser">.</p>
                <p id="userDialogue">Esse cara é brabo demais!</p>
              </div>
            </div>
            {/* ---------/--------- */}
          </div>
        </div>
        <div>
          <h1>GRAFICOS</h1>
        </div>
        <div>
          <h1>PROJETOS</h1>
        </div>
      </div>
    </div>
  );
};

export default ConteudoPerfil;
