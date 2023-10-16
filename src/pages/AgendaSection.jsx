import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DrAl from "../img/ALNosotros.png";
import bgAgenda from "../img/bg.png";

function AgendaSection() {
  return (
    <div>
      <section
        className="w-auto h-auto bg-[#E8DBD2] relative overflow-hidden"
        style={{ backgroundImage: `url(${bgAgenda})` }}
      >
        <div className="w-full bg-[#AC463F] h-2.5 mt-2 absolute top-10"></div>{" "}
        {/* Elemento encima de la sección */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#AC463F] text-4xl md:text-8xl font-semibold font-montserrat text-center md:text-left sm:mt-14 sm:ml-14">
              Agenda una cita
            </div>
            <div className="mt-4 text-2xl font-light text-center text-black md:ml-12 md:text-3xl font-montserrat md:text-left">
              Por cualquiera de nuestros métodos de contacto
            </div>

            {/* Contenedor para la información */}
            <div className="bg-[#E8DBD2] stats stats-vertical">
              <div className="flex items-center stat">
                <FontAwesomeIcon
                  className="w-8 h-8 md:w-10 md:h-10 text-2xl md:text-3xl group:hover:text-#211316"
                  icon={faFacebookF}
                  style={{ color: "#AC463F " }}
                />
                <div className="text-xl font-semibold text-black md:text-2xl lg:text-3xl font-raleway">
                  Dr. Arturo Lopez
                </div>
              </div>
              <div className="flex items-center stat">
                <FontAwesomeIcon
                  className="w-8 h-8 md:w-10 md:h-10 text-2xl md:text-3xl group:hover:text-#211316"
                  icon={faEnvelope}
                  style={{ color: "#AC463F " }}
                />
                <div className="text-xl font-semibold text-black md:text-2xl lg:text-3xl font-raleway">
                  ArturoLopez@gmail.com
                </div>
              </div>
              <div className="flex items-center stat">
                <FontAwesomeIcon
                  className="w-8 h-8 md:w-10 md:h-10 text-2xl md:text-3xl group:hover:text-#211316"
                  icon={faWhatsapp}
                  style={{ color: "#AC463F " }}
                />
                <div className="text-xl font-semibold text-black md:text-2xl lg:text-3xl font-raleway">
                  664 978 6543
                </div>
              </div>
              <div className="flex items-center stat">
                <FontAwesomeIcon
                  className="w-8 h-8 md:w-10 md:h-10 text-2xl md:text-3xl group:hover:text-#211316"
                  icon={faLocationDot}
                  style={{ color: "#AC463F " }}
                />
                <div className="text-xl font-semibold text-black md:text-2xl lg:text-3xl font-raleway">
                  Tijuana Baja California
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center justify-center">
              <img
                src={DrAl}
                alt="Imagen"
                className="flex items-center w-auto h-auto md:ml-16"
              />{" "}
              {/* Reemplaza 'tu_imagen.jpg' con la ruta de tu imagen */}
            </div>
          </div>
          <div className="w-full bg-[#AC463F] h-2.5 mt-2 absolute bottom-10"></div>{" "}
          {/* Elemento debajo de la sección */}
        </div>
      </section>
    </div>
  );
}

export default AgendaSection;
