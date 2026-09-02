import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Leadership.css";

const leaders = [
  {
    name: "Satya Nadella",
    role: "Chairman & CEO",
    company: "Microsoft",
    category: "TECHNOLOGY",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2TdXtJ7IFwKTP_TWtMP2b2h9-7HovDvpIJ59aNe7yyQ&s=10.jpg",
    description:
      "A technology leader known for transforming Microsoft's culture and accelerating its focus on cloud computing and AI.",
  },
  {
    name: "Sundar Pichai",
    role: "CEO",
    company: "Google & Alphabet",
    category: "TECHNOLOGY",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs0lA24U1w_tybI7oFpQTobQCa3TAYv8g7wXrTvqKkg&s=10.jpg",
    description:
      "A global technology executive shaping products, platforms and artificial intelligence.",
  },
  {
    name: "Jensen Huang",
    role: "Founder & CEO",
    company: "NVIDIA",
    category: "AI & INNOVATION",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0inSS3BS_kxdnmlVR1VNIrtztxGaNp75886yBa4IOkA&s=10.jpg",
    description:
      "A pioneering entrepreneur who helped establish NVIDIA as a major force in accelerated computing and AI.",
  },
  {
    name: "Indra Nooyi",
    role: "Former Chairman & CEO",
    company: "PepsiCo",
    category: "BUSINESS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPABwGsHfdLJ15ws6ygDkofpcLqob30KdAHzgQaRpT6g&s=10.jpg",
    description:
      "A renowned business strategist whose leadership emphasized long-term growth and purpose.",
  },
  {
    name: "Tim Cook",
    role: "CEO",
    company: "Apple",
    category: "GLOBAL BUSINESS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07gddKbTYT6ZouMwow9lzLWM2Oe8d5697XMciSBLa_g&s=10.jpg",
    description:
      "A global business leader who has guided Apple through significant growth and technological expansion.",
  },
  {
    name: "Mary Barra",
    role: "Chair & CEO",
    company: "General Motors",
    category: "AUTOMOTIVE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aBBp6fMQZIA3dKgwFs4Z4nuNxyDIVgGTwB_vKn1lNw&s=10.jpg",
    description:
      "A prominent automotive executive leading transformation across mobility and technology.",
  },
];

function Leadership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="leadership-page">

      {/* ================= HERO ================= */}

      <section className="leadership-hero">

        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="container hero-content">

          <span className="hero-kicker">
            GLOBAL MEDIA STAR
            <i></i>
            LEADERSHIP
          </span>

          <h1>
            The People
            <span>Shaping Tomorrow.</span>
          </h1>

          <p>
            Discover the visionaries, founders and executives
            creating the future of business, technology and
            global industries.
          </p>

          <div className="hero-buttons">

            <a href="#leaders" className="gold-btn">
              Explore Leaders
              <span>↗</span>
            </a>

            <Link to="/interviews" className="white-btn">
              Executive Interviews
            </Link>

          </div>

        </div>

        <div className="hero-bottom">
          SCROLL TO DISCOVER
          <span></span>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="leadership-intro">

        <div className="container intro-grid">

          <div className="intro-number">
            06
          </div>

          <div className="intro-heading">

            <span>GLOBAL LEADERS</span>

            <h2>
              Vision.
              <strong>Influence.</strong>
              Impact.
            </h2>

          </div>

          <p>
            Leadership is not simply about holding a position.
            It is about creating a vision, making difficult
            decisions and inspiring people to move forward.
          </p>

        </div>

      </section>


      {/* ================= FEATURED LEADERS ================= */}

      <section className="leaders-section" id="leaders">

        <div className="container">

          <div className="section-header">

            <div>
              <span>THE LEADERS</span>

              <h2>
                Voices of
                <strong>Influence.</strong>
              </h2>
            </div>

            <p>
              Meet some of the world's most influential
              business and technology leaders.
            </p>

          </div>


          {/* ===== FEATURED EDITORIAL GRID ===== */}

          <div className="leaders-editorial">

            {/* BIG FEATURED CARD */}

            <article className="leader-featured">

              <div className="leader-image">

                <img
                  src={leaders[0].image}
                  alt={leaders[0].name}
                />

                <div className="image-gradient"></div>

                <span className="leader-number">
                  01
                </span>

                <span className="profile-arrow">
                  ↗
                </span>

                <div className="featured-info">

                  <span>
                    {leaders[0].category}
                  </span>

                  <h3>
                    {leaders[0].name}
                  </h3>

                  <p>
                    {leaders[0].role} · {leaders[0].company}
                  </p>

                </div>

              </div>

              <div className="featured-description">

                <p>
                  {leaders[0].description}
                </p>

                <Link to="/articles">
                  Read Leadership Story
                  <span>→</span>
                </Link>

              </div>

            </article>


            {/* RIGHT SIDE */}

            <div className="leader-side">

              {leaders.slice(1, 3).map((leader, index) => (

                <article
                  className="leader-medium"
                  key={leader.name}
                >

                  <div className="medium-image">

                    <img
                      src={leader.image}
                      alt={leader.name}
                    />

                    <div className="image-gradient"></div>

                    <span className="leader-number">
                      0{index + 2}
                    </span>

                  </div>

                  <div className="medium-content">

                    <span>
                      {leader.category}
                    </span>

                    <h3>
                      {leader.name}
                    </h3>

                    <p>
                      {leader.role} · {leader.company}
                    </p>

                    <Link to="/articles">
                      Discover Story ↗
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>


          {/* ===== LOWER THREE CARDS ===== */}

          <div className="leader-bottom-grid">

            {leaders.slice(3).map((leader, index) => (

              <article
                className="leader-small"
                key={leader.name}
              >

                <div className="small-image">

                  <img
                    src={leader.image}
                    alt={leader.name}
                  />

                  <span className="leader-number">
                    0{index + 4}
                  </span>

                  <span className="small-arrow">
                    ↗
                  </span>

                </div>

                <div className="small-content">

                  <span>
                    {leader.category}
                  </span>

                  <h3>
                    {leader.name}
                  </h3>

                  <p>
                    {leader.role}
                  </p>

                  <strong>
                    {leader.company}
                  </strong>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SPOTLIGHT ================= */}

      <section className="leadership-spotlight">

        <div className="spotlight-image"></div>
        <div className="spotlight-overlay"></div>

        <div className="container spotlight-content">

          <span>
            LEADERSHIP SPOTLIGHT
          </span>

          <h2>
            What makes
            <strong>great leaders</strong>
            different?
          </h2>

          <p>
            The strongest leaders combine long-term thinking,
            decisive action and the ability to inspire people
            around a shared vision.
          </p>

          <Link to="/articles">
            Read The Story ↗
          </Link>

        </div>

      </section>


      {/* ================= PRINCIPLES ================= */}

      <section className="principles-section">

        <div className="container">

          <div className="principles-heading">

            <span>THE LEADERSHIP CODE</span>

            <h2>
              Three qualities behind
              <strong>extraordinary leadership.</strong>
            </h2>

          </div>


          <div className="principles-grid">

            <article>
              <span>01</span>
              <h3>VISION</h3>
              <p>
                Great leaders see possibilities before
                they become obvious.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>COURAGE</h3>
              <p>
                Meaningful transformation requires decisions
                that challenge the status quo.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>IMPACT</h3>
              <p>
                Leadership is ultimately measured by the
                change created for others.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="leadership-cta">

        <div className="container">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Every great story
            <strong>starts with a leader.</strong>
          </h2>

          <p>
            Explore more stories about the people building
            the future.
          </p>

          <Link to="/articles">
            Explore More Stories ↗
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Leadership;