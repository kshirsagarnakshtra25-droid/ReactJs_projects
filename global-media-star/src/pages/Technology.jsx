import { Link } from "react-router-dom";
import "./Technology.css";

const featuredStories = [
  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "The AI Revolution Is Just Getting Started",
    description:
      "Artificial intelligence is moving beyond experiments and becoming a fundamental part of how companies build, compete and innovate.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "ROBOTICS",
    title: "When Machines Begin to Work Beside Us",
    description:
      "The next generation of robotics is bringing intelligent machines into factories, offices and everyday life.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "INNOVATION",
    title: "Technology Creating Entirely New Industries",
    description:
      "From intelligent systems to next-generation platforms, innovation is opening doors to industries that barely existed before.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90",
  },
];

const latestTechnology = [
  {
    category: "AI",
    title: "How Artificial Intelligence Is Changing Business",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1000&q=90",
  },
  {
    category: "CYBERSECURITY",
    title: "The New Age of Digital Security",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=90",
  },
  {
    category: "DIGITAL",
    title: "Inside the Next Digital Revolution",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=90",
  },
  {
    category: "FUTURE",
    title: "What Will Technology Look Like Tomorrow?",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=90",
  },
];

const radarItems = [
  {
    number: "01",
    title: "Artificial Intelligence",
    text: "Intelligent systems are becoming a core layer of modern businesses.",
  },
  {
    number: "02",
    title: "Robotics",
    text: "Machines are moving from controlled environments into the real world.",
  },
  {
    number: "03",
    title: "Cybersecurity",
    text: "Digital protection is becoming one of the most important business priorities.",
  },
  {
    number: "04",
    title: "Future Computing",
    text: "New computing architectures could redefine what technology can accomplish.",
  },
];

