import React from "react";
import FocalRight from "./FocalRight";
import "../../Style/Body.scss";
import Notax3 from "./Notax3";

function Body({ articles }) {
  return (
    <div className="body">
      <section>
        <FocalRight
          articles={articles}
          title="Focal Derecho"
          link={true}
          url="#"
        />
      </section>
      <section>
        <Notax3 articles={articles} title="Notas x 3" link={true} url="#" />
      </section>
    </div>
  );
}

export default Body;
