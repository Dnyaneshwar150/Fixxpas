import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css'; // Correct way to import the CSS file

const Navbar = () => {
  return (
    <nav>
      <img src="../logo.jpg" alt="logo" className="logo" /> {/* Add className "logo" */}
      <ul className="menu">
      <li>
          <NavLink to="/computer">Mechniqual</NavLink>
          <ul className="submenu">
            <li><NavLink to="/computer/sublist">SE</NavLink></li>
            <li><NavLink to="/computer/sublist">TE</NavLink></li>
            <li><NavLink to="/computer/se">BE</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/FE">FE</NavLink>
          <ul className="submenu">
            <li><NavLink to="/computer/se">Phy</NavLink></li>
            <li><NavLink to="/computer/se">Chem</NavLink></li>
            <li><NavLink to="/computer/se">Maths</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/computer">Computer</NavLink>
          <ul className="submenu">
            <li><NavLink to="/computer/SEsublist">SE</NavLink></li>
            <li><NavLink to="/computer/TEsublist">TE</NavLink></li>
            <li><NavLink to="/computer/se">BE</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/computer">E&TC</NavLink>
          <ul className="submenu">
            <li><NavLink to="/computer/se">SE</NavLink></li>
            <li><NavLink to="/computer/se">TE</NavLink></li>
            <li><NavLink to="/computer/se">BE</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/computer">Electrical</NavLink>
          <ul className="submenu">
            <li><NavLink to="/computer/se">SE</NavLink></li>
            <li><NavLink to="/computer/se">TE</NavLink></li>
            <li><NavLink to="/computer/se">BE</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/computer">Civil</NavLink>
          <ul className="submenu">
            <li><NavLink to="/computer/sublist">SE</NavLink></li>
            <li><NavLink to="/computer/se">TE</NavLink></li>
            <li><NavLink to="/computer/se">BE</NavLink></li>
          </ul>
        </li>

        <li>
          <NavLink to="/computer">Chemical</NavLink>
          <ul className="submenu">
            <li><NavLink to="/computer/sublist">SE</NavLink></li>
            <li><NavLink to="/computer/se">TE</NavLink></li>
            <li><NavLink to="/computer/se">BE</NavLink></li>
          </ul>
        </li>
        
      </ul>
      <span className="material-symbols-outlined">menu</span>
    </nav>
  );
}

export default Navbar;
