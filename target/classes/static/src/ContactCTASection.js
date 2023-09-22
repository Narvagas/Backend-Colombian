import React from 'react';
import './stylesheets/ContactCTASection.css';
import cafeImage from './cafe-images/cafe5.jpg';

function ContactCTASection() {
  return (
    <section className="contact-cta-section">
      <div className="cta-content">
        <div className="cta-image">
          <img src={cafeImage} alt="Café y libros" />
        </div>
        <div className="cta-text">
          <h2>Contacta con Nosotros</h2>
          <p>¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte! Contáctanos para más información.</p>
          <button className="cta-button">¡Contáctanos!</button>
        </div>
      </div>
    </section>
  );
}

export default ContactCTASection;
