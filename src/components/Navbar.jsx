import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Bar Chart</Link>
        </li>
        <li className="navbar-item">
          <Link to="/component2" className="navbar-link">Pie Chart</Link>
        </li>
        <li className="navbar-item">
          <Link to="/component3" className="navbar-link">Line Chart</Link>
        </li>
        <li className="navbar-item">
          <Link to="/component4" className="navbar-link">Radar Chart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
