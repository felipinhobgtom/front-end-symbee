import React from "react";
import "./Home.css";

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
          <div className="profile-picture"></div>
          <div className="profile-info">
            <span id="nickname">Kay_bonjour</span>
            <span id="nivel">Nível 30</span>
            <div className="progress-bar"></div>
            <p id="exp">
              Experience: <span>5360/8000</span>
            </p>
          </div>
        </div>
        <div className="statistics">
          <h2>Projetos</h2>
          <h2>Conquistas</h2>
          <h2>Skills</h2>
          <h3>21</h3>
          <h3>119</h3>
          <h3>38</h3>
          <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Busque projetos com a bee!" />
        </div>
        <div className="user-description">
          <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          <h2>Descrição do perfil</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            aliquam ad quibusdam! Earum assumenda corrupti ab alias quo saepe
            accusamus nulla quaerat deleniti aliquid cupiditate eius, doloribus
            placeat dolor qui?
          </p>
          <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <div className="business-related">
          <h2>Empresas associadas</h2>
          <div className="google empresa">
            <i class="fa-brands fa-google"></i>
            <span>Google</span>
          </div>
          <div className="microsoft empresa">
            <i className="fa-brands fa-microsoft"></i>
            <span>Microsoft</span>
          </div>
          <div className="oracle empresa">
            <i className="fa-brands fa-aws"></i>
            <span>AWS</span>
          </div>
        </div>
        <div className="edit-profile">
          <a name="" id="" className="bg-orange-500" href="#" role="button">
            Editar perfil <i className="fa-solid fa-pencil"></i>
          </a>
        </div>
      </div>

      <div className="feed"></div>

      <div className="ranking"></div>
    </section>
  );
}

export default Home;
