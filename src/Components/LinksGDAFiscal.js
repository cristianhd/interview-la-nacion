import React from "react";
import LinkImg from "./LinkImg";
import gda from "../assets/gda.svg";
import fiscal from "../assets/fiscal.svg";

function LinksGDAFiscal(props) {
  return (
    <div className="gda-fiscal">
      <div className="gda">
        <LinkImg img={gda} name="gda" link="#" />
        <span className="span-gda">
          Miembro de GDA. Grupo de Diarios América
        </span>
      </div>
      <div className="fiscal">
        <LinkImg img={fiscal} name="fiscal" link="#" />
      </div>
    </div>
  );
}

export default LinksGDAFiscal;
