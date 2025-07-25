import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

const GallerySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/src/assets/images/gallery/Machu Picchu.avif',
      title: 'Machu Picchu, Perú',
      category: 'Arqueología',
      description: 'La ciudadela inca más famosa del mundo'
    },
    {
      id: 2,
      src: '/src/assets/images/gallery/Atacama.webp',
      title: 'Desierto de Atacama, Chile',
      category: 'Paisajes',
      description: 'El desierto más árido del mundo'
    },
    {
      id: 3,
      src: '/src/assets/images/gallery/cristo.jpg',
      title: 'Cristo Redentor, Brasil',
      category: 'Monumentos',
      description: 'Símbolo icónico de Río de Janeiro'
    },
    {
      id: 4,
      src: '/src/assets/images/gallery/amazonia.jpg',
      title: 'Amazonía, Brasil',
      category: 'Naturaleza',
      description: 'Pulmón verde del planeta'
    },
    {
      id: 5,
      src: '/src/assets/images/gallery/cartagena.jpg',
      title: 'Cartagena, Colombia',
      category: 'Colonial',
      description: 'Ciudad amurallada del Caribe'
    },
    {
      id: 6,
      src: '/src/assets/images/gallery/buenos_aires.jpg',
      title: 'Buenos Aires, Argentina',
      category: 'Urbano',
      description: 'Capital del tango y la elegancia'
    },
    {
      id: 7,
      src: '/src/assets/images/gallery/galapagos.webp',
      title: 'Islas Galápagos, Ecuador',
      category: 'Fauna',
      description: 'Laboratorio natural de la evolución'
    },
    {
      id: 8,
      src: '/src/assets/images/gallery/cordillera.jfif',
      title: 'Cordillera de los Andes',
      category: 'Montañas',
      description: 'La cadena montañosa más larga del mundo'
    },
    {
      id: 9,
      src: '/src/assets/images/gallery/carnaval.jpg',
      title: 'Carnaval de Río',
      category: 'Cultura',
      description: 'La fiesta más colorida del mundo'
    }
  ];

  const categories = ['Todos', 'Arqueología', 'Paisajes', 'Monumentos', 'Naturaleza', 'Colonial', 'Urbano', 'Fauna', 'Montañas', 'Cultura'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredImages = activeCategory === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Galería Interactiva</h2>
            <p className="lead text-muted">
              Explora los destinos más increíbles a través de nuestras fotografías
            </p>
          </Col>
        </Row>

        {/* Filtros de categoría */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Grid de imágenes */}
        <Row>
          {filteredImages.map((image, index) => (
            <Col lg={4} md={6} className="mb-4" key={image.id}>
              <div 
                className="gallery-item position-relative overflow-hidden rounded shadow-sm"
                style={{ cursor: 'pointer', height: '250px' }}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div 
                  className="position-absolute bottom-0 start-0 w-100 p-3"
                  style={{
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white'
                  }}
                >
                  <h6 className="mb-1 fw-bold">{image.title}</h6>
                  <small className="text-light">
                    <i className="bi bi-tag me-1"></i>
                    {image.category}
                  </small>
                </div>
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-dark bg-opacity-75">
                    <i className="bi bi-zoom-in"></i>
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal para imagen ampliada */}
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton className="border-0">
            <Modal.Title>{selectedImage?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            {selectedImage && (
              <div>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-100"
                  style={{ maxHeight: '70vh', objectFit: 'contain' }}
                />
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-primary">{selectedImage.category}</span>
                  </div>
                  <p className="text-muted mb-0">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default GallerySection;
