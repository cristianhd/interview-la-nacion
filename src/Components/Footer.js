import React from "react";
import logo from "../assets/logo-la-nacion.svg";

import "../Style/Footer.scss";
import LinksSocial from "./LinksSocial";
import LinksDownload from "./LinksDownload";
import LinksGDAFiscal from "./LinksGDAFiscal";

function Footer(props) {
  return (
    <div className="footer">
      <section className="links">
        <a className="Logo" href="/">
          <img src={logo} alt="logo.svg"></img>
        </a>

        <LinksSocial />
      </section>
      <section className="bottom">
        <LinksDownload />
        <LinksGDAFiscal />
        <span className='copyright'>Copyright 2021 SA LA NACION | Todos los derechos reservados</span>
      </section>
    </div>
  );
}

export default Footer;
