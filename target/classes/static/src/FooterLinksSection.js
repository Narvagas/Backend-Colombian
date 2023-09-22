import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/FooterLinksSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function FooterLinksSection() {
  const mainMenuLinks = [
    'Todo el café',
    'Suscripciones',
    'Herramientas',
    'Kits y regalos'
  ];

  const learnMoreLinks = [
    'Recetas',
    'Términos de servicio',
    'Ayuda',
    'Política de privacidad'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: faFacebook },
    { name: 'Instagram', icon: faInstagram },
    { name: 'Twitter', icon: faTwitter },
    { name: 'Correo electrónico', icon: faEnvelope }
  ];

  return (
    <section className="footer-links-section">
      <div className="footer-links-content">
        <div className="footer-column">
          <div className="footer-column-container">
            <h2>Menú principal</h2>
            <ul>
              {mainMenuLinks.map((link, index) => (
                <li key={index}><Link to="/register"></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-container">
            <h2>Aprende más</h2>
            <ul>
              {learnMoreLinks.map((link, index) => (
                <li key={index}><Link to="/register"></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-container">
            <h2>Síguenos</h2>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link to="/register">  
                    <FontAwesomeIcon icon={link.icon} /> {link.name}
                    </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterLinksSection;

