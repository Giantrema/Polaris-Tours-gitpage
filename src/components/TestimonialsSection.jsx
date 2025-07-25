import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Componente TestimonialsSection - Sección de testimonios de clientes
 * 
 * Características:
 * - Muestra 3 testimonios reales de clientes satisfechos
 * - Sistema de calificación con estrellas
 * - Información del viaje realizado
 * - Design responsivo con cards bootstrap
 * - Imágenes de perfil de los clientes
 */
const TestimonialsSection = () => {
  // Datos de testimonios reales de clientes
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      country: 'España',
      image: '/src/assets/images/testimonials/maria.jpg',
      text: 'Mi viaje a Perú con Polaris Tours fue absolutamente increíble. La organización fue perfecta y los guías muy profesionales. Machu Picchu superó todas mis expectativas.',
      rating: 5,
      trip: 'Tour Perú Clásico'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      country: 'México',
      image: '/src/assets/images/testimonials/carlos.avif',
      text: 'La aventura en la Patagonia fue única. Los paisajes son indescriptibles y el servicio de primera calidad. Sin duda regresaré con Polaris Tours.',
      rating: 5,
      trip: 'Aventura Patagónica'
    },
    {
      id: 3,
      name: 'Ana Silva',
      country: 'Brasil',
      image: '/src/assets/images/testimonials/ana.avif',
      text: 'Excelente atención al cliente desde el primer contacto. El tour gastronómico por Colombia fue una experiencia sensorial increíble.',
      rating: 5,
      trip: 'Sabores de Colombia'
    }
  ];

  /**
   * Renderiza las estrellas de calificación
   * @param {number} rating - Calificación del 1 al 5
   * @returns {JSX.Element[]} Array de elementos de estrellas
   */
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi bi-star${index < rating ? '-fill' : ''} text-warning`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="py-5">
      <Container>
        {/* Encabezado de la sección */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Lo que Dicen Nuestros Viajeros</h2>
            <p className="lead text-muted">
              Experiencias reales de personas que confiaron en nosotros para vivir aventuras inolvidables
            </p>
          </Col>
        </Row>

        {/* Grid de testimonios - 3 columnas en desktop, responsivo en móvil */}
        <Row>
          {testimonials.map((testimonial) => (
            <Col lg={4} md={6} className="mb-4" key={testimonial.id}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  {/* Sistema de calificación con estrellas */}
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Testimonio del cliente */}
                  <blockquote className="blockquote mb-4">
                    <p className="mb-0 text-muted fst-italic">
                      "{testimonial.text}"
                    </p>
                  </blockquote>
                  
                  {/* Información del cliente */}
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={testimonial.image}
                      alt={`Foto de perfil de ${testimonial.name}`}
                      className="rounded-circle me-3"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div className="text-start">
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i>
                        {testimonial.country}
                      </small>
                      <br />
                      <small className="text-primary">
                        <i className="bi bi-suitcase me-1"></i>
                        {testimonial.trip}
                      </small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
