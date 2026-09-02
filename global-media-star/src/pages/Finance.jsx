import { Link } from "react-router-dom";
import "./Finance.css";

const featuredStories = [
  {
    category: "MARKETS",
    title: "The Forces Reshaping Global Markets",
    description:
      "A closer look at the economic trends, market movements and financial forces shaping the global business landscape.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "INVESTMENT",
    title: "Where Smart Capital Is Moving Next",
    description:
      "Discover the industries and opportunities attracting the world's most strategic investors.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=90",
  },
  {
    category: "ECONOMY",
    title: "The New Economics of Global Growth",
    description:
      "How changing economic conditions are creating new opportunities for businesses worldwide.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1400&q=90",
  },
];

const latestStories = [
  {
    category: "FINANCE",
    title: "Why Digital Finance Is Changing Business",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=90",
  },
  {
    category: "MARKETS",
    title: "What Global Investors Are Watching",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=900&q=90",
  },
  {
    category: "WEALTH",
    title: "Building Wealth in a Changing Economy",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=90",
  },
  {
    category: "BUSINESS",
    title: "The Financial Strategy Behind Global Brands",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=90",
  },
];

const insights = [
  {
    number: "01",
    title: "Global Market Intelligence",
    text: "Understand the trends influencing markets across major economies.",
  },
  {
    number: "02",
    title: "Investment Opportunities",
    text: "Explore sectors, industries and ideas attracting smart capital.",
  },
  {
    number: "03",
    title: "Economic Outlook",
    text: "Stay informed about the forces shaping tomorrow's economy.",
  },
];

function Finance() {
  return (
    <main className="finance-page">

      {/* HERO */}

      <section className="finance-hero">

        <div className="finance-hero-image" />

        <div className="finance-hero-overlay" />

        <div className="container finance-hero-content">

          <span className="finance-eyebrow">
            GLOBAL FINANCE
          </span>

          <h1>
            Money.
            <span>Markets.</span>
            Momentum.
          </h1>

          <p>
            Intelligent perspectives on markets, investment,
            economics and the financial forces shaping the world.
          </p>

          <div className="finance-hero-buttons">
            <Link to="/articles" className="finance-primary-btn">
              Explore Finance
              <span>→</span>
            </Link>

            <Link to="/magazine" className="finance-secondary-btn">
              Read Magazine
            </Link>
          </div>

        </div>

        <div className="finance-hero-bottom">

          <div>
            <strong>GLOBAL</strong>
            <span>Market Intelligence</span>
          </div>

          <div>
            <strong>INSIGHT</strong>
            <span>Expert Analysis</span>
          </div>

          <div>
            <strong>FUTURE</strong>
            <span>Economic Trends</span>
          </div>

        </div>

      </section>


      {/* MARKET STRIP */}

      <section className="market-strip">

        <div className="container market-strip-inner">

          <div className="market-title">
            MARKET WATCH
          </div>

          <div className="market-item">
            <span>GLOBAL ECONOMY</span>
            <strong>+4.8%</strong>
          </div>

          <div className="market-item">
            <span>TECH SECTOR</span>
            <strong>+7.2%</strong>
          </div>

          <div className="market-item">
            <span>GLOBAL TRADE</span>
            <strong>+3.6%</strong>
          </div>

          <div className="market-item">
            <span>INVESTMENT</span>
            <strong>+5.4%</strong>
          </div>

        </div>

      </section>


      {/* FEATURED STORIES */}

      <section className="finance-featured">

        <div className="container">

          <div className="finance-section-heading">

            <div>
              <span>FEATURED FINANCE</span>

              <h2>
                Stories shaping
                <strong>the financial world.</strong>
              </h2>
            </div>

            <Link to="/articles">
              View All →
            </Link>

          </div>


          <div className="featured-finance-grid">

            {featuredStories.map((story, index) => (

              <article
                className={`featured-finance-card ${
                  index === 0 ? "featured-main" : ""
                }`}
                key={story.title}
              >

                <div className="featured-finance-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <span>
                    0{index + 1}
                  </span>

                </div>

                <div className="featured-finance-content">

                  <small>
                    {story.category}
                  </small>

                  <h3>
                    {story.title}
                  </h3>

                  <p>
                    {story.description}
                  </p>

                  <Link to="/articles">
                    Read Analysis →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* INSIGHTS */}

      <section className="finance-insights">

        <div className="container">

          <div className="insights-heading">

            <span>OUR FINANCE DESK</span>

            <h2>
              Intelligence
              <strong>Beyond Numbers.</strong>
            </h2>

            <p>
              Finance is more than charts and percentages.
              We explore the people, strategies and ideas
              behind the numbers.
            </p>

          </div>


          <div className="insights-grid">

            {insights.map((item) => (

              <article
                className="insight-card"
                key={item.number}
              >

                <span className="insight-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <Link to="/articles">
                  Discover →
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* LATEST STORIES */}

      <section className="finance-latest">

        <div className="container">

          <div className="finance-section-heading">

            <div>
              <span>LATEST FINANCE</span>

              <h2>
                The latest
                <strong>financial stories.</strong>
              </h2>
            </div>

            <Link to="/articles">
              All Stories →
            </Link>

          </div>


          <div className="latest-finance-grid">

            {latestStories.map((story, index) => (

              <article
                className="latest-finance-card"
                key={story.title}
              >

                <div className="latest-finance-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="latest-finance-content">

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


      {/* EXPERT SECTION */}

      <section className="finance-expert">

        <div className="finance-expert-image" />

        <div className="container">

          <div className="expert-content">

            <span>
              EXPERT PERSPECTIVE
            </span>

            <h2>
              Understanding
              <strong>what comes next.</strong>
            </h2>

            <p>
              From emerging markets to disruptive industries,
              our finance desk examines the signals behind
              the headlines.
            </p>

            <Link to="/interviews">
              Explore Expert Voices →
            </Link>

          </div>

        </div>

      </section>


      {/* MAGAZINE CTA */}

      <section className="finance-magazine">

        <div className="container finance-magazine-inner">

          <div className="finance-magazine-copy">

            <span>
              GLOBAL MEDIA STAR
            </span>

            <h2>
              Finance
              <strong>Inside the Magazine.</strong>
            </h2>

            <p>
              Go deeper with exclusive financial analysis,
              interviews and stories from the people shaping
              global business.
            </p>

            <Link to="/magazine">
              Explore Magazine →
            </Link>

          </div>


          <div className="finance-magazine-cover">

            <div className="cover-glow" />

            <div className="cover-card">

              <span>
                GLOBAL
              </span>

              <strong>
                MEDIA
              </strong>

              <strong>
                STAR
              </strong>

              <small>
                FINANCE
              </small>

              <p>
                THE FUTURE
                <br />
                OF MONEY
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* NEWSLETTER */}

      <section className="finance-newsletter">

        <div className="container">

          <span>
            GLOBAL FINANCE BRIEF
          </span>

          <h2>
            Know the numbers.
            <strong>Understand the story.</strong>
          </h2>

          <p>
            Get the latest finance stories and market insights
            delivered directly to your inbox.
          </p>

          <form>

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

export default Finance;