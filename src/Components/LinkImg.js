import React from 'react';

function LinkImg({img,name,link}) {
    return (
        <a href={link}>
            <img src={img} alt={name}></img>
        </a>
    );
}

export default LinkImg;