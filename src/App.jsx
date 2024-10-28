import "./App.css";
import React from "react";
import Secao from "./components/Section/Section";
import Section2 from "./components/Section 2/Section2";
import Section3 from "./components/Section 3/Section3";
import Section4 from "./components/Section 4/Section4";
import NavBarResponsiva from "./components/NavBarResponsiva/NavBarResponsiva";
import Footer from "./components/footer/Footer";


function App() {
  // const handleFileUpload = (files) => {
  //   console.log('Arquivos carregados:', files);
  // }; utilizado para o componet fotos
  return (
    <>
      <NavBarResponsiva />
      <Secao />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      {/* <div>
        <NavBar />
      <div>
        <NavBarResponsiva />
        <FimJornada/>
        <Foto onFileUpload={handleFileUpload} />
      </div> */}
    </>
  );
}

export default App;
