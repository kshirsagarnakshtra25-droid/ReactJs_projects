import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Business.css";

const featuredStories = [
  {
    category: "GLOBAL BUSINESS",
    title: "The Companies Building the Next Global Economy",
    description:
      "From ambitious startups to established enterprises, discover the strategies changing how modern companies compete and grow.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
  },
  {
    category: "CORPORATE",
    title: "Inside the New Era of Corporate Leadership",
    description:
      "The decisions and strategies helping today's most ambitious companies navigate an increasingly complex world.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90",
  },
  {
    category: "INNOVATION",
    title: "Why Innovation Has Become a Business Advantage",
    description:
      "The companies investing in new ideas are creating entirely new opportunities for growth.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=90",
  },
];

const latestStories = [
  {
    number: "01",
    category: "BUSINESS",
    title: "Building Companies That Last Generations",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "02",
    category: "STRATEGY",
    title: "The Strategy Behind Global Growth",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "03",
    category: "MARKETS",
    title: "The Forces Reshaping Modern Business",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "04",
    category: "INNOVATION",
    title: "The Ideas Creating New Industries",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "05",
    category: "GLOBAL",
    title: "How Global Brands Win New Markets",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "06",
    category: "ENTREPRENEURSHIP",
    title: "The New Generation of Business Builders",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=90",
  },
];

const insights = [
  "Why the world's smartest companies are thinking beyond growth",
  "The leadership decisions defining the next decade",
  "How technology is changing competitive advantage",
  "What ambitious companies can learn from global brands",
];

