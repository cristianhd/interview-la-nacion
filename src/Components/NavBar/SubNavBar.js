import React, { useEffect, useState } from "react";
import logoClub from "../../assets/logo-club.svg";
import DolarLabel from "./DolarLabel";
import WeatherLabel from "./WeatherLabel";
import "../../Style/SubNavBar.scss";
import { DOLARBLUE, DOLARBNA } from "../../DataDummy/dolar.js";
import { GEOWEATHER } from "../../DataDummy/weather.js";

function SubNavBar(props) {
  const [dolarBlue, setDolarBlue] = useState();
  const [dolarBna, setDolarBna] = useState();
  const [geoWeather, setGeoWeather] = useState();

  useEffect(() => {
    setDolarBlue(DOLARBLUE);
    setDolarBna(DOLARBNA);
    setGeoWeather(GEOWEATHER);
  }, [dolarBlue, dolarBna, geoWeather]);

  return (
    <section className="sub-navbar">
      <div className="lay">
        <div className="row">
          {dolarBlue && dolarBna && (
            <DolarLabel bna={dolarBna} blue={dolarBlue} />
          )}
          {geoWeather && (
            <WeatherLabel gradius={geoWeather.gradius} city={geoWeather.city} />
          )}

          <a className="newsl" href="/newsletters">
            Recibí Newsletters
          </a>

          <a className="clubn" href="/clubnacion">
            <img src={logoClub} alt="logo-club.svg"></img>
            Descubrí tus beneficios
          </a>
        </div>
      </div>
    </section>
  );
}

export default SubNavBar;
