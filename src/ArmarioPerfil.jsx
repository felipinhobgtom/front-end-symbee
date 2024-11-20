import React from "react";
import "./ArmarioPerfil.css";
import Conteudo from "./components/Perfil/Conteudo/ConteudoPerfil"
import Statistics from "./components/Perfil/Estatística/Statistics";
import MenuLateralPerfil from "./components/Perfil/MenuLateral/MenuLateralPerfil";


const ArmarioHome = () => {
  return (
    <>
      <div className="LayoutPerfilPage">
      <MenuLateralPerfil />
        <Conteudo />
        
        
      </div>
    </>
  );
};

export default ArmarioHome;
