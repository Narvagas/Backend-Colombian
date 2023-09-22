import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './stylesheets/BlogSection.css';
import imagen1 from './images-blog/imagen1.jpg';
import imagen2 from './images-blog/imagen2.jpg';
import imagen3 from './images-blog/imagen3.jpg';

function BlogSection() {
  const blogArticles = [
    {
      title: 'El arte de degustar café: ',
      content: 'Un viaje a través del mundo del café de especialidad..',
      image: imagen1,
    },
    {
      title: 'El Sabor de Colombia:',
      content: 'Explorando los Sabores de los Cafés colombianos...',
      image: imagen2,
    },
    {
      title: 'El Café Perfecto:',
      content: 'Descubriendo los Sabores de los Cafés artesanales...',
      image: imagen3,
    },
    
  ];

  return (
    <section className="blog-section">
      <h2>Blog</h2>
      <div className="blog-articles-carousel">
        <Carousel showArrows={false} infiniteLoop={true} showStatus={false}>
          {blogArticles.map((article, index) => (
            <div key={index} className="blog-article">
              <div className="article-image">
                <img src={article.image} alt={`Imagen del artículo ${index}`} />
              </div>
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                <button>Leer más</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default BlogSection;
