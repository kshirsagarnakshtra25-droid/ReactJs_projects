import { Search, Play } from "lucide-react";
import "./hero.css";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">
          🎬 YOUR ENTERTAINMENT DESTINATION
        </span>

        <h1>
          Experience Movies
          <br />
          <span>Like Never Before.</span>
        </h1>

        <p>
          Discover the latest movies, live events,
          sports and unforgettable experiences near you.
        </p>

        <div className="hero-buttons">

          <button className="hero-primary">
            <Search size={18} />
            Explore Movies
          </button>

          <button className="hero-secondary">
            <Play size={18} />
            Watch Trailer
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;
