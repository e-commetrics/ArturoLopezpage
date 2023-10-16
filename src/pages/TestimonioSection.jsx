import React from "react";
import Testimonios from "../components/Testimonios";
function TestimonioSection() {
  return (
    <section className="py-8 bg-white md:py-16">
      {/* <div className="text-[#AC463F]  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold font-montserrat text-center">
        Testimonios
    </div> */}
      <div className="text-[#AC463F]  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold font-montserrat text-center">
        Testimonios
      </div>
      <Testimonios />
    </section>
  );
}

export default TestimonioSection;
