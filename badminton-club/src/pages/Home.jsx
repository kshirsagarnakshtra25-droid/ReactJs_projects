
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShuttleAnimation from "../components/ShuttleAnimation";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      number: "01",
      eyebrow: "WELCOME TO THE ARENA",
      title: "PLAY",
      highlight: "BEYOND",
      bottom: "LIMITS.",
      description:
        "A performance-driven badminton club built for players who refuse to stay average.",
      button: "EXPLORE ARENA",
      link: "/about",
    },
    {
      number: "02",
      eyebrow: "TRAIN LIKE A CHAMPION",
      title: "BUILD",
      highlight: "YOUR",
      bottom: "GAME.",
      description:
        "Structured coaching, powerful training and a community that pushes you forward.",
      button: "VIEW TRAINING",
      link: "/training",
    },
    {
      number: "03",
      eyebrow: "COMPETE. CONQUER.",
      title: "OWN",
      highlight: "THE",
      bottom: "COURT.",
      description:
        "Step into competition, challenge yourself and become the player you know you can be.",
      button: "VIEW TOURNAMENTS",
      link: "/tournaments",
    },
  ];

  const activeSlide = slides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="home-page" id="top">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">

        {/* REMOTE AUTOPLAY VIDEO */}
        <div className="hero-video-layer">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://videos.pexels.com/video-files/8053314/8053314-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />

            Your browser does not support the video element.
          </video>

          <div className="hero-video-overlay"></div>
          <div className="hero-video-grid"></div>
        </div>

        {/* ATMOSPHERE */}

        <div className="hero-light hero-light-one"></div>
        <div className="hero-light hero-light-two"></div>

        <div className="hero-particle hero-particle-one"></div>
        <div className="hero-particle hero-particle-two"></div>
        <div className="hero-particle hero-particle-three"></div>
        <div className="hero-particle hero-particle-four"></div>
        <div className="hero-particle hero-particle-five"></div>
        <div className="hero-particle hero-particle-six"></div>

        <div className="hero-scan-line"></div>

        {/* SHUTTLES */}

        <ShuttleAnimation />

        {/* HERO CONTENT */}

        <div className="hero-content">

          <div className="hero-left">

            <div className="hero-slide-number">
              <span>{activeSlide.number}</span>
              <div></div>
              <span>03</span>
            </div>

            <div className="hero-eyebrow">
              <span></span>
              {activeSlide.eyebrow}
            </div>

            <div className="hero-title-wrapper">

              <h1
                key={currentSlide}
                className="hero-title"
              >
                <span>{activeSlide.title}</span>

                <span className="hero-title-highlight">
                  {activeSlide.highlight}
                </span>

                <span>{activeSlide.bottom}</span>
              </h1>

            </div>

            <p
              key={`description-${currentSlide}`}
              className="hero-description"
            >
              {activeSlide.description}
            </p>

            <div className="hero-buttons">

              <Link
                to={activeSlide.link}
                className="hero-primary-button"
              >
                {activeSlide.button}
                <span>↗</span>
              </Link>

              <Link
                to="/membership"
                className="hero-secondary-button"
              >
                JOIN THE ARENA
              </Link>

            </div>

          </div>

          {/* HERO RIGHT */}

          <div className="hero-right">

            <div className="hero-court">

              <div className="court-glow"></div>

              <div className="court-lines">

                <div className="court-outer"></div>

                <div className="court-center-line"></div>

                <div className="court-service-line top"></div>
                <div className="court-service-line bottom"></div>

                <div className="court-side-line left"></div>
                <div className="court-side-line right"></div>

                <div className="court-net"></div>

              </div>

              <div className="court-badge">

                <span>SMASH</span>

                <strong>ARENA</strong>

                <small>
                  EST. 2026
                </small>

              </div>

              <div className="court-orbit orbit-one"></div>
              <div className="court-orbit orbit-two"></div>

            </div>

            <div className="hero-badge">

              <span>01</span>

              <div>
                <strong>PERFORMANCE</strong>
                <small>STARTS HERE</small>
              </div>

            </div>

          </div>

        </div>

        {/* SLIDER CONTROLS */}

        <div className="hero-controls">

          <button
            onClick={previousSlide}
            className="hero-control"
            aria-label="Previous slide"
          >
            ←
          </button>

          <div className="hero-progress">

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={
                  index === currentSlide
                    ? "hero-progress-item active"
                    : "hero-progress-item"
                }
                aria-label={`Go to slide ${index + 1}`}
              >
                <span>
                  0{index + 1}
                </span>

                <div>
                  <i></i>
                </div>
              </button>
            ))}

          </div>

          <button
            onClick={nextSlide}
            className="hero-control"
            aria-label="Next slide"
          >
            →
          </button>

        </div>

        {/* SCROLL INDICATOR */}

        <div className="hero-scroll">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <i></i>
          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="home-stats-section">

        <div className="home-stats-grid">

          <div className="home-stat">
            <strong>10+</strong>
            <span>YEARS OF<br />EXPERIENCE</span>
          </div>

          <div className="home-stat">
            <strong>500+</strong>
            <span>ACTIVE<br />PLAYERS</span>
          </div>

          <div className="home-stat">
            <strong>50+</strong>
            <span>TOURNAMENTS<br />PLAYED</span>
          </div>

          <div className="home-stat">
            <strong>24/7</strong>
            <span>PLAYER<br />MINDSET</span>
          </div>

        </div>

      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="home-marquee">

        <div className="marquee-track">

          <span>TRAIN HARD</span>
          <b>✦</b>

          <span>PLAY SMART</span>
          <b>✦</b>

          <span>COMPETE HARDER</span>
          <b>✦</b>

          <span>NEVER SETTLE</span>
          <b>✦</b>

          <span>TRAIN HARD</span>
          <b>✦</b>

          <span>PLAY SMART</span>
          <b>✦</b>

          <span>COMPETE HARDER</span>
          <b>✦</b>

          <span>NEVER SETTLE</span>
          <b>✦</b>

        </div>

      </section>

      {/* =====================================================
          WHY SMASH ARENA
      ===================================================== */}

      <section className="home-intro-section">

        <div className="home-intro-header">

          <div>
            <span className="section-mini-label">
              / WHY SMASH ARENA
            </span>

            <h2>
              MORE THAN
              <br />
              <em>A BADMINTON CLUB.</em>
            </h2>
          </div>

          <p>
            We combine serious training, competitive opportunities
            and a strong player community to create an environment
            where every session has a purpose.
          </p>

        </div>

        <div className="home-feature-grid">

          <article className="home-feature-card">

            <span className="feature-number">01</span>

            <div className="feature-icon">
              ⚡
            </div>

            <h3>
              TRAIN
              <br />
              HARDER
            </h3>

            <p>
              Structured sessions designed to improve your speed,
              strength, movement and consistency.
            </p>

            <Link to="/training">
              EXPLORE TRAINING →
            </Link>

          </article>

          <article className="home-feature-card featured">

            <span className="feature-number">02</span>

            <div className="feature-icon">
              🏸
            </div>

            <h3>
              PLAY
              <br />
              SMARTER
            </h3>

            <p>
              Build your game with better technique, tactical
              awareness and intelligent decision-making.
            </p>

            <Link to="/coaches">
              MEET COACHES →
            </Link>

          </article>

          <article className="home-feature-card">

            <span className="feature-number">03</span>

            <div className="feature-icon">
              🏆
            </div>

            <h3>
              COMPETE
              <br />
              STRONGER
            </h3>

            <p>
              Put your skills under pressure through tournaments,
              competitive matches and arena events.
            </p>

            <Link to="/tournaments">
              VIEW TOURNAMENTS →
            </Link>

          </article>

        </div>

      </section>

      {/* =====================================================
          PLAYER SPOTLIGHT
      ===================================================== */}

      <section className="home-player-section">

        <div className="player-section-bg-text">
          PLAYER
        </div>

        <div className="home-player-content">

          <div className="home-player-info">

            <span className="section-mini-label">
              / PLAYER SPOTLIGHT
            </span>

            <h2>
              BUILT
              <br />
              TO <em>COMPETE.</em>
            </h2>

            <p>
              Great players aren't created in one session.
              They are built through thousands of small improvements.
            </p>

            <Link
              to="/players"
              className="dark-action-button"
            >
              MEET OUR PLAYERS
              <span>↗</span>
            </Link>

          </div>

          <div className="home-player-visual">

            <div className="player-circle">

              <div className="player-silhouette">

                <div className="player-head"></div>
                <div className="player-body"></div>
                <div className="player-arm"></div>
                <div className="player-racket"></div>
                <div className="player-leg one"></div>
                <div className="player-leg two"></div>

              </div>

            </div>

            <div className="player-stat-card">
              <small>TOP RANKING</small>
              <strong>#01</strong>
              <span>ARENA PLAYER</span>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TRAINING CTA
      ===================================================== */}

      <section className="home-training-section">

        <div className="training-bg-number">
          03
        </div>

        <div className="home-training-inner">

          <div className="training-label">
            / NEXT LEVEL
          </div>

          <h2>
            READY TO
            <br />
            <span>LEVEL UP?</span>
          </h2>

          <p>
            Your next breakthrough could start with your next
            training session.
          </p>

          <div className="training-actions">

            <Link
              to="/training"
              className="hero-primary-button"
            >
              START TRAINING
              <span>↗</span>
            </Link>

            <Link
              to="/contact"
              className="hero-secondary-button"
            >
              TALK TO US
            </Link>

          </div>

        </div>

        <div className="training-floating-shuttle">
          🏸
        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final-section">

        <div className="final-glow"></div>

        <div className="final-content">

          <span>
            SMASH ARENA / 2026
          </span>

          <h2>
            YOUR
            <br />
            <em>COURT.</em>
            <br />
            YOUR GAME.
          </h2>

          <Link
            to="/membership"
            className="final-button"
          >
            JOIN THE ARENA
            <span>↗</span>
          </Link>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
};

export default Home;

