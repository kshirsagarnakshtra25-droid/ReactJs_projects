import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

const categories = [
  "ALL",
  "BUSINESS",
  "TECHNOLOGY",
  "FINANCE",
  "LEADERSHIP",
  "STARTUP",
];

const articles = [
  {
    id: 1,
    category: "BUSINESS",
    title: "The New Rules of Global Business",
    description:
      "How ambitious companies are adapting their strategies to compete in a rapidly changing global economy.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90",
    date: "AUGUST 28, 2026",
    time: "8 MIN READ",
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    title: "The Artificial Intelligence Revolution",
    description:
      "The technologies transforming industries and creating entirely new opportunities.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90",
    date: "AUGUST 27, 2026",
    time: "7 MIN READ",
  },
  {
    id: 3,
    category: "FINANCE",
    title: "Inside the Forces Reshaping Global Markets",
    description:
      "The economic trends businesses and investors should be watching closely.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90",
    date: "AUGUST 26, 2026",
    time: "6 MIN READ",
  },
  {
    id: 4,
    category: "LEADERSHIP",
    title: "What Makes a Modern Leader?",
    description:
      "The qualities, decisions and ideas defining the leaders of a new generation.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90",
    date: "AUGUST 25, 2026",
    time: "5 MIN READ",
  },
  {
    id: 5,
    category: "STARTUP",
    title: "The Next Generation of Entrepreneurs",
    description:
      "Meet the founders building ambitious companies from the ground up.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90",
    date: "AUGUST 24, 2026",
    time: "8 MIN READ",
  },
  {
    id: 6,
    category: "BUSINESS",
    title: "Building Brands That Last",
    description:
      "What separates memorable global brands from companies that disappear.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=90",
    date: "AUGUST 23, 2026",
    time: "6 MIN READ",
  },
  {
    id: 7,
    category: "TECHNOLOGY",
    title: "The Digital Industries of Tomorrow",
    description:
      "A look at the emerging technologies creating the next generation of industries.",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=90",
    date: "AUGUST 22, 2026",
    time: "7 MIN READ",
  },
  {
    id: 8,
    category: "FINANCE",
    title: "Money, Markets & Momentum",
    description:
      "Understanding the financial forces influencing businesses around the world.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=90",
    date: "AUGUST 21, 2026",
    time: "5 MIN READ",
  },
];

const mostRead = [
  "The Future of Global Business",
  "Why Artificial Intelligence Is Changing Everything",
  "The Leaders Creating Tomorrow",
  "Inside the World's Fastest Growing Companies",
  "The Startup Generation",
];

