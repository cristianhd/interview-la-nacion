import React from "react";
import logo from "../../assets/logo-la-nacion.svg";

import "../../Style/NavBar.scss";
import LinkImg from "../Footer/LinkImg";
import GroupBtnLeft from "./GroupBtnLeft";
import GroupBtnRigth from "./GroupBtnRigth";

function NavBar(props) {
  return (
    <div className="lay">
      <div className="row">
        <GroupBtnLeft />

        <div className="logo">
          <LinkImg img={logo} name="logo.svg" link="/" />
        </div>

        <GroupBtnRigth />
      </div>
    </div>
  );
}

export default NavBar;
