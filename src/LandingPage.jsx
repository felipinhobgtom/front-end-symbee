import "./App.css";
import React from "react";
import Secao from "./components/Section/Section";
import Section2 from "./components/Section 2/Section2";
import Section3 from "./components/Section 3/Section3";
import Section4 from "./components/Section 4/Section4";
import Footer from "./components/footer/Footer";
import NavBarResponsiva from "./components/NavBarResponsiva/NavBarResponsiva";


function LandingPage() {
  // const handleFileUpload = (files) => {
  //   console.log('Arquivos carregados:', files);
  // }; utilizado para o componet fotos
  return (
    <main id="landing-page">
      <NavBarResponsiva />
      <Secao />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer stroke="#eaeaea"/>
    </main>
  );
}

export default LandingPage;
