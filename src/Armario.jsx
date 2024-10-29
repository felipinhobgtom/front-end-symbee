import { Outlet } from "react-router-dom";
import React from "react";
import NavBarResponsiva from "./components/NavBarResponsiva/NavBarResponsiva";

function Armario() {
  return (
    <>
      <NavBarResponsiva />
      <Outlet />
    </>
  );
}

export default Armario;
