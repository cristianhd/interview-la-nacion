import React from 'react';
import Body from './Body';
import Cabezal from './Cabezal';
import MegaLateral from './MegaLateral';

function Main({articles}) {
    return (
        <div className='main'>
        <div className='wrap-body'>
          <Cabezal />
          <Body articles={articles} />
        </div>
        <div className='sidebar'>
          <MegaLateral />
        </div>
      </div>
    );
}

export default Main;