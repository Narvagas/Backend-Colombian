import React from 'react';
// import Header from '../Header';
import BlogArticle from './BlogArticle'; 
import Footer from '../Footer';

function Blog() {
  const blogArticles = [
    {
      title: 'Título del Artículo 1',
      content: 'Contenido del artículo 1...',
    },
    {
      title: 'Título del Artículo 2',
      content: 'Contenido del artículo 2...',
    },
    {
      title: 'Título del Artículo 3',
      content: 'Contenido del artículo 3...',
    },
    
  ];

  return (
    <div>
      {/* <Header /> */}
      <section className="blog-page">
        <h2 style={{ textAlign: 'center' }}>Nuestro Blog</h2>
        <div className="blog-articles">
          {blogArticles.map((article, index) => (
            <BlogArticle key={index} title={article.title} content={article.content} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
