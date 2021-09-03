import React from 'react';
import CardArticle from './CardArticle';

function Body({article}) {
    return (
        <div>
            <CardArticle article={article} render={3}/>
        </div>
    );
}

export default Body;