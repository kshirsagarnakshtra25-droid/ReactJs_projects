import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background image */}
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85"
          alt="Modern global business office"
        />
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Decorative gold element */}
      <div className="hero-decoration hero-decoration-one"></div>
      <div className="hero-decoration hero-decoration-two"></div>

      <div className="container hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            GLOBAL BUSINESS INSIGHTS
            <span></span>
          </div>

          <h1>
            Stories That Shape
            <span>the Global Business World</span>
          </h1>

          <p>
            Discover powerful business insights, inspiring leadership
            stories, breakthrough innovations, emerging startups, and
            the ideas shaping the global economy.
          </p>

          <div className="hero-buttons">

            <Link
              to="/articles"
              className="hero-btn hero-btn-primary"
            >
              Explore Articles
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

            <Link
              to="/magazine"
              className="hero-btn hero-btn-secondary"
            >
              Latest Magazine
              <i className="fa-solid fa-book-open"></i>
            </Link>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <i className="fa-solid fa-arrow-down"></i>
        </div>

      </div>
    </section>
  );
}

export default Hero;