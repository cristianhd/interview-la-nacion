import React from 'react';

function WeatherLabel({gradius,city}) {
    return (
        <div className='weather'>
        <label className='grad'>{gradius}</label>
        <label className='name'>{city}</label>
    </div>
    );
}

export default WeatherLabel;