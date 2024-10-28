import './App.css'
import React from "react";
import Secao from './components/Section/Section';
import Section2 from './components/Section 2/Section2';
import Section3 from './components/Section 3/Section3';
import Section4 from './components/Section 4/Section4';
import NavBar from './components/NavBar/NavBar';


function App() {
  // const handleFileUpload = (files) => {
  //   console.log('Arquivos carregados:', files);
  // }; utilizado para o componet fotos
  return (
    <>
    <NavBar />
    <Secao />
    <Section2 />
    <Section3 />
    <Section4 />
      {/* <div>
        <NavBar />
        <FimJornada/>
        <Foto onFileUpload={handleFileUpload} />
      </div> */}
    </>
  );
}

export default App;