import React from 'react';
import Article from './Article';

function CardArticle({ article, render }) {
 
  const { lead, title, subheader, img, marquee, autor, imgautor, url } =
    article;

  switch (render) {
    case 1:
      return (
        <article className='article'>
          <Article elements={{ img, lead, title, marquee, url }} />
        </article>
      );

    case 2:
      return (
        <article className='article'>
          <Article elements={{ lead, title, subheader, marquee, url }} />
        </article>
      );

    case 3:
      return (
        <article className='article'>
          <Article elements={{ lead, title, imgautor, autor, url }} />
        </article>
      );

    default:
      return <div></div>;
  }
}

export default CardArticle;
