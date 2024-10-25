import React from "react";
import "./App.css"; // Importando estilos do App, se houver
import Secao from "./components/Section/Section";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import Section4 from "./components/Section 4/Section4";
import Section3 from "./components/Section 3/Section3";

function App() {
  return (
    <>
      <main className="headerSection">
        <NavBar />
        <Secao />
      </main>
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}

export default App;
