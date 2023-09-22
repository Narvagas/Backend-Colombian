import React from 'react';
// import Header from '../Header';
import Footer from '../Footer';
import '../stylesheets/Souvenirs.css'

function Souvenirs() {
  const souvenirsList = [
    {
      title: 'Souvenir 1',
      description: 'Descripción del souvenir 1...',
    },
    {
      title: 'Souvenir 2',
      description: 'Descripción del souvenir 2...',
    },
    {
      title: 'Souvenir 3',
      description: 'Descripción del souvenir 3...',
    },
    
  ];

  return (
    <div>
      {/* <Header /> */}
      <section className="souvenirs-page">
        <h2>Souvenirs</h2>
        <div className="souvenirs-list">
          {souvenirsList.map((souvenir, index) => (
            <div key={index} className="souvenir-item">
              <h3>{souvenir.title}</h3>
              <p>{souvenir.description}</p>
              <button>Ver Detalles</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Souvenirs;