function Business() {
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((current) =>
        current === featuredStories.length - 1
          ? 0
          : current + 1
      );
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const hero = featuredStories[activeHero];

  return (
    <main className="business-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="business-hero">

        <div
          className="business-hero-image"
          style={{
            backgroundImage: `url(${hero.image})`,
          }}
        />

        <div className="business-hero-overlay" />

        <div className="container business-hero-content">

          <div className="business-hero-copy">

            <span className="business-eyebrow">
              GLOBAL MEDIA STAR / BUSINESS
            </span>

            <span className="business-category">
              {hero.category}
            </span>

            <h1 key={activeHero}>
              {hero.title}
            </h1>

            <p key={`description-${activeHero}`}>
              {hero.description}
            </p>

            <Link
              to="/articles"
              className="business-hero-button"
            >
              Explore Story
              <span>→</span>
            </Link>

          </div>


          <div className="business-slider">

            {featuredStories.map((item, index) => (

              <button
                key={item.title}
                className={
                  activeHero === index ? "active" : ""
                }
                onClick={() => setActiveHero(index)}
              >

                <span>
                  0{index + 1}
                </span>

                <div>
                  {item.category}
                </div>

              </button>

            ))}

          </div>

        </div>

        <div className="business-hero-mark">
          BUSINESS
        </div>

      </section>


      {/* ==================================================
          MARKET PULSE
      ================================================== */}

      <section className="market-pulse">

        <div className="container">

          <div className="pulse-heading">

            <span>
              GLOBAL BUSINESS INTELLIGENCE
            </span>

            <h2>
              Market
              <strong>Pulse</strong>
            </h2>

          </div>


          <div className="pulse-grid">

            <div className="pulse-card">
              <span>GLOBAL ECONOMY</span>
              <strong>2026</strong>
              <p>New Era of Growth</p>
            </div>

            <div className="pulse-card">
              <span>BUSINESS</span>
              <strong>24/7</strong>
              <p>Global Competition</p>
            </div>

            <div className="pulse-card">
              <span>INNOVATION</span>
              <strong>∞</strong>
              <p>Possibilities Ahead</p>
            </div>

            <div className="pulse-card pulse-featured">
              <span>GSM INSIGHT</span>
              <strong>01</strong>
              <p>Business Intelligence</p>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FEATURED BUSINESS
      ================================================== */}

      <section className="business-feature">

        <div className="container">

          <div className="business-section-heading">

            <div>
              <span className="business-label">
                EDITOR'S DESK
              </span>

              <h2>
                Business
                <span>Beyond Headlines</span>
              </h2>
            </div>

            <Link to="/articles">
              View All Stories →
            </Link>

          </div>


          <article className="business-feature-card">

            <div className="business-feature-image">

              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=90"
                alt="Business meeting"
              />

              <div className="feature-number">
                01
              </div>

            </div>


            <div className="business-feature-content">

              <span>
                BUSINESS STRATEGY
              </span>

              <h3>
                The Strategy Behind
                <em>Global Success</em>
              </h3>

              <p>
                In a world where markets move faster than
                ever, the companies that succeed are the ones
                that can adapt, innovate and think beyond the
                obvious.
              </p>

              <div className="feature-meta">
                <span>AUGUST 28, 2026</span>
                <span>8 MIN READ</span>
              </div>

              <Link
                to="/articles"
                className="feature-link"
              >
                Read Full Analysis →
              </Link>

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          LATEST STORIES
      ================================================== */}

      <section className="latest-business">

        <div className="container">

          <div className="business-section-heading">

            <div>
              <span className="business-label">
                LATEST
              </span>

              <h2>
                Business
                <span>Stories</span>
              </h2>
            </div>

            <span className="story-count">
              06 STORIES
            </span>

          </div>


          <div className="business-stories-grid">

            {latestStories.map((story) => (

              <article
                className="business-story-card"
                key={story.number}
              >

                <div className="business-story-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <span>
                    {story.number}
                  </span>

                </div>


                <div className="business-story-content">

                  <small>
                    {story.category}
                  </small>

                  <h3>
                    {story.title}
                  </h3>

                  <Link to="/articles">
                    Read Story →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          GLOBAL BUSINESS
      ================================================== */}

      <section className="global-business">

        <div className="global-business-bg" />

        <div className="container global-business-content">

          <div className="global-intro">

            <span className="business-label">
              GLOBAL BUSINESS
            </span>

            <h2>
              The world
              <span>is your market.</span>
            </h2>

            <p>
              Explore the companies, markets and ideas
              connecting businesses across borders.
            </p>

            <Link to="/articles">
              Explore Global Business →
            </Link>

          </div>


          <div className="global-countries">

            <div>
              <strong>01</strong>
              <span>AMERICAS</span>
            </div>

            <div>
              <strong>02</strong>
              <span>EUROPE</span>
            </div>

            <div>
              <strong>03</strong>
              <span>ASIA</span>
            </div>

            <div>
              <strong>04</strong>
              <span>MIDDLE EAST</span>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          LEADERSHIP
      ================================================== */}

      <section className="strategy-section">

        <div className="container strategy-grid">

          <div className="strategy-image">

            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1300&q=90"
              alt="Business leader"
            />

            <div className="strategy-caption">
              LEADERSHIP / STRATEGY
            </div>

          </div>


          <div className="strategy-content">

            <span className="business-label">
              LEADERSHIP
            </span>

            <h2>
              Decisions
              <span>That Define Companies</span>
            </h2>

            <p>
              Great companies are built by people willing
              to make difficult decisions, challenge old
              assumptions and create new possibilities.
            </p>

            <div className="strategy-list">

              {insights.map((item, index) => (

                <Link
                  to="/leaders"
                  key={item}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <strong>
                    {item}
                  </strong>

                  <i>
                    →
                  </i>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          BUSINESS INSIGHTS
      ================================================== */}

      <section className="insights-section">

        <div className="container">

          <div className="insights-header">

            <div>

              <span className="business-label">
                GSM INTELLIGENCE
              </span>

              <h2>
                Business
                <span>Insights</span>
              </h2>

            </div>

            <p>
              Perspectives for the people building,
              leading and investing in tomorrow.
            </p>

          </div>


          <div className="insights-list">

            {insights.map((item, index) => (

              <Link
                to="/articles"
                className="insight-row"
                key={item}
              >

                <span className="insight-number">
                  0{index + 1}
                </span>

                <h3>
                  {item}
                </h3>

                <span className="insight-arrow">
                  ↗
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          NEWSLETTER
      ================================================== */}

      <section className="business-newsletter">

        <div className="container">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Stay ahead of
            <strong>business.</strong>
          </h2>

          <p>
            Get the latest business stories, leadership
            insights and global market perspectives.
          </p>

          <form
            onSubmit={(event) =>
              event.preventDefault()
            }
          >

            <input
              type="email"
              placeholder="Your email address"
            />

            <button type="submit">
              Subscribe →
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Business;