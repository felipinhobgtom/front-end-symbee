import React from "react";
import "./Section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Secao() {
  const navegar = useNavigate();
  const handleNavegar = () => {
    navegar("/cadastro");
  };

  return (
    <>
      <section className="section-one">
        <div className="info">
          <h1>Conexões que transformam carreiras!</h1>
          <h3>
            Comunidade freelancer para desenvolvedores brasileiros, que usa a
            gamificação, reputação e IA para melhorar a sua experiência!
          </h3>
          <button
            class="btn btn-primary"
            role="button"
            onClick={handleNavegar}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "65px",
              borderRadius: "0 20px 0 20px",
            }}
          >
            Conhecer agora! <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="image">
          <img src="./public/bee_img.png" alt="" width={"500px"} />
        </div>
      </section>
    </>
  );
}

export default Secao;