function Technology() {
  return (
    <main className="technology-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tech-hero">

        <div className="tech-hero-bg" />

        <div className="tech-hero-grid" />

        <div className="container tech-hero-content">

          <div className="tech-hero-tag">
            <span className="tech-dot" />
            TECHNOLOGY / 2026
          </div>

          <h1>
            The Future
            <span>Starts Here.</span>
          </h1>

          <p>
            Explore the technologies, ideas and innovators
            transforming industries and redefining tomorrow.
          </p>

          <div className="tech-hero-actions">

            <Link to="/articles" className="tech-main-btn">
              Explore Technology
              <span>↗</span>
            </Link>

            <Link to="/magazine" className="tech-outline-btn">
              Technology Magazine
            </Link>

          </div>

        </div>

        <div className="tech-hero-bottom">

          <div>
            <strong>AI</strong>
            <span>Artificial Intelligence</span>
          </div>

          <div>
            <strong>ROBOTICS</strong>
            <span>Machines & Automation</span>
          </div>

          <div>
            <strong>CYBER</strong>
            <span>Digital Security</span>
          </div>

          <div>
            <strong>FUTURE</strong>
            <span>Emerging Technology</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY TICKER
      ===================================================== */}

      <section className="tech-ticker">

        <div className="tech-ticker-track">

          <span>ARTIFICIAL INTELLIGENCE</span>
          <b>✦</b>

          <span>ROBOTICS</span>
          <b>✦</b>

          <span>CYBERSECURITY</span>
          <b>✦</b>

          <span>INNOVATION</span>
          <b>✦</b>

          <span>FUTURE COMPUTING</span>
          <b>✦</b>

          <span>ARTIFICIAL INTELLIGENCE</span>
          <b>✦</b>

          <span>ROBOTICS</span>
          <b>✦</b>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="tech-intro">

        <div className="container tech-intro-grid">

          <div className="tech-intro-label">
            <span>GLOBAL MEDIA STAR</span>
            <strong>TECHNOLOGY DESK</strong>
          </div>

          <div className="tech-intro-content">

            <h2>
              Technology is not
              <span>coming. It's here.</span>
            </h2>

            <p>
              The world's most important technologies are
              changing how businesses operate, how people
              work and how entire industries compete.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED STORIES
      ===================================================== */}

      <section className="tech-featured">

        <div className="container">

          <div className="tech-section-head">

            <div>
              <span>FEATURED TECHNOLOGY</span>

              <h2>
                Stories shaping
                <strong>tomorrow.</strong>
              </h2>
            </div>

            <Link to="/articles">
              View All Stories →
            </Link>

          </div>


          <div className="tech-featured-grid">

            {featuredStories.map((story, index) => (

              <article
                className={`tech-feature-card ${
                  index === 0 ? "tech-feature-main" : ""
                }`}
                key={story.title}
              >

                <div className="tech-feature-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <span className="tech-card-number">
                    0{index + 1}
                  </span>

                  <div className="tech-image-overlay" />

                </div>

                <div className="tech-feature-content">

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
                    Read Story <span>↗</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY RADAR
      ===================================================== */}

      <section className="technology-radar">

        <div className="container">

          <div className="radar-top">

            <div>

              <span>THE TECHNOLOGY RADAR</span>

              <h2>
                What we're
                <strong>watching.</strong>
              </h2>

            </div>

            <p>
              The technologies we believe could have
              the biggest impact on business and society.
            </p>

          </div>


          <div className="radar-grid">

            {radarItems.map((item) => (

              <article
                className="radar-card"
                key={item.number}
              >

                <span className="radar-number">
                  {item.number}
                </span>

                <div className="radar-line" />

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <Link to="/articles">
                  Explore →
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          AI FEATURE
      ===================================================== */}

      <section className="ai-feature">

        <div className="ai-feature-image" />

        <div className="container">

          <div className="ai-feature-content">

            <span>
              SPECIAL REPORT / AI
            </span>

            <h2>
              The Intelligence
              <strong>Revolution.</strong>
            </h2>

            <p>
              Artificial intelligence is becoming one of
              the defining technologies of our generation.
              We explore the businesses, people and ideas
              driving this transformation.
            </p>

            <Link to="/articles">
              Read Special Report →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          LATEST TECHNOLOGY
      ===================================================== */}

      <section className="tech-latest">

        <div className="container">

          <div className="tech-section-head">

            <div>

              <span>LATEST TECHNOLOGY</span>

              <h2>
                What's happening
                <strong>right now.</strong>
              </h2>

            </div>

            <Link to="/articles">
              Explore All →
            </Link>

          </div>


          <div className="tech-latest-grid">

            {latestTechnology.map((story, index) => (

              <article
                className="tech-latest-card"
                key={story.title}
              >

                <div className="tech-latest-image">

                  <img
                    src={story.image}
                    alt={story.title}
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="tech-latest-content">

                  <small>
                    {story.category}
                  </small>

                  <h3>
                    {story.title}
                  </h3>

                  <Link to="/articles">
                    Read More →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FUTURE STATEMENT
      ===================================================== */}

      <section className="future-section">

        <div className="container">

          <div className="future-content">

            <span>
              THE FUTURE IS BEING BUILT NOW
            </span>

            <h2>
              Don't just watch
              <strong>the future.</strong>
            </h2>

            <p>
              Follow the innovators, technologies and
              ideas creating what comes next.
            </p>

            <Link to="/interviews">
              Meet the Innovators →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAGAZINE CTA
      ===================================================== */}

      <section className="tech-magazine">

        <div className="container tech-magazine-grid">

          <div className="tech-magazine-copy">

            <span>
              GLOBAL MEDIA STAR MAGAZINE
            </span>

            <h2>
              Technology
              <strong>Beyond the Headlines.</strong>
            </h2>

            <p>
              Discover deeper technology stories,
              exclusive interviews and perspectives
              from the innovators shaping tomorrow.
            </p>

            <Link to="/magazine">
              Explore Magazine →
            </Link>

          </div>


          <div className="tech-magazine-visual">

            <div className="tech-cover-back" />

            <div className="tech-cover">

              <span>GLOBAL</span>

              <strong>MEDIA</strong>

              <strong>STAR</strong>

              <small>TECHNOLOGY</small>

              <p>
                THE
                <br />
                INTELLIGENCE
                <br />
                REVOLUTION
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="tech-newsletter">

        <div className="container">

          <span>
            THE TECHNOLOGY BRIEF
          </span>

          <h2>
            Stay ahead of
            <strong>what's next.</strong>
          </h2>

          <p>
            Get the most important technology stories,
            insights and innovations delivered to your inbox.
          </p>

          <form>

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

export default Technology;