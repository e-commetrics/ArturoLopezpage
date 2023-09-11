import React from 'react';
import video from './vid/hero.mp4';
import './App.css';
import logo from './img/logo.png'; // Ruta de tu logo
import logo2 from './img/logo2.jpg'; // Ruta de tu logo
import backgroundImage from './img/background.png'; // Ruta de tu imagen de fondo
import Fade from 'react-reveal/Fade';
import meet from './img/meet.png'
import icon1 from './img/icon 1.png'
import icon2 from './img/icon 2.png'
import icon3 from './img/icon 3.png'
import icon4 from './img/icon 4.png'
import icon5 from './img/icon 5.png'
import icon6 from './img/icon 6.png'
import icon7 from './img/icon 7.png'
import icon8 from './img/icon 8.png'
import icon9 from './img/icon 9.png'
import icon10 from './img/icon 10.png'
import icon11 from './img/icon 11.png'
import CarouselComponent from './CarouselComponent';
import last from './img/last.png'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">

      {/* Sección de video */}
      <section className="w-full h-screen relative flex justify-center items-center">
        <video
          autoPlay
          muted
          loop
          controls
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </section>

      {/* Sección con fondo y logo */}
      <section
        className="w-full h-[70vh] flex flex-col justify-center items-center text-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Fade bottom cascade>
          <div className="mt-8 flex justify-center">
            <img src={logo} alt="Logo" className="w-60" />
          </div>
          <h1 className="text-white text-lg font-monserrat mt-2">
            ESCRIBANO
          </h1>
          <h1 className="text-white text-lg font-monserrat mb-2">
            Evolving The World of Education
          </h1>
        </Fade>
      </section>

      {/* seccion de Reinventing */}
      <section className="w-full min-h-[70vh] flex flex-col justify-center items-center text-center bg-cover">
        <Fade bottom cascade>
          <div className="md:flex md:flex-row md:justify-center md:items-center">
            <div className="text-[#1867A0] font-bold mt-4 md:mt-0 md:mr-4 text-center">
              <p className="leading-normal ml-16 mr-16 text-2xl">
                Reinventing <span className="ml-2">School</span> <span className="ml-2">Technology</span> <span className="ml-2">With</span> <span className="ml-2">Patricia.</span> <span className="ml-2">Our</span> <span className="ml-2">Educational</span> <span className="ml-2">Virtual</span> <span className="ml-2">Assistant!</span>
              </p>
              <button className="bg-[#1867A0] text-white px-4 py-2 mt-4 border border-blue-700 hover:border-blue-900 rounded-full">
                MEET PATRICIA
              </button>
            </div>
            <div className="md:w-[72%]">
              <h1 className="text-black text-2xl text-justify mb-2 mr-10 mt-2 ml-10 md:mr-12 md:ml-12">Escribano is an intelligent board that comes integrated with an Educational virtual assistant. Our system allows the user to easily manage a face-to-face or virtual presentation using a simple interface with voice recognition technology. Allowing them to teach a hands-free class.</h1>
            </div>
          </div>
        </Fade>
      </section>

      {/* seccion Meet menu */}
      <section
        className="w-full min-h-[150vh] flex flex-col justify-center items-center text-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Fade bottom cascade>
          <div className="md:flex md:flex-row md:justify-center md:items-center">
            <div className="text-[#00FBFF] font-bold mt-4 md:mt-0 md:mr-4 text-center">
              <p className="leading-normal ml-4 mr-4 md:ml-8 md:mr-8 lg:ml-12 lg:mr-12 xl:ml-16 xl:mr-16 text-4xl">
                Meet The Butterfly Menu
              </p>
              <h1 className="text-white ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16 py-4 text-xl">
                Our butterfly menu gives you access to all the tools you need
                to use Escribano, and our displayed color palette makes it easy to select the color pen you need.
              </h1>
            </div>
            <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
              <img src={meet} alt="Imagen" className="w-auto h-auto" />
            </div>
          </div>

          {/* columna 1  */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="col-span-1 p-4 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon1} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                MegaMeetings
              </p>
              <h1 className='text-white'>
                Our butterfly menu gives you access to all the tools you need
                to use Escribano and our displayed color pallet makes it easy to select the color pen you need.
              </h1>
            </div>
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon2} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                Web Applications
              </p>
              <h1 className='text-white'>Navigate the web with our easy to access app! Set your favorite search engine and browse the Internet to search for complementary information and images.</h1>
            </div>
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon3} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                Voice Recognition
              </p>
              <p className='text-white'>
                Quickly open an application, navigate between pages, active a tool or use any other functions! The voice recognition assistant will help in dictations, web search and more.            </p>
            </div>
          </div>

          {/* columna 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon4} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                Mail Applications
              </p>
              <h1 className='text-white'>
                Send out emails or slides created during class and make use of several helper tools like our easy to use calculator and clock.
              </h1>
            </div>
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon5} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                Selectable Background
              </p>
              <h1 className='text-white'>
                Select from our 14 different backgrounds to start your lesson. Escribano has a background selection for every class like math, music and even sports!
              </h1>
            </div>
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon6} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                Pen Tools
              </p>
              <h1 className='text-white'>
                Just select the pen style and color that you need to commence your activity.
              </h1>
            </div>
          </div>

          {/* columna 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon7} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                Erase Quickly

              </p>
              <h1 className='text-white'>
                If you want to easily remove drawings from the screen the system will let you use the palm ofyour hand or a standard felt eraser.</h1>
            </div>
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon8} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                Creating Shapes
              </p>
              <h1 className='text-white'>
                You can create different shapes on the screen, they will appear on the area as you touch and drag.
              </h1>
            </div>
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon9} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                PDF & Documents
              </p>
              <h1 className='text-white'>
                Documents can be visualized with our integrated viewer. Word processing, spreadsheets and presentations can be opened easily.
              </h1>
            </div>
          </div>

          {/* columna 4  */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon10} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                MP4
              </p>
              <h1 className='text-white'>
                Videos are always a good way to make a presentation with our integrated video player.
              </h1>
            </div>
            <div className="col-span-1 p-4 md:col-span-1 lg:col-span-1 xl:col-span-1 md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 xl:ml-8 xl:mr-8 text-start">
              <img src={icon11} alt="Icon" className="w-12 h-12" />
              <p className='text-[#00FBFF]'>
                Images
              </p>
              <p className='text-white'>
                The user can add most used image formats to the workspace including GIF files.
              </p>
            </div>
          </div>
        </Fade>
      </section>

      {/* section Pick a background */}
      <Fade bottom cascade>
      <section className="w-full min-h-[50vh] flex flex-col justify-center items-center text-center bg-cover">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4 md:order-2">
            {/* Contenido de la segunda columna */}
            <h2 className="text-2xl font-bold text-[#1867A0] py-8">
              Pick A Background for Every Subject!
            </h2>
            <p className="py-4">
              Escribano is an interactive whiteboard and so much more. You can select from our 14 different
              backgrounds to start your lesson. Escribano has a background selection for every class like math, music, and even sports!
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 md:order-1">
            {/* Contenido de la primera columna */}
            <CarouselComponent />
          </div>
        </div>
      </section>
      <section className="w-full min-h-[50vh] flex flex-col justify-center items-center text-center bg-cover">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Columna 1 */}
            <div className="md:text-center">
              {/* Contenido de la columna 1 */}
              <h2 className="text-2xl font-bold text-[#1867A0] py-2">
                Dictation Mode
              </h2>
              <p className="text-2xl font-sans  py-2">
                Dictation Mode is a feature that allows the user to write using just their voice.  
              </p>
            </div>
            
            {/* Columna 2 (con la imagen centrada) */}
            <div className="md:text-center">
              {/* Contenido de la columna 2 */}
              <img src={last} alt="Imagen" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>
      </Fade>
      <section className="w-full min-h-[10vh] flex flex-col justify-center items-center text-center bg-[#023047]">
      <img src={logo2} className='w-20 h-20 py-2'/>
      <div className="container mx-auto text-center text-white">
        <p>NELSON ADAMS NACO</p>
      </div>
    </section>
    </div>
  );
}

export default App;
