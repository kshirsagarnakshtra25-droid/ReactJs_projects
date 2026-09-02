import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top-line"></div>

      <div className="footer-grid">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-mark">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <strong>SMASH</strong>
              <span>ARENA</span>
            </div>
          </Link>

          <p>
            A performance-driven badminton club built for players
            who want to train harder, compete stronger and enjoy
            the game.
          </p>

          <div className="footer-status">
            <span></span>
            ARENA OPEN / PLAY READY
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">EXPLORE</span>

          <Link to="/about">ABOUT</Link>
          <Link to="/training">TRAINING</Link>
          <Link to="/coaches">COACHES</Link>
          <Link to="/players">PLAYERS</Link>
          <Link to="/tournaments">TOURNAMENTS</Link>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">ARENA</span>

          <Link to="/gallery">GALLERY</Link>
          <Link to="/membership">MEMBERSHIP</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="footer-contact">
          <span className="footer-column-title">GET IN TOUCH</span>

          <a href="mailto:hello@smasharena.com">
            hello@smasharena.com
          </a>

          <a href="tel:+919876543210">
            +91 98765 43210
          </a>

          <p>
            Smash Arena<br />
            Pune, Maharashtra<br />
            India
          </p>
        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} SMASH ARENA
        </span>

        <span>
          BUILT TO PLAY. BUILT TO COMPETE.
        </span>

        <a href="#top">
          BACK TO TOP ↑
        </a>

      </div>
    </footer>
  );
};

export default Footer;