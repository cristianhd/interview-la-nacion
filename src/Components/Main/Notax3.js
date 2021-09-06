import React from "react";
import CardArticle from "./CardArticle";

function Notax3({ articles, title, link, url }) {
  const articleRender = articles[0];
  return (
    <div>
      <div className="modul-title">
        {title && link ? (
          <a href={url}>
            <h1>{title}</h1>
          </a>
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <div className="sect-render">
        <CardArticle article={articleRender} render={1} />
        <CardArticle article={articleRender} render={2} />
        <CardArticle article={articleRender} render={3} />
      </div>
    </div>
  );
}

export default Notax3;
