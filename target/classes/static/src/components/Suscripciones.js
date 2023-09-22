import React from 'react';
// import Header from '../Header';
import Footer from '../Footer';
import '../stylesheets/Suscripciones.css'

function Suscripciones() {
  const suscripcionesOptions = [
    {
      title: 'Opción de Suscripción 1',
      description: 'Descripción de la opción de suscripción 1...',
      price: '$19.99/mes',
    },
    {
      title: 'Opción de Suscripción 2',
      description: 'Descripción de la opción de suscripción 2...',
      price: '$29.99/mes',
    },
    {
      title: 'Opción de Suscripción 3',
      description: 'Descripción de la opción de suscripción 3...',
      price: '$39.99/mes',
    },
    
  ];

  return (
    <div>
      {/* <Header /> */}
      <section className="suscripciones-page">
        <h2>Opciones de Suscripción</h2>
        <div className="suscripciones-options">
          {suscripcionesOptions.map((option, index) => (
            <div key={index} className="suscripcion-option">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <p>{option.price}</p>
              <button>Suscribirse</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Suscripciones;
