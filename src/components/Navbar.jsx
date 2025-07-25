import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

/**
 * Componente NavigationBar - Barra de navegación inteligente
 * Características:
 * - Scroll spy: detecta automáticamente la sección activa
 * - Transparencia dinámica: transparente en carrusel, sólida en otras secciones
 * - Navegación suave con scroll automático
 * - Responsive design con menu hamburguesa
 */
const NavigationBar = () => {
  // Estados para el scroll spy y transparencia
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    /**
     * Maneja la detección de scroll para:
     * 1. Activar automáticamente la sección correspondiente (scroll spy)
     * 2. Cambiar la transparencia del navbar según la posición
     */
    const handleScroll = () => {
      // Secciones disponibles en orden de aparición
      const sections = ['home', 'countries', 'experiences', 'events', 'testimonials', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset para mejor detección
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Detectar si estamos en el carrusel (transparente) o en otras secciones (sólido)
      const homeSection = document.getElementById('home');
      const countriesSection = document.getElementById('countries');
      
      if (homeSection && countriesSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        // Cambiar a sólido cuando salimos del carrusel
        setIsScrolled(window.scrollY >= homeSectionBottom - 100);
      }

      // Manejar el caso especial del footer (contacto)
      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Detectar la sección activa basada en la posición del scroll
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Optimización del scroll con throttle usando requestAnimationFrame
    let ticking = false;
    const handleScrollThrottled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Agregar listener de scroll
    window.addEventListener('scroll', handleScrollThrottled);
    
    // Establecer estado inicial
    handleScroll();

    // Cleanup al desmontar el componente
    return () => window.removeEventListener('scroll', handleScrollThrottled);
  }, []);

  /**
   * Maneja el click en los elementos de navegación
   * Implementa scroll suave con offsets dinámicos
   */
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    
    // Scroll suave a la sección seleccionada
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset diferenciado: menor para home (navbar transparente), normal para otras secciones
      const yOffset = sectionId === 'home' ? -20 : -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar 
      className={`fixed-top navbar-custom ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      variant="dark" 
      expand="lg"
    >
      <Container>
        {/* Brand/Logo con ícono y funcionalidad de scroll to top */}
        <Navbar.Brand 
          onClick={() => handleNavClick('home')} 
          className="fw-bold navbar-brand-custom" 
          style={{ cursor: 'pointer' }}
        >
          <i className="bi bi-globe-americas me-2"></i>
          Polaris Tours
        </Navbar.Brand>
        
        {/* Toggle button para dispositivos móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Menu de navegación con scroll spy */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => handleNavClick('home')}
              className={`nav-link-custom ${activeSection === 'home' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('countries')}
              className={`nav-link-custom ${activeSection === 'countries' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Destinos
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('experiences')}
              className={`nav-link-custom ${activeSection === 'experiences' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Experiencias
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('events')}
              className={`nav-link-custom ${activeSection === 'events' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Eventos
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('testimonials')}
              className={`nav-link-custom ${activeSection === 'testimonials' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Testimonios
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('gallery')}
              className={`nav-link-custom ${activeSection === 'gallery' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Galería
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('contact')}
              className={`nav-link-custom ${activeSection === 'contact' ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
