import React, { useState } from "react";
import logo from "../img/doctor arturo lopez en playas de tijuana control rejuvenecimiento antiedad y bienestar acido hialuronico toxina botulinica hilos tensores.png";

const NavList = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`py-4 transition-all duration-300 ${
        menuOpen
          ? "fixed top-0 left-0 right-0 bottom-0 bg-white z-10"
          : "absolute top-0 left-0 right-0"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <div className="text-xl font-bold text-white">
            <img src={logo} className="w-64 h-24" alt="Conoce al doctor arturo lopez en playas de tijuana y lleva un control médico y de rejuvenecimiento antiedad y bienestar con tratamientos en ácido hialuronico, toxina botulínica o botox, e hilos tensores" />
          </div>
        </div>
        <div className="items-center justify-end hidden space-x-6 text-white md:flex font-raleway">
          {/* <a href="#" className="text-xl">
            INICIO
          </a>
          <a href="#" className="text-xl">
            SERVICIO
          </a>
          <a href="#" className="text-xl">
            SOBRE NOSOTROS
          </a>
          <a href="#" className="text-xl">
            CONTACTO
          </a> */}
        </div>
        <div className="flex items-center mr-4 md:hidden">
          {menuOpen ? (
            <button
              onClick={closeMenu}
              className="text-xl text-black focus:outline-none"
            >
              ✕
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-xl text-white focus:outline-none"
            >
              ☰
            </button>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="mt-4 text-center">
            {/* <li>
              <a href="#" className="block py-2 text-xl" onClick={closeMenu}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-xl" onClick={closeMenu}>
                SERVICIO
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-xl" onClick={closeMenu}>
                SOBRE NOSOTROS
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-xl" onClick={closeMenu}>
                CONTACTO
              </a>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavList;
