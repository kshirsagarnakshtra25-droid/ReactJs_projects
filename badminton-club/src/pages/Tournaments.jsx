import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const tournaments = [
  {
    id: "01",
    month: "OCT",
    date: "18",
    title: "SMASH OPEN",
    type: "OPEN CHAMPIONSHIP",
    location: "SMASH ARENA",
    players: "128",
    status: "REGISTRATION OPEN",
  },
  {
    id: "02",
    month: "NOV",
    date: "08",
    title: "ARENA CUP",
    type: "CLUB CHAMPIONSHIP",
    location: "CENTRAL COURT",
    players: "96",
    status: "COMING SOON",
  },
  {
    id: "03",
    month: "DEC",
    date: "14",
    title: "WINTER SMASH",
    type: "RANKING EVENT",
    location: "SMASH ARENA",
    players: "64",
    status: "COMING SOON",
  },
  {
    id: "04",
    month: "JAN",
    date: "25",
    title: "NEW YEAR OPEN",
    type: "OPEN CHAMPIONSHIP",
    location: "NATIONAL COURT",
    players: "160",
    status: "COMING SOON",
  },
];

const categories = [
  "ALL EVENTS",
  "OPEN",
  "CLUB",
  "RANKING",
];

const Tournaments = () => {
  const [activeCategory, setActiveCategory] = useState("ALL EVENTS");

  const filteredTournaments = tournaments.filter((tournament) => {
    if (activeCategory === "ALL EVENTS") return true;

    if (activeCategory === "OPEN") {
      return tournament.type.includes("OPEN");
    }

    if (activeCategory === "CLUB") {
      return tournament.type.includes("CLUB");
    }

    if (activeCategory === "RANKING") {
      return tournament.type.includes("RANKING");
    }

    return true;
  });

  return (
    <main className="tournaments-page">
        <Navbar />

      {/* BACKGROUND */}
      <div className="tournaments-grid"></div>
      <div className="tournaments-glow tournaments-glow-one"></div>
      <div className="tournaments-glow tournaments-glow-two"></div>

      {/* MOVING SHUTTLES */}
      <div className="tournament-shuttle tournament-shuttle-one">
        <span></span>
      </div>

      <div className="tournament-shuttle tournament-shuttle-two">
        <span></span>
      </div>

      <div className="tournament-shuttle tournament-shuttle-three">
        <span></span>
      </div>

      {/* HERO */}
      <section className="tournaments-hero">

        <div className="tournaments-hero-number">
          04
        </div>

        <div className="tournaments-hero-content">

          <div className="tournaments-eyebrow">
            <span></span>
            COMPETE / PERFORM / WIN
          </div>

          <h1>
            OWN THE
            <strong>COURT.</strong>
          </h1>

          <p>
            From club battles to championship finals,
            every tournament is an opportunity to test your game.
          </p>

          <div className="tournaments-hero-buttons">

            <a
              href="#upcoming"
              className="tournament-primary-button"
            >
              VIEW EVENTS
              <span>↓</span>
            </a>

            <Link
              to="/membership"
              className="tournament-secondary-button"
            >
              ENTER A TOURNAMENT
            </Link>

          </div>

        </div>

        {/* HERO TROPHY */}
        <div className="trophy-visual">

          <div className="trophy-rings trophy-ring-one"></div>
          <div className="trophy-rings trophy-ring-two"></div>

          <div className="trophy">

            <div className="trophy-cup">

              <div className="trophy-handle trophy-handle-left"></div>
              <div className="trophy-handle trophy-handle-right"></div>

              <div className="trophy-top"></div>

            </div>

            <div className="trophy-stem"></div>

            <div className="trophy-base"></div>

          </div>

          <div className="trophy-label">
            <span>CHAMPION</span>
            <strong>01</strong>
          </div>

        </div>

      </section>

      {/* TOURNAMENT STATS */}
      <section className="tournament-stats">

        <div className="tournament-stat">
          <span>EVENTS THIS YEAR</span>
          <strong>18</strong>
        </div>

        <div className="tournament-stat">
          <span>TOTAL PLAYERS</span>
          <strong>420</strong>
        </div>

        <div className="tournament-stat">
          <span>MATCHES PLAYED</span>
          <strong>1.8K</strong>
        </div>

        <div className="tournament-stat">
          <span>CHAMPIONS</span>
          <strong>36</strong>
        </div>

      </section>

      {/* UPCOMING */}
      <section
        className="upcoming-tournaments"
        id="upcoming"
      >

        <div className="tournaments-heading">

          <div>

            <div className="tournament-section-label">
              <span>01</span>
              UPCOMING EVENTS
            </div>

            <h2>
              NEXT
              <strong>BATTLES.</strong>
            </h2>

          </div>

          <p>
            Choose your event. Prepare your game.
            Step onto the court ready to compete.
          </p>

        </div>

        {/* FILTER */}
        <div className="tournament-filters">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "tournament-filter active"
                  : "tournament-filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>

        {/* TOURNAMENT CARDS */}
        <div className="tournaments-list">

          {filteredTournaments.map((tournament) => (

            <article
              className="tournament-card"
              key={tournament.id}
            >

              <div className="tournament-card-number">
                {tournament.id}
              </div>

              <div className="tournament-date">

                <span>{tournament.month}</span>

                <strong>
                  {tournament.date}
                </strong>

              </div>

              <div className="tournament-card-main">

                <span className="tournament-type">
                  {tournament.type}
                </span>

                <h3>
                  {tournament.title}
                </h3>

                <div className="tournament-location">
                  <span>LOCATION</span>
                  <strong>{tournament.location}</strong>
                </div>

              </div>

              <div className="tournament-card-meta">

                <div>
                  <span>PLAYERS</span>
                  <strong>{tournament.players}</strong>
                </div>

                <div className="tournament-status">
                  <span>STATUS</span>
                  <strong>{tournament.status}</strong>
                </div>

              </div>

              <Link
                to="/contact"
                className="tournament-card-button"
              >
                DETAILS
                <span>↗</span>
              </Link>

            </article>

          ))}

        </div>

      </section>

      {/* CHAMPIONSHIP SECTION */}
      <section className="championship-section">

        <div className="championship-visual">

          <div className="championship-circle circle-one"></div>
          <div className="championship-circle circle-two"></div>
          <div className="championship-circle circle-three"></div>

          <div className="championship-number">
            01
          </div>

          <div className="championship-cross cross-one"></div>
          <div className="championship-cross cross-two"></div>

        </div>

        <div className="championship-content">

          <div className="tournament-section-label">
            <span>02</span>
            THE CHAMPIONSHIP MINDSET
          </div>

          <h2>
            PRESSURE
            <br />
            CREATES
            <br />
            <strong>PLAYERS.</strong>
          </h2>

          <p>
            Tournament badminton is different.
            The rallies are faster. The decisions matter more.
            Our competitive programs prepare players to perform
            when the pressure is highest.
          </p>

          <div className="championship-points">

            <div>
              <span>01</span>
              <strong>MENTALITY</strong>
            </div>

            <div>
              <span>02</span>
              <strong>TACTICS</strong>
            </div>

            <div>
              <span>03</span>
              <strong>EXECUTION</strong>
            </div>

          </div>

          <Link
            to="/training"
            className="championship-button"
          >
            TRAIN FOR COMPETITION
            <span>↗</span>
          </Link>

        </div>

      </section>

      {/* WINNERS */}
      <section className="winners-section">

        <div className="winners-heading">

          <div className="tournament-section-label">
            <span>03</span>
            RECENT CHAMPIONS
          </div>

          <h2>
            BUILT TO
            <strong>WIN.</strong>
          </h2>

        </div>

        <div className="winners-grid">

          <div className="winner-card winner-main">

            <span className="winner-rank">
              01
            </span>

            <div className="winner-trophy">
              ★
            </div>

            <span>SMASH OPEN 2026</span>

            <h3>
              AARAV
              <strong>PATIL</strong>
            </h3>

            <p>
              MEN'S SINGLES CHAMPION
            </p>

          </div>

          <div className="winner-card">

            <span className="winner-rank">
              02
            </span>

            <div className="winner-trophy">
              ★
            </div>

            <span>ARENA CUP 2026</span>

            <h3>
              RIYA
              <strong>SHARMA</strong>
            </h3>

            <p>
              WOMEN'S SINGLES CHAMPION
            </p>

          </div>

          <div className="winner-card">

            <span className="winner-rank">
              03
            </span>

            <div className="winner-trophy">
              ★
            </div>

            <span>WINTER SMASH 2025</span>

            <h3>
              REYAN
              <strong>KULKARNI</strong>
            </h3>

            <p>
              MEN'S DOUBLES CHAMPION
            </p>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="tournaments-final">

        <div className="tournaments-final-grid"></div>

        <span>
          THE NEXT MATCH IS YOURS
        </span>

        <h2>
          READY TO
          <br />
          <strong>FIGHT?</strong>
        </h2>

        <div className="tournaments-final-actions">

          <Link
            to="/membership"
            className="tournaments-final-button"
          >
            ENTER THE ARENA
            <span>↗</span>
          </Link>

          <Link
            to="/training"
            className="tournaments-final-outline"
          >
            PREPARE TO WIN
          </Link>

        </div>

      </section>
      <Footer/>

    </main>
  );
};

export default Tournaments;