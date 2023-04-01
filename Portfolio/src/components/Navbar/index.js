/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-scroll';

import { Nav } from './styled';

export default function Navbar() {
  const [bgType, setBgType] = React.useState('');

  const setBG = () => {
    setBgType('showBG');
  };

  const unsetBG = () => {
    setBgType('');
  };

  return (
    <Nav>
      <div className={`nav ${bgType}`}>
        <input type="checkbox" id="nav-check" />

        <h1 className="nav-header">ZAUZAU</h1>

        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>

        <div className="nav-links">
          <span>
            <Link
              to="home"
              onSetActive={unsetBG}
              activeStyle={{ color: '#dc965a' }}
              spy
              smooth
            >
              Home
            </Link>
          </span>

          <span>
            <Link
              to="portfolio"
              onSetActive={setBG}
              activeStyle={{ color: '#dc965a' }}
              spy
              smooth
            >
              Portfolio
            </Link>
          </span>

          <span>
            <Link to="projects" activeStyle={{ color: '#dc965a' }} spy smooth>
              Projects
            </Link>
          </span>

          <span>
            <Link to="contact" activeStyle={{ color: '#dc965a' }} spy smooth>
              Contact
            </Link>
          </span>
        </div>
      </div>
    </Nav>
  );
}
