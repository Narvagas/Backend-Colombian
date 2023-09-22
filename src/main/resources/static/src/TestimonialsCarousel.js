import React from 'react';
import './stylesheets/TestimonialCarousel.css';
import imagen1 from './images-testimonial/imagen1.jpg';
import imagen2 from './images-testimonial/imagen2.jpg';
import imagen3 from './images-testimonial/imagen3.jpg';

function TestimonialsCarousel() {
  const testimonials = [
    {
      name: 'Jose',
      testimonial: '¡El café de Colombian&Coffee es increíble! Siempre me sorprende con su sabor.',
      image: imagen1,
    },
    {
      name: 'Alejandro',
      testimonial: 'No puedo resistirme a sus ofertas y variedad de café especial. ¡Lo recomiendo!',
      image: imagen2,
    },
    {
      name: 'María',
      testimonial: 'La calidad y frescura del café es inigualable. Mi lugar favorito para comprar café.',
      image: imagen3,
    },
    
  ];

  return (
    <section className="testimonials-section">
      <h2>Testimonios de Clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-image">
              <img src={testimonial.image} alt={`Testimonial ${index}`} />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.testimonial}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default TestimonialsCarousel;
