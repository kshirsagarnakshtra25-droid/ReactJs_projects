import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { movies } from "../../data/movies";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Search } from "lucide-react";

import "./Home.css";

function Home() {

  // Show first 10 movies
  const navigate = useNavigate();

const [homeSearch, setHomeSearch] = useState("");
  const [currentMovie, setCurrentMovie] = useState(0);
  const latestMovies = movies.slice(0, 10);
  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentMovie((previous) =>
        (previous + 1) % movies.length
      );

    }, 5000);

    return () => clearInterval(timer);

  }, []);
  const heroMovie = movies[currentMovie];

  return (
    <div className="home">

      {/* ================= HERO ================= */}

      <section
        className="hero-section"
        style={{
          backgroundImage: `
      linear-gradient(
        90deg,
        rgba(15, 16, 20, 0.98) 0%,
        rgba(15, 16, 20, 0.80) 45%,
        rgba(15, 16, 20, 0.25) 100%
      ),
      url("${heroMovie.banner}")
    `
        }}
      >

        <div className="hero-content">

          <span className="hero-tag">
            🎬 NOW SHOWING
          </span>

          <h1>
            {heroMovie.title}
          </h1>

          <div className="hero-details">

            <span>
              ⭐ {heroMovie.rating}
            </span>

            <span>
              {heroMovie.certificate}
            </span>

            <span>
              {heroMovie.duration}
            </span>

            <span>
              {heroMovie.language}
            </span>

          </div>

          <p>
            {heroMovie.description}
          </p>

          <div className="hero-buttons">

            <Link
              to={`/movies/${heroMovie.id}`}
              className="primary-btn"
            >
              🎟 Book Tickets
            </Link>

            <Link
              to={`/movies/${heroMovie.id}`}
              className="secondary-btn"
            >
              View Details
            </Link>

          </div>

        </div>


        {/* SLIDER CONTROLS */}

        <div className="hero-controls">

          <button
            className="hero-arrow"
            onClick={() => {
              setCurrentMovie(
                (currentMovie - 1 + movies.length) % movies.length
              );
            }}
          >
            ‹
          </button>


          <div className="hero-dots">

            {movies.slice(0, 10).map((movie, index) => (

              <button
                key={movie.id}
                className={
                  index === currentMovie
                    ? "hero-dot active"
                    : "hero-dot"
                }
                onClick={() => setCurrentMovie(index)}
              />

            ))}

          </div>


          <button
            className="hero-arrow"
            onClick={() => {
              setCurrentMovie(
                (currentMovie + 1) % movies.length
              );
            }}
          >
            ›
          </button>

        </div>

      </section>


      {/* ================= SEARCH ================= */}
{/* ================= SEARCH ================= */}

<section className="search-section">

  <div className="search-box">

    <Search size={20} />

    <input
      type="text"
      placeholder="Search for movies, events, plays or activities"
      value={homeSearch}
      onChange={(e) => setHomeSearch(e.target.value)}
      onKeyDown={(e) => {

        if (e.key === "Enter" && homeSearch.trim()) {

          navigate(
            `/movies?search=${encodeURIComponent(homeSearch.trim())}`
          );

        }

      }}
    />

    <button
      onClick={() => {

        if (homeSearch.trim()) {

          navigate(
            `/movies?search=${encodeURIComponent(homeSearch.trim())}`
          );

        }

      }}
    >
      Search
    </button>

  </div>

</section>


      {/* ================= LATEST MOVIES ================= */}

      <section className="movies-section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              CINEBOOK
            </span>

            <h2>
              Latest Bollywood Movies
            </h2>

            <p>
              Watch the latest Hindi movies now showing in cinemas.
            </p>

          </div>

          <Link
            to="/movies"
            className="view-all"
          >
            View All →
          </Link>

        </div>


        <div className="movie-grid">

          {latestMovies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))}

        </div>

      </section>


      {/* ================= EXPLORE ================= */}

      <section className="explore-section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              DISCOVER
            </span>

            <h2>
              Explore More
            </h2>

          </div>

        </div>


        <div className="explore-grid">

          <Link
            to="/events"
            className="explore-card events-card"
          >
            <span>🎤</span>

            <div>
              <h3>Events</h3>
              <p>Concerts, festivals & live shows</p>
            </div>

            <strong>→</strong>

          </Link>


          <Link
            to="/plays"
            className="explore-card plays-card"
          >
            <span>🎭</span>

            <div>
              <h3>Plays</h3>
              <p>Drama, theatre & performances</p>
            </div>

            <strong>→</strong>

          </Link>


          <Link
            to="/sports"
            className="explore-card sports-card"
          >
            <span>🏏</span>

            <div>
              <h3>Sports</h3>
              <p>Matches & sporting events</p>
            </div>

            <strong>→</strong>

          </Link>


          <Link
            to="/activities"
            className="explore-card activities-card"
          >
            <span>🎳</span>

            <div>
              <h3>Activities</h3>
              <p>Bowling, gaming & experiences</p>
            </div>

            <strong>→</strong>

          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;