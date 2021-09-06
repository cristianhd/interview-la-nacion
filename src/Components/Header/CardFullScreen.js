import React from 'react';
import '../../Style/CardFullScreen.scss';

import Card from './Card';

function CardFullScreen({ article }) {
  return (
    <div className='container-card'>
      <Card type='INFOGRAFÍA' article={article} />
    </div>
  );
}

export default CardFullScreen;
