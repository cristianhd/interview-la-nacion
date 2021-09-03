import React from 'react';
import CardArticle from './CardArticle';

function Body({article}) {
    return (
        <div>
            <CardArticle article={article} render={1}/>
        </div>
    );
}

export default Body;