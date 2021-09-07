import React from "react";
import LinksGDAFiscal from "./LinksGDAFiscal.js";
import LinksLine from "./LinksLine.js";

function Bottom({ bottomR, bottomL }) {
  return (
    <section className="bottom">
      <div className="column">
        <div className="bottom">
          <LinksLine links={bottomL} name="link-bottomL" />
          <LinksLine links={bottomR} name="link-bottomR" />
        </div>
        <div className="bottom-rev">
          <LinksGDAFiscal />
          <span className="copyright">
            Copyright 2021 SA LA NACION | Todos los derechos reservados
          </span>
        </div>
      </div>
    </section>
  );
}

export default Bottom;
