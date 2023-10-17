import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../components/navlist";
// import video from '../vid/HeroAL.mp4';

function HeroSection() {

  const videoUrl = "https://vimeo.com/869254219";

  return (
    <section className="w-full h-screen flex justify-center items-center border-black bg-[#210316]">
      <div className="w-screen h-screen">
        <ReactPlayer
          url={videoUrl}
          playing // AutoPlay
          muted // Muted
          loop // Loop
          controls // Controles
          width={"100%"}
          height={"100%"}
        />
        {/* <video
        autoPlay
        muted
        loop
        controls
        
        className="object-cover w-full h-screen"
        >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
        
      </video> */}
      </div>
      <Navbar />
    </section>
  ); 
}
 
export default HeroSection;
