import React from "react";
import {
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import hilos from "../img/test1.png";
import hilostexto from "../img/test 2.png";
import a1 from "../img/a1.png";
import a2 from "../img/a2.png";
import bo1 from "../img/bo1.png";
import bo2 from "../img/bo2.png";
import st1 from "../img/st1.png";
import st2 from "../img/st2.png";
import q1 from "../img/q1.png";
import q2 from "../img/q2.png";
import cg1 from '../img/Cg1.png'
import cg21 from '../img/Cg21.png'
import pr1 from "../img/pr1.png";
import pr2 from "../img/pr2.png";

function CarrouselSection() {
  return (
    <div>

    <section className='flex items-center justify-center bg-white h-[10vh]'>
    <div className="text-center text-[#AC463F] text-5xl font-semibold font-montserrat">Tratamientos </div>
  </section>
      <section className="h-auto bg-white border-black">
        <Carousel
          autoplay={true}
          autoplayDelay={8000}
          loop={true}
          transition={{ type: "spring", duration: 2 }}
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-12 bg-[#AC463F]" : "w-4 bg-black/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="2xl"
                style={{ color: "#AC463F" }}
              />{" "}
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2xl"
                style={{ color: "#AC463F" }}
              />
            </IconButton>
          )}
        >
          <div className="relative w-full h-full">
            <div className="flex flex-col max-h-screen overflow-hidden md:flex-row">
              <img
                src={hilos}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
              <img
                src={hilostexto}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="flex flex-col max-h-screen overflow-hidden md:flex-row">
              <img
                src={a1}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
              <img
                src={a2}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="flex flex-col max-h-screen overflow-hidden md:flex-row">
              <img
                src={bo1}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
              <img
                src={bo2}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="flex flex-col max-h-screen overflow-hidden md:flex-row">
              <img
                src={st1}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
              <img
                src={st2}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="flex flex-col max-h-screen overflow-hidden md:flex-row">
              <img
                src={q1}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
              <img
                src={q2}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="flex flex-col max-h-screen overflow-hidden md:flex-row">
              <img
                src={cg1}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
              <img
                src={cg21}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="flex flex-col max-h-screen overflow-hidden md:flex-row">
              <img
                src={pr1}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
              <img
                src={pr2}
                alt="image hilos"
                className="w-full h-auto md:w-1/2"
              />
            </div>
          </div>
        </Carousel>
      </section>
      <section className='w-full h-[10vh] flex items-center bg-white'>
        <div className='container flex justify-center mx-auto'>
          <div className="relative w-64 h-16">
            <button className="w-64 h-16 left-0 top-0 absolute bg-white rounded-3xl border-2 border-pink-800 text-pink-800 text-4xl font-semibold font-raleway hover:text-white hover:bg-[#AC463F] hover:border-[#AC463F]">AGENDAR</button>
          </div>
        </div>
      </section>
      </div>

  );
}

export default CarrouselSection;
