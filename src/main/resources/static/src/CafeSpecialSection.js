import React from 'react';
import cafe1 from './cafe-images/cafe1.jpg';
import cafe2 from './cafe-images/cafe2.jpg';
import cafe3 from './cafe-images/cafe3.jpg';
import './stylesheets/CafeSpecialSection.css';

function CafeSpecialSection() {
  const cafeSpecials = [
    {
      title: 'Café Especial 1',
      description: 'Descripción del café especial 1.',
      image: cafe1,
    },
    {
      title: 'Café Especial 2',
      description: 'Descripción del café especial 2.',
      image: cafe2,
    },
    {
      title: 'Café Especial 3',
      description: 'Descripción del café especial 3.',
      image: cafe3,
    },
    
  ];

  return (
    <section className="cafe-special-section">
      <h2>
        Nuestros Cafés Especiales
        <span className="cafe-icon">☕</span>
        </h2>
      <div className="cafe-specials">
        {cafeSpecials.map((cafe, index) => (
          <div key={index} className="cafe-special">
            <img src={cafe.image} alt={cafe.title} />
            <h3>{cafe.title}</h3>
            <p>{cafe.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CafeSpecialSection;
