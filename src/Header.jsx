import React from "react";
import { NavLink } from "react-router";
import umbrellaLogo from "./assets/umbrella-corp-logo.webp";

const Header = () => (
  <header>
    <div class="logo-container">
      <NavLink to="/">
        <img src={umbrellaLogo} className="logo" alt="umbrella logo" />
      </NavLink>
      <div className="name">Umbrella Corporation</div>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/research">Research</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Umbrella</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
