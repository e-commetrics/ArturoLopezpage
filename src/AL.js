import React from 'react';
import './App.css';
import HeroSection from './pages/HeroSection';
import LogoSection from './pages/LogoSection';
import Nosotros from './pages/NosotroSection';
import CarrouselSection from './pages/CarrouselSection';
import AgendaSection from './pages/AgendaSection';
import TestimonioSection from './pages/TestimonioSection';
import FooterSection from './pages/FooterSection';
import ContactoSection from './pages/ContactoSection';

function AL() {

  return (
    <div>
      <HeroSection />
      <LogoSection />
      <Nosotros />
      {/* <CarrouselSection />
      <AgendaSection />
      <TestimonioSection /> */}
      <ContactoSection />
      <FooterSection />     
    </div>
  );
}

export default AL;
