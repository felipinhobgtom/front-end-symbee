import React from "react";
import "./App.css"; // Importando estilos do App, se houver
import Login from "./components/Login/Login";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Cadastro from "./components/Cadastro/Cadastro";
import NavBar from "./components/NavBar/NavBar"; // Certifique-se de que o caminho está correto
import EscolhaDePerfil from "./components/EscolhadePerfil/EscolhaDePerfil";
import Cargo from "./components/Cargo/Cargo";
import CargoEstudante from "./components/CargoEstudante/CargoEstudante";
import Bio from "./components/Bio/Bio";
import Foto from "./components/Foto/Foto";
import Tags from "./components/tags/tags";
import Premium from "./components/Premium/Premium";
import FimJornada from "./components/FimJornada/FimJornada";

function App() {
  // const handleFileUpload = (files) => {
  //   console.log('Arquivos carregados:', files);
  // }; utilizado para o componet fotos
  return (
    <>
      <div>
        <NavBar />
        <FimJornada/>
        {/* <Foto onFileUpload={handleFileUpload} /> */}
      </div>
    </>
  );
}

export default App;