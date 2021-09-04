import React from "react";
import logoClub from "../assets/logo-club.svg";
import DolarLabel from "./DolarLabel";
import WeatherLabel from "./WeatherLabel";
import '../Style/SubNavBar.scss'

function SubNavBar(props) {
 //Simulate Data API Dolar and Weather
  const dolarBna = { buy: "00,00", sell: "00,00" };
  const dolarBlue = { buy: "00,00", sell: "00,00" };
  const geoWeather = { gradius: "00,0°", city: "Capital Federal" };
  return (

      <section className="sub-navbar">
    <div className="lay">
        <DolarLabel bna={dolarBna} blue={dolarBlue} />
        <WeatherLabel gradius={geoWeather.gradius} city={geoWeather.city} />

        <a className='newsl' href="/newsletters">Recibí Newsletters</a>
        <a className='clubn' href="/clubnacion">
          <img src={logoClub} alt="logo-club.svg"></img>
          Descubrí tus beneficios
        </a>
    </div>
      </section>
  );
}

export default SubNavBar;
