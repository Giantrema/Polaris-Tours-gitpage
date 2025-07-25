import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Componente EventsSection - Sección de eventos culturales
 * Características:
 * - Tarjetas con animación flip 3D al hacer hover
 * - Sistema de interés para eventos favoritos
 * - Información detallada de eventos culturales de Sudamérica
 * - Categorización por tipos de eventos con colores distintivos
 */
const EventsSection = () => {
  // Estados para controlar las animaciones y interacciones
  const [flippedCards, setFlippedCards] = useState({});
  const [interestedEvents, setInterestedEvents] = useState({});

  // Datos de eventos culturales y tradicionales
  const events = [
    {
      id: 1,
      title: 'Carnaval de Río',
      country: 'Brasil',
      image: '/src/assets/images/events/Carnaval_rio.jpg',
      description: 'La fiesta más espectacular del mundo con samba, color y alegría desbordante.',
      date: 'Febrero - Marzo',
      type: 'Festival Cultural',
      icon: 'bi-music-note-beamed',
      highlights: [
        'Desfile en el Sambódromo con las mejores escolas de samba',
        'Blocos de rua en los barrios tradicionales',
        'Fiestas en las playas de Copacabana e Ipanema',
        'Concurso de fantasias en el Scala'
      ],
      experience: 'Vive la energía contagiosa del samba, conoce la cultura brasileña en su máxima expresión y participa en la fiesta callejera más grande del planeta.',
    },
    {
      id: 2,
      title: 'Inti Raymi',
      country: 'Perú',
      image: '/src/assets/images/events/Inti_raymi.jpg',
      description: 'Ceremonia ancestral inca dedicada al dios Sol en Sacsayhuamán, Cusco.',
      date: '24 de Junio',
      type: 'Tradición Ancestral',
      icon: 'bi-sun',
      highlights: [
        'Ceremonia principal en Sacsayhuamán con cientos de actores',
        'Procesión desde el Qorikancha hasta la Plaza de Armas',
        'Representación teatral de rituales incas ancestrales',
        'Música y danzas tradicionales andinas'
      ],
      experience: 'Conecta con la espiritualidad andina y presencia la recreación más auténtica de los rituales incas en el mismo lugar donde se celebraban hace 500 años.',
    },
    {
      id: 3,
      title: 'Día de los Muertos',
      country: 'México',
      image: '/src/assets/images/events/Dia_muertos.jfif',
      description: 'Celebración colorida que honra a los ancestros con ofrendas y festividades.',
      date: '1-2 de Noviembre',
      type: 'Tradición Familiar',
      icon: 'bi-heart',
      highlights: [
        'Altares familiares con ofrendas tradicionales',
        'Desfile de catrinas y catrines en el centro histórico',
        'Visitas nocturnas a cementerios con velas y flores',
        'Degustación de pan de muerto y dulces típicos'
      ],
      experience: 'Descubre una tradición que mezcla lo sagrado con lo festivo, donde la muerte se celebra como parte natural de la vida en una atmósfera de amor y remembranza.',
    },
    {
      id: 4,
      title: 'Tango Festival',
      country: 'Argentina',
      image: '/src/assets/images/events/Tango.webp',
      description: 'Pasión y elegancia en las calles de Buenos Aires con shows y milongas.',
      date: 'Agosto',
      type: 'Arte y Danza',
      icon: 'bi-people',
      highlights: [
        'Mundial de Tango con competencias internacionales',
        'Milongas gratuitas en plazas y parques',
        'Espectáculos en teatros históricos',
        'Clases magistrales con maestros reconocidos'
      ],
      experience: 'Sumérgete en la pasión del tango porteño, aprende los secretos de esta danza sensual y vive la magia de Buenos Aires a través de su música más representativa.',
    },
    {
      id: 5,
      title: 'Festival de Flores',
      country: 'Colombia',
      image: '/src/assets/images/events/Festival_flores.jpg',
      description: 'Medellín se viste de colores con desfiles de silleteros y jardines florales.',
      date: 'Agosto',
      type: 'Festival Natural',
      icon: 'bi-flower1',
      highlights: [
        'Desfile de silleteros con arreglos florales espectaculares',
        'Exposición de orquídeas y flores exóticas',
        'Cabalgata y tablados con música típica',
        'Concurso Nacional de la Trova'
      ],
      experience: 'Celebra la tradición paisa más hermosa, conoce a los silleteros y disfruta de Medellín vestida de flores en una experiencia llena de color y alegría.',
    },
    {
      id: 6,
      title: 'Fiesta de la Vendimia',
      country: 'Chile',
      image: '/src/assets/images/events/Fiesta_vendimia.jpg',
      description: 'Celebración de la cosecha de uvas en los valles vinícolas chilenos.',
      date: 'Marzo - Abril',
      type: 'Tradición Vinícola',
      icon: 'bi-cup',
      highlights: [
        'Pisado tradicional de uvas al estilo ancestral',
        'Degustación de vinos de las mejores viñas',
        'Espectáculos folklóricos y música cueca',
        'Cena campestre entre viñedos'
      ],
      experience: 'Participa en una tradición centenaria, conoce el proceso artesanal del vino chileno y disfruta de los paisajes únicos de los valles vinícolas.',
    }
  ];

  /**
   * Controla la animación flip de las tarjetas
   * Solo una tarjeta puede estar volteada a la vez
   */
  const toggleFlip = (eventId) => {
    setFlippedCards(prev => {
      // Resetear todas las tarjetas y solo activar la actual
      const newState = {};
      newState[eventId] = true;
      return newState;
    });
  };

  /**
   * Resetea todas las tarjetas a su estado inicial
   */
  const resetFlip = () => {
    setFlippedCards({});
  };

  /**
   * Maneja el botón de interés en eventos
   */
  const handleInterest = (eventId) => {
    setInterestedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  /**
   * Asigna colores según el tipo de evento
   * Mejora la experiencia visual y categorización
   */
  const getTypeColor = (type) => {
    const colors = {
      'Festival Cultural': 'primary',
      'Tradición Ancestral': 'warning', 
      'Tradición Familiar': 'success',
      'Arte y Danza': 'danger',
      'Festival Natural': 'info',
      'Tradición Vinícola': 'dark'
    };
    return colors[type] || 'secondary';
  };

  return (
    <section id="events" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Eventos y Tradiciones</h2>
            <p className="lead text-muted">
              Sumérgete en las festividades más auténticas y vive las tradiciones locales como un verdadero nativo
            </p>
          </Col>
        </Row>
        <Row>
          {events.map((event) => (
            <Col lg={4} md={6} className="mb-4" key={event.id}>
              <div 
                className={`flip-card ${flippedCards[event.id] ? 'flipped' : ''}`}
                onMouseEnter={() => toggleFlip(event.id)}
                onMouseLeave={resetFlip}
              >
                <div className="flip-card-inner">
                  {/* Parte frontal de la tarjeta - Solo imagen y nombre */}
                  <div className="flip-card-front">
                    <Card className="h-100 shadow-sm border-0 overflow-hidden">
                      <div className="position-relative" style={{ height: '100%' }}>
                        <Card.Img
                          variant="top"
                          src={event.image}
                          style={{ height: '100%', objectFit: 'cover' }}
                        />
                        {/* Overlay con degradado para el nombre */}
                        <div 
                          className="position-absolute bottom-0 start-0 w-100 p-4"
                          style={{
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                            color: 'white'
                          }}
                        >
                          <h4 className="fw-bold text-white mb-1">{event.title}</h4>
                          <p className="text-light mb-0 small">
                            <i className="bi bi-geo-alt me-1"></i>
                            {event.country}
                          </p>
                        </div>
                        {/* Indicador de hover sutil */}
                        <div className="position-absolute top-0 end-0 m-3">
                          <span className="badge bg-dark bg-opacity-50">
                            <i className="bi bi-info-circle"></i>
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Parte trasera de la tarjeta - Toda la información */}
                  <div className="flip-card-back">
                    <div className="text-center mb-2">
                      <i className={`${event.icon} fs-3 mb-2 d-block`}></i>
                      <h6 className="fw-bold mb-1">{event.title}</h6>
                      <small className="text-warning">
                        <i className="bi bi-calendar-event me-1"></i>
                        {event.date}
                      </small>
                    </div>
                    
                    <div className="text-start" style={{ fontSize: '0.8rem', lineHeight: '1.3' }}>
                      {/* Descripción básica */}
                      <div className="mb-2">
                        <p className="mb-0">{event.description}</p>
                      </div>
                      
                      {/* Highlights principales - texto completo */}
                      <div className="mb-2">
                        <h6 className="fw-bold mb-1" style={{ fontSize: '0.85rem' }}>
                          <i className="bi bi-star-fill me-1 text-warning"></i>Highlights:
                        </h6>
                        <ul className="mb-0 ps-3" style={{ fontSize: '0.7rem', lineHeight: '1.2' }}>
                          {event.highlights.slice(0, 3).map((highlight, index) => (
                            <li key={index} className="mb-1">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Experiencia y botón */}
                      <div className="text-center mt-3">
                        <p className="fst-italic mb-3 text-light" style={{ 
                          fontSize: '0.75rem', 
                          lineHeight: '1.3',
                          maxHeight: '4.5rem',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          "{event.experience}"
                        </p>
                        <div className="d-flex justify-content-center">
                          <button 
                            className={`btn btn-sm ${interestedEvents[event.id] ? 'btn-danger' : 'btn-light'}`}
                            style={{ 
                              fontSize: '0.75rem', 
                              padding: '0.3rem 0.6rem',
                              transition: 'all 0.3s ease-in-out',
                              transform: interestedEvents[event.id] ? 'scale(1.05)' : 'scale(1)'
                            }}
                            onClick={() => handleInterest(event.id)}
                          >
                            <i className={`${interestedEvents[event.id] ? 'bi-heart-fill' : 'bi-heart'} me-1`}></i>
                            {interestedEvents[event.id] ? '¡Me Encanta!' : 'Me Interesa'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EventsSection;
