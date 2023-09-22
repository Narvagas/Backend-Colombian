import React from 'react';
import './stylesheets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2023 Colombian&Coffee | Cristyan Gasca
      </div>
      <div className="footer-right">
        <FontAwesomeIcon icon={faCcVisa} />
        <FontAwesomeIcon icon={faCcMastercard} />
        <FontAwesomeIcon icon={faCcAmex} />
        <FontAwesomeIcon icon={faCcDiscover} />
      </div>
    </footer>
  );
}

export default Footer;
