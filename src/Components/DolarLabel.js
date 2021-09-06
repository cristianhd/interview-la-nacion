import React from "react";
import "../Style/DolarLabel.scss";

function DolarLabel({ bna, blue }) {
  return (
    <div className="dolar">
      <a className="a-dolar" href="/dolar">
        Dólar:
      </a>
      <span className="dolar-bna">
        ${bna.buy} / ${bna.sell}
      </span>
      <span className="dolar-blue">
        ${blue.buy} / ${blue.sell}
      </span>
    </div>
  );
}

export default DolarLabel;
