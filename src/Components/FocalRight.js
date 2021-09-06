import React from 'react';
import CardArticle from './CardArticle';

function FocalRight({article}) {
    return (
        <div className='focal'>
            <CardArticle article={article} render={2} />
        <CardArticle article={article} render={1} />
        <CardArticle article={article} render={3} />
        <CardArticle article={article} render={3} />
        <CardArticle article={article} render={3} />
        </div>
    );
}

export default FocalRight;