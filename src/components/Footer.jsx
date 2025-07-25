import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Componente Footer - Pie de página con información de contacto
 * 
 * Características:
 * - Información completa de la empresa
 * - Enlaces de navegación rápida
 * - Datos de contacto (teléfono, email, dirección)
 * - Enlaces legales (términos, privacidad, cookies)
 * - Redes sociales
 * - Botón flotante de WhatsApp
 * - Copyright dinámico
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Sección: Información de la empresa */}
          <Col lg={4} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-globe-americas me-2 text-primary"></i>
              Polaris Tours
            </h5>
            <p className="text-light opacity-75 mb-3">
              Tu compañía de confianza para descubrir los destinos más increíbles de Sudamérica. 
              Creamos experiencias únicas que conectan culturas y corazones.
            </p>
            
            {/* Redes sociales */}
            <div className="d-flex gap-3">
              <a href="#" className="text-light opacity-75" aria-label="Síguenos en Facebook">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-light opacity-75" aria-label="Síguenos en Instagram">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-light opacity-75" aria-label="Síguenos en Twitter">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-light opacity-75" aria-label="Suscríbete a YouTube">
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a href="#" className="text-light opacity-75" aria-label="Conéctate en LinkedIn">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </Col>

          {/* Sección: Enlaces rápidos de navegación */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light opacity-75 text-decoration-none">
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a href="#countries" className="text-light opacity-75 text-decoration-none">
                  Destinos
                </a>
              </li>
              <li className="mb-2">
                <a href="#experiences" className="text-light opacity-75 text-decoration-none">
                  Experiencias
                </a>
              </li>
              <li className="mb-2">
                <a href="#events" className="text-light opacity-75 text-decoration-none">
                  Eventos
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className="text-light opacity-75 text-decoration-none">
                  Galería
                </a>
              </li>
            </ul>
          </Col>

          {/* Servicios */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Servicios</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Tours Personalizados
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Viajes en Grupo
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Luna de Miel
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Viajes de Aventura
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Turismo Cultural
                </a>
              </li>
            </ul>
          </Col>

          {/* Contacto */}
          <Col lg={4} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Contacto</h6>
            <div className="mb-3">
              <i className="bi bi-geo-alt me-2 text-primary"></i>
              <span className="text-light opacity-75">
                Av. Principal 123, Centro Histórico<br />
                Lima, Perú
              </span>
            </div>
            <div className="mb-3">
              <i className="bi bi-telephone me-2 text-primary"></i>
              <a href="tel:+51987654321" className="text-light opacity-75 text-decoration-none">
                +51 987 654 321
              </a>
            </div>
            <div className="mb-3">
              <i className="bi bi-envelope me-2 text-primary"></i>
              <a href="mailto:info@polaristours.com" className="text-light opacity-75 text-decoration-none">
                info@polaristours.com
              </a>
            </div>
            <div className="mb-3">
              <i className="bi bi-clock me-2 text-primary"></i>
              <span className="text-light opacity-75">
                Lun - Vie: 9:00 AM - 6:00 PM<br />
                Sáb: 9:00 AM - 2:00 PM
              </span>
            </div>
          </Col>
        </Row>

        {/* Newsletter */}
        <Row className="py-4 border-top border-secondary">
          <Col lg={8} className="mb-3 mb-lg-0">
            <h6 className="fw-bold mb-2">¡Suscríbete a nuestro newsletter!</h6>
            <p className="text-light opacity-75 mb-3">
              Recibe ofertas exclusivas y descubre nuevos destinos antes que nadie.
            </p>
            <div className="d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Tu email"
                style={{ maxWidth: '300px' }}
              />
              <button className="btn btn-primary">
                <i className="bi bi-send me-1"></i>
                Suscribirse
              </button>
            </div>
          </Col>
          <Col lg={4} className="text-lg-end">
            <div className="mb-3">
              <img
                src="/src/assets/images/footer/visa.png"
                alt="Visa"
                className="me-2 opacity-75"
                style={{ height: '30px' }}
              />
              <img
                src="/src/assets/images/footer/master.jfif"
                alt="MasterCard"
                className="me-2 opacity-75"
                style={{ height: '30px' }}
              />
              <img
                src="/src/assets/images/footer/american.png"
                alt="American Express"
                className="opacity-75"
                style={{ height: '30px' }}
              />
            </div>
            <div>
              <i className="bi bi-shield-fill-check text-success me-2"></i>
              <small className="text-light opacity-75">
                Pagos 100% seguros
              </small>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="pt-4 border-top border-secondary">
          <Col md={6} className="mb-2 mb-md-0">
            <p className="text-light opacity-75 mb-0">
              &copy; {currentYear} Polaris Tours. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="text-light opacity-75 text-decoration-none me-3">
              Política de Privacidad
            </a>
            <a href="#" className="text-light opacity-75 text-decoration-none me-3">
              Términos y Condiciones
            </a>
            <a href="#" className="text-light opacity-75 text-decoration-none">
              Cookies
            </a>
          </Col>
        </Row>
      </Container>

      {/* Botón flotante de WhatsApp - posicionado de forma fija */}
      <div 
        className="position-fixed bottom-0 end-0 m-4"
        style={{ zIndex: 1050 }} // Z-index alto para que esté siempre visible
      >
        <button 
          className="btn btn-success rounded-circle p-3 shadow-lg d-flex align-items-center justify-content-center"
          style={{ width: '60px', height: '60px' }}
          title="Chatea con nosotros por WhatsApp"
          aria-label="Contactar por WhatsApp"
        >
          <i className="bi bi-whatsapp fs-4"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
