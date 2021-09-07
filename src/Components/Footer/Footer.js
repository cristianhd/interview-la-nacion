import React from "react";
import "../../Style/Footer.scss";
import Top from "./Top";
import Medium from "./Medium";
import Bottom from "./Bottom";
import { LINKS } from "../../DataDummy/linksLineFooter.js";

function Footer(props) {
  const { secciones, revistas, clubvino, envios, bottomR, bottomL } = LINKS;
  return (
    <div className="footer">
      <div className="wrap-footer">
        <Top />
        <Medium
          secciones={secciones}
          revistas={revistas}
          clubvino={clubvino}
          envios={envios}
        />
        <Bottom bottomR={bottomR} bottomL={bottomL} />
      </div>
    </div>
  );
}

export default Footer;
