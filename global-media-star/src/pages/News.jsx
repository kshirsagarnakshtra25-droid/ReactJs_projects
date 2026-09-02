import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./News.css";

const featuredNews = [
  {
    category: "TECHNOLOGY",
    title: "The Next Digital Revolution Is Already Here",
    description:
      "Artificial intelligence, advanced computing and new digital platforms are transforming the way businesses operate.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90",
  },
  {
    category: "BUSINESS",
    title: "The Companies Building Tomorrow's Economy",
    description:
      "A closer look at the businesses creating new opportunities across global markets.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "GLOBAL",
    title: "A New Era of Global Business",
    description:
      "Markets, industries and leadership are entering a period of rapid transformation.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "FINANCE",
    title: "Markets Enter a New Phase of Growth",
    description:
      "The financial forces investors and businesses should watch closely.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90",
  },
];

const latestNews = [
  {
    number: "01",
    category: "TECHNOLOGY",
    title: "Artificial Intelligence Is Redefining Modern Business",
    time: "8 MIN READ",
  },
  {
    number: "02",
    category: "BUSINESS",
    title: "How Global Companies Are Building Stronger Brands",
    time: "6 MIN READ",
  },
  {
    number: "03",
    category: "FINANCE",
    title: "The Financial Trends Every Business Should Watch",
    time: "7 MIN READ",
  },
  {
    number: "04",
    category: "STARTUPS",
    title: "The Founders Creating Tomorrow's Companies",
    time: "5 MIN READ",
  },
  {
    number: "05",
    category: "LEADERSHIP",
    title: "What Great Leaders Are Doing Differently",
    time: "9 MIN READ",
  },
];

const worldNews = [
  {
    category: "GLOBAL BUSINESS",
    title: "Businesses Are Thinking Beyond Borders",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=900&q=90",
  },
  {
    category: "ECONOMY",
    title: "The Forces Reshaping The Global Economy",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=90",
  },
  {
    category: "INNOVATION",
    title: "Innovation Is Becoming The New Competitive Advantage",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=90",
  },
];

