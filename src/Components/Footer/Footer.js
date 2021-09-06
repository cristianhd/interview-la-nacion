import React from 'react';
import logo from '../../assets/logo-la-nacion.svg';
import LinksSocial from './LinksSocial';
import LinksDownload from './LinksDownload';
import LinksGDAFiscal from './LinksGDAFiscal';
import '../../Style/Footer.scss';

function Footer(props) {
  const links = {
    first:[{link:'Últimas noticias',url:'#'}
      
Política
Economía
El mundo
Sociedad
Opinión
Deportes
Lifestyle
Espectáculos
Edición impresa
LN+
Club LA NACION
Revistas
OHLALÁ!
¡HOLA!
ROLLING STONE
LIVING
BRANDO
JARDÍN
LUGARES
Club del vino:
Bon vivir
Envíos:
HOP
Colecciones
Máster en periodismo
Fundación LA NACION
Avisos solidarios
    ]
  }


  return (
    <div className='footer'>
      <div className='lay'>
        <section className='links'>
          <a className='logo' href='/'>
            <img src={logo} alt='logo.svg'></img>
          </a>

          <LinksSocial />
        </section>
        <section className='bottom'>
          <LinksDownload />
          <LinksGDAFiscal />
          <LinksLine links={links}/>
          <span className='copyright'>
            Copyright 2021 SA LA NACION | Todos los derechos reservados
          </span>
        </section>
      </div>
    </div>
  );
}

export default Footer;
