import React from "react";
import CardArticle from "./CardArticle";
import FocalRight from "./FocalRight";
import "../../Style/Body.scss";

function Body({ article }) {
  return (
    <div className="body">
      <section>
        <FocalRight article={article} />
      </section>
      <section>
        <div className="sect-render">
          <CardArticle article={article} render={1} />
          <CardArticle article={article} render={2} />
          <CardArticle article={article} render={3} />
        </div>
      </section>
    </div>
  );
}

export default Body;