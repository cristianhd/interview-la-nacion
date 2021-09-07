import search from "../../assets/search-icon.svg";
import hamburguer from "../../assets/ham-icon.svg";
import React from "react";

function GroupBtnLeft(props) {
  return (
    <div className="btns-left">
      <button className="btn-section">
        SECCIONES
        <img src={hamburguer} alt="ham-icon.svg"></img>
      </button>
      <button className="btn-search">
        BUSCAR
        <img src={search} alt="search-icon"></img>
      </button>
    </div>
  );
}

export default GroupBtnLeft;
