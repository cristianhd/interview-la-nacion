import React from 'react';
import CardArticle from '../Main/CardArticle.js';
import '../../Style/FocalRight.scss';

function FocalRight({ articles, title, link, url }) {
  const BlockArticles = articles.slice(1, 4);
  const articlesLeft = BlockArticles.map((item, index) => {
    return index ? (
      <CardArticle key={index} article={item} render={index + 1} />
    ) : (
      <></>
    );
  });

  return (
    <div className='focal'>
      <div className='modul-title'>
        {title && link ? (
          <a href={url}>
            <h1>{title}</h1>
          </a>
        ) : (
          <h1>{title}</h1>
        )}
      </div>

      {BlockArticles && (
        <div className='block-art'>
          <div className='art-left'>{articlesLeft}</div>
          <div className='art-right'>
            <CardArticle article={BlockArticles[0]} render={1} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FocalRight;
