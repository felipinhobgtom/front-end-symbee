import React from 'react';
import './App.css'; // Importando estilos do App, se houver
import Footer from './components/footer/Footer';
import Header from "./components/header/Header"; // Certifique-se de que o caminho está correto
import Secao from './components/Section/Section';
import Section4 from './components/Section 4/Section4';

function App() {
  return (
    <>
    <main className='footerSection'>
      <Header />
      <Secao />
    </main>
    <Section4 />
    <Footer/>
    </>
  );
}

export default App