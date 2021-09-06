import React from 'react';
import LinkImg from './LinkImg';
import iOS from '../../assets/iOS.svg';
import Android from '../../assets/Android.svg';

function LinksDownload(props) {
  return (
    <div className='dowl'>
      <LinkImg img={Android} name='android-ico' link='#' />
      <LinkImg img={iOS} name='ios-icon' link='#' />
    </div>
  );
}

export default LinksDownload;
