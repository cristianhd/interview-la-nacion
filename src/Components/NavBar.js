import React from 'react';
import logo from "../assets/logo-la-nacion.svg";
import "../Style/NavBar.scss"

function NavBar(props) {
    return (
        <div className="navbar">
            <nav>
                <div>
                    <img src={logo} alt="logo.svg"></img>
                </div>
                <div>
                    
                </div>
            </nav>
        </div>
    );
}

export default NavBar;