import React from "react";
import logo from "../../assets/logo-la-nacion.svg";
import LinksSocial from "./LinksSocial";
import LinksDownload from "./LinksDownload";
import LinksGDAFiscal from "./LinksGDAFiscal";
import LinksLine from "./LinksLine";
import { links } from "../../linksLineFooter.js";
import "../../Style/Footer.scss";
import LinkImg from "./LinkImg";

function Footer(props) {
  const { secciones, revistas, clubvino, envios } = links;
  return (
    <div className="footer">
      <div className="lay">
        <section className="top">
          <div className="links">
          <div className='logo'>

          <LinkImg img={logo} name='logo.svg' link='/'/>
          </div>
            
          <LinksSocial />
          </div>
          <LinksDownload />
        </section>
        <section className="medium">
         
          <div className='block-links'>

            <LinksLine links={secciones} name='link-sec'/>
            <LinksLine links={revistas} name='link-rev'/>
            <div className='wrap'>

            <LinksLine links={clubvino} name='link-club'/>
            <LinksLine links={envios} name='link-envios'/>
            </div>
          </div>
          
        </section>
        <section className="bottom">
        <div className='wrap'>

          <LinksGDAFiscal />
          <span className="copyright">
            Copyright 2021 SA LA NACION | Todos los derechos reservados
          </span>
        </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
