import "./Foto.css";
import { useDropzone } from "react-dropzone";
import React from "react";

const Foto = ({ onFileUpload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*", // Aceita apenas arquivos de imagem
    onDrop: (acceptedFiles) => {
      onFileUpload(acceptedFiles); // Chama a função de callback para arquivos aceitos
    },
  });
  return (
    <section>
      <div className="photoContainer">
        <div className="photoLayout">
          <div className="photoTitle">
            <h1>Adicione uma foto para o seu perfil</h1>
          </div>
          <div
            {...getRootProps()}
            className={`upload-container ${isDragActive ? "active" : ""}`}
          >
            <input {...getInputProps()} />
            <div className="hexagon">
              <div className="icon"><p>+</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="photoButton">
        <div className="BackButton">
          <button>Voltar</button>
        </div>
        <div className="jump">
          <button>Pular</button>
        </div>
        <div className="ContinueButton">
          <button>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default Foto;
