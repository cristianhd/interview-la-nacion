import React from "react";
import CardArticle from "../Main/CardArticle.js";
import '../../Style/FocalRight.scss'

function FocalRight({ articles, title, link, url }) {
  const BlockArticles = articles.slice(1, 4);
  console.log(BlockArticles);
 

  return (
    <div className="focal">
    <div className='modul-title'>

      {title && link ? (
        <a href={url}>
          <h1>{title}</h1>
        </a>
      ) : (
        <h1>{title}</h1>
      )}
    </div>
      
      <div className="block-art">
        {BlockArticles &&
          BlockArticles.map((item, index) => {
            return (
              <CardArticle
                key={index}
                article={item}
                render={index+1}
              />
            );
          })}
      </div>
    </div>
  );
}

export default FocalRight;
