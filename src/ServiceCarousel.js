import React, { useState } from 'react';
import { services } from './servicesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ServiceCarousel() {
    const [startIndex, setStartIndex] = useState(0);

    const itemsPerPage = 3; // Muestra 3 tarjetas a la vez

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1); // Retrocede una tarjeta hacia atrás
        }
    };

    const handleNext = () => {
        if (startIndex + itemsPerPage < services.length) {
            setStartIndex(startIndex + 1); // Avanza una tarjeta hacia adelante
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center flex-wrap md:flex-nowrap">
                {/* Flecha izquierda con margen derecho */}
                <button onClick={handlePrev} className="transition-transform transform hover:translate-x-2 mr-16">
                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#000" }} />
                </button>
                {services.slice(startIndex, startIndex + itemsPerPage).map((service, index) => (
                    <div
                        key={index}
                        className="mx-2 mb-4 w-80 ease-in-out duration-300  md:flex-1"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-4 h-full flex flex-col justify-between">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-auto rounded-t-lg"
                                style={{ maxWidth: '100%' }}
                            />
                            <div className="p-4">
                                <p className="text-xl font-century text-black">{service.title}</p>
                                <button className="bg-[#bd7c5f] font-century text-white rounded-md px-4 py-2 mt-2 w-full">Contactar</button>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Flecha derecha con margen izquierdo */}
                <button onClick={handleNext} className="transition-transform transform hover:translate-x-2 ml-16">
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000" }} />
                </button>
            </div>
        </div>
    );
}

export default ServiceCarousel;
