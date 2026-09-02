import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Training = () => {
  const [activeLevel, setActiveLevel] = useState("INTERMEDIATE");

  const levels = {
    BEGINNER: {
      number: "01",
      title: "BUILD THE BASE.",
      description:
        "Learn the fundamentals, movement patterns, racket control and court awareness needed to start playing with confidence.",
      focus: ["Footwork", "Racket Control", "Basic Strokes", "Court Movement"],
      color: "FOUNDATION",
    },

    INTERMEDIATE: {
      number: "02",
      title: "SHARPEN YOUR GAME.",
      description:
        "Take your game further with structured drills, faster movement, stronger strokes and smarter shot selection.",
      focus: ["Advanced Footwork", "Smash Technique", "Defense", "Shot Selection"],
      color: "PERFORMANCE",
    },

    ADVANCED: {
      number: "03",
      title: "PLAY WITH PURPOSE.",
      description:
        "Train at a higher intensity with match situations, tactical drills, pressure training and advanced movement patterns.",
      focus: ["Tactics", "Match Play", "Attack Patterns", "Defense Transitions"],
      color: "COMPETITION",
    },

    ELITE: {
      number: "04",
      title: "TRAIN LIKE A CHAMPION.",
      description:
        "High-performance training designed for serious competitors who want maximum speed, precision, endurance and consistency.",
      focus: ["Performance", "Explosiveness", "Match Strategy", "Mental Strength"],
      color: "ELITE",
    },
  };

  const current = levels[activeLevel];

  return (
    <main className="training-page">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="training-hero">
        <div className="training-hero-grid"></div>

        <div className="training-glow training-glow-one"></div>
        <div className="training-glow training-glow-two"></div>

        <div className="training-floating-shuttle training-shuttle-one">
          🏸
        </div>

        <div className="training-floating-shuttle training-shuttle-two">
          🏸
        </div>

        <div className="training-hero-content">
          <div className="training-eyebrow">
            <span></span>
            SMASH ARENA / TRAINING PROGRAM
          </div>

          <div className="training-number">03</div>

          <h1>
            TRAIN
            <br />
            <span>HARDER.</span>
          </h1>

          <p>
            Structured badminton training built around movement,
            technique, speed, strategy and real match performance.
          </p>

          <div className="training-hero-actions">
            <Link to="/contact" className="training-primary-button">
              BOOK A SESSION
              <span>↗</span>
            </Link>

            <Link to="/membership" className="training-secondary-button">
              VIEW MEMBERSHIP
            </Link>
          </div>
        </div>

        <div className="training-hero-visual">
          <div className="training-circle outer"></div>
          <div className="training-circle middle"></div>
          <div className="training-circle inner"></div>

          <div className="training-crosshair">
            <span></span>
            <span></span>
          </div>

          <div className="training-speed">
            <strong>100%</strong>
            <span>FOCUS</span>
          </div>
        </div>

        <div className="training-scroll">
          <span></span>
          SCROLL TO TRAIN
        </div>
      </section>

      {/* ================= LEVEL SELECTOR ================= */}

      <section className="training-level-section">
        <div className="training-section-header">
          <div>
            <span className="training-section-label">
              FIND YOUR LEVEL
            </span>

            <h2>
              EVERY PLAYER
              <br />
              <span>HAS A STARTING POINT.</span>
            </h2>
          </div>

          <p>
            Whether you are picking up a racket for the first time or
            preparing for serious competition, our programs adapt to
            your current level and goals.
          </p>
        </div>

        <div className="training-level-layout">
          <div className="training-level-menu">
            {Object.keys(levels).map((level) => (
              <button
                key={level}
                type="button"
                className={
                  activeLevel === level
                    ? "training-level-button active"
                    : "training-level-button"
                }
                onClick={() => setActiveLevel(level)}
              >
                <span>
                  {levels[level].number}
                </span>

                <strong>{level}</strong>

                <em>↗</em>
              </button>
            ))}
          </div>

          <div className="training-level-card">
            <div className="training-card-top">
              <span>PROGRAM / {current.number}</span>
              <span>{current.color}</span>
            </div>

            <div className="training-card-number">
              {current.number}
            </div>

            <h3>{current.title}</h3>

            <p>{current.description}</p>

            <div className="training-focus-grid">
              {current.focus.map((item, index) => (
                <div className="training-focus-item" key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <Link to="/contact" className="training-card-button">
              START TRAINING
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRAINING METHOD ================= */}

      <section className="training-method-section">
        <div className="training-method-bg">MOVE</div>

        <div className="training-method-header">
          <span className="training-section-label">
            THE SMASH METHOD
          </span>

          <h2>
            TRAINING THAT
            <br />
            <span>TRANSLATES TO MATCH DAY.</span>
          </h2>
        </div>

        <div className="training-method-grid">
          <article className="training-method-card">
            <span className="method-number">01</span>

            <div className="method-icon">↯</div>

            <h3>MOVE</h3>

            <p>
              Build explosive footwork and efficient movement patterns
              so you reach every shot faster.
            </p>

            <div className="method-line"></div>
          </article>

          <article className="training-method-card featured">
            <span className="method-number">02</span>

            <div className="method-icon">◈</div>

            <h3>STRIKE</h3>

            <p>
              Develop clean technique, stronger contact and precise
              shot placement across every area of the court.
            </p>

            <div className="method-line"></div>
          </article>

          <article className="training-method-card">
            <span className="method-number">03</span>

            <div className="method-icon">+</div>

            <h3>COMPETE</h3>

            <p>
              Put your skills under pressure through match situations,
              tactical drills and competitive game play.
            </p>

            <div className="method-line"></div>
          </article>
        </div>
      </section>

      {/* ================= TRAINING METRICS ================= */}

      <section className="training-metrics-section">
        <div className="training-metrics-header">
          <span className="training-section-label">
            PERFORMANCE DATA
          </span>

          <h2>
            NUMBERS
            <br />
            <span>MATTER.</span>
          </h2>
        </div>

        <div className="training-metrics-grid">
          <div className="training-metric">
            <strong>04</strong>
            <span>TRAINING LEVELS</span>
          </div>

          <div className="training-metric">
            <strong>12+</strong>
            <span>WEEKLY SESSIONS</span>
          </div>

          <div className="training-metric">
            <strong>06</strong>
            <span>CORE SKILL AREAS</span>
          </div>

          <div className="training-metric">
            <strong>100%</strong>
            <span>COURT FOCUS</span>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="training-final-section">
        <div className="training-final-grid"></div>

        <div className="training-final-content">
          <span className="training-section-label">
            READY TO LEVEL UP?
          </span>

          <h2>
            YOUR NEXT
            <br />
            <span>GAME STARTS HERE.</span>
          </h2>

          <p>
            Join Smash Arena and train with a program designed around
            your goals, your level and your game.
          </p>

          <div className="training-final-actions">
            <Link to="/membership" className="training-primary-button">
              JOIN THE ARENA
              <span>↗</span>
            </Link>

            <Link to="/contact" className="training-secondary-button">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Training;