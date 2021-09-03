import React from 'react';
import '../Style/Article.scss'

function Article({elements}) {

    return (
        <div className='article'>
           {(elements.img) && (<img className='art-img' src={elements.img} alt='img-article'></img>)}
            <h1 className='lead'>{elements.lead}.<a className='title' href={elements.url}>{elements.title}</a></h1>
            {(elements.subheader) && (<h2 className='subh'>{elements.subheader}</h2>)}
            {(elements.marquee) && (<span className='marq'>{elements.marquee}</span>)}
            {(elements.imgautor) && (<img className='imgautor' src={elements.imgautor} alt='img-autor'></img>)}
            {(elements.autor) && (<span className='nameautor'>{elements.autor}</span>)}
        </div>
    );
}

export default Article;