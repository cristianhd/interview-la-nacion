import React from "react";
import logoClub from "../assets/logo-club.svg";
import DolarLabel from "./DolarLabel";
import WeatherLabel from "./WeatherLabel";

function SubNavBar(props) {
  const dolarBna = { buy: "00,00", sell: "00,00" };
  const dolarBlue = { buy: "00,00", sell: "00,00" };
  const geoWeather = {gradius: "00,0°", city:"Capital Federal"}
  return (
    <div className="container">
      <section className="sub-navbar">
        <DolarLabel
          bna={dolarBna}
          blue={dolarBlue}
        />
        <WeatherLabel gradius={geoWeather.gradius} city={geoWeather.city}/>

        <a href="/newsletters">Recibí Newsletters</a>
        <a href="/clubnacion">
          <img src={logoClub} alt="logo-club.svg"></img>
          Descubrí tus beneficios
        </a>
      </section>
    </div>
  );
}

export default SubNavBar;
