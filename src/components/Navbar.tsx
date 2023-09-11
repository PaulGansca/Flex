import React, { useEffect } from "react";

import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [loadAnimationOnMount, setLoadAnimationOnMount] = React.useState(false);
  const handleShowNavbar = () => {
    if (!showNavbar) {
      document
        .querySelectorAll(".overlay-menu li")
        .forEach(function (i, index) {
          setTimeout(function () {
            i.classList.add("animation");
          }, (index + 1) * 50);
        });
    } else {
      window.scrollTo(0, 0);
      document
        .querySelectorAll(".overlay-menu li")
        .forEach(function (i, index) {
          setTimeout(function () {
            i.classList.remove("animation");
          }, (index + 1) * 100);
        });
    }
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    setTimeout(() => setLoadAnimationOnMount(true), 10);
  }, []);

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper font-title">
          <div
            className={`logo ${
              loadAnimationOnMount ? "mounted" : "first-render"
            }`}
          >
            <Link to="/">
              <i className="fas fa-chess-knight"></i> FLEX
            </Link>
          </div>

          <ul
            className={`${
              loadAnimationOnMount ? "mounted" : "first-render"
            } desktop-navbar-list`}
            id="menu"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/our-work">Our Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div onClick={handleShowNavbar} className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className={`overlay-menu ${showNavbar ? "show" : ""}`}>
        <ul id="menu">
          <li>
            <Link to="/" onClick={handleShowNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/our-work" onClick={handleShowNavbar}>
              Our Work
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleShowNavbar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleShowNavbar}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
