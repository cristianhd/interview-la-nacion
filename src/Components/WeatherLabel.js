import React from 'react';
import weatherIcon from '../assets/weth-icon.svg'

function WeatherLabel({gradius,city}) {
    return (
        <div className='weather'>
        <img className='weth-icon'src={weatherIcon} alt='weth-icon.svg'></img>
        <label className='grad'>{gradius}</label>
        <label className='name'>{city}</label>
    </div>
    );
}

export default WeatherLabel;