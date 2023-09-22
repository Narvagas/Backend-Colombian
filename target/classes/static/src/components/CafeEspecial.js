import React from 'react';
// import Header from '../Header';
import Footer from '../Footer';
import '../stylesheets/CafeEspecial.css'

function CafeEspecial() {
  const cafeSpecials = [
    {
      title: 'Café Especial 1',
      description: 'Descripción del café especial 1...',
    },
    {
      title: 'Café Especial 2',
      description: 'Descripción del café especial 2...',
    },
    {
      title: 'Café Especial 3',
      description: 'Descripción del café especial 3...',
    },
    
  ];

  return (
    <div>
      {/* <Header /> */}
      <section className="cafe-especial-page">
        <h2>Cafés Especiales</h2>
        <div className="cafe-specials-details">
          {cafeSpecials.map((cafe, index) => (
            <div key={index} className="cafe-special-detail">
              <h3>{cafe.title}</h3>
              <p>{cafe.description}</p>
              <button>Ver Detalles</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CafeEspecial;
