import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const coaches = [
  {
    id: 1,
    number: "01",
    name: "ARJUN",
    surname: "MEHRA",
    role: "HEAD PERFORMANCE COACH",
    experience: "14+ YEARS",
    specialty: "TECHNIQUE / TACTICS",
    quote: "DISCIPLINE BUILDS THE PLAYER.",
    bio: "Focused on technical development, match strategy and building confident competitive players.",
    initials: "AM",
    stats: {
      players: "180+",
      titles: "24",
      experience: "14",
    },
  },
  {
    id: 2,
    number: "02",
    name: "RIYA",
    surname: "KAPOOR",
    role: "ELITE PERFORMANCE COACH",
    experience: "11+ YEARS",
    specialty: "SPEED / AGILITY",
    quote: "MOVE FIRST. THINK FASTER.",
    bio: "Specializes in explosive movement, agility, reaction speed and high-intensity badminton training.",
    initials: "RK",
    stats: {
      players: "140+",
      titles: "18",
      experience: "11",
    },
  },
  {
    id: 3,
    number: "03",
    name: "KARAN",
    surname: "PATIL",
    role: "TECHNICAL COACH",
    experience: "09+ YEARS",
    specialty: "SHOT / FOOTWORK",
    quote: "PERFECT THE BASICS. THEN BREAK LIMITS.",
    bio: "Works with players to develop clean technique, efficient footwork and reliable shot execution.",
    initials: "KP",
    stats: {
      players: "120+",
      titles: "15",
      experience: "09",
    },
  },
  {
    id: 4,
    number: "04",
    name: "NEHA",
    surname: "SHARMA",
    role: "JUNIOR DEVELOPMENT COACH",
    experience: "07+ YEARS",
    specialty: "JUNIOR / FOUNDATION",
    quote: "EVERY CHAMPION STARTS SOMEWHERE.",
    bio: "Passionate about developing young players through fundamentals, confidence and competitive habits.",
    initials: "NS",
    stats: {
      players: "200+",
      titles: "11",
      experience: "07",
    },
  },
];

