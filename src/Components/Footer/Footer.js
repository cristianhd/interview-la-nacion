import React from "react";
import logo from "../../assets/logo-la-nacion.svg";
import LinksSocial from "./LinksSocial";
import LinksDownload from "./LinksDownload";
import LinksGDAFiscal from "./LinksGDAFiscal";
import LinksLine from "./LinksLine";
import { links } from "../../linksLineFooter.js";
import LinkImg from "./LinkImg";
import "../../Style/Footer.scss";

function Footer(props) {
  const { secciones, revistas, clubvino, envios, bottomR, bottomL  } = links;
  return (
    <div className="footer">
      <div className='wrap-footer'>
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
        <div className='column'>
        <div className='bottom'>

            <LinksLine links={bottomL} name='link-bottomL'/>
            <LinksLine links={bottomR} name='link-bottomR'/>
        </div>
<div className='bottom-rev'>

          <LinksGDAFiscal />
          <span className="copyright">
            Copyright 2021 SA LA NACION | Todos los derechos reservados
          </span>
</div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
