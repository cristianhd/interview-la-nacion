import React from "react";
import LinksLine from "./LinksLine";

function Medium({ secciones, revistas, clubvino, envios }) {
  return (
    <section className="medium">
      <div className="block-links">
        <LinksLine links={secciones} name="link-sec" />
        <LinksLine links={revistas} name="link-rev" />
        <div className="wrap">
          <LinksLine links={clubvino} name="link-club" />

          <LinksLine links={envios} name="link-envios" />
        </div>
      </div>
    </section>
  );
}

export default Medium;