function Articles() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleArticles, setVisibleArticles] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles =
    activeCategory === "ALL"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  const featured = articles[0];

  return (
    <main className="articles-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="articles-hero">

        <div className="articles-hero-bg"></div>

        <div className="articles-hero-overlay"></div>

        <div className="container articles-hero-content">

          <span className="articles-eyebrow">
            GLOBAL MEDIA STAR
          </span>

          <h1>
            Stories
            <span>That Matter.</span>
          </h1>

          <p>
            Ideas, insights and perspectives from the people,
            companies and technologies shaping the future.
          </p>

          <div className="articles-hero-line"></div>

          <div className="articles-hero-meta">
            <span>BUSINESS</span>
            <span>TECHNOLOGY</span>
            <span>FINANCE</span>
            <span>LEADERSHIP</span>
          </div>

        </div>

        <div className="articles-hero-number">
          01
        </div>

      </section>


      {/* ==================================================
          FEATURED ARTICLE
      ================================================== */}

      <section className="featured-article-section">

        <div className="container">

          <div className="articles-section-heading">

            <div>
              <span className="section-label">
                FEATURED STORY
              </span>

              <h2>
                Editor's
                <span>Choice</span>
              </h2>
            </div>

            <span className="heading-number">
              01 / 08
            </span>

          </div>


          <article className="featured-article">

            <div className="featured-article-image">

              <img
                src={featured.image}
                alt={featured.title}
              />

              <div className="featured-image-tag">
                FEATURED
              </div>

            </div>


            <div className="featured-article-content">

              <div className="featured-category">
                {featured.category}
              </div>

              <h3>
                {featured.title}
              </h3>

              <p>
                {featured.description}
              </p>

              <div className="featured-details">

                <span>
                  {featured.date}
                </span>

                <span>
                  •
                </span>

                <span>
                  {featured.time}
                </span>

              </div>

              <Link
                to="/articles"
                className="article-read-btn"
              >
                Read Full Story
                <span>→</span>
              </Link>

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          CATEGORY FILTER
      ================================================== */}

      <section className="category-filter-section">

        <div className="container">

          <div className="category-filter">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleArticles(6);
                }}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          LATEST ARTICLES
      ================================================== */}

      <section className="latest-articles-section">

        <div className="container">

          <div className="articles-section-heading">

            <div>

              <span className="section-label">
                LATEST STORIES
              </span>

              <h2>
                What's
                <span>New</span>
              </h2>

            </div>

            <div className="article-count">
              {filteredArticles.length} STORIES
            </div>

          </div>


          <div className="articles-grid">

            {filteredArticles
              .slice(0, visibleArticles)
              .map((article, index) => (

                <article
                  className={`article-card ${
                    index === 0 ? "article-card-featured" : ""
                  }`}
                  key={article.id}
                >

                  <div className="article-card-image">

                    <img
                      src={article.image}
                      alt={article.title}
                    />

                    <span className="article-number">
                      {String(article.id).padStart(2, "0")}
                    </span>

                    <span className="article-category-badge">
                      {article.category}
                    </span>

                  </div>


                  <div className="article-card-content">

                    <div className="article-card-meta">

                      <span>
                        {article.date}
                      </span>

                      <span>
                        {article.time}
                      </span>

                    </div>

                    <h3>
                      {article.title}
                    </h3>

                    <p>
                      {article.description}
                    </p>

                    <Link to="/articles">
                      Continue Reading
                      <span>→</span>
                    </Link>

                  </div>

                </article>

              ))}

          </div>


          {visibleArticles < filteredArticles.length && (

            <div className="load-more-wrapper">

              <button
                className="load-more-btn"
                onClick={() =>
                  setVisibleArticles(
                    (current) => current + 3
                  )
                }
              >
                Load More Stories
                <span>+</span>
              </button>

            </div>

          )}

        </div>

      </section>


      {/* ==================================================
          EDITORIAL SPOTLIGHT
      ================================================== */}

      <section className="editorial-spotlight">

        <div className="container editorial-grid">

          <div className="editorial-image">

            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1500&q=90"
              alt="Innovation"
            />

            <div className="editorial-image-label">
              GSM / INSIGHT
            </div>

          </div>


          <div className="editorial-content">

            <span className="section-label">
              DEEP DIVE
            </span>

            <h2>
              Ideas that
              <span>move the world.</span>
            </h2>

            <p>
              Some stories deserve more than a headline.
              Explore our deeper investigations, expert
              perspectives and conversations with people
              building what comes next.
            </p>

            <div className="editorial-stats">

              <div>
                <strong>50+</strong>
                <span>Stories</span>
              </div>

              <div>
                <strong>25</strong>
                <span>Industries</span>
              </div>

              <div>
                <strong>18</strong>
                <span>Countries</span>
              </div>

            </div>

            <Link
              to="/articles"
              className="dark-read-btn"
            >
              Explore Deep Dives →
            </Link>

          </div>

        </div>

      </section>


      {/* ==================================================
          MOST READ
      ================================================== */}

      <section className="most-read-section">

        <div className="container most-read-grid">

          <div>

            <span className="section-label">
              MOST READ
            </span>

            <h2>
              The Stories
              <span>Everyone's Talking About</span>
            </h2>

          </div>


          <div className="most-read-list">

            {mostRead.map((title, index) => (

              <Link
                to="/articles"
                className="most-read-item"
                key={title}
              >

                <span className="most-read-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {title}
                </h3>

                <span className="most-read-arrow">
                  →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          NEWSLETTER
      ================================================== */}

      <section className="articles-newsletter">

        <div className="container newsletter-inner">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Know more.
            <strong>Go further.</strong>
          </h2>

          <p>
            Get our best stories, analysis and insights
            delivered directly to your inbox.
          </p>

          <form
            onSubmit={(event) =>
              event.preventDefault()
            }
          >

            <input
              type="email"
              placeholder="Enter your email address"
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

export default Articles;