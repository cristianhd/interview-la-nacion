import React from 'react';
import LinkImg from './LinkImg';
import LinksDownload from './LinksDownload';
import LinksSocial from './LinksSocial';
import logo from "../../assets/logo-la-nacion.svg";

function Top(props) {
    return (
        <section className="top">
        <div className="links">
        <div className='logo'>

        <LinkImg img={logo} name='logo.svg' link='/'/>
        </div>
          
        <LinksSocial />
        </div>
        <LinksDownload />
      </section>
    );
}

export default Top;