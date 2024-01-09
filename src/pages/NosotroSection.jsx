import React, { useState } from "react";
import dr from "../img/Arturo lopez md antiaging and wellness with botox fillers and revitalift get health and beauty without surgery.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
function NosotroSection() {
  const [instagramIconColor, setInstagramIconColor] = useState("#FFF");
  const [facebookIconColor, setFacebookIconColor] = useState("#FFF");

  const handleInstagramMouseEnter = () => {
    setInstagramIconColor("#000");
  };

  const handleInstagramMouseLeave = () => {
    setInstagramIconColor("#FFF");
  };

  const handleFacebookMouseEnter = () => {
    setFacebookIconColor("#000");
  };

  const handleFacebookMouseLeave = () => {
    setFacebookIconColor("#FFF");
  };
  return (
    <section id="#Nosotros" className="bg-[#AC463F] w-full p-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-start md:flex-row">
          <div className="md:w-4/5">
            <h1 className="mt-12 text-3xl font-semibold text-white md:text-4xl lg:text-7xl text-stone-300 font-montserrat">
              Conoce al Doctor en Playas de Tijuana
            </h1>
            <p className="mt-10 text-2xl font-medium text-justify text-white font-raleway">
              Encontrarás al Doctor Arturo López, médico cirujano y especialista
              en medicina estética, antiedad y antienvejecimiento en "Playas de
              Tijuana".
            </p>
            <p className="mt-10 text-2xl font-medium text-justify text-white font-raleway">
              El Dr. tiene la mejor alternativa para resaltar la naturaleza de
              cada paciente, creando un balance entre salud, bienestar y
              belleza.
            </p>
            <p className="mt-10 text-2xl font-medium text-justify text-white font-raleway">
              El Dr. Arturo López ayuda a todas las personas a cuidar su salud y
              a preservar la belleza que ya existe.
            </p>
            <div className="flex justify-end mt-24 text-xl font-semibold text-white font-raleway">
              "Permíteme acompañarte en ese pequeño empuje para un balance
              completo entre salud, bienestar y belleza."
            </div>
            <div className="flex justify-end mr-2 font-bold text-white text-l mt- font-raleway">
              Dr. Arturo López
            </div>
          </div>
          <div className="mt-4 md:w-1/2 md:mt-0 md:ml-4">
            <img
              src={dr}
              alt="Meet the Doctor Arturo Lopez MD beauty and wellness, specialized in aesthetics and antiaging, applying botox fillers and revitalift get health and beauty without surgery"
              className="w-full h-auto mt-32 mb-10 md:w-3/4 md:ml-16 md:mt-32"
            />
            <div className="flex justify-center md:mr-0 md:justify-center"> 

            {/* <a
              href=""
              className="group"
              onMouseEnter={handleFacebookMouseEnter}
              onMouseLeave={handleFacebookMouseLeave}
            >
              <FontAwesomeIcon
                className="w-12 h-9 group:hover:text-#211316"
                icon={faFacebookF}
                style={{ color: facebookIconColor }}
              />
            </a> */}
            <a
              href="https://www.instagram.com/arturolopezmd"
              className="group"
              onMouseEnter={handleInstagramMouseEnter}
              onMouseLeave={handleInstagramMouseLeave}
            >
              <FontAwesomeIcon
                className="w-12 h-10"
                icon={faInstagram}
                style={{ color: instagramIconColor }}
              />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NosotroSection;
