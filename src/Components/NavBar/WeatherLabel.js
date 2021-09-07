import React from "react";
import weatherIcon from "../../assets/weth-icon.svg";
import "../../Style/WeatherLabel.scss";
import LinkImg from "../Footer/LinkImg";

function WeatherLabel({ gradius, city }) {
  return (
    <div className="weather">
      <LinkImg img={weatherIcon} link="/weaher" name="weth-icon.svg" />
      <span className="grad">{gradius}</span>
      <span className="name">{city}</span>
    </div>
  );
}

export default WeatherLabel;
