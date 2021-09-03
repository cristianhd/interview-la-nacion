import React from 'react';

function LinkSocial({img,name,link}) {
    return (
        <a href={link}>
            <img src={img} alt={name}></img>
        </a>
    );
}

export default LinkSocial;