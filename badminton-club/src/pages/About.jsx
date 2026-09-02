import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const elements = revealRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const addRevealRef = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  return (
    <main className="about-page" id="top">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-grid"></div>

        <div className="about-glow about-glow-one"></div>
        <div className="about-glow about-glow-two"></div>

        {/* FLOATING SHUTTLE */}

        <div className="about-hero-shuttle shuttle-about-one">
          <div className="about-shuttle-head"></div>
          <div className="about-shuttle-feathers"></div>
        </div>

        {/* HERO CONTENT */}

        <div className="about-hero-content">

          <div className="about-eyebrow">
            <span></span>
            WHO WE ARE
          </div>

          <h1>
            BUILT FOR
            <strong>THE GAME.</strong>
          </h1>

          <p>
            Smash Arena is a performance-driven badminton club
            created for players who want to train harder, compete
            smarter and become better every time they step onto
            the court.
          </p>

          <div className="about-hero-actions">

            <Link
              to="/training"
              className="about-primary-btn"
            >
              EXPLORE TRAINING
              <span>↗</span>
            </Link>

            <Link
              to="/membership"
              className="about-outline-btn"
            >
              JOIN THE ARENA
            </Link>

          </div>

        </div>

        {/* ESTABLISHED BADGE */}

        <div className="about-hero-number">

          <span>EST.</span>

          <strong>2012</strong>

          <small>
            PERFORMANCE
            <br />
            BADMINTON CLUB
          </small>

        </div>

        {/* VERTICAL TEXT */}

        <div className="about-vertical-text">
          SMASH ARENA / PERFORMANCE / COMMUNITY
        </div>

      </section>

      {/* =====================================================
          INTRO / OUR STORY
      ===================================================== */}

      <section
        className="about-intro"
        ref={addRevealRef}
      >

        <div className="about-section-label">
          <span>01</span>
          OUR STORY
        </div>

        <div className="about-intro-content">

          <div className="about-intro-heading">

            <p>
              MORE THAN A CLUB.
            </p>

            <h2>
              IT'S A PLACE
              <br />
              TO <strong>LEVEL UP.</strong>
            </h2>

          </div>

          <div className="about-intro-text">

            <p>
              What started as a passion for badminton became
              a community built around performance, discipline
              and the love of competition.
            </p>

            <p>
              At Smash Arena, beginners and experienced players
              train side by side. Our goal is simple — create
              an environment where every player can discover
              their potential.
            </p>

            <Link
              to="/contact"
              className="text-arrow-link"
            >
              TALK TO THE CLUB
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">

        <div className="about-stat">

          <div className="stat-top">
            <span>01</span>
            <i>+</i>
          </div>

          <strong>12</strong>

          <p>
            YEARS OF
            <br />
            EXPERIENCE
          </p>

        </div>

        <div className="about-stat">

          <div className="stat-top">
            <span>02</span>
            <i>+</i>
          </div>

          <strong>500</strong>

          <p>
            ACTIVE
            <br />
            PLAYERS
          </p>

        </div>

        <div className="about-stat">

          <div className="stat-top">
            <span>03</span>
            <i></i>
          </div>

          <strong>32</strong>

          <p>
            TOURNAMENT
            <br />
            TITLES
          </p>

        </div>

        <div className="about-stat">

          <div className="stat-top">
            <span>04</span>
            <i></i>
          </div>

          <strong>08</strong>

          <p>
            PROFESSIONAL
            <br />
            COACHES
          </p>

        </div>

      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section
        className="about-philosophy"
        ref={addRevealRef}
      >

        <div className="about-philosophy-visual">

          <div className="philosophy-circle circle-large"></div>

          <div className="philosophy-circle circle-medium"></div>

          <div className="philosophy-circle circle-small"></div>

          <div className="philosophy-cross cross-one"></div>

          <div className="philosophy-cross cross-two"></div>

          <div className="philosophy-word">
            PLAY
          </div>

          <div className="philosophy-word philosophy-word-two">
            BETTER
          </div>

        </div>

        <div className="about-philosophy-content">

          <div className="about-section-label">
            <span>02</span>
            OUR PHILOSOPHY
          </div>

          <h2>
            TRAIN WITH
            <br />
            <strong>INTENTION.</strong>
          </h2>

          <p>
            Every movement matters. Every rally teaches
            something. Every training session is an opportunity
            to improve.
          </p>

          <div className="philosophy-points">

            <div>

              <span>01</span>

              <strong>
                DISCIPLINE
              </strong>

              <p>
                Consistency creates players who perform
                when it matters.
              </p>

            </div>

            <div>

              <span>02</span>

              <strong>
                SPEED
              </strong>

              <p>
                Develop faster reactions, sharper movement
                and explosive court coverage.
              </p>

            </div>

            <div>

              <span>03</span>

              <strong>
                PRECISION
              </strong>

              <p>
                Turn technique into confidence and confidence
                into results.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section
        className="about-facilities"
        ref={addRevealRef}
      >

        <div className="facilities-heading">

          <div className="about-section-label">
            <span>03</span>
            THE ARENA
          </div>

          <h2>
            BUILT FOR
            <br />
            <strong>PERFORMANCE.</strong>
          </h2>

          <p>
            Everything around you is designed to help you
            focus on the game.
          </p>

        </div>

        <div className="facility-grid">

          {/* FACILITY 01 */}

          <article className="facility-card facility-main">

            <div className="facility-number">
              01
            </div>

            <div className="facility-icon">
              ◈
            </div>

            <div className="facility-card-content">

              <span>
                COURT 01
              </span>

              <h3>
                PROFESSIONAL
                <br />
                COURTS
              </h3>

              <p>
                High-quality badminton courts designed for
                serious training and competition.
              </p>

            </div>

            <div className="facility-arrow">
              ↗
            </div>

          </article>

          {/* FACILITY 02 */}

          <article className="facility-card">

            <div className="facility-number">
              02
            </div>

            <div className="facility-icon">
              +
            </div>

            <div className="facility-card-content">

              <span>
                ZONE 02
              </span>

              <h3>
                FITNESS &
                <br />
                CONDITIONING
              </h3>

              <p>
                Build strength, agility and explosive movement
                away from the court.
              </p>

            </div>

            <div className="facility-arrow">
              ↗
            </div>

          </article>

          {/* FACILITY 03 */}

          <article className="facility-card">

            <div className="facility-number">
              03
            </div>

            <div className="facility-icon">
              ◎
            </div>

            <div className="facility-card-content">

              <span>
                ZONE 03
              </span>

              <h3>
                RECOVERY &
                <br />
                RELAXATION
              </h3>

              <p>
                Recover properly so you can return stronger
                for your next session.
              </p>

            </div>

            <div className="facility-arrow">
              ↗
            </div>

          </article>

          {/* FACILITY 04 */}

          <article className="facility-card">

            <div className="facility-number">
              04
            </div>

            <div className="facility-icon">
              △
            </div>

            <div className="facility-card-content">

              <span>
                ZONE 04
              </span>

              <h3>
                PLAYER
                <br />
                LOUNGE
              </h3>

              <p>
                A community space where players connect,
                recharge and share the game.
              </p>

            </div>

            <div className="facility-arrow">
              ↗
            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          COMMUNITY
      ===================================================== */}

      <section
        className="about-community"
        ref={addRevealRef}
      >

        <div className="community-bg-circle"></div>

        <div className="community-content">

          <div className="about-section-label">
            <span>04</span>
            THE COMMUNITY
          </div>

          <h2>
            ONE COURT.
            <br />
            <strong>ONE COMMUNITY.</strong>
          </h2>

          <p>
            From your first rally to your biggest tournament,
            you never have to play alone.
          </p>

          <Link
            to="/players"
            className="community-button"
          >
            MEET OUR PLAYERS
            <span>↗</span>
          </Link>

        </div>

        {/* COMMUNITY SHUTTLE */}

        <div className="community-shuttle">

          <div className="about-shuttle-head"></div>

          <div className="about-shuttle-feathers"></div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final-cta">

        <div className="cta-line"></div>

        <span>
          READY TO PLAY?
        </span>

        <h2>
          YOUR COURT
          <br />
          IS <strong>WAITING.</strong>
        </h2>

        <Link
          to="/membership"
          className="final-cta-button"
        >
          JOIN SMASH ARENA
          <span>↗</span>
        </Link>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
};

export default About;