
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: "MATCHES",
      title: "THE SMASH",
      location: "MATCH DAY",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player.jpg",
      size: "large",
    },
    {
      id: 2,
      category: "PLAYERS",
      title: "READY TO PLAY",
      location: "BADMINTON COURT",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player_(1).jpg",
      size: "small",
    },
    {
      id: 3,
      category: "TRAINING",
      title: "FOCUS",
      location: "TRAINING SESSION",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/India_badminton_player.jpg",
      size: "small",
    },
    {
      id: 4,
      category: "MATCHES",
      title: "COURT BATTLE",
      location: "COMPETITION",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player_2011.jpg",
      size: "wide",
    },
    {
      id: 5,
      category: "PLAYERS",
      title: "IN THE AIR",
      location: "ATTACK PLAY",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player.jpg",
      size: "tall",
    },
    {
      id: 6,
      category: "TRAINING",
      title: "BUILD THE GAME",
      location: "ARENA TRAINING",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/India_badminton_player.jpg",
      size: "small",
    },
    {
      id: 7,
      category: "MATCHES",
      title: "MATCH POINT",
      location: "TOURNAMENT COURT",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player_(1).jpg",
      size: "large",
    },
    {
      id: 8,
      category: "PLAYERS",
      title: "THE NEXT SHOT",
      location: "SINGLES",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player_2011.jpg",
      size: "small",
    },
    {
      id: 9,
      category: "TRAINING",
      title: "COURT MOVEMENT",
      location: "FOOTWORK SESSION",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player.jpg",
      size: "small",
    },
    {
      id: 10,
      category: "MATCHES",
      title: "FINAL RALLY",
      location: "CHAMPIONSHIP",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/India_badminton_player.jpg",
      size: "wide",
    },
    {
      id: 11,
      category: "PLAYERS",
      title: "LOCKED IN",
      location: "PLAYER MOMENT",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player_(1).jpg",
      size: "tall",
    },
    {
      id: 12,
      category: "TRAINING",
      title: "TRAIN HARD",
      location: "ELITE PROGRAM",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badminton_player_2011.jpg",
      size: "small",
    },
  ];

  const categories = [
    "ALL",
    "MATCHES",
    "TRAINING",
    "PLAYERS",
  ];

  const filteredImages =
    activeCategory === "ALL"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="gallery-page">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-grid"></div>

        <div className="gallery-glow gallery-glow-one"></div>
        <div className="gallery-glow gallery-glow-two"></div>

        <div className="gallery-hero-content">

          <div className="gallery-eyebrow">
            <span></span>
            SMASH ARENA / VISUAL ARCHIVE
          </div>

          <div className="gallery-hero-number">
            07
          </div>

          <h1>
            SEE
            <br />
            <span>THE ACTION.</span>
          </h1>

          <p>
            Real moments from the badminton court.
            Real players. Real competition.
            Welcome inside Smash Arena.
          </p>

        </div>

        <div className="gallery-hero-shuttle">
          <div className="gallery-shuttle-head"></div>

          <div className="gallery-shuttle-feathers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="gallery-hero-counter">
          <strong>12</strong>
          <span>BADMINTON MOMENTS</span>
        </div>

        <div className="gallery-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="gallery-main-section">

        <div className="gallery-header">

          <div>

            <span className="gallery-section-label">
              BADMINTON ARCHIVE
            </span>

            <h2>
              INSIDE
              <br />
              <span>THE ARENA.</span>
            </h2>

          </div>

          <p>
            From explosive smashes to intense training
            sessions, every image captures the energy
            of badminton.
          </p>

        </div>

        {/* FILTER */}

        <div className="gallery-filter">

          {categories.map((category, index) => (

            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "gallery-filter-button active"
                  : "gallery-filter-button"
              }
              onClick={() => setActiveCategory(category)}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              {category}

            </button>

          ))}

        </div>

        {/* ================= PROPER PHOTO GRID ================= */}

        <div className="gallery-grid">

          {filteredImages.map((item) => (

            <article
              key={item.id}
              className={`gallery-card gallery-${item.size}`}
              onClick={() => setSelectedImage(item)}
            >

              <img
                src={item.image}
                alt={`${item.title} - badminton`}
                loading="lazy"
              />

              <div className="gallery-card-overlay"></div>

              <div className="gallery-card-number">
                {String(item.id).padStart(2, "0")}
              </div>

              <div className="gallery-card-category">
                {item.category}
              </div>

              <div className="gallery-card-info">

                <span>
                  {item.location}
                </span>

                <h3>
                  {item.title}
                </h3>

              </div>

              <button
                type="button"
                className="gallery-card-arrow"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedImage(item);
                }}
                aria-label={`Open ${item.title}`}
              >
                ↗
              </button>

            </article>

          ))}

        </div>

      </section>

      {/* ================= STATEMENT ================= */}

      <section className="gallery-statement">

        <div className="gallery-statement-bg">
          SMASH
        </div>

        <div className="gallery-statement-content">

          <span className="gallery-section-label">
            MORE THAN A GAME
          </span>

          <h2>
            EVERY
            <br />
            <span>POINT MATTERS.</span>
          </h2>

          <p>
            Every rally creates a story.
            Every tournament creates a memory.
            Every player brings their own energy
            to the badminton court.
          </p>

          <div className="gallery-statement-buttons">

            <Link to="/players">
              MEET OUR PLAYERS
              <span>↗</span>
            </Link>

            <Link to="/tournaments">
              VIEW TOURNAMENTS
            </Link>

          </div>

        </div>

        <div className="gallery-court-visual">

          <div className="gallery-court-line line-one"></div>
          <div className="gallery-court-line line-two"></div>
          <div className="gallery-court-line line-three"></div>
          <div className="gallery-court-net"></div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="gallery-final">

        <div className="gallery-final-grid"></div>

        <div className="gallery-final-content">

          <span className="gallery-section-label">
            YOUR TURN
          </span>

          <h2>
            MAKE YOUR
            <br />
            <span>OWN MOMENT.</span>
          </h2>

          <p>
            Step onto the badminton court and become
            part of the next Smash Arena story.
          </p>

          <Link to="/membership">
            JOIN THE ARENA
            <span>↗</span>
          </Link>

        </div>

      </section>

      {/* ================= LIGHTBOX ================= */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="gallery-lightbox-box"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="gallery-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={`${selectedImage.title} - badminton`}
            />

            <div className="gallery-lightbox-details">

              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

              <p>
                {selectedImage.location}
              </p>

            </div>

          </div>

        </div>

      )}

      <Footer />

    </main>
  );
};

export default Gallery;
