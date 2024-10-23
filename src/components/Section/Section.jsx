import React from "react";
import "./Section.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Secao() {
  return (
    <section className="section-one">
      <div className="info outline-yellow-500 outline-dotted outline-8 rounded-full">
        <h1>Conexões que transformam carreiras!</h1>
        <h3>
          Comunidade freelancer para desenvolvedores brasileiros, que usa a
          gamificação, reputação e IA para melhorar a sua experiência!
        </h3>
        <a
          name=""
          class="btn btn-primary"
          href="#"
          role="button"
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '65px', borderRadius: '0 20px 0 20px'}}
          >Conhecer agora! <i class="fa-solid fa-arrow-right"></i>
          </a>
      </div>
      <div className="image">
        <img src="./public/bee_img.png" alt="" width={"500px"} />
      </div>
    </section>
  );
}

export default Secao;
