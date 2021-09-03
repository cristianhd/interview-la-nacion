import React from 'react';
import logo from '../assets/logo-la-nacion.svg';
import LinkSocial from './LinkSocial';
import inst from '../assets/inst-icon.svg';
import rss from '../assets/rss-icon.svg';
import twitter from '../assets/twitter-icon.svg';
import face from '../assets/face-icon.svg';
import '../Style/Footer.scss'


function Footer(props) {
    return (
        <div className='footer'>

        <section className='links'>
            <a className='Logo' href='/'>
                <img src={logo} alt='logo.svg'></img>
            </a>
            <div className="social">
                <LinkSocial
                    img={face}
                    name="face-icon"
                    link='#'
                />
                <LinkSocial
                    img={twitter}
                    name="twitter-icon"
                    link='#'
                />
                <LinkSocial
                    img={inst}
                    name="inst-icon"
                    link='#'
                />
                <LinkSocial
                    img={rss}
                    name="rss-icon"
                    link='#'
                />

            </div>
        </section>
        <section className='bottom'>
            <a>
                <img src={} alt=''></img>
                <span>Miembro de GDA. Grupo de Diarios América</span>
            </a>
        </section>
        </div>
    );
}

export default Footer;