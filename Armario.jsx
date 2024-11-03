import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBarCadastro from "./src/components/NavbarCadastro/NavBarCadastro";

const Armario = () => {
  const location = useLocation();

  // Array de rotas onde a NavBarCadastro não deve ser renderizada
  const noNavBarRoutes = ["/"]; // Inclua a rota "/" para a LandingPage

  return (
    <>
      {!noNavBarRoutes.includes(location.pathname) && <NavBarCadastro />}
      <Outlet />
    </>
  );
};

export default Armario;
