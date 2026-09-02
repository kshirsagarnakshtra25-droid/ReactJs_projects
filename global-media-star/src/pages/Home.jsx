import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const magazineCovers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=90",
    issue: "ISSUE 01",
    title: "THE NEW ERA OF BUSINESS",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=90",
    issue: "ISSUE 02",
    title: "THE TECHNOLOGY REVOLUTION",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=90",
    issue: "ISSUE 03",
    title: "MONEY • MARKETS • MOMENTUM",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=90",
    issue: "ISSUE 04",
    title: "THE GLOBAL LEADERS",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=90",
    issue: "ISSUE 05",
    title: "STARTUPS CHANGING THE WORLD",
  },
];

const featuredStories = [
  {
    category: "BUSINESS",
    title: "The Companies Building the Future of the Global Economy",
    description:
      "Inside the strategies, ideas and decisions transforming modern business.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "TECHNOLOGY",
    title: "Artificial Intelligence Is Changing Everything",
    description:
      "How emerging technologies are creating a new generation of industries.",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "FINANCE",
    title: "The Forces Reshaping Global Markets",
    description:
      "The financial trends every modern business leader should understand.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "LEADERSHIP",
    title: "The Visionaries Creating Tomorrow",
    description:
      "Meet the leaders redefining industries through courage and innovation.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "STARTUP",
    title: "Small Ideas With Global Ambitions",
    description:
      "The founders building ambitious companies from the ground up.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "GLOBAL NEWS",
    title: "The Stories Defining Business Around the World",
    description:
      "Important developments, movements and ideas shaping the global economy.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=90",
  },
];

const categories = [
  {
    number: "01",
    name: "Business",
    subtitle: "Ideas • Strategy • Growth",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=90",
    path: "/business",
  },
  {
    number: "02",
    name: "Technology",
    subtitle: "Innovation • AI • Future",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=90",
    path: "/technology",
  },
  {
    number: "03",
    name: "Finance",
    subtitle: "Markets • Wealth • Economy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=90",
    path: "/finance",
  },
  {
    number: "04",
    name: "Startup",
    subtitle: "Founders • Ideas • Disruption",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=90",
    path: "/startup",
  },
  {
    number: "05",
    name: "Leadership",
    subtitle: "Vision • People • Influence",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=90",
    path: "/leaders",
  },
  {
    number: "06",
    name: "Interviews",
    subtitle: "Voices • Stories • Ideas",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=90",
    path: "/interviews",
  },
];

const magazineFeatures = [
  "Global Business Leaders",
  "Technology & Artificial Intelligence",
  "Future of Finance",
  "Entrepreneurs & Startups",
  "Leadership & Innovation",
];

