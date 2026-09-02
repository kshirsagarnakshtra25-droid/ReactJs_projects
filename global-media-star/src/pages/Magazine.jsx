import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Magazine.css";

const magazines = [
  {
    id: 1,
    issue: "ISSUE 01",
    date: "AUGUST 2026",
    title: "The Future of Global Business",
    subtitle: "Visionaries shaping the next generation of business.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    issue: "ISSUE 02",
    date: "JULY 2026",
    title: "Technology Leaders",
    subtitle: "The people transforming technology and innovation.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    issue: "ISSUE 03",
    date: "JUNE 2026",
    title: "Women Visionaries",
    subtitle: "Powerful women creating extraordinary change.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    issue: "ISSUE 04",
    date: "MAY 2026",
    title: "The Startup Generation",
    subtitle: "Founders building the companies of tomorrow.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 5,
    issue: "ISSUE 05",
    date: "APRIL 2026",
    title: "Money & Markets",
    subtitle: "Understanding the forces shaping global finance.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 6,
    issue: "ISSUE 06",
    date: "MARCH 2026",
    title: "Leaders of Tomorrow",
    subtitle: "Meet the people defining the future.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=90",
  },
];

const featuredStories = [
  {
    category: "BUSINESS",
    title: "The Companies Redefining Global Growth",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=90",
  },
  {
    category: "TECHNOLOGY",
    title: "Artificial Intelligence and the Next Digital Revolution",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=90",
  },
  {
    category: "LEADERSHIP",
    title: "Inside the Mind of a Modern Leader",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=90",
  },
];

function Magazine() {
  const [activeMagazine, setActiveMagazine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMagazine((current) =>
        current === magazines.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextMagazine = () => {
    setActiveMagazine((current) =>
      current === magazines.length - 1 ? 0 : current + 1
    );
  };

  const previousMagazine = () => {
    setActiveMagazine((current) =>
      current === 0 ? magazines.length - 1 : current - 1
    );
  };

  return (
    <main className="magazine-page">

      {/* ==================================================
          MAGAZINE HERO
      ================================================== */}

      <section className="magazine-hero">

        <div className="magazine-hero-bg"></div>

        <div className="magazine-hero-overlay"></div>

        <div className="container magazine-hero-inner">

          <div className="magazine-hero-content">

            <span className="magazine-eyebrow">
              GLOBAL MEDIA STAR
            </span>

            <h1>
              The Magazine
              <span>For What's Next.</span>
            </h1>

            <p>
              Discover powerful stories, extraordinary leaders,
              groundbreaking companies and ideas shaping the future.
            </p>

            <div className="magazine-hero-actions">

              <a href="#latest-issue" className="magazine-gold-btn">
                Explore Latest Issue →
              </a>

              <a href="#all-issues" className="magazine-outline-btn">
                Browse Issues
              </a>

            </div>

          </div>

          <div className="magazine-hero-number">
            01
          </div>

        </div>

      </section>


      {/* ==================================================
          LATEST ISSUE
      ================================================== */}

      <section
        className="latest-issue"
        id="latest-issue"
      >

        <div className="container latest-issue-grid">

          {/* LEFT */}

          <div className="latest-issue-text">

            <span className="section-label">
              LATEST ISSUE
            </span>

            <h2>
              The Future
              <span>Starts Now.</span>
            </h2>

            <div className="issue-meta">
              <strong>
                {magazines[activeMagazine].issue}
              </strong>

              <span>
                {magazines[activeMagazine].date}
              </span>
            </div>

            <h3>
              {magazines[activeMagazine].title}
            </h3>

            <p>
              {magazines[activeMagazine].subtitle}
            </p>

            <Link
              to="/articles"
              className="read-issue-btn"
            >
              Read This Issue →
            </Link>

          </div>


          {/* CENTER COVER */}

          <div className="main-magazine-cover">

            <div className="cover-shadow"></div>

            <img
              key={magazines[activeMagazine].id}
              src={magazines[activeMagazine].image}
              alt={magazines[activeMagazine].title}
            />

            <div className="cover-overlay">

              <small>
                GLOBAL
              </small>

              <strong>
                MEDIA STAR
              </strong>

              <span>
                {magazines[activeMagazine].title}
              </span>

            </div>

          </div>


          {/* CONTROLS */}

          <div className="issue-controls">

            <button onClick={previousMagazine}>
              ←
            </button>

            <div>

              <strong>
                {String(activeMagazine + 1).padStart(2, "0")}
              </strong>

              <span>
                /
              </span>

              <small>
                {String(magazines.length).padStart(2, "0")}
              </small>

            </div>

            <button onClick={nextMagazine}>
              →
            </button>

          </div>

        </div>

      </section>


      {/* ==================================================
          MAGAZINE SLIDER
      ================================================== */}

      <section
        className="magazine-slider-section"
        id="all-issues"
      >

        <div className="container">

          <div className="slider-heading">

            <div>

              <span className="section-label">
                THE COLLECTION
              </span>

              <h2>
                Latest
                <span>Magazines</span>
              </h2>

            </div>

            <div className="slider-arrows">

              <button onClick={previousMagazine}>
                ←
              </button>

              <button onClick={nextMagazine}>
                →
              </button>

            </div>

          </div>


          <div className="magazine-cover-slider">

            {magazines.map((magazine, index) => {

              const position =
                (index - activeMagazine + magazines.length) %
                magazines.length;

              let positionClass = "";

              if (position === 0) {
                positionClass = "cover-active";
              } else if (position === 1) {
                positionClass = "cover-next";
              } else if (position === 2) {
                positionClass = "cover-next-two";
              } else if (position === magazines.length - 1) {
                positionClass = "cover-prev";
              } else if (position === magazines.length - 2) {
                positionClass = "cover-prev-two";
              } else {
                positionClass = "cover-hidden";
              }

              return (
                <div
                  key={magazine.id}
                  className={`magazine-card ${positionClass}`}
                  onClick={() => setActiveMagazine(index)}
                >

                  <img
                    src={magazine.image}
                    alt={magazine.title}
                  />

                  <div className="magazine-card-info">

                    <span>
                      {magazine.issue}
                    </span>

                    <h3>
                      {magazine.title}
                    </h3>

                  </div>

                </div>
              );
            })}

          </div>


          <div className="slider-dots">

            {magazines.map((_, index) => (

              <button
                key={index}
                className={
                  activeMagazine === index
                    ? "active"
                    : ""
                }
                onClick={() => setActiveMagazine(index)}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FEATURED STORIES
      ================================================== */}

      <section className="magazine-featured">

        <div className="container">

          <div className="slider-heading">

            <div>

              <span className="section-label">
                FROM THE MAGAZINE
              </span>

              <h2>
                Featured
                <span>Stories</span>
              </h2>

            </div>

            <Link to="/articles">
              View All Stories →
            </Link>

          </div>


          <div className="featured-magazine-grid">

            {featuredStories.map((story, index) => (

              <article
                className={`featured-magazine-card ${
                  index === 0 ? "featured-large" : ""
                }`}
                key={story.title}
              >

                <div className="featured-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <span>
                    0{index + 1}
                  </span>

                </div>

                <div className="featured-content">

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
          SUBSCRIBE
      ================================================== */}

      <section className="magazine-subscribe">

        <div className="subscribe-decoration"></div>

        <div className="container subscribe-inner">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Never miss
            <strong>what's next.</strong>
          </h2>

          <p>
            Get the latest magazine issues, exclusive stories
            and editorial insights delivered to you.
          </p>

          <Link
            to="/subscribe"
            className="subscribe-gold-btn"
          >
            Subscribe Now →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Magazine;