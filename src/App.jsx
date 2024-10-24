import React from 'react';
import './App.css'; // Importando estilos do App, se houver
import Footer from './components/footer/Footer';
import Header from "./components/header/Header"; // Certifique-se de que o caminho está correto
import Secao from './components/Section/Section';

function App() {
  return (
    <>
      <Header />
      <Secao />
      <Footer />
    </>
  );
}

export default App