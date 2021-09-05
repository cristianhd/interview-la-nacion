import React from 'react';
import weatherIcon from '../assets/weth-icon.svg'
import '../Style/WeatherLabel.scss'

function WeatherLabel({gradius,city}) {
    return (
        <div className='weather'>
        <img className='weth-icon'src={weatherIcon} alt='weth-icon.svg'></img>
        <span className='grad'>{gradius}</span>
        <span className='name'>{city}</span>
    </div>
    );
}

export default WeatherLabel;