import React from "react";
import logo from "../img/doctor arturo lopez en playas de tijuana control rejuvenecimiento antiedad y bienestar acido hialuronico toxina botulinica hilos tensores.png";
import Fade from "react-reveal/Slide";

function LogoSection() {
  return (
    <section
      id="section1"
      className="w-full h-[77vh] flex items-center border-black bg-[#211316]"
    >
      <div className="container mx-auto text-center">
        <div className="w-full mx-auto md:w-1/2">
          <Fade bottom delay={200}>
            <img className="w-full max-w-full" src={logo} alt="Conoce al doctor arturo lopez en playas de tijuana y lleva un control médico y de rejuvenecimiento antiedad y bienestar con tratamientos en ácido hialuronico, toxina botulínica o botox, e hilos tensores" />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
