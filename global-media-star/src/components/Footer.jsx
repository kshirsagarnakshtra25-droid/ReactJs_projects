import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-main">

          {/* Brand */}

          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >
              GLOBAL
              <span>MEDIA STAR</span>
            </Link>

            <p>
              A modern business and media platform bringing
              together ideas, insights and stories from the
              people shaping the world.
            </p>

            <div className="footer-socials">

              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="#" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>

            </div>

          </div>


          {/* Explore */}

          <div className="footer-column">

            <h4>Explore</h4>

            <Link to="/business">Business</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/leadership">Leadership</Link>
            <Link to="/startups">Startups</Link>

          </div>


          {/* Company */}

          <div className="footer-column">

            <h4>Company</h4>

            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/advertise">Advertise</Link>

          </div>


          {/* Legal */}

          <div className="footer-column">

            <h4>Information</h4>

            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/sitemap">Sitemap</Link>

          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © 2026 Global Media Star. All Rights Reserved.
          </p>

          <p>
            Business • Media • Leadership • Innovation
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;