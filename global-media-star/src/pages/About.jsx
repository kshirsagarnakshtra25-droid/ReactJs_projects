import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    number: "01",
    title: "CURIOSITY",
    text: "We look beyond the obvious to discover the stories, ideas and people shaping what comes next.",
  },
  {
    number: "02",
    title: "PERSPECTIVE",
    text: "We connect business, technology, leadership and culture to create a wider understanding of the world.",
  },
  {
    number: "03",
    title: "IMPACT",
    text: "We believe powerful stories should inform, inspire and create meaningful conversations.",
  },
  {
    number: "04",
    title: "EXCELLENCE",
    text: "Every story deserves thoughtful research, strong design and an uncompromising editorial standard.",
  },
];

const journey = [
  {
    year: "01",
    title: "THE IDEA",
    text: "A vision to create a modern media platform where business, ambition and innovation come together.",
  },
  {
    year: "02",
    title: "THE PLATFORM",
    text: "Global Media Star evolved into a digital destination for stories that matter.",
  },
  {
    year: "03",
    title: "THE COMMUNITY",
    text: "Readers, founders, leaders and creators became part of a growing global conversation.",
  },
  {
    year: "04",
    title: "THE FUTURE",
    text: "We continue building a media experience designed for the next generation of ambitious minds.",
  },
];

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-glow"></div>

        <div className="about-hero-grid"></div>

        <div className="about-orbit orbit-one"></div>
        <div className="about-orbit orbit-two"></div>

        <div className="container about-hero-container">

          <div className="about-eyebrow">
            <span></span>
            GLOBAL MEDIA STAR
            <span></span>
            ABOUT US
          </div>

          <h1>
            Stories
            <span>That Shape</span>
            Tomorrow.
          </h1>

          <p className="about-hero-description">
            A modern media platform exploring the people,
            ideas and movements transforming business,
            technology and the world around us.
          </p>

          <div className="about-hero-bottom">

            <Link to="/articles" className="about-gold-btn">
              Explore Our Stories
              <span>↗</span>
            </Link>

            <div className="hero-scroll-indicator">
              <div className="scroll-circle">
                ↓
              </div>

              <span>
                DISCOVER OUR STORY
              </span>
            </div>

          </div>

        </div>

        <div className="hero-side-text">
          EST. • GLOBAL • MEDIA
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="about-intro">

        <div className="container">

          <div className="intro-top">

            <span className="about-kicker">
              WHO WE ARE
            </span>

            <div className="intro-line"></div>

            <span className="intro-index">
              01 / 06
            </span>

          </div>


          <div className="intro-layout">

            <div className="intro-big-text">
              We don't just
              <span>report the world.</span>
              We explore
              <em>what comes next.</em>
            </div>

            <div className="intro-copy">

              <p>
                <strong>GLOBAL MEDIA STAR</strong> is a
                contemporary digital media platform built
                around one simple idea: the most interesting
                stories are often about what is coming next.
              </p>

              <p>
                From visionary leaders and ambitious founders
                to emerging technologies and changing markets,
                we bring together perspectives that help our
                audience understand a rapidly evolving world.
              </p>

              <Link to="/leadership" className="text-link">
                Meet The People We Cover
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">

        <div className="container stats-grid">

          <div className="stat-card">
            <span>01</span>
            <strong>GLOBAL</strong>
            <p>Stories without borders.</p>
          </div>

          <div className="stat-card featured-stat">
            <span>02</span>
            <strong>VISION</strong>
            <p>Ideas focused on tomorrow.</p>
          </div>

          <div className="stat-card">
            <span>03</span>
            <strong>PEOPLE</strong>
            <p>Leaders worth knowing.</p>
          </div>

          <div className="stat-card">
            <span>04</span>
            <strong>IMPACT</strong>
            <p>Stories that create conversations.</p>
          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className="mission-section">

        <div className="container">

          <div className="mission-heading">

            <span className="about-kicker">
              OUR PURPOSE
            </span>

            <h2>
              Built for the
              <strong>curious.</strong>
            </h2>

          </div>


          <div className="mission-grid">

            <article className="mission-card mission-main">

              <div className="mission-number">
                01
              </div>

              <div className="mission-content">

                <span>OUR MISSION</span>

                <h3>
                  Make the complex
                  <em>understandable.</em>
                </h3>

                <p>
                  We turn important developments into
                  compelling stories that are easier to
                  understand, explore and remember.
                </p>

              </div>

              <div className="mission-symbol">
                +
              </div>

            </article>


            <article className="mission-card">

              <div className="mission-number">
                02
              </div>

              <div className="mission-content">

                <span>OUR VISION</span>

                <h3>
                  Create a more
                  <em>informed future.</em>
                </h3>

                <p>
                  We want to become a trusted destination
                  for ambitious people who want to understand
                  the forces shaping tomorrow.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="values-section">

        <div className="container">

          <div className="values-heading">

            <div>
              <span className="about-kicker">
                WHAT DRIVES US
              </span>

              <h2>
                Our
                <strong>Values.</strong>
              </h2>
            </div>

            <p>
              The principles behind every story,
              conversation and experience we create.
            </p>

          </div>


          <div className="values-grid">

            {values.map((value) => (

              <article
                className="value-card"
                key={value.number}
              >

                <div className="value-number">
                  {value.number}
                </div>

                <div className="value-line"></div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

                <span className="value-arrow">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EDITORIAL IMAGE / QUOTE
      ===================================================== */}

      <section className="about-editorial">

        <div className="editorial-image">

          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=90"
            alt="Editorial workspace"
          />

          <div className="editorial-image-overlay"></div>

        </div>


        <div className="container editorial-container">

          <div className="editorial-quote">

            <span>
              OUR EDITORIAL BELIEF
            </span>

            <h2>
              “The best stories don't simply
              tell you <em>what happened.</em>
              They help you understand
              <strong>why it matters.</strong>”
            </h2>

            <div className="quote-line"></div>

            <p>
              GLOBAL MEDIA STAR
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="journey-section">

        <div className="container">

          <div className="journey-heading">

            <span className="about-kicker">
              OUR JOURNEY
            </span>

            <h2>
              From an idea
              <strong>to a movement.</strong>
            </h2>

          </div>


          <div className="journey-timeline">

            {journey.map((item, index) => (

              <article
                className="journey-item"
                key={item.year}
              >

                <div className="journey-number">
                  {item.year}
                </div>

                <div className="journey-dot"></div>

                <div className="journey-content">

                  <span>
                    CHAPTER {index + 1}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="about-categories">

        <div className="container">

          <div className="categories-intro">

            <span className="about-kicker">
              EXPLORE GLOBAL MEDIA STAR
            </span>

            <h2>
              One platform.
              <strong>Many perspectives.</strong>
            </h2>

          </div>


          <div className="category-links">

            <Link to="/business">
              <span>01</span>
              Business
              <b>↗</b>
            </Link>

            <Link to="/technology">
              <span>02</span>
              Technology
              <b>↗</b>
            </Link>

            <Link to="/leadership">
              <span>03</span>
              Leadership
              <b>↗</b>
            </Link>

            <Link to="/startup">
              <span>04</span>
              Startups
              <b>↗</b>
            </Link>

            <Link to="/interviews">
              <span>05</span>
              Interviews
              <b>↗</b>
            </Link>

            <Link to="/news">
              <span>06</span>
              News
              <b>↗</b>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="cta-orb"></div>

        <div className="container">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Stay curious.
            <strong>Stay ahead.</strong>
          </h2>

          <p>
            Discover stories, ideas and people shaping
            the future of business and beyond.
          </p>

          <Link to="/articles">
            Explore Our World
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;