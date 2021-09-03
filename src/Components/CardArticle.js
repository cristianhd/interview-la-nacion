import React from 'react';
import Article from './Article';


function CardArticle({article,render}) {
    const {lead,title,subheader,img,marquee,autor,imgautor,url} = article


    switch (render) {
        case 1:
            return(
                <article>
                    <Article elements={{img,lead,title,marquee}}/>
                </article>
            )
          
        case 2:
            
            break;

        case 3:
            
            break;
    
        default:
            return (
                <div>

                </div>
            )
    }
  
}

export default CardArticle;