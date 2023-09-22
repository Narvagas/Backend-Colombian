import React from 'react';
// import Header from '../Header';
import Footer from '../Footer';
import '../stylesheets/CafeTradicional.css'

function CafeTradicional() {
  const cafeTradicionalTypes = [
    {
      title: 'Café Tradicional 1',
      description: 'Descripción del café tradicional 1...',
    },
    {
      title: 'Café Tradicional 2',
      description: 'Descripción del café tradicional 2...',
    },
    {
      title: 'Café Tradicional 3',
      description: 'Descripción del café tradicional 3...',
    },
    
  ];

  return (
    <div>
      {/* <Header /> */}
      <section className="cafe-tradicional-page">
        <h2>Cafés Tradicionales</h2>
        <div className="cafe-tradicional-types">
          {cafeTradicionalTypes.map((cafe, index) => (
            <div key={index} className="cafe-tradicional-type">
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

export default CafeTradicional;
