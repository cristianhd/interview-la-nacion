import React from "react";
import LinksGDAFiscal from "./LinksGDAFiscal";
import LinksLine from "./LinksLine";
import { links } from "../../DataDummy/linksLineFooter.js";

import "../../Style/Footer.scss";
import Top from "./Top";
import Medium from "./Medium";
import Bottom from "./Bottom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="wrap-footer">
        <Top />
        <Medium />
        <Bottom />
      </div>
    </div>
  );
}

export default Footer;
