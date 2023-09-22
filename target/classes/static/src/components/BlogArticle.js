import React from 'react';

function BlogArticle({ title, content }) {
  return (
    <div className="blog-article">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default BlogArticle;
