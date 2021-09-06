import React from "react";
import CardArticle from "./CardArticle";
import FocalRight from "./FocalRight";
import "../../Style/Body.scss";

function Body({ articles }) {
  return (
    <div className="body">
      <section>
        <FocalRight articles={articles} title='Focal Derecho' link={true} url='#' />
      </section>
      <section>
        <div className="sect-render">
          <CardArticle article={articles[0]} render={1} />
          <CardArticle article={articles[0]} render={2} />
          <CardArticle article={articles[0]} render={3} />
        </div>
      </section>
    </div>
  );
}

export default Body;
