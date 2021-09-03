import React from 'react';
import CardArticle from './CardArticle';

function Body({articles}) {
    return (
        <div>
            <CardArticle article={articles[1]}/>
        </div>
    );
}

export default Body;