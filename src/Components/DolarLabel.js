import React from 'react';

function DolarLabel({bna,blue}) {
    return (
        <div className='dolar'>
            <label className='dolar-bna'>BNA: ${bna.buy}/${bna.sell}</label>
            <label className='dolar-blue'>Blue: ${blue.buy}/${blue.sell}</label>
        </div>
    );
}

export default DolarLabel;