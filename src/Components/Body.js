import React from 'react';
import CardArticle from './CardArticle';
import '../Style/Body.scss'

function Body({article}) {
    return (
        <div>
            <section className='art-render'>
            <CardArticle article={article} render={1}/>
            <CardArticle article={article} render={2}/>
            <CardArticle article={article} render={3}/>

            </section>
        </div>
    );
}

export default Body;