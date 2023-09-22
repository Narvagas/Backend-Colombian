import React from "react";
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import './stylesheets/Header.css';


function Header() {

  return (
    <header className="header-container"> 
      <div className="header-title">Colombian&Coffee</div> 
      <nav>
        <div className="search-icon">
          <FaSearch />
        </div>
        <ul className="nav-list"> 
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/cafe-tradicional">CAFÉ TRADICIONAL</Link></li>
          <li><Link to="/cafe-especial">CAFÉ ESPECIAL</Link></li>
          <li><Link to="/souvenirs">SOUVENIRS</Link></li>
          <li><Link to="/regalos-ofertas">REGALOS Y OFERTAS</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/suscripciones">SUSCRIPCIONES</Link></li>
          
        </ul>
        
      </nav>
      <div className="register-icon">
          {/* Usa Link para redirigir al usuario a la página de registro */}
          <Link to="/register">
            <FaUser />
          </Link>
        </div>
    </header>
  );
}

export default Header;
