import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <div className="header">
    <Link to="/" className="header_logo">
      Home
    </Link>
    <div className="header_options">
      <ul className="header_buttons">
        <li>
          <Link to="/" className="header_button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/demo" className="header_button">
            Demo
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
