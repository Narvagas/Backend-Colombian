import React from 'react';
// import Header from '../Header';
import CafeSpecialSection from '../CafeSpecialSection';
import InfoSection from '../InfoSection';
import BrandsCarousel from '../BrandsCarousel';
import BlogSection from '../BlogSection';
import TestimonialsCarousel from '../TestimonialsCarousel';
import ContactCTASection from '../ContactCTASection';
import Footer from '../Footer';

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <CafeSpecialSection />
      <InfoSection />
      <BrandsCarousel />
      <BlogSection />
      <TestimonialsCarousel />
      <ContactCTASection />
      <Footer />
    </div>
  );
}

export default Home;
