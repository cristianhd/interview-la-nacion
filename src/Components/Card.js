import React from 'react';
import Chapita from './Chapita';
import '../Style/Card.scss'
import cardfs from '../assets/cardfs.svg'

function Card({type,article}) {
    return (
        <section className='card'>
            <img className='img-card' src={cardfs} alt='cardfs'/>
        <div className='card-bottom'>
      
            <Chapita type={type}/>
            <h1>{article.lead}.{article.title}</h1>
            <span>{article.marquee} / {article.autor}</span>

        </div>

            
        </section>
    );
}

export default Card;