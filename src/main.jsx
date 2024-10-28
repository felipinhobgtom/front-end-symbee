import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./components/Cadastro/Cadastro.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Cadastro" element={<Cadastro />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
