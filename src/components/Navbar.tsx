import React from 'react';

import '../styles/Navbar.css';

// const { BrowserRouter, NavLink, Route, Switch } = ReactRouterDOM;

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    if (!showNavbar) {
      document
        .querySelectorAll('.overlay-menu li')
        .forEach(function (i, index) {
          setTimeout(function () {
            i.classList.add('animation');
          }, (index + 1) * 50);
        });
    } else {
      document
        .querySelectorAll('.overlay-menu li')
        .forEach(function (i, index) {
          setTimeout(function () {
            i.classList.remove('animation');
          }, (index + 1) * 100);
        });
    }
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home">
              <i className="fas fa-chess-knight"></i> FLEX
            </a>
          </div>

          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div onClick={handleShowNavbar} className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className={`overlay-menu ${showNavbar ? 'show' : ''}`}>
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