const Coaches = () => {
  const [activeCoach, setActiveCoach] = useState(0);

  const coach = coaches[activeCoach];

  return (
    <main className="coaches-page">
        <Navbar />
      {/* =========================================
          HERO
      ========================================= */}

      <section className="coaches-hero">

        <div className="coaches-background-grid"></div>

        <div className="coaches-glow"></div>

        <div className="coaches-big-text">
          COACH
        </div>

        <div className="coaches-hero-content">

          <div className="coaches-eyebrow">
            <span></span>
            THE PEOPLE BEHIND THE PLAYERS
          </div>

          <h1>
            COACH
            <strong>THE GAME.</strong>
          </h1>

          <p>
            Experience-driven coaching built around
            technique, movement, strategy and competitive
            performance.
          </p>

          <div className="coaches-hero-meta">
            <span>08</span>
            <small>PERFORMANCE<br />COACHES</small>
          </div>

        </div>

        <div className="coaches-vertical-label">
          TECHNIQUE / SPEED / MINDSET
        </div>

      </section>


      {/* =========================================
          FEATURED COACH
      ========================================= */}

      <section className="featured-coach">

        <div className="featured-coach-header">

          <div className="coaches-section-label">
            <span>01</span>
            MEET THE TEAM
          </div>

          <p>
            SELECT A COACH TO EXPLORE THEIR
            SPECIALIZATION AND EXPERIENCE.
          </p>

        </div>


        <div className="coach-selector">

          {coaches.map((item, index) => (
            <button
              key={item.id}
              className={
                activeCoach === index
                  ? "coach-selector-item active"
                  : "coach-selector-item"
              }
              onClick={() => setActiveCoach(index)}
            >

              <span>{item.number}</span>

              <strong>
                {item.name}
              </strong>

              <small>
                {item.surname}
              </small>

              <b>↗</b>

            </button>
          ))}

        </div>


        <div className="featured-coach-card">

          <div className="featured-coach-visual">

            <div className="coach-portrait-bg"></div>

            <div className="coach-portrait-grid"></div>

            <div className="coach-initials">
              {coach.initials}
            </div>

            <div className="coach-portrait-ring"></div>

            <div className="coach-portrait-number">
              {coach.number}
            </div>

            <div className="coach-portrait-label">
              SMASH ARENA
            </div>

          </div>


          <div className="featured-coach-info">

            <span className="featured-role">
              {coach.role}
            </span>

            <h2>
              {coach.name}
              <strong>{coach.surname}</strong>
            </h2>

            <div className="coach-specialty">
              SPECIALTY
              <b>{coach.specialty}</b>
            </div>

            <p>
              {coach.bio}
            </p>

            <blockquote>
              "{coach.quote}"
            </blockquote>

            <div className="featured-coach-actions">

              <Link
                to="/contact"
                className="coach-contact-button"
              >
                BOOK A SESSION
                <span>↗</span>
              </Link>

              <span className="coach-experience">
                {coach.experience}
              </span>

            </div>

          </div>

        </div>


        {/* COACH STATS */}

        <div className="coach-stats">

          <div className="coach-stat">

            <span>PLAYERS TRAINED</span>

            <strong>
              {coach.stats.players}
            </strong>

          </div>

          <div className="coach-stat">

            <span>TOURNAMENT TITLES</span>

            <strong>
              {coach.stats.titles}
            </strong>

          </div>

          <div className="coach-stat">

            <span>YEARS EXPERIENCE</span>

            <strong>
              {coach.stats.experience}
            </strong>

          </div>

          <div className="coach-stat coach-stat-last">

            <span>FOCUS</span>

            <strong>
              {activeCoach + 1}
              <small>/04</small>
            </strong>

          </div>

        </div>

      </section>


      {/* =========================================
          COACHING PHILOSOPHY
      ========================================= */}

      <section className="coaching-philosophy">

        <div className="philosophy-number">
          02
        </div>

        <div className="philosophy-left">

          <div className="coaches-section-label">
            <span>02</span>
            OUR PHILOSOPHY
          </div>

          <h2>
            MORE THAN
            <br />
            <strong>TECHNIQUE.</strong>
          </h2>

        </div>


        <div className="philosophy-right">

          <p className="philosophy-intro">
            Great badminton isn't only about hitting the
            shuttle harder. It's about understanding movement,
            reading the game and making the right decision
            under pressure.
          </p>


          <div className="philosophy-points">

            <div className="philosophy-point">

              <span>01</span>

              <div>
                <h3>TECHNIQUE</h3>

                <p>
                  Clean fundamentals create consistency,
                  control and confidence.
                </p>
              </div>

            </div>


            <div className="philosophy-point">

              <span>02</span>

              <div>
                <h3>MOVEMENT</h3>

                <p>
                  Efficient footwork helps you reach the
                  shuttle earlier and recover faster.
                </p>
              </div>

            </div>


            <div className="philosophy-point">

              <span>03</span>

              <div>
                <h3>MENTALITY</h3>

                <p>
                  Learn to stay composed, focused and
                  confident when the match gets difficult.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          COACHING STATS
      ========================================= */}

      <section className="coach-performance">

        <div className="performance-heading">

          <div className="coaches-section-label">
            <span>03</span>
            PERFORMANCE DATA
          </div>

          <h2>
            BUILT FOR
            <strong>RESULTS.</strong>
          </h2>

        </div>


        <div className="performance-grid">

          <div className="performance-card">

            <span>01</span>

            <strong>640+</strong>

            <p>
              PLAYERS TRAINED
            </p>

            <div className="performance-bar">
              <i></i>
            </div>

          </div>


          <div className="performance-card">

            <span>02</span>

            <strong>68</strong>

            <p>
              TOURNAMENT TITLES
            </p>

            <div className="performance-bar">
              <i></i>
            </div>

          </div>


          <div className="performance-card">

            <span>03</span>

            <strong>41</strong>

            <p>
              JUNIOR CHAMPIONS
            </p>

            <div className="performance-bar">
              <i></i>
            </div>

          </div>


          <div className="performance-card">

            <span>04</span>

            <strong>08</strong>

            <p>
              EXPERT COACHES
            </p>

            <div className="performance-bar">
              <i></i>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="coaches-cta">

        <div className="coaches-cta-circle"></div>

        <span>
          FIND THE COACH WHO FITS YOUR GAME
        </span>

        <h2>
          READY TO
          <strong>LEVEL UP?</strong>
        </h2>

        <Link
          to="/membership"
          className="coaches-cta-button"
        >
          JOIN SMASH ARENA
          <span>↗</span>
        </Link>

      </section>
       <Footer />

    </main>
  );
};

export default Coaches;