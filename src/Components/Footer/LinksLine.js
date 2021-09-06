import React from 'react';

function LinksLine({links}) {
    const rowLinks = links.map((item,index)=>{
        return <ul>
            {item}
        </ul>
    })
    return (
        <div>
            {rowLinks}
        </div>
    );
}

export default LinksLine;