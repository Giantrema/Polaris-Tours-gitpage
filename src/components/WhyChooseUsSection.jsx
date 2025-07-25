import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      id: 1,
      icon: 'bi-award',
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años organizando viajes inolvidables por toda Sudamérica.',
      stats: '15+ años',
      color: 'primary'
    },
    {
      id: 2,
      icon: 'bi-people',
      title: 'Guías Especializados',
      description: 'Equipo de guías locales certificados que conocen cada rincón de los destinos.',
      stats: '50+ guías',
      color: 'success'
    },
    {
      id: 3,
      icon: 'bi-shield-check',
      title: 'Viajes Seguros',
      description: 'Seguros de viaje completos y protocolos de seguridad en todos nuestros tours.',
      stats: '100% seguro',
      color: 'info'
    },
    {
      id: 4,
      icon: 'bi-heart',
      title: 'Atención Personalizada',
      description: 'Cada viaje se diseña según tus intereses y necesidades específicas.',
      stats: '24/7 soporte',
      color: 'danger'
    },
    {
      id: 5,
      icon: 'bi-star',
      title: 'Calidad Garantizada',
      description: 'Hoteles seleccionados, transporte de primera y experiencias auténticas.',
      stats: '4.9/5 rating',
      color: 'warning'
    },
    {
      id: 6,
      icon: 'bi-cash-coin',
      title: 'Mejor Precio',
      description: 'Tarifas competitivas sin cargos ocultos y opciones de pago flexibles.',
      stats: 'Sin cargos extra',
      color: 'dark'
    }
  ];

  const achievements = [
    {
      number: '10,000+',
      label: 'Viajeros Satisfechos',
      icon: 'bi-people-fill'
    },
    {
      number: '50+',
      label: 'Destinos Únicos',
      icon: 'bi-geo-alt-fill'
    },
    {
      number: '98%',
      label: 'Satisfacción del Cliente',
      icon: 'bi-emoji-smile-fill'
    },
    {
      number: '24/7',
      label: 'Soporte al Cliente',
      icon: 'bi-headset'
    }
  ];

  return (
    <section id="why-choose-us" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">¿Por Qué Elegir Polaris Tours?</h2>
            <p className="lead text-muted">
              Somos tu compañía de confianza para descubrir los destinos más increíbles de Sudamérica
            </p>
          </Col>
        </Row>

        {/* Razones principales */}
        <Row className="mb-5">
          {reasons.map((reason) => (
            <Col lg={4} md={6} className="mb-4" key={reason.id}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="mb-4">
                    <div 
                      className={`rounded-circle mx-auto d-flex align-items-center justify-content-center bg-${reason.color} bg-opacity-10`}
                      style={{ width: '80px', height: '80px' }}
                    >
                      <i className={`${reason.icon} fs-1 text-${reason.color}`}></i>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3">{reason.title}</h5>
                  <p className="text-muted mb-3">{reason.description}</p>
                  <div className={`badge ${reason.color === 'warning' ? 'bg-warning text-dark' : `bg-${reason.color} text-white`} fs-6 px-3 py-2`}>
                    {reason.stats}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Estadísticas destacadas */}
        <Row className="mb-5">
          <Col>
            <div className="bg-primary rounded-3 p-5 text-white">
              <Row>
                <Col lg={6} className="mb-4 mb-lg-0">
                  <h3 className="fw-bold mb-3">Nuestros Números Hablan</h3>
                  <p className="mb-0">
                    Años de experiencia y miles de sonrisas nos respaldan. 
                    Cada número representa una historia de aventura y descubrimiento.
                  </p>
                </Col>
                <Col lg={6}>
                  <Row>
                    {achievements.map((achievement, index) => (
                      <Col sm={6} className="mb-3" key={index}>
                        <div className="text-center">
                          <i 
                            className={`${achievement.icon} fs-2 mb-2 d-block stats-icon`}
                            style={{ animationDelay: `${index * 0.5}s` }}
                          ></i>
                          <div className="h3 fw-bold mb-1">{achievement.number}</div>
                          <div className="small opacity-75">{achievement.label}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Certificaciones y reconocimientos */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <div className="text-center">
              <h4 className="fw-bold mb-4">Certificaciones y Reconocimientos</h4>
              <Row className="align-items-center justify-content-center">
                <Col md={3} className="mb-3">
                  <div className="p-3">
                    <i className="bi bi-award-fill fs-1 text-warning mb-2 d-block"></i>
                    <small className="text-muted">
                      Certificación ISO 9001
                    </small>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="p-3">
                    <i className="bi bi-shield-fill-check fs-1 text-success mb-2 d-block"></i>
                    <small className="text-muted">
                      Turismo Responsable
                    </small>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="p-3">
                    <i className="bi bi-trophy-fill fs-1 text-primary mb-2 d-block"></i>
                    <small className="text-muted">
                      Mejor Operador 2024
                    </small>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="p-3">
                    <i className="bi bi-patch-check-fill fs-1 text-info mb-2 d-block"></i>
                    <small className="text-muted">
                      Miembro IATA
                    </small>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Call to action */}
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <div className="bg-light rounded-3 p-5">
              <h4 className="fw-bold mb-3">¿Listo para Tu Próxima Aventura?</h4>
              <p className="text-muted mb-4">
                Únete a miles de viajeros que han confiado en nosotros para crear recuerdos inolvidables
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button className="btn btn-primary btn-lg">
                  <i className="bi bi-calendar-check me-2"></i>
                  Planificar Mi Viaje
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  <i className="bi bi-telephone me-2"></i>
                  Hablar con un Experto
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
