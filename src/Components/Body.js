import React from "react";
import CardArticle from "./CardArticle";
import "../Style/Body.scss";
import FocalRight from "./FocalRight";

function Body({ article }) {
  return (
    <div>
    <section>
    <FocalRight article ={article}/>
    </section>
      <section className="art-render">
        <CardArticle article={article} render={1} />
        <CardArticle article={article} render={2} />
        <CardArticle article={article} render={3} />
      </section>
    </div>
  );
}

export default Body;
