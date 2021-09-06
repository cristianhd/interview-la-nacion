import React from "react";
import logo from "../../assets/logo-la-nacion.svg";
import LinksSocial from "./LinksSocial";
import LinksDownload from "./LinksDownload";
import LinksGDAFiscal from "./LinksGDAFiscal";
import "../../Style/Footer.scss";

function Footer(props) {
  return (
    <div className="footer">
      <div className="lay">
        <section className="links">
          <a className="logo" href="/">
            <img src={logo} alt="logo.svg"></img>
          </a>

          <LinksSocial />
        </section>
        <section className="bottom">
          <LinksDownload />
          <LinksGDAFiscal />
          <span className="copyright">
            Copyright 2021 SA LA NACION | Todos los derechos reservados
          </span>
        </section>
      </div>
    </div>
  );
}

export default Footer;
