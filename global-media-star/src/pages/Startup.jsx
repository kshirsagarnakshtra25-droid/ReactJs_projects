import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Startups.css";

const featuredStartups = [
  {
    name: "Nova AI",
    category: "ARTIFICIAL INTELLIGENCE",
    location: "San Francisco",
    description:
      "Building intelligent tools that help businesses automate complex workflows.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "Finora",
    category: "FINTECH",
    location: "London",
    description:
      "Reimagining how modern businesses manage financial intelligence.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "GreenGrid",
    category: "CLIMATE TECH",
    location: "Berlin",
    description:
      "Creating smarter energy systems for a more sustainable future.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "HealthNova",
    category: "HEALTH TECH",
    location: "Boston",
    description:
      "Using technology to make healthcare more accessible and intelligent.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "Orbit Labs",
    category: "SPACE TECH",
    location: "Austin",
    description:
      "Developing technologies for the next generation of space exploration.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "UrbanX",
    category: "FUTURE CITIES",
    location: "Singapore",
    description:
      "Designing technology that makes cities smarter, cleaner and more connected.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=90",
  },
];

const startupTrends = [
  {
    number: "01",
    title: "Artificial Intelligence",
    text: "AI continues to reshape industries, products and the future of work.",
  },
  {
    number: "02",
    title: "Climate Technology",
    text: "A new generation of companies is building solutions for a changing planet.",
  },
  {
    number: "03",
    title: "Fintech Revolution",
    text: "Financial technology is creating new ways to move, manage and invest money.",
  },
  {
    number: "04",
    title: "Future of Work",
    text: "Startups are redefining how teams collaborate, create and build companies.",
  },
];

const startupCategories = [
  "Artificial Intelligence",
  "Fintech",
  "Health Tech",
  "Climate Tech",
  "SaaS",
  "Consumer",
  "Space Tech",
  "Future Cities",
];

