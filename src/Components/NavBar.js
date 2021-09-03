import React from 'react';
import logo from '../assets/logo-la-nacion.svg';
import search from '../assets/search-icon.svg';
import hamburguer from '../assets/ham-icon.svg';
import '../Style/NavBar.scss';

function NavBar(props) {
  return (
    <div className='navbar'>
    

      <div className='btns-left'>
        <button className='btn-section'>
        SECCIONES
        <img src={hamburguer} alt='ham-icon.svg'></img>
        </button>
        <button className='btn-search'>
          <img src={search} alt='search-icon'></img>
          
        </button>
      </div>

      <div className='logo'>
        <img className='' src={logo} alt='logo.svg'></img>
      </div>

      <div className='btns-right'>
        <a className='btn-suscribe' href='/suscribe'>
          SUSCRIBITE
        </a>
            <img src={search} alt='search-icon'></img>
        
        <button className='btn-signin'>INGRESAR</button>
      </div>
    
    </div>
  );
}

export default NavBar;
