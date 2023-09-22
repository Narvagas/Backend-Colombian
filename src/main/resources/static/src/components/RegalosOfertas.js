import React from 'react';
// import Header from '../Header';
import Footer from '../Footer';
import '../stylesheets/RegalosOfertas.css'

function RegalosOfertas() {
  const regalosOfertas = [
    {
      title: 'Oferta Especial 1',
      description: 'Descripción de la oferta especial 1...',
    },
    {
      title: 'Oferta Especial 2',
      description: 'Descripción de la oferta especial 2...',
    },
    {
      title: 'Regalo 1',
      description: 'Descripción del regalo 1...',
    },
    
  ];

  return (
    <div>
      {/* <Header /> */}
      <section className="regalos-ofertas-page">
        <h2>Ofertas y Regalos</h2>
        <div className="regalos-ofertas-items">
          {regalosOfertas.map((item, index) => (
            <div key={index} className="regalos-ofertas-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>Ver Detalles</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default RegalosOfertas;
