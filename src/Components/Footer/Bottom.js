import React from "react";
import { links } from "../../DataDummy/linksLineFooter.js";
import LinksGDAFiscal from "./LinksGDAFiscal.js";
import LinksLine from "./LinksLine.js";

function Bottom(props) {
  const { bottomR, bottomL } = links;
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
