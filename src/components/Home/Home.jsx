import React from "react";
import "./Home.css";
import Bee from "./assets/Bee";
import Google from "./assets/Google";
import Microsoft from "./assets/Microsoft";
import AWS from "./assets/AWS";
import { ProgressBar } from "react-bootstrap";

function Home() {
  return (
    <section className="home-page">
      <div className="left-side">
        <h2 className="acquire-premium text-blue-800">Adquira o premium!</h2>
        <a
          name=""
          className="hierarchy shadow-inner  bg-blue-800"
          href="#"
          role="button"
        >
          <span>Suba na hierarquia!</span>
        </a>
        <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div className="profile">
          <div className="profile-picture">
            <Bee />
          </div>
          <div className="profile-info">
            <span id="nickname">Kay_bonjour</span>
            <div className="level-box">
              <span id="nivel">Nível 30</span>
            </div>
            <div className="progress-bar">
              <div className="progress-filled"></div>
            </div>
            <p id="exp">
              Experience:{" "}
              <span style={{ color: "#7100B2", fontWeight: "700" }}>
                5360/8000
              </span>
            </p>
          </div>
        </div>
        <div className="statistics">
          <div className="dados">
            <div className="cartao">
              <h2>Projetos</h2>
              <h3>21</h3>
            </div>
            <div className="cartao">
              <h2>Conquistas</h2>
              <h3>119</h3>
            </div>
            <div className="cartao">
              <h2>Skills</h2>
              <h3>38</h3>
            </div>
          </div>
          <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <a
          name=""
          className="hierarchy2 shadow-inner bg-yellow-400"
          href="#"
          role="button"
        >
          <span>
            <i class="fa-solid fa-magnifying-glass"></i> Busque projetos com a
            Bee!
          </span>
        </a>
        <div className="user-description">
          <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          <h2>Descrição do perfil</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            aliquam ad quibusdam! Earum assumenda corrupti ab alias quo saepe
            accusamus nulla quaerat deleniti aliquid cupiditate eius, doloribus
            placeat dolor qui?
          </p>
          <ProgressBar now={60} variant="info" />
          <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="business-related">
          <h2>Empresas associadas</h2>
          <div className="empresas">
            <div className="google empresa">
              <Google />
              <span>Google</span>
            </div>
            <div className="microsoft empresa">
              <Microsoft />
              <span>Microsoft</span>
            </div>
            <div className="oracle empresa">
              <AWS />
              <span>AWS</span>
            </div>
          </div>
        </div>
        <div className="edit-profile">
        <a
          name=""
          className="hierarchy3 shadow-inner"
          href="#"
          role="button"
        >
          <span>
          Editar perfil <i className="fa-solid fa-pencil"></i>
          </span>
        </a>
        </div>
      </div>

      <div className="feed"></div>

      <div className="ranking"></div>
    </section>
  );
}

export default Home;
