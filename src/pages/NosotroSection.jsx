import React, { useState } from "react";
import dr from "../img/nosotros AL.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
function NosotroSection() {
  const [instagramIconColor, setInstagramIconColor] = useState("#AC463F");
  const [facebookIconColor, setFacebookIconColor] = useState("#AC463F");

  const handleInstagramMouseEnter = () => {
    setInstagramIconColor("#ffff");
  };

  const handleInstagramMouseLeave = () => {
    setInstagramIconColor("#AC463F");
  };

  const handleFacebookMouseEnter = () => {
    setFacebookIconColor("#ffff");
  };

  const handleFacebookMouseLeave = () => {
    setFacebookIconColor("#AC463F");
  };
  return (
    <section id="#Nosotros" className="bg-[#E8DBD2] w-full p-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-start md:flex-row">
          <div className="md:w-4/5">
            <h1 className="text-3xl md:text-4xl lg:text-7xl mt-24 text-[#AC463F] text-stone-300 font-semibold font-montserrat">
              SOBRE NOSOTROS
            </h1>
            <p className="mt-10 text-2xl font-medium text-justify text-black font-raleway">
              Encuentra al doctor Arturo López, médico cirujano y especialista
              en medicina estética, antiedad y antienvejecimiento en playas de
              Tijuana con la mejor alternativa para resaltar la naturaleza de
              cada paciente creando un balance entre salud bienestar y belleza.
            </p>
            <p className="text-2xl font-medium text-justify text-black font-raleway">
              El Dr. Arturo López puede ayudar a todas las personas a preservar
              y resaltar una belleza que ya existe; solamente le hace falta ese
              pequeño empuje especializado a crear un balance completo entre
              salud bienestar y belleza
            </p>
            <div className="flex justify-end mt-24 text-xl font-semibold text-black font-raleway">
              "Un paciente satisfecho, siempre será el mejor regalo para mí"{" "}
            </div>
            <div className="flex justify-end mr-2 font-light text-black text-l mt- font-raleway">
              Dr. Arturo Lopez
              <br />
            </div>
          </div>
          <div className="mt-4 md:w-1/2 md:mt-0 md:ml-4">
            <img
              src={dr}
              alt="Avatar"
              className="w-full h-auto mt-4 mb-10 md:w-3/4 ml- md:ml-64 md:mt-0"
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <a
            href="#"
            className="group"
            onMouseEnter={handleFacebookMouseEnter}
            onMouseLeave={handleFacebookMouseLeave}
          >
            <FontAwesomeIcon
              className="w-12 h-9 group:hover:text-#211316"
              icon={faFacebookF}
              style={{ color: facebookIconColor }}
            />
          </a>
          <a
            href="#"
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
    </section>
  );
}

export default NosotroSection;
