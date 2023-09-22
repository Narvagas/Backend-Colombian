import React from 'react';
import { FaShippingFast, FaShieldAlt, FaLock, FaPhone } from 'react-icons/fa';
import './stylesheets/InfoSection.css';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-content">
        <div className="info-item">
          <FaShippingFast className="info-icon" />
          <h3>Envíos Seguros</h3>
          <p>Todos nuestros envíos son seguros y confiables, para que recibas tu café en perfectas condiciones.</p>
        </div>
        <div className="info-item">
          <FaShieldAlt className="info-icon" />
          <h3>Garantía y Reembolso</h3>
          <p>Nuestros productos cuentan con políticas de garantía y reembolso para tu tranquilidad.</p>
        </div>
        <div className="info-item">
          <FaLock className="info-icon" />
          <h3>Seguridad de Pagos</h3>
          <p>Tu seguridad es nuestra prioridad. Realiza tus pagos con confianza en nuestro sitio.</p>
        </div>
        <div className="info-item">
          <FaPhone className="info-icon" />
          <h3>Llámanos</h3>
          <p>Llámanos al +3124870828 para resolver tus dudas y brindarte la mejor atención.</p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
