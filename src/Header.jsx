import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/rules" activeClassName="active">
            Rules
          </NavLink>
        </li>
        <li>
          <NavLink to="/game/easy" activeClassName="active">
            Easy
          </NavLink>
        </li>
        <li>
          <NavLink to="/game/medium" activeClassName="active">
            Medium
          </NavLink>
        </li>
        <li>
          <NavLink to="/game/hard" activeClassName="active">
            Hard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