function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="news-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="news-hero">

        <div className="news-hero-pattern"></div>

        <div className="container news-hero-container">

          <div className="news-hero-top">

            <div className="breaking-label">
              <span></span>
              BREAKING NEWS
            </div>

            <div className="news-date">
              GLOBAL MEDIA STAR • NEWSROOM
            </div>

          </div>

          <div className="news-hero-main">

            <div className="news-hero-text">

              <span className="hero-category">
                GLOBAL NEWS • 2026
              </span>

              <h1>
                The World
                <em>In Focus.</em>
              </h1>

              <p>
                The stories, ideas and developments shaping
                business, technology, finance and the global
                economy.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/articles"
                  className="gold-news-button"
                >
                  Explore Latest News
                  <span>↗</span>
                </Link>

                <Link
                  to="/magazine"
                  className="transparent-news-button"
                >
                  Read Magazine
                </Link>

              </div>

            </div>

            <div className="hero-headline-card">

              <div className="headline-top">
                <span>TOP STORY</span>
                <strong>01</strong>
              </div>

              <div className="headline-line"></div>

              <h2>
                Technology,
                <span>Business &amp; Power</span>
              </h2>

              <p>
                The ideas and decisions shaping the next
                chapter of the global economy.
              </p>

              <Link to="/articles">
                Read Full Story
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWS TICKER
      ===================================================== */}

      <section className="news-ticker">

        <div className="ticker-title">
          LATEST
        </div>

        <div className="ticker-track">

          <span>
            GLOBAL MARKETS
          </span>

          <i>◆</i>

          <span>
            AI &amp; TECHNOLOGY
          </span>

          <i>◆</i>

          <span>
            BUSINESS LEADERS
          </span>

          <i>◆</i>

          <span>
            STARTUP WORLD
          </span>

          <i>◆</i>

          <span>
            GLOBAL ECONOMY
          </span>

        </div>

      </section>


      {/* =====================================================
          FEATURED STORIES
      ===================================================== */}

      <section className="news-featured">

        <div className="container">

          <div className="news-section-heading">

            <div>
              <span>EDITORIAL DESK</span>

              <h2>
                Featured
                <strong>Stories</strong>
              </h2>
            </div>

            <Link to="/articles">
              View All News →
            </Link>

          </div>


          <div className="featured-news-grid">

            {featuredNews.map((story, index) => (

              <article
                className={`featured-news-card ${
                  index === 0 ? "featured-main" : ""
                }`}
                key={story.title}
              >

                <div className="featured-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <div className="image-number">
                    0{index + 1}
                  </div>

                  <div className="image-shine"></div>

                </div>

                <div className="featured-content">

                  <span className="news-category">
                    {story.category}
                  </span>

                  <h3>
                    {story.title}
                  </h3>

                  <p>
                    {story.description}
                  </p>

                  <Link to="/articles">
                    Read Story
                    <span>↗</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LATEST NEWS
      ===================================================== */}

      <section className="latest-news-section">

        <div className="container latest-news-container">

          <div className="latest-heading">

            <span>THE NEWSROOM</span>

            <h2>
              Latest
              <strong>News</strong>
            </h2>

            <p>
              Stay informed with the stories making an
              impact across industries and markets.
            </p>

          </div>


          <div className="latest-news-list">

            {latestNews.map((news) => (

              <Link
                to="/articles"
                className="latest-news-row"
                key={news.number}
              >

                <span className="latest-number">
                  {news.number}
                </span>

                <div className="latest-main">

                  <span>
                    {news.category}
                  </span>

                  <h3>
                    {news.title}
                  </h3>

                </div>

                <div className="latest-time">
                  {news.time}
                </div>

                <div className="latest-arrow">
                  ↗
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MARKET SNAPSHOT
      ===================================================== */}

      <section className="market-section">

        <div className="container">

          <div className="market-heading">

            <div>
              <span>GLOBAL INTELLIGENCE</span>

              <h2>
                Market
                <strong>Snapshot</strong>
              </h2>
            </div>

            <p>
              A visual snapshot of the themes moving
              business and markets.
            </p>

          </div>


          <div className="market-grid">

            <div className="market-card">

              <span>BUSINESS</span>

              <strong>
                GROWTH
              </strong>

              <p>
                Global companies continue to focus
                on expansion and innovation.
              </p>

              <div className="market-line">
                <span></span>
              </div>

            </div>


            <div className="market-card">

              <span>TECHNOLOGY</span>

              <strong>
                AI
              </strong>

              <p>
                Artificial intelligence remains one
                of the world's biggest technology themes.
              </p>

              <div className="market-line">
                <span></span>
              </div>

            </div>


            <div className="market-card">

              <span>STARTUPS</span>

              <strong>
                NEXT
              </strong>

              <p>
                New founders are creating companies
                around emerging technologies.
              </p>

              <div className="market-line">
                <span></span>
              </div>

            </div>


            <div className="market-card">

              <span>LEADERSHIP</span>

              <strong>
                IMPACT
              </strong>

              <p>
                Modern leadership is increasingly
                focused on long-term impact.
              </p>

              <div className="market-line">
                <span></span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WORLD NEWS
      ===================================================== */}

      <section className="world-news-section">

        <div className="container">

          <div className="news-section-heading light">

            <div>
              <span>AROUND THE WORLD</span>

              <h2>
                Global
                <strong>Perspective</strong>
              </h2>
            </div>

            <Link to="/articles">
              Explore World News →
            </Link>

          </div>


          <div className="world-news-grid">

            {worldNews.map((story, index) => (

              <article
                className="world-card"
                key={story.title}
              >

                <div className="world-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <span>
                    0{index + 1}
                  </span>

                </div>

                <div className="world-content">

                  <span>
                    {story.category}
                  </span>

                  <h3>
                    {story.title}
                  </h3>

                  <Link to="/articles">
                    Explore Story →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EDITOR'S NOTE
      ===================================================== */}

      <section className="editor-note">

        <div className="container editor-note-grid">

          <div className="editor-symbol">
            GS
          </div>

          <div>

            <span>
              FROM THE EDITOR
            </span>

            <h2>
              News is not just
              <strong>what happens.</strong>
            </h2>

            <p>
              It is about understanding why it matters.
              Global Media Star brings together the facts,
              perspectives and ideas behind the world's
              most important stories.
            </p>

            <Link to="/articles">
              Enter The Newsroom
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="news-newsletter">

        <div className="container">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Know what
            <strong>matters next.</strong>
          </h2>

          <p>
            Get the biggest stories, insights and
            magazine updates directly in your inbox.
          </p>

          <form>

            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button type="submit">
              Subscribe
              <span>→</span>
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default News;