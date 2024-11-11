import React from "react";
import Bee from "./assets/Bee.jsx";
import "./MenuLateralPerfil.css";
import eggHeart from "./img/coraovo 3.png"
import BeeOne from "./img/abelha 1.png"
import sunflower from "./img/girassol 1.png"

function MenuLateralPerfil() {
  return (
    <aside>
      <div className="menu-lateral-perfil">
        <div className="UpdatePlan">
          <button>Atualize o plano</button>
        </div>
        <div className="ContentsProfileAsideMenu">
          <div className="imgAsideProfile">
            <Bee id="bea" stroke="black" />
            <div className="nameUserAsideProfile">
              <h2>Kay_bonjour</h2>
              <p id="paragraphAsideMenu">despite everything, it’s still you!</p>
            </div>
          </div>
        </div>
        <div className="descriptionAsideProfile">
            <h2>Sua descrição: </h2>

            <div className="descriptionCamp">
              <p id="paragraphAsideMenu">Fale mais sobre você...</p>
            </div>

            <div className="buttonUpdate">
              <button>Atualizar</button>
            </div>
            <div className="achivements">
            <h2>Achivements</h2>
            <div className="imgAchivements">
            <img src={BeeOne} alt="" />
            <img src={sunflower} alt="" />
            <img src={eggHeart} alt="" />
            </div>
          </div>
          </div>
          
      </div>
    </aside>
  );
}

export default MenuLateralPerfil;
