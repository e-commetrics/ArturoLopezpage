import React from "react";
import logo from "../img/Artboard 1.png";
import Fade from "react-reveal/Slide";

function LogoSection() {
  return (
    <section
      id="section1"
      className="w-full h-[77vh] flex items-center border-black bg-[#AC463F]"
    >
      <div className="container mx-auto text-center">
        <div className="w-full mx-auto md:w-1/2">
          <Fade bottom delay={200}>
            <img className="w-full max-w-full" src={logo} alt="Logo" />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
