import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: './images/carousel/carousel1.avif',
      title: 'Descubre el Mundo con Polaris Tours',
      subtitle: 'Aventuras únicas te esperan en cada destino'
    },
    {
      id: 2,
      image: './images/carousel/carousel2.avif',
      title: 'Explora Culturas Fascinantes',
      subtitle: 'Sumérgete en tradiciones milenarias'
    },
    {
      id: 3,
      image: './images/carousel/carousel3.avif',
      title: 'Paisajes que Inspiran',
      subtitle: 'Naturaleza en su máximo esplendor'
    }
  ];

  return (
    <section id="home" style={{ width: '100%', overflow: 'hidden' }}>
      <Carousel fade interval={5000} style={{ width: '100%' }} className="position-relative">
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              className="d-block w-100 position-relative"
              style={{
                height: '70vh',
                minHeight: '400px',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                overflow: 'hidden'
              }}
            >
              <Carousel.Caption className="h-100 d-flex flex-column justify-content-center position-absolute w-100" style={{ left: 0, right: 0, transform: 'none' }}>
                <div className="container-fluid px-3">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">
                      <h1 className="display-4 fw-bold text-white mb-3">{slide.title}</h1>
                      <p className="lead text-white mb-4">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