function Home() {
  const [activeMagazine, setActiveMagazine] = useState(0);
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const magazineTimer = setInterval(() => {
      setActiveMagazine((current) =>
        current === magazineCovers.length - 1 ? 0 : current + 1
      );
    }, 3500);

    return () => clearInterval(magazineTimer);
  }, []);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setActiveHero((current) =>
        current === featuredStories.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(heroTimer);
  }, []);

  const nextMagazine = () => {
    setActiveMagazine((current) =>
      current === magazineCovers.length - 1 ? 0 : current + 1
    );
  };

  const previousMagazine = () => {
    setActiveMagazine((current) =>
      current === 0 ? magazineCovers.length - 1 : current - 1
    );
  };

  return (
    <main className="gms-home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="gms-hero">

        <div
          className="gms-hero-image"
          style={{
            backgroundImage: `url(${featuredStories[activeHero].image})`,
          }}
        />

        <div className="gms-hero-overlay" />

        <div className="container gms-hero-inner">

          <div className="gms-hero-text">

            <div className="gms-kicker">
              GLOBAL MEDIA STAR
            </div>

            <span className="gms-hero-category">
              {featuredStories[activeHero].category}
            </span>

            <h1 key={activeHero}>
              {featuredStories[activeHero].title}
            </h1>

            <p key={`hero-${activeHero}`}>
              {featuredStories[activeHero].description}
            </p>

            <Link to="/articles" className="gms-primary-btn">
              Explore Story
              <span>→</span>
            </Link>

          </div>

          <div className="gms-hero-bottom">

            <div className="gms-hero-counter">
              <strong>0{activeHero + 1}</strong>
              <span>/ 06</span>
            </div>

            <div className="gms-hero-lines">

              {featuredStories.map((_, index) => (
                <button
                  key={index}
                  className={activeHero === index ? "active" : ""}
                  onClick={() => setActiveHero(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}

            </div>

            <div className="gms-hero-label">
              EDITORIAL
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BREAKING TICKER
      ===================================================== */}

      <section className="gms-breaking">

        <div className="gms-breaking-title">
          <span className="pulse-dot" />
          BREAKING
        </div>

        <div className="gms-breaking-track">
          <div>
            GLOBAL BUSINESS • TECHNOLOGY • FINANCE • STARTUPS •
            LEADERSHIP • INNOVATION • GLOBAL NEWS •
            GLOBAL BUSINESS • TECHNOLOGY • FINANCE • STARTUPS •
          </div>
        </div>

      </section>


      {/* =====================================================
          MAGAZINE CENTERPIECE
      ===================================================== */}

      <section className="gms-magazine">

        <div className="container">

          <div className="gms-section-top">

            <div>
              <span className="gms-small-label">
                THE MAGAZINE
              </span>

              <h2>
                The stories
                <span>behind the headlines.</span>
              </h2>
            </div>

            <Link to="/magazine" className="gms-outline-btn">
              Explore Magazine →
            </Link>

          </div>


          <div className="magazine-stage">

            <button
              className="magazine-arrow left"
              onClick={previousMagazine}
              aria-label="Previous magazine"
            >
              ←
            </button>


            <div className="magazine-track">

              {magazineCovers.map((cover, index) => {

                let position =
                  (index - activeMagazine + magazineCovers.length) %
                  magazineCovers.length;

                let positionClass = "";

                if (position === 0) {
                  positionClass = "mag-active";
                } else if (position === 1) {
                  positionClass = "mag-next";
                } else if (position === 2) {
                  positionClass = "mag-next-2";
                } else if (position === 3) {
                  positionClass = "mag-prev-2";
                } else {
                  positionClass = "mag-prev";
                }

                return (
                  <div
                    key={cover.id}
                    className={`magazine-cover ${positionClass}`}
                  >

                    <img
                      src={cover.image}
                      alt={cover.title}
                    />

                    <div className="cover-shine" />

                  </div>
                );
              })}

            </div>


            <button
              className="magazine-arrow right"
              onClick={nextMagazine}
              aria-label="Next magazine"
            >
              →
            </button>

          </div>


          <div className="magazine-info">

            <div>
              <span>
                {magazineCovers[activeMagazine].issue}
              </span>

              <h3>
                {magazineCovers[activeMagazine].title}
              </h3>
            </div>

            <Link to="/magazine">
              Read Digital Edition →
            </Link>

          </div>


          <div className="magazine-dots">

            {magazineCovers.map((_, index) => (
              <button
                key={index}
                className={activeMagazine === index ? "active" : ""}
                onClick={() => setActiveMagazine(index)}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EDITOR'S INTRO
      ===================================================== */}

      <section className="gms-editor-intro">

        <div className="container">

          <div className="editor-intro-grid">

            <div className="editor-number">
              01
            </div>

            <div>
              <span className="gms-small-label">
                GLOBAL MEDIA STAR
              </span>

              <h2>
                Business is changing.
                <span>We tell you why.</span>
              </h2>
            </div>

            <p>
              Global Media Star brings together business,
              technology, finance, leadership and startup
              stories for people who want to understand
              what is happening — and what comes next.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED STORIES - 6 CARDS
      ===================================================== */}

      <section className="gms-featured">

        <div className="container">

          <div className="gms-section-top">

            <div>
              <span className="gms-small-label">
                EDITOR'S CHOICE
              </span>

              <h2>
                Featured
                <span>Stories.</span>
              </h2>
            </div>

            <Link to="/articles" className="gms-outline-btn">
              View All Stories →
            </Link>

          </div>


          <div className="featured-grid">

            {featuredStories.map((story, index) => (

              <article
                className={`featured-card ${
                  index === 0 ? "featured-large" : ""
                }`}
                key={story.title}
              >

                <div className="featured-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <span className="featured-number">
                    0{index + 1}
                  </span>

                  <div className="featured-image-overlay" />

                </div>

                <div className="featured-content">

                  <span className="featured-category">
                    {story.category}
                  </span>

                  <h3>
                    {story.title}
                  </h3>

                  <p>
                    {story.description}
                  </p>

                  <Link to="/articles">
                    Read Story <span>→</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY WORLD
      ===================================================== */}

      <section className="gms-categories">

        <div className="container">

          <div className="category-heading">

            <div>
              <span className="gms-small-label">
                EXPLORE OUR WORLD
              </span>

              <h2>
                One platform.
                <span>Every perspective.</span>
              </h2>
            </div>

            <p>
              Explore our editorial universe covering the
              most important forces shaping business and society.
            </p>

          </div>


          <div className="categories-grid">

            {categories.map((category) => (

              <Link
                to={category.path}
                className="category-card"
                key={category.name}
              >

                <img
                  src={category.image}
                  alt={category.name}
                />

                <div className="category-overlay" />

                <div className="category-number">
                  {category.number}
                </div>

                <div className="category-content">

                  <span>
                    {category.subtitle}
                  </span>

                  <h3>
                    {category.name}
                  </h3>

                  <strong>
                    Explore →
                  </strong>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INSIDE THIS ISSUE
      ===================================================== */}

      <section className="gms-inside">

        <div className="container">

          <div className="inside-grid">

            <div className="inside-image">

              <img
                src={magazineCovers[activeMagazine].image}
                alt="Current magazine"
              />

              <div className="inside-badge">
                CURRENT
                <br />
                ISSUE
              </div>

            </div>


            <div className="inside-content">

              <span className="gms-small-label">
                INSIDE THIS ISSUE
              </span>

              <h2>
                Go beyond
                <span>the headlines.</span>
              </h2>

              <p>
                Discover powerful ideas, exclusive
                perspectives and stories that deserve more
                than a headline.
              </p>


              <div className="inside-list">

                {magazineFeatures.map((feature, index) => (

                  <div key={feature}>

                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {feature}
                    </strong>

                    <i>
                      →
                    </i>

                  </div>

                ))}

              </div>


              <Link
                to="/magazine"
                className="gms-primary-btn dark"
              >
                Read The Magazine
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section className="gms-numbers">

        <div className="container">

          <div className="numbers-grid">

            <div>
              <strong>06</strong>
              <span>Editorial Categories</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Global Perspective</span>
            </div>

            <div>
              <strong>01</strong>
              <span>Independent Voice</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Ideas Worth Sharing</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP FEATURE
      ===================================================== */}

      <section className="gms-leader">

        <div className="container">

          <div className="leader-layout">

            <div className="leader-photo">

              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=90"
                alt="Leadership"
              />

              <div className="leader-photo-label">
                GLOBAL
                <br />
                LEADERS
              </div>

            </div>


            <div className="leader-copy">

              <span className="gms-small-label">
                LEADERSHIP
              </span>

              <h2>
                Meet the people
                <span>moving the world.</span>
              </h2>

              <p>
                From founders to CEOs and innovators,
                discover the people whose decisions,
                philosophies and ideas are shaping tomorrow.
              </p>

              <Link to="/leaders" className="gms-outline-btn">
                Meet Our Leaders →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="gms-newsletter">

        <div className="newsletter-glow" />

        <div className="container newsletter-inner">

          <span className="gms-small-label">
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Know what
            <span>comes next.</span>
          </h2>

          <p>
            Get the stories, insights and magazine releases
            that matter — delivered to your inbox.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button type="submit">
              Subscribe →
            </button>

          </form>

          <small>
            No spam. Only meaningful stories.
          </small>

        </div>

      </section>

    </main>
  );
}

export default Home;