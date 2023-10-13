import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Avatar } from "@material-tailwind/react";
import icon from './img/avatar.png';

const Testimonios = () => {
    const testimoniosData = [
        {
            id: 1,
            texto: "Excelente servicio. ¡Altamente recomendado!",
            nombre: "M. García",
            cargo: "Cliente satisfecho",
            icon: icon,
        },
        {
            id: 2,
            texto: "El equipo de soporte fue muy amable y resolvió mi problema rápidamente.",
            nombre: "J. Pérez",
            cargo: "Cliente satisfecho",
            icon: icon,
        },
        {
            id: 3,
            texto: "¡Increíble producto! Superó mis expectativas.",
            nombre: "A. Rodríguez",
            cargo: "Cliente feliz",
            icon: icon,

        },
        // Agrega más testimonios aquí
    ];

    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimationComplete(true);
        }, 1000); // Retraso inicial en milisegundos antes de comenzar la animación
    }, []);

    return (
        <section className='flex flex-col items-center justify-center mt-12 mb-12 bg-white shadow-xl'>
            <div className="flex flex-wrap justify-center">
                {testimoniosData.map((testimonio, index) => (
                    <motion.div
                        key={testimonio.id}
                        className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
                        initial={{ opacity: 0, y: -80 }}
                        animate={animationComplete ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: index * 0.5 }} // Ajusta el retraso aquí
                    >
                        <div className="bg-[#AC463F] font-semibold text-start rounded-3xl border shadow-2xl p-4">
                            <p className="text-2xl text-[#E7DBD2] font-raleway font-normal">{testimonio.texto}</p>
                            <div className="my-2 border border-t-2 border-gray-300"></div>
                            <div className="flex items-center">
                                <div className="avatar placeholder">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-neutral-50 text-neutral-content">
                                    <Avatar src={icon} alt="avatar" size="lg" />
                                    </div>
                                </div>
                                <div className="ml-2">
                                    <p className="text-lg font-normal text-white font-raleway">{testimonio.nombre}</p>
                                    <p className="text-sm font-normal text-white font-raleway">{testimonio.cargo}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonios;
