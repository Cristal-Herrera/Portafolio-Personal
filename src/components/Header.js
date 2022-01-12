import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="center">

          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/home" className={({isActive}) => (isActive ? "active" : 'none')}>Home</NavLink>
              </li>
              <li>
              <NavLink to="/proyectos" className={({isActive}) => (isActive ? "active" : 'none')}>Proyectos</NavLink>
              </li>
              <li>
              <NavLink to="/curriculum"className={({isActive}) => (isActive ? "active" : 'none')}>Descargar CV</NavLink>

              </li>
            </ul>
          </nav>
          {/* LIMPIAR FLOTADOS */}
                <div className="clearfix"></div>
        </div>
      </header>
    );
  }

}

export default Header;