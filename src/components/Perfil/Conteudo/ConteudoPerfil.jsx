import React from "react";
import Bee from "../MenuLateral/assets/Bee";
import Statistics from "../Estatística/Statistics";
import "./ConteudoPerfil.css";

const ConteudoPerfil = () => {
  return (
    <div className="ContentsProfileUnique">
      {/* ---------/--------- */}
      <div className="layoutProfileUnique">
        {/* ---------/--------- */}
        <div className="UserThings">
          <h1>Olá, Kay!</h1>
          <div className="exp">
            <div className="ExprerienceUser">
              <div className="UserProgressBar">
                <div className="ProgressBarpercentage"></div>
              </div>
            </div>
            <div className="level">
              <div className="levelCamp">
                <span>Nível 37</span>
              </div>
            </div>
            <div className="count">
              <p id="numbers">
                <strong>Experiência:</strong> 5360/8000
              </p>
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
                <i className="fa fa-star" aria-hidden="true"></i>
                <p id="numberStar">5</p>
              </div>
            </div>
          </div>
          {/* ---------/--------- */}
          <div className="ComentsUserProfile">
            <h2>Comentários</h2>
            <div className="userFriends">
              <Bee stroke="#7100B2" />{" "}
              <div className="users">
                <p id="nameuser">KyanMaloca</p>
                <p id="decorationUser">.</p>
                <p id="userDialogue">Me tira uma dúvida?</p>
              </div>
            </div>
            <div className="userFriends">
              <Bee stroke="#3D1B11" />{" "}
              <div className="users">
                <p id="nameuser">CactusJack</p>
                <p id="decorationUser">.</p>
                <p id="userDialogue">Seus projetos são incriveis!</p>
              </div>
            </div>
            <div className="userFriends">
              <Bee stroke="#EE9B11" />{" "}
              <div className="users">
                <p id="nameuser">Takeshi_SixNine</p>
                <p id="decorationUser">.</p>
                <p id="userDialogue">muito bom!</p>
              </div>
            </div>
          </div>
          {/* ---------/--------- */}
        </div>
        <Statistics />
        <div className="projects">
          <h1>Projetos</h1>
          <div className="project">
            <div className="nameAndCondition">
              <div>
                <h2>Byfron</h2>
              </div>
              <div>
                <p>Public</p>
              </div>
            </div>
            <div className="TimeAndStars">
              <div>
                <p>há 4 dias</p>
              </div>
              <div className="layoutStars">
                <i className="fa fa-star" aria-hidden="true"></i>{" "}
                <p id="numberRating">4.5</p> <p>rating</p>{" "}
              </div>
            </div>
          </div>
          <div className="project">
            <div className="nameAndCondition">
              <div>
                <h2>RC7</h2>
              </div>
              <div>
                <p>Public</p>
              </div>
            </div>
            <div className="TimeAndStars">
              <div>
                <p>há 2 semanas</p>
              </div>
              <div className="layoutStars">
                <i className="fa fa-star" aria-hidden="true"></i>{" "}
                <p id="numberRating">5</p> <p>rating</p>{" "}
              </div>
            </div>
          </div>
          <div className="project">
            <div className="nameAndCondition">
              <div>
                <h2>Synapse</h2>
              </div>
              <div>
                <p>Public</p>
              </div>
            </div>
            <div className="TimeAndStars">
              <div>
                <p>há 2 semanas</p>
              </div>
              <div className="layoutStars">
                <i className="fa fa-star" aria-hidden="true"></i>{" "}
                <p id="numberRating">3.8</p> <p>rating</p>{" "}
              </div>
            </div>
          </div>
          <div className="project">
            <div className="nameAndCondition">
              <div>
                <h2>Scriptware</h2>
              </div>
              <div>
                <p>Public</p>
              </div>
            </div>
            <div className="TimeAndStars">
              <div>
                <p>há 4 meses</p>
              </div>
              <div className="layoutStars">
                <i className="fa fa-star" aria-hidden="true"></i>{" "}
                <p id="numberRating">2</p> <p>rating</p>{" "}
              </div>
            </div>
          </div>
          <div className="project">
            <div className="nameAndCondition">
              <div>
                <h2>ProtoSma..</h2>
              </div>
              <div>
                <p>Public</p>
              </div>
            </div>
            <div className="TimeAndStars">
              <div>
                <p>há 1 ano</p>
              </div>
              <div className="layoutStars">
                <i className="fa fa-star" aria-hidden="true"></i>{" "}
                <p id="numberRating">0</p> <p>rating</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConteudoPerfil;
