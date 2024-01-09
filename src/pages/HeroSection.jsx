import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../components/navlist";
import video from '../vid/Achieve Timeless Beauty with Aesthetic Medicine in the good hands of Doctor Arturo Lopez in Playas de Tijuana .mp4';

function HeroSection() {

  // const videoUrl = "https://vimeo.com/869254219";

  return (
    <section className="w-full h-screen flex justify-center items-center border-black bg-[#210316]">
      <div className="w-screen h-screen">
        {/* <ReactPlayer
          url={videoUrl}
          playing // AutoPlay
          muted // Muted
          loop // Loop
          controls // Controles
          width={"100%"}
          height={"100%"}
        /> */}
        <video
        autoPlay
        muted
        loop
        controls
        className="object-cover w-full h-screen"
        >
        <source src={video} type="video/mp4" />
        Whether you're interested in rejuvenating your skin, enhancing your natural features, or sculpting your body, Dr. Arturo Lopez offers aesthetic medicine in a wide range of advanced procedures and treatments designed to help you look and feel your best.
      </video>
      </div>
      <Navbar />
    </section>
  ); 
}
 
export default HeroSection;
