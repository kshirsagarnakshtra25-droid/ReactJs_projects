import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const players = [
  {
    rank: "01",
    name: "AARAV",
    surname: "PATIL",
    category: "MEN'S SINGLES",
    level: "ELITE",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Badminton_player.jpg",
    wins: "42",
    matches: "51",
    power: "94",
    speed: "91",
    accuracy: "96",
  },

  {
    rank: "02",
    name: "RIYA",
    surname: "SHARMA",
    category: "WOMEN'S SINGLES",
    level: "ELITE",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Badminton_player_%281%29.jpg",
    wins: "38",
    matches: "46",
    power: "89",
    speed: "95",
    accuracy: "94",
  },

  {
    rank: "03",
    name: "VIHAAN",
    surname: "JOSHI",
    category: "MEN'S SINGLES",
    level: "ADVANCED",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Utkarsh_Arora.jpg",
    wins: "35",
    matches: "44",
    power: "92",
    speed: "88",
    accuracy: "90",
  },

  {
    rank: "04",
    name: "ANAYA",
    surname: "DESHMUKH",
    category: "WOMEN'S SINGLES",
    level: "ADVANCED",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aakarshi_Kashap.jpg",
    wins: "32",
    matches: "41",
    power: "86",
    speed: "93",
    accuracy: "91",
  },

  {
    rank: "05",
    name: "REYAN",
    surname: "KULKARNI",
    category: "MEN'S DOUBLES",
    level: "ADVANCED",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Viktor_Axelsen_-_Indonesia_Masters_2018.jpg",
    wins: "29",
    matches: "38",
    power: "90",
    speed: "87",
    accuracy: "88",
  },

  {
    rank: "06",
    name: "SAANVI",
    surname: "MORE",
    category: "WOMEN'S DOUBLES",
    level: "INTERMEDIATE",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/An_Se-Young_%28KOR%29.jpg",
    wins: "27",
    matches: "36",
    power: "82",
    speed: "90",
    accuracy: "86",
  },

  {
    rank: "07",
    name: "KABIR",
    surname: "MEHTA",
    category: "MEN'S SINGLES",
    level: "ELITE",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Badminton_player_Jacco_Arends.jpg",
    wins: "31",
    matches: "40",
    power: "93",
    speed: "89",
    accuracy: "92",
  },

  {
    rank: "08",
    name: "MYRA",
    surname: "KAPOOR",
    category: "WOMEN'S SINGLES",
    level: "ADVANCED",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Anna_Thea_Madsen.jpg",
    wins: "30",
    matches: "39",
    power: "87",
    speed: "94",
    accuracy: "90",
  },
];

const categories = [
  "ALL PLAYERS",
  "MEN'S SINGLES",
  "WOMEN'S SINGLES",
  "DOUBLES",
];

