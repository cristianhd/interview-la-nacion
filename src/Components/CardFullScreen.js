import React from 'react';
import '../Style/CardFullScreen.scss'
import {articles} from '../articles.js'
import Card from './Card';



function CardFullScreen(props) {
    const article = articles[0]
    return (
        <div className='container-card'>
            <Card
                type='INFOGRAFÍA'
                article={article}
            />
        </div>
    );
}

export default CardFullScreen;