import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Aventura en la Amazonía',
      image: '/src/assets/images/experiences/Amazonia.jpg',
      description: 'Explora la selva tropical más grande del mundo y conoce su biodiversidad única.',
      duration: '7 días',
      difficulty: 'Moderada',
      icon: 'bi-tree'
    },
    {
      id: 2,
      title: 'Trekking en los Andes',
      image: '/src/assets/images/experiences/Andes.jpg',
      description: 'Camina por senderos ancestrales y descubre paisajes montañosos impresionantes.',
      duration: '5 días',
      difficulty: 'Alta',
      icon: 'bi-mountain'
    },
    {
      id: 3,
      title: 'Buceo en el Caribe',
      image: '/src/assets/images/experiences/Buceo_caribe.webp',
      description: 'Sumérgete en aguas cristalinas y descubre arrecifes de coral espectaculares.',
      duration: '4 días',
      difficulty: 'Baja',
      icon: 'bi-water'
    },
    {
      id: 4,
      title: 'Safari Fotográfico',
      image: '/src/assets/images/experiences/Safari.avif',
      description: 'Captura la vida salvaje en su hábitat natural con guías especializados.',
      duration: '6 días',
      difficulty: 'Baja',
      icon: 'bi-camera'
    },
    {
      id: 5,
      title: 'Pirámides de Egipto',
      image: '/src/assets/images/experiences/Piramides_Egipto.jfif',
      description: 'Explora las majestuosas pirámides y sumérgete en la historia antigua.',
      duration: '3 días',
      difficulty: 'Baja',
      icon: 'bi-cup-hot'
    },
    {
      id: 6,
      title: 'Antártida',
      image: '/src/assets/images/experiences/Antartida.avif',
      description: 'Explora el continente helado y su vida salvaje única.',
      duration: '2 días',
      difficulty: 'Baja',
      icon: 'bi-star'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Baja':
        return 'success';
      case 'Moderada':
        return 'warning';
      case 'Alta':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  return (
    <section id="experiences" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Experiencias Únicas</h2>
            <p className="lead text-muted">
              Vive aventuras inolvidables diseñadas para conectarte con la naturaleza y las culturas locales
            </p>
          </Col>
        </Row>
        <Row>
          {experiences.map((experience) => (
            <Col lg={4} md={6} className="mb-4" key={experience.id}>
              <Card className="h-100 shadow-sm border-0 overflow-hidden">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={experience.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-dark bg-opacity-75">
                      <i className={`${experience.icon} me-1`}></i>
                      {experience.duration}
                    </span>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className={`badge bg-${getDifficultyColor(experience.difficulty)}`}>
                      {experience.difficulty}
                    </span>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 mb-3">{experience.title}</Card.Title>
                  <Card.Text className="text-muted mb-4 flex-grow-1">
                    {experience.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      <i className="bi bi-clock me-1"></i>
                      {experience.duration}
                    </small>
                    <button className="btn btn-outline-primary btn-sm">
                      Más Info
                    </button>
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

export default ExperiencesSection;
