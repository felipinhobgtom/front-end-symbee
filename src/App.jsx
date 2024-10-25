import React from 'react';
import './App.css'; // Importando estilos do App, se houver
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavBar from './components/NavBar/NavBar';// Certifique-se de que o caminho está correto

function App() {
  return (
    <>
      <NavBar />

      <div>
      <Outlet />
      </div>
    </>
  );
}

export default App;