const Players = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PLAYERS");

  const filteredPlayers = players.filter((player) => {
    if (activeCategory === "ALL PLAYERS") {
      return true;
    }

    if (activeCategory === "DOUBLES") {
      return player.category.includes("DOUBLES");
    }

    return player.category === activeCategory;
  });

  return (
    <main className="players-page">
        <Navbar />

      {/* BACKGROUND */}
      <div className="players-bg-grid"></div>
      <div className="players-glow players-glow-one"></div>
      <div className="players-glow players-glow-two"></div>

      {/* MOVING SHUTTLES */}
      <div className="players-shuttle players-shuttle-one">
        <span></span>
      </div>

      <div className="players-shuttle players-shuttle-two">
        <span></span>
      </div>

      <div className="players-shuttle players-shuttle-three">
        <span></span>
      </div>

      {/* HERO */}
      <section className="players-hero">

        <div className="players-hero-number">
          03
        </div>

        <div className="players-hero-content">

          <div className="players-eyebrow">
            <span></span>
            MEET THE SQUAD
          </div>

          <h1>
            BUILT TO
            <strong>COMPETE.</strong>
          </h1>

          <p>
            Meet the players who bring speed, precision,
            power and competitive energy to the Smash Arena court.
          </p>

          <div className="players-hero-actions">

            <a
              href="#players-list"
              className="players-primary-button"
            >
              VIEW PLAYERS
              <span>↓</span>
            </a>

            <Link
              to="/contact"
              className="players-secondary-button"
            >
              SCOUT THE SQUAD
            </Link>

          </div>

        </div>

        <div className="players-hero-stat">

          <div className="hero-stat-circle">
            <strong>06</strong>
            <span>ELITE PLAYERS</span>
          </div>

        </div>

      </section>

      {/* FEATURED PLAYER */}
      <section className="featured-player">

        <div className="featured-player-left">

          <div className="section-label">
            <span>01</span>
            FEATURED PLAYER
          </div>

          <div className="featured-rank">
            #01
          </div>

          <h2>
            AARAV
            <strong>PATIL.</strong>
          </h2>

          <p className="featured-category">
            MEN'S SINGLES / ELITE
          </p>

          <p className="featured-description">
            A high-intensity singles player known for explosive
            movement, aggressive attacking shots and relentless
            court coverage.
          </p>

          <div className="featured-buttons">

            <button className="featured-button">
              PLAYER PROFILE
              <span>↗</span>
            </button>

            <Link
              to="/tournaments"
              className="featured-link"
            >
              VIEW TOURNAMENTS
            </Link>

          </div>

        </div>

        <div className="featured-player-right">

          <div className="featured-ring ring-one"></div>
          <div className="featured-ring ring-two"></div>
          <div className="featured-ring ring-three"></div>

          <div className="featured-player-silhouette">
            <div className="player-head"></div>

            <div className="player-body"></div>

            <div className="player-arm player-arm-one"></div>
            <div className="player-arm player-arm-two"></div>

            <div className="player-leg player-leg-one"></div>
            <div className="player-leg player-leg-two"></div>

            <div className="player-racket">
              <div className="racket-head"></div>
              <div className="racket-handle"></div>
            </div>
          </div>

          <div className="featured-power">
            <span>POWER</span>
            <strong>94</strong>
          </div>

        </div>

      </section>

      {/* PLAYER LIST */}
      <section
        className="players-list-section"
        id="players-list"
      >

        <div className="players-heading">

          <div>

            <div className="section-label">
              <span>02</span>
              PLAYER RANKINGS
            </div>

            <h2>
              THE
              <strong>SQUAD.</strong>
            </h2>

          </div>

          <p>
            Competition creates pressure.
            Pressure creates better players.
          </p>

        </div>

        {/* FILTERS */}
        <div className="player-filters">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "player-filter active"
                  : "player-filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>

        {/* CARDS */}
        <div className="players-grid">

          {filteredPlayers.map((player) => (

            <article
              className="player-card"
              key={player.rank}
            >

              <div className="player-card-top">

                <span className="player-card-rank">
                  #{player.rank}
                </span>

                <span className="player-card-level">
                  {player.level}
                </span>

              </div>

              <div className="player-visual">

                <div className="player-visual-circle"></div>

                <div className="mini-player">
                  <div className="mini-head"></div>
                  <div className="mini-body"></div>
                  <div className="mini-leg mini-leg-one"></div>
                  <div className="mini-leg mini-leg-two"></div>
                </div>

                <span className="player-speed">
                  {player.speed}
                </span>

              </div>

              <div className="player-card-info">

                <span className="player-category">
                  {player.category}
                </span>

                <h3>
                  {player.name}
                  <strong>{player.surname}</strong>
                </h3>

                <div className="player-card-stats">

                  <div>
                    <span>WINS</span>
                    <strong>{player.wins}</strong>
                  </div>

                  <div>
                    <span>MATCHES</span>
                    <strong>{player.matches}</strong>
                  </div>

                  <div>
                    <span>POWER</span>
                    <strong>{player.power}</strong>
                  </div>

                </div>

                <button className="player-view-button">
                  VIEW PROFILE
                  <span>↗</span>
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* PERFORMANCE */}
      <section className="players-performance">

        <div className="performance-content">

          <div className="section-label">
            <span>03</span>
            PERFORMANCE DATA
          </div>

          <h2>
            NUMBERS
            <strong>DON'T LIE.</strong>
          </h2>

          <p>
            Every training session, every rally and every match
            pushes our players closer to their next level.
          </p>

        </div>

        <div className="performance-stats">

          <div className="performance-stat">
            <span>AVERAGE WIN RATE</span>
            <strong>
              78<span>%</span>
            </strong>
          </div>

          <div className="performance-stat">
            <span>TOURNAMENT WINS</span>
            <strong>
              24
            </strong>
          </div>

          <div className="performance-stat">
            <span>ACTIVE PLAYERS</span>
            <strong>
              42
            </strong>
          </div>

          <div className="performance-stat">
            <span>TRAINING HOURS</span>
            <strong>
              9K<span>+</span>
            </strong>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="players-final">

        <div className="players-final-grid"></div>

        <span>YOUR NAME COULD BE NEXT</span>

        <h2>
          READY TO
          <br />
          <strong>COMPETE?</strong>
        </h2>

        <div className="players-final-actions">

          <Link
            to="/membership"
            className="players-final-button"
          >
            JOIN THE CLUB
            <span>↗</span>
          </Link>

          <Link
            to="/training"
            className="players-final-outline"
          >
            START TRAINING
          </Link>

        </div>

      </section>
        <Footer/>

    </main>
  );
};

export default Players;