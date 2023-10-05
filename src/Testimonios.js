import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import avatar from './img/avatar.png';
import avatar2 from './img/avatar2.png';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonios = () => {
    const testimoniosData = [
        {
            id: 1,
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do Lorem ipsum dolor sit amet, consectetur.",
            nombre: "Juan ",
            cargo: "Information about the person 1",
            avatar: avatar,
        },
        {
            id: 2,
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do Lorem ipsum dolor sit amet, consectetur.",
            nombre: "Alejandro",
            cargo: "Information about the person 2",
            avatar: avatar2,
        },
        {
            id: 3,
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do Lorem ipsum dolor sit amet, consectetur.",
            nombre: "Kevin",
            cargo: "Information about the person 3",
            avatar: avatar,
        },
        {
            id: 4,
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do Lorem ipsum dolor sit amet, consectetur.",
            nombre: "Kevin",
            cargo: "Information about the person 3",
            avatar: avatar,
        },
        {
            id: 5,
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do Lorem ipsum dolor sit amet, consectetur.",
            nombre: "Kevin",
            cargo: "Information about the person 3",
            avatar: avatar,
        },
    ];

    return (
        <section className='flex flex-col items-center justify-center mt-12 mb-12 bg-white shadow-xl'>
        <Carousel
            showArrows={true}
            showStatus={true}
            centerMode={true} // Desactiva el centro
            centerSlidePercentage={35} // Ancho completo de cada elemento
            selectedItem={0} // Comienza desde el primer elemento
            transitionTime={1000}
            emulateTouch={true}
            autoPlay={true}
        >
            {testimoniosData.map((testimonio) => (
                <div key={testimonio.id}> {/* Espaciado entre elementos */}
                    <div className="bg-[#AC463F] font-semibold text-start rounded-3xl border shadow-2xl p-12 max-w-xs">
                        <p className="text-2xl text-[#E7DBD2] font-raleway font-normal">{testimonio.texto}</p>
                        <div className="my-4 border border-t-4 border-gray-300"></div>
                        <div className="flex items-center justify-start">
                            <div className="avatar placeholder">
                                <div className="w-24 rounded-full bg-neutral-50 text-neutral-content">
                                <span className="text-3xl text-[#AC463F]">{testimonio.nombre.charAt(0)}</span>
                                </div>
                            </div>
                            <div className="items-center ml-2">
                                <p className="text-base font-normal text-white font-raleway">{testimonio.nombre}</p>
                                <p className="text-sm font-normal text-white font-raleway">{testimonio.cargo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    </section>
    );
};

export default Testimonios;
