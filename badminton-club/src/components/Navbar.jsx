import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "TRAINING", path: "/training" },
    { name: "COACHES", path: "/coaches" },
    { name: "PLAYERS", path: "/players" },
    { name: "TOURNAMENTS", path: "/tournaments" },
    { name: "GALLERY", path: "/gallery" },
    { name: "MEMBERSHIP", path: "/membership" },
    { name: "CONTACT", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="main-navbar">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <div className="logo-mark">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="logo-text">
            <strong>SMASH</strong>
            <span>ARENA</span>
          </div>
        </Link>

        {/* DESKTOP / MOBILE NAVIGATION */}
        <nav
          className={
            menuOpen
              ? "navbar-links open"
              : "navbar-links"
          }
        >
          {navLinks.map((link, index) => {
            const isActive =
              location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={
                  isActive
                    ? "navbar-link active"
                    : "navbar-link"
                }
                style={{
                  "--nav-index": index,
                }}
              >
                <span className="nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="nav-name">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-right">

          <Link
            to="/membership"
            className="navbar-join"
            onClick={closeMenu}
          >
            <span>JOIN ARENA</span>
            <b>↗</b>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={
              menuOpen
                ? "menu-button active"
                : "menu-button"
            }
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={
          menuOpen
            ? "navbar-overlay show"
            : "navbar-overlay"
        }
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;