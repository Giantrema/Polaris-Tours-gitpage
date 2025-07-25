import React from 'react';
// Importación de todos los componentes de la página principal
import NavigationBar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import CountriesSection from '../components/CountriesSection';
import ExperiencesSection from '../components/ExperiencesSection';
import EventsSection from '../components/EventsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GallerySection from '../components/GallerySection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import Footer from '../components/Footer';

/**
 * Componente Home - Página principal de Polaris Tours
 * Contiene todas las secciones del sitio web en orden estructurado:
 * 1. Navbar con scroll spy
 * 2. Carrusel hero con imágenes destacadas
 * 3. Sección de países con modales informativos
 * 4. Experiencias disponibles
 * 5. Eventos con animaciones flip
 * 6. Testimonios de clientes
 * 7. Galería de fotos
 * 8. Razones para elegir Polaris Tours
 * 9. Footer con información de contacto
 */
const Home = () => {
  return (
    <div className="App" style={{ width: '100%', overflow: 'hidden' }}>
      {/* Barra de navegación fija con efectos de transparencia */}
      <NavigationBar />
      
      {/* Carrusel principal con imágenes hero */}
      <HeroCarousel />
      
      {/* Secciones del contenido principal */}
      <CountriesSection />
      <ExperiencesSection />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection />
      <WhyChooseUsSection />
      
      {/* Footer con botón flotante de WhatsApp */}
      <Footer />
    </div>
  );
};

export default Home;
