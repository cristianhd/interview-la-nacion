import React from 'react';
import LinkImg from './LinkImg';

import iOS from '../assets/iOS.svg'
import Android from '../assets/Android.svg'

function LinksDownload(props) {
    return (
        <div className='dowl'>
             <LinkImg
                img={iOS}
                name='ios-icon'
                link='#'
            />
            <LinkImg
                img={Android}
                name='android-ico'
                link='#'
            />
        </div>
    );
}

export default LinksDownload;