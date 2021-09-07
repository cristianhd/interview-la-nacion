import React from "react";
import search from "../../assets/search-icon.svg";


function GroupBtnRigth(props) {
  return (
    <div className="btns-right">
      <div className="wrap">
        <a className="btn-suscribe" href="/suscribe">
          SUSCRIBITE
        </a>
      </div>

      <a className="btn-icon" href="/search">
        <img className="icon" src={search} alt="search-icon"></img>
      </a>

      <button className="btn-signin">INGRESAR</button>
    </div>
  );
}

export default GroupBtnRigth;
