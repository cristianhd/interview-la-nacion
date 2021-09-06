import React from "react";
import CardArticle from "../Main/CardArticle.js";

function FocalRight({ articles, title , link, url }) {
  const BlockArticles = articles.slice(1,6)
  console.log(BlockArticles);
  function getRender(index) {
    if(index===0) return 2
    if(index===1) return 1
    return 3
  }
  
  return (
    <div className="focal">
    {title && (link) ? (<a href={url}>
      <h1>{title}</h1>
    </a>):
    (<h1>{title}</h1>)
    }
    <div className='block-art'>

    {
      BlockArticles && BlockArticles.map((item,index)=>{
      return <CardArticle key={index} article={item} render={getRender(index)}/>
      })
    }
    </div>
    </div>
   
  );
}

export default FocalRight;
