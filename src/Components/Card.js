import React from 'react';
import Chapita from './Chapita';
import '../Style/Card.scss'

function Card({type,article}) {
    return (
        <section className='card'>
           
            <Chapita type={type}/>
            <h1>{article.lead}.{article.title}</h1>
            <span>{article.marquee} / {article.autor}</span>
            
        </section>
    );
}

export default Card;