function Startup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="startup-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="startup-hero">

        <div className="startup-hero-image"></div>

        <div className="startup-hero-overlay"></div>

        <div className="container startup-hero-content">

          <span className="startup-kicker">
            GLOBAL MEDIA STAR
          </span>

          <div className="startup-line"></div>

          <span className="startup-category">
            STARTUP & INNOVATION
          </span>

          <h1>
            Ideas.
            <span>Ambition.</span>
            Impact.
          </h1>

          <p>
            Discover the founders, companies and ideas
            building the next generation of global business.
          </p>

          <div className="startup-hero-buttons">

            <a href="#featured-startups" className="startup-gold-btn">
              Explore Startups
              <span>↗</span>
            </a>

            <a href="#trends" className="startup-outline-btn">
              Explore Trends
            </a>

          </div>

        </div>

        <div className="startup-scroll">
          SCROLL TO DISCOVER
          <span>↓</span>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="startup-intro">

        <div className="container">

          <div className="startup-intro-grid">

            <div className="startup-number">
              01
            </div>

            <div>

              <span className="section-kicker dark">
                THE STARTUP EDIT
              </span>

              <h2>
                Where bold
                <span>ideas become reality.</span>
              </h2>

            </div>

            <p>
              Startups are more than young companies.
              They are experiments in ambition, technology
              and new ways of solving the world's biggest
              challenges.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STARTUP OF THE WEEK
      ===================================================== */}

      <section className="startup-of-week">

        <div className="container">

          <div className="startup-feature">

            <div className="startup-feature-image">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=90"
                alt="Startup team"
              />

              <span className="feature-badge">
                STARTUP OF THE WEEK
              </span>

            </div>

            <div className="startup-feature-content">

              <span className="section-kicker">
                FEATURED COMPANY
              </span>

              <h2>
                Building the
                <span>future of work.</span>
              </h2>

              <p>
                Meet the ambitious founders creating products
                that are changing how companies operate,
                collaborate and grow.
              </p>

              <div className="startup-feature-stats">

                <div>
                  <strong>AI</strong>
                  <span>Technology</span>
                </div>

                <div>
                  <strong>GLOBAL</strong>
                  <span>Market</span>
                </div>

                <div>
                  <strong>2026</strong>
                  <span>Founded</span>
                </div>

              </div>

              <Link to="/articles">
                Read Full Story
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED STARTUPS
      ===================================================== */}

      <section
        className="featured-startups"
        id="featured-startups"
      >

        <div className="container">

          <div className="startup-section-heading">

            <div>

              <span className="section-kicker dark">
                DISCOVER
              </span>

              <h2>
                Startups
                <span>to Watch</span>
              </h2>

            </div>

            <p>
              The companies and founders pushing boundaries
              across industries and markets.
            </p>

          </div>


          <div className="startup-cards">

            {featuredStartups.map((startup, index) => (

              <article
                className={`startup-card ${
                  index === 0 ? "featured-card" : ""
                }`}
                key={startup.name}
              >

                <div className="startup-card-image">

                  <img
                    src={startup.image}
                    alt={startup.name}
                    loading="lazy"
                  />

                  <span className="startup-card-number">
                    0{index + 1}
                  </span>

                  <div className="startup-card-hover">
                    EXPLORE
                    <span>↗</span>
                  </div>

                </div>

                <div className="startup-card-content">

                  <span className="startup-card-category">
                    {startup.category}
                  </span>

                  <h3>
                    {startup.name}
                  </h3>

                  <span className="startup-location">
                    {startup.location}
                  </span>

                  <p>
                    {startup.description}
                  </p>

                  <Link to="/articles">
                    Read Story →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STARTUP TRENDS
      ===================================================== */}

      <section
        className="startup-trends"
        id="trends"
      >

        <div className="container">

          <div className="trends-heading">

            <span className="section-kicker">
              WHAT'S NEXT
            </span>

            <h2>
              Startup
              <span>Trends.</span>
            </h2>

            <p>
              The technologies and ideas that could define
              the next decade of entrepreneurship.
            </p>

          </div>


          <div className="trends-list">

            {startupTrends.map((trend) => (

              <article
                className="trend-item"
                key={trend.number}
              >

                <span className="trend-number">
                  {trend.number}
                </span>

                <div>

                  <h3>
                    {trend.title}
                  </h3>

                  <p>
                    {trend.text}
                  </p>

                </div>

                <span className="trend-arrow">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER SPOTLIGHT
      ===================================================== */}

      <section className="founder-section">

        <div className="container">

          <div className="founder-grid">

            <div className="founder-image">

              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=90"
                alt="Founder"
              />

              <span>
                FOUNDER SPOTLIGHT
              </span>

            </div>

            <div className="founder-content">

              <span className="section-kicker dark">
                THE FOUNDER
              </span>

              <h2>
                The person
                <span>behind the idea.</span>
              </h2>

              <p>
                Every startup begins with someone willing to
                question what already exists. We speak with
                founders about their journeys, failures,
                breakthroughs and ambitions.
              </p>

              <blockquote>
                "The biggest opportunities often begin
                with the smallest questions."
              </blockquote>

              <Link to="/interviews">
                Read Founder Interviews
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="startup-categories">

        <div className="container">

          <div className="categories-title">

            <span className="section-kicker">
              EXPLORE
            </span>

            <h2>
              Startup
              <span>Universe</span>
            </h2>

          </div>


          <div className="startup-category-grid">

            {startupCategories.map((category, index) => (

              <Link
                to="/articles"
                key={category}
              >

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {category}
                </h3>

                <b>
                  ↗
                </b>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MAGAZINE CTA
      ===================================================== */}

      <section className="startup-magazine">

        <div className="container">

          <div className="startup-magazine-content">

            <span>
              GLOBAL MEDIA STAR MAGAZINE
            </span>

            <h2>
              The founders
              <strong>building tomorrow.</strong>
            </h2>

            <p>
              Discover deeper startup stories, founder
              interviews and exclusive insights in the
              latest issue of Global Media Star.
            </p>

            <Link to="/magazine">
              Explore Magazine
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="startup-cta">

        <div className="container">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Think bigger.
            <strong>Build what's next.</strong>
          </h2>

          <p>
            Explore the people and companies creating
            the future.
          </p>

          <Link to="/articles">
            Explore Startup Stories
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Startup;