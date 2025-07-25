import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Badge, Accordion } from 'react-bootstrap';

const CountriesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    {
      id: 1,
      name: 'Perú',
      image: '/src/assets/images/countries/Machu Picchu.avif',
      description: 'Descubre Machu Picchu y la rica cultura inca',
      highlights: ['Machu Picchu', 'Cusco', 'Lima', 'Arequipa'],
      price: 'Desde $899',
      fullDescription: 'Perú es un país lleno de historia, cultura y paisajes espectaculares. Desde las misteriosas líneas de Nazca hasta la imponente ciudadela de Machu Picchu, este destino ofrece experiencias únicas que conectan el pasado con el presente.',
      itinerary: [
        { day: 'Día 1-2', activity: 'Llegada a Lima - City tour y visita al centro histórico' },
        { day: 'Día 3-4', activity: 'Vuelo a Cusco - Aclimatación y visita al Valle Sagrado' },
        { day: 'Día 5', activity: 'Machu Picchu - Tren a Aguas Calientes y tour guiado' },
        { day: 'Día 6-7', activity: 'Cusco - Exploración de la ciudad imperial y sitios arqueológicos' },
        { day: 'Día 8', activity: 'Retorno a Lima y vuelo de regreso' }
      ],
      recommendations: [
        'Llegar 2-3 días antes para aclimatarse a la altura',
        'Llevar ropa en capas, el clima puede cambiar rápidamente',
        'Reservar entradas a Machu Picchu con anticipación',
        'Probar la gastronomía local: ceviche, lomo saltado, pisco sour',
        'Llevar efectivo en soles peruanos'
      ],
      inclusions: ['Vuelos domésticos', 'Hoteles 4-5 estrellas', 'Todas las comidas', 'Tours guiados', 'Entrada a sitios arqueológicos'],
      duration: '8 días / 7 noches',
      bestTime: 'Mayo a Septiembre (temporada seca)'
    },
    {
      id: 2,
      name: 'Chile',
      image: '/src/assets/images/countries/Atacama.webp',
      description: 'Desde el desierto más árido hasta la Patagonia',
      highlights: ['Atacama', 'Santiago', 'Valparaíso'],
      price: 'Desde $1,299',
      fullDescription: 'Chile ofrece una diversidad geográfica única en el mundo. Desde el árido desierto de Atacama en el norte hasta los glaciares patagónicos en el sur, pasando por viñedos de clase mundial y ciudades cosmopolitas.',
      itinerary: [
        { day: 'Día 1-2', activity: 'Santiago - Llegada y city tour, visita a viñedos de Casablanca' },
        { day: 'Día 3-4', activity: 'Valparaíso - Exploración de la ciudad portuaria y sus murales' },
        { day: 'Día 5-7', activity: 'Desierto de Atacama - Géiseres del Tatio, Valle de la Luna' },
        { day: 'Día 8-9', activity: 'Torres del Paine - Trekking y observación de fauna' },
        { day: 'Día 10', activity: 'Retorno a Santiago' }
      ],
      recommendations: [
        'Protector solar de alto factor para el desierto',
        'Ropa térmica para las madrugadas en Atacama',
        'Medicamento para el mal de altura',
        'Probar los vinos chilenos y el pisco',
        'Llevar cámara para capturar paisajes únicos'
      ],
      inclusions: ['Vuelos domésticos', 'Hoteles boutique', 'Desayunos incluidos', 'Tours especializados', 'Equipo de trekking'],
      duration: '10 días / 9 noches',
      bestTime: 'Octubre a Abril (primavera-verano)'
    },
    {
      id: 3,
      name: 'Argentina',
      image: '/src/assets/images/countries/Argentina.jpg',
      description: 'Tango, vinos y paisajes espectaculares',
      highlights: ['Buenos Aires', 'Mendoza', 'Bariloche', 'Iguazú'],
      price: 'Desde $1,099',
      fullDescription: 'Argentina cautiva con su pasión por el tango, sus vinos de clase mundial y paisajes que van desde las cataratas del Iguazú hasta los glaciares patagónicos. Una experiencia cultural y natural inolvidable.',
      itinerary: [
        { day: 'Día 1-3', activity: 'Buenos Aires - Tango, caminito, gastronomía porteña' },
        { day: 'Día 4-5', activity: 'Mendoza - Degustación de vinos y recorrido por bodegas' },
        { day: 'Día 6-7', activity: 'Cataratas del Iguazú - Lado argentino y brasileño' },
        { day: 'Día 8-9', activity: 'Bariloche - Lagos andinos y chocolate artesanal' },
        { day: 'Día 10', activity: 'Retorno a Buenos Aires' }
      ],
      recommendations: [
        'Aprender algunos pasos básicos de tango',
        'Probar el asado argentino y malbec',
        'Llevar ropa cómoda para caminar',
        'Medicamento para mareos en catamaranes',
        'Cambiar dinero en casas de cambio oficiales'
      ],
      inclusions: ['Vuelos domésticos', 'Hoteles de lujo', 'Media pensión', 'Show de tango', 'Degustación de vinos'],
      duration: '10 días / 9 noches',
      bestTime: 'Marzo a Mayo, Septiembre a Noviembre'
    },
    {
      id: 4,
      name: 'Brasil',
      image: '/src/assets/images/countries/Brasil.avif',
      description: 'Playas paradisíacas y carnaval vibrante',
      highlights: ['Río de Janeiro', 'São Paulo', 'Salvador', 'Amazonia'],
      price: 'Desde $1,199',
      fullDescription: 'Brasil es un país de contrastes fascinantes: desde las playas de Copacabana hasta la selva amazónica, pasando por la vibrante cultura del carnaval de Río. Una experiencia llena de música, sabor y paisajes tropicales.',
      itinerary: [
        { day: 'Día 1-3', activity: 'Río de Janeiro - Cristo Redentor, Pan de Azúcar, Copacabana' },
        { day: 'Día 4-5', activity: 'São Paulo - Cultura urbana, gastronomía y arte callejero' },
        { day: 'Día 6-7', activity: 'Salvador de Bahía - Centro histórico y cultura afrobrasileña' },
        { day: 'Día 8-9', activity: 'Amazonía - Navegación y observación de fauna' },
        { day: 'Día 10', activity: 'Retorno a Río de Janeiro' }
      ],
      recommendations: [
        'Vacunarse contra fiebre amarilla para la Amazonía',
        'Protector solar de alto factor',
        'Aprender algunas palabras en portugués',
        'Probar caipirinha y feijoada',
        'Llevar repelente de insectos para la selva'
      ],
      inclusions: ['Vuelos domésticos', 'Hoteles frente al mar', 'Desayunos', 'Tours ecológicos', 'Show de samba'],
      duration: '10 días / 9 noches',
      bestTime: 'Abril a Junio, Agosto a Octubre'
    },
    {
      id: 5,
      name: 'Colombia',
      image: '/src/assets/images/countries/Colombia.png',
      description: 'Diversidad natural y cultural increíble',
      highlights: ['Cartagena', 'Bogotá', 'Medellín', 'Tayrona'],
      price: 'Desde $799',
      fullDescription: 'Colombia sorprende con su diversidad: ciudades coloniales, playas caribeñas, montañas andinas y una cultura vibrante. Descubre un país que ha renacido como destino turístico de clase mundial.',
      itinerary: [
        { day: 'Día 1-2', activity: 'Bogotá - Centro histórico, Museo del Oro, Monserrate' },
        { day: 'Día 3-4', activity: 'Medellín - Ciudad de la eterna primavera, Comuna 13' },
        { day: 'Día 5-6', activity: 'Cartagena - Ciudad amurallada y centro histórico' },
        { day: 'Día 7-8', activity: 'Parque Tayrona - Playas vírgenes y naturaleza' }
      ],
      recommendations: [
        'Probar el café colombiano de origen',
        'Llevar ropa ligera para la costa',
        'Abrigo para las noches bogotanas',
        'Degustar arepas y bandeja paisa',
        'Cambiar pesos colombianos en bancos'
      ],
      inclusions: ['Vuelos domésticos', 'Hoteles boutique', 'Todas las comidas', 'Tours culturales', 'Degustación de café'],
      duration: '8 días / 7 noches',
      bestTime: 'Diciembre a Marzo, Junio a Agosto'
    },
    {
      id: 6,
      name: 'Ecuador',
      image: '/src/assets/images/countries/Ecuador.webp',
      description: 'Galápagos y la mitad del mundo',
      highlights: ['Galápagos', 'Quito', 'Cuenca', 'Baños'],
      price: 'Desde $999',
      fullDescription: 'Ecuador es un país pequeño con una biodiversidad increíble. Las Islas Galápagos, patrimonio de la humanidad, ofrecen encuentros únicos con la fauna. El continente sorprende con volcanes, selva y cultura indígena.',
      itinerary: [
        { day: 'Día 1-2', activity: 'Quito - Centro histórico, Línea Ecuatorial' },
        { day: 'Día 3-4', activity: 'Otavalo - Mercado indígena y Laguna Cuicocha' },
        { day: 'Día 5-7', activity: 'Islas Galápagos - Crucero y observación de fauna única' },
        { day: 'Día 8', activity: 'Baños - Aventura y aguas termales' }
      ],
      recommendations: [
        'Medicamento para mareos en cruceros',
        'Cámara sumergible para Galápagos',
        'No tocar ni alimentar a los animales',
        'Llevar dólares americanos (moneda oficial)',
        'Ropa cómoda para caminatas'
      ],
      inclusions: ['Vuelos domésticos', 'Crucero en Galápagos', 'Pensión completa', 'Guía naturalista', 'Equipo snorkel'],
      duration: '8 días / 7 noches',
      bestTime: 'Junio a Noviembre (temporada seca)'
    }
  ];

  const handleShowModal = (country) => {
    setSelectedCountry(country);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCountry(null);
  };

  return (
    <section id="countries" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Destinos Extraordinarios</h2>
            <p className="lead text-muted">
              Explora los países más fascinantes de Sudamérica con nuestros paquetes personalizados
            </p>
          </Col>
        </Row>
        <Row>
          {countries.map((country) => (
            <Col lg={4} md={6} className="mb-4" key={country.id}>
              <Card className="h-100 shadow-sm border-0 overflow-hidden">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={country.image}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-primary fs-6">{country.price}</span>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h4 mb-3">
                    <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                    {country.name}
                  </Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {country.description}
                  </Card.Text>
                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">Lugares destacados:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {country.highlights.map((highlight, index) => (
                        <span key={index} className="badge bg-light text-dark border">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button 
                      className="btn btn-primary w-100"
                      onClick={() => handleShowModal(country)}
                    >
                      <i className="bi bi-arrow-right me-2"></i>
                      Ver Detalles
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal con información detallada */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <i className="bi bi-geo-alt-fill text-primary me-2"></i>
            {selectedCountry?.name}
            <Badge bg="primary" className="ms-3">{selectedCountry?.duration}</Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedCountry && (
            <>
              {/* Imagen principal */}
              <div className="position-relative" style={{ height: '300px' }}>
                <img
                  src={selectedCountry.image}
                  alt={selectedCountry.name}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4" 
                     style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                  <h3 className="text-white mb-2">{selectedCountry.name}</h3>
                  <p className="text-light mb-0">{selectedCountry.fullDescription}</p>
                </div>
                <div className="position-absolute top-0 end-0 m-3">
                  <Badge bg="success" className="fs-6">{selectedCountry.price}</Badge>
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="p-4">
                <Row>
                  <Col lg={8}>
                    {/* Información general */}
                    <div className="mb-4">
                      <Row>
                        <Col md={6}>
                          <div className="border rounded p-3 h-100">
                            <h6 className="fw-bold text-primary mb-3">
                              <i className="bi bi-clock me-2"></i>Duración
                            </h6>
                            <p className="mb-0">{selectedCountry.duration}</p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="border rounded p-3 h-100">
                            <h6 className="fw-bold text-primary mb-3">
                              <i className="bi bi-calendar-event me-2"></i>Mejor Época
                            </h6>
                            <p className="mb-0">{selectedCountry.bestTime}</p>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Itinerario */}
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-map me-2 text-primary"></i>Itinerario del Viaje
                      </h5>
                      <Accordion>
                        {selectedCountry.itinerary.map((item, index) => (
                          <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{item.day}</Accordion.Header>
                            <Accordion.Body>
                              <p className="mb-0">{item.activity}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </div>

                    {/* Recomendaciones */}
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-lightbulb me-2 text-primary"></i>Recomendaciones Importantes
                      </h5>
                      <div className="bg-light rounded p-3">
                        <ul className="mb-0">
                          {selectedCountry.recommendations.map((rec, index) => (
                            <li key={index} className="mb-2">
                              <i className="bi bi-check-circle-fill text-success me-2"></i>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4}>
                    {/* Lugares destacados */}
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">
                        <i className="bi bi-star-fill me-2 text-warning"></i>Lugares Destacados
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedCountry.highlights.map((highlight, index) => (
                          <Badge key={index} bg="outline-primary" text="primary" className="border border-primary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Incluye */}
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3 text-success">
                        <i className="bi bi-check-square me-2"></i>El Paquete Incluye
                      </h6>
                      <ul className="list-unstyled">
                        {selectedCountry.inclusions.map((inclusion, index) => (
                          <li key={index} className="mb-2">
                            <i className="bi bi-check text-success me-2"></i>
                            {inclusion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Precio destacado */}
                    <div className="bg-primary text-white rounded p-3 text-center">
                      <h4 className="fw-bold mb-2">{selectedCountry.price}</h4>
                      <p className="mb-3 small">Por persona en habitación doble</p>
                      <button className="btn btn-light btn-sm w-100">
                        <i className="bi bi-whatsapp me-2"></i>
                        Consultar Disponibilidad
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="border-top">
          <button className="btn btn-outline-secondary" onClick={handleCloseModal}>
            Cerrar
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-heart me-2"></i>
            Agregar a Favoritos
          </button>
          <button className="btn btn-success">
            <i className="bi bi-calendar-plus me-2"></i>
            Reservar Ahora
          </button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default CountriesSection;
