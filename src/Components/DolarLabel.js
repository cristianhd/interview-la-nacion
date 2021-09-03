import React from 'react';
import '../Style/DolarLabel.scss'

function DolarLabel({bna,blue}) {
    return (
        <div className='dolar'>
            <a className="a-dolar" href="/dolar">Dolar:</a>
            <span className='dolar-bna'>BNA: ${bna.buy}/${bna.sell}</span>
            <span className='dolar-blue'> Blue: ${blue.buy}/${blue.sell}</span>
        </div>
    );
}

export default DolarLabel;