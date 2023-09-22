import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './Header';
import CafeTradicional from './components/CafeTradicional';
import CafeEspecial from './components/CafeEspecial';
import Souvenirs from './components/Souvenirs';
import RegalosOfertas from './components/RegalosOfertas';
import Blog from './components/Blog';
import Suscripciones from './components/Suscripciones';
import CafeSpecialSection from './CafeSpecialSection';
import InfoSection from './InfoSection';
import BrandsCarousel from './BrandsCarousel';
import BlogSection from './BlogSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import ContactCTASection from './ContactCTASection';
import FooterLinksSection from './FooterLinksSection';
import Footer from './Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cafe-tradicional" element={<CafeTradicional />} />
          <Route path="/cafe-especial" element={<CafeEspecial />} />
          <Route path="/souvenirs" element={<Souvenirs />} />
          <Route path="/regalos-ofertas" element={<RegalosOfertas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/suscripciones" element={<Suscripciones />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <CafeSpecialSection />
        <InfoSection />
        <BrandsCarousel /> 
        <BlogSection />
        <TestimonialsCarousel />
        <ContactCTASection />
        <FooterLinksSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
