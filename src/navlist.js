import React, { useState } from 'react';
import logo from './img/Artboard 1.png';
import './styles/fonts.css'; // Importa el archivo de hoja de estilos de las fuentes personalizadas

const NavList = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`py-4 transition-all duration-300 ${menuOpen ? 'fixed top-0 left-0 right-0 bottom-0 bg-white z-10' : 'absolute top-0 left-0 right-0'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-white text-xl font-bold">
                        <img src={logo} className="w-64 h-24" alt="Logo" />
                    </div>
                </div>
                <div className="hidden md:flex justify-end items-center space-x-6 text-white font-raleway">
                    <a href="#" className="text-xl">
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
                    </a>
                </div>
                <div className="md:hidden flex items-center mr-4">
                    {menuOpen ? (
                        <button
                            onClick={closeMenu}
                            className="text-black text-xl focus:outline-none"
                        >
                            ✕
                        </button>
                    ) : (
                        <button
                            onClick={toggleMenu}
                            className="text-white text-xl focus:outline-none"
                        >
                            ☰
                        </button>
                    )}
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden">
                    <ul className="text-center mt-4">
                        <li>
                            <a href="#" className="block text-xl py-2" onClick={closeMenu}>INICIO</a>
                        </li>
                        <li>
                            <a href="#" className="block text-xl py-2" onClick={closeMenu}>SERVICIO</a>
                        </li>
                        <li>
                            <a href="#" className="block text-xl py-2" onClick={closeMenu}>SOBRE NOSOTROS</a>
                        </li>
                        <li>
                            <a href="#" className="block text-xl py-2" onClick={closeMenu}>CONTACTO</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavList;
