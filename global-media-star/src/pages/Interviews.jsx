import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Interviews.css";

import interviewVideo from "../assets/videos/interview.mp4";

function Interviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="interviews-page">

      {/* =========================
          INTERVIEW HERO VIDEO
      ========================= */}

      <section className="interview-video-hero">

        <video
          className="interview-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://www.pexels.com/download/video/8836327/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="interview-video-overlay"></div>

        <div className="container interview-hero-content">

          <span className="interview-kicker">
            GLOBAL MEDIA STAR
          </span>

          <div className="interview-line"></div>

          <span className="interview-category">
            EXCLUSIVE INTERVIEWS
          </span>

          <h1>
            Conversations
            <span>That Matter.</span>
          </h1>

          <p>
            In-depth conversations with entrepreneurs,
            CEOs, innovators and visionaries shaping
            the future.
          </p>

          <div className="interview-buttons">

            <a
              href="#featured-interviews"
              className="interview-gold-btn"
            >
              Explore Interviews
              <span>↗</span>
            </a>

            <Link
              to="/leaders"
              className="interview-outline-btn"
            >
              Meet The Leaders
            </Link>

          </div>

        </div>

        <div className="video-status">

          <span className="video-dot"></span>

          <span>
            NOW PLAYING
          </span>

        </div>

        <div className="video-scroll">
          <span>SCROLL TO EXPLORE</span>
          <b>↓</b>
        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="interview-intro">

        <div className="container interview-intro-grid">

          <div className="intro-big-number">
            01
          </div>

          <div>

            <span className="section-kicker">
              THE CONVERSATIONS
            </span>

            <h2>
              Ideas behind
              <span>the success.</span>
            </h2>

          </div>

          <p>
            Go beyond headlines and discover the
            experiences, strategies and ideas behind
            some of the world's most influential people.
          </p>

        </div>

      </section>


      {/* =========================
          FEATURED INTERVIEW
      ========================= */}

      <section
        className="featured-interviews"
        id="featured-interviews"
      >

        <div className="container">

          <div className="interview-section-heading">

            <div>
              <span className="section-kicker">
                FEATURED
              </span>

              <h2>
                Featured
                <span>Conversations</span>
              </h2>
            </div>

            <Link to="/articles">
              View All Stories →
            </Link>

          </div>


          <div className="interview-feature-card">

            <div className="feature-video">

              <video
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src={interviewVideo}
                  type="video/mp4"
                />
              </video>

              <div className="feature-video-overlay"></div>

              <div className="play-badge">
                ▶
              </div>

            </div>


            <div className="feature-interview-content">

              <span>
                CEO INTERVIEW
              </span>

              <h3>
                Building the Future
                <strong>One Bold Decision at a Time.</strong>
              </h3>

              <p>
                An exclusive conversation about leadership,
                innovation, business strategy and creating
                meaningful impact in a rapidly changing world.
              </p>

              <div className="interview-meta">

                <div>
                  <small>
                    CATEGORY
                  </small>

                  <strong>
                    LEADERSHIP
                  </strong>
                </div>

                <div>
                  <small>
                    FORMAT
                  </small>

                  <strong>
                    VIDEO INTERVIEW
                  </strong>
                </div>

              </div>

              <Link to="/articles">
                Watch Full Interview
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          INTERVIEW CATEGORIES
      ========================= */}

      <section className="interview-categories">

        <div className="container">

          <div className="categories-heading">

            <span className="section-kicker">
              EXPLORE
            </span>

            <h2>
              Conversations
              <span>Across Industries</span>
            </h2>

          </div>


          <div className="category-cards">

            <Link to="/business">
              <span>01</span>
              <h3>Business Leaders</h3>
              <b>↗</b>
            </Link>

            <Link to="/technology">
              <span>02</span>
              <h3>Technology Visionaries</h3>
              <b>↗</b>
            </Link>

            <Link to="/startup">
              <span>03</span>
              <h3>Startup Founders</h3>
              <b>↗</b>
            </Link>

            <Link to="/finance">
              <span>04</span>
              <h3>Finance Experts</h3>
              <b>↗</b>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          VIDEO CTA
      ========================= */}

      <section className="interview-cta">

        <div className="container">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            The stories behind
            <strong>the headlines.</strong>
          </h2>

          <p>
            Watch exclusive interviews with the people
            building what comes next.
          </p>

          <Link to="/articles">
            Explore More Interviews
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Interviews;