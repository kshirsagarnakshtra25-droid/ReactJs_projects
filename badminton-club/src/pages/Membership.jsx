import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const plans = [
  {
    id: "01",
    name: "STARTER",
    subtitle: "FOR NEW PLAYERS",
    price: "999",
    period: "/ MONTH",
    description:
      "Perfect for beginners who want to build their fundamentals and discover the game.",
    features: [
      "8 COURT HOURS / MONTH",
      "BASIC TRAINING ACCESS",
      "MEMBER OPEN PLAY",
      "LOCKER ACCESS",
      "COMMUNITY EVENTS",
    ],
    featured: false,
  },
  {
    id: "02",
    name: "PERFORM",
    subtitle: "FOR SERIOUS PLAYERS",
    price: "1,999",
    period: "/ MONTH",
    description:
      "More court time, structured training and competitive opportunities for committed players.",
    features: [
      "UNLIMITED COURT HOURS",
      "GROUP TRAINING",
      "TOURNAMENT ACCESS",
      "PLAYER PERFORMANCE TRACKING",
      "PRIORITY COURT BOOKING",
    ],
    featured: true,
  },
  {
    id: "03",
    name: "ELITE",
    subtitle: "FOR COMPETITORS",
    price: "3,499",
    period: "/ MONTH",
    description:
      "The complete Smash Arena experience for players focused on reaching their highest level.",
    features: [
      "UNLIMITED COURT HOURS",
      "ELITE TRAINING PROGRAM",
      "PERSONAL COACHING",
      "TOURNAMENT SUPPORT",
      "FULL PERFORMANCE ANALYTICS",
    ],
    featured: false,
  },
];

const Membership = () => {
  const [activePlan, setActivePlan] = useState("02");

  return (
    <main className="membership-page">
        <Navbar />
      {/* BACKGROUND */}
      <div className="membership-grid"></div>

      <div className="membership-glow membership-glow-one"></div>
      <div className="membership-glow membership-glow-two"></div>

      {/* MOVING SHUTTLES */}
      <div className="membership-shuttle membership-shuttle-one">
        <span></span>
      </div>

      <div className="membership-shuttle membership-shuttle-two">
        <span></span>
      </div>

      <div className="membership-shuttle membership-shuttle-three">
        <span></span>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="membership-hero">
        <div className="membership-hero-number">06</div>

        <div className="membership-hero-content">
          <div className="membership-eyebrow">
            <span></span>
            JOIN / TRAIN / COMPETE
          </div>

          <h1>
            CHOOSE YOUR
            <strong>LEVEL.</strong>
          </h1>

          <p>
            Whether you're picking up a racket for the first time
            or preparing for your next championship, there's a
            place for you at Smash Arena.
          </p>

          <div className="membership-hero-actions">
            <a
              href="#membership-plans"
              className="membership-primary-button"
            >
              VIEW MEMBERSHIPS
              <span>↓</span>
            </a>

            <Link
              to="/contact"
              className="membership-secondary-button"
            >
              TALK TO US
            </Link>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="membership-hero-visual">
          <div className="membership-orbit orbit-one"></div>
          <div className="membership-orbit orbit-two"></div>
          <div className="membership-orbit orbit-three"></div>

          <div className="membership-core">
            <div className="core-ring"></div>

            <div className="core-text">
              <span>SMASH</span>
              <strong>06</strong>
              <span>ARENA</span>
            </div>

            <div className="core-cross cross-horizontal"></div>
            <div className="core-cross cross-vertical"></div>
          </div>

          <div className="membership-floating-label label-one">
            <span>COURT</span>
            <strong>24/7</strong>
          </div>

          <div className="membership-floating-label label-two">
            <span>PLAYERS</span>
            <strong>420+</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="membership-stats">
        <div className="membership-stat">
          <span>ACTIVE MEMBERS</span>
          <strong>420+</strong>
        </div>

        <div className="membership-stat">
          <span>COURTS</span>
          <strong>06</strong>
        </div>

        <div className="membership-stat">
          <span>TRAINING HOURS</span>
          <strong>9K+</strong>
        </div>

        <div className="membership-stat">
          <span>COMMUNITY EVENTS</span>
          <strong>36</strong>
        </div>
      </section>

      {/* =====================================================
          MEMBERSHIP PLANS
      ===================================================== */}

      <section
        className="membership-plans"
        id="membership-plans"
      >
        <div className="membership-section-heading">
          <div>
            <div className="membership-section-label">
              <span>01</span>
              MEMBERSHIP PLANS
            </div>

            <h2>
              FIND YOUR
              <strong>GAME.</strong>
            </h2>
          </div>

          <p>
            Flexible memberships designed around how you
            train, play and compete.
          </p>
        </div>

        <div className="membership-plan-selector">
          {plans.map((plan) => (
            <button
              key={plan.id}
              className={
                activePlan === plan.id
                  ? "membership-selector active"
                  : "membership-selector"
              }
              onClick={() => setActivePlan(plan.id)}
            >
              <span>{plan.id}</span>
              {plan.name}
            </button>
          ))}
        </div>

        <div className="membership-plans-grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={
                plan.featured
                  ? "membership-card featured"
                  : "membership-card"
              }
            >
              {plan.featured && (
                <div className="membership-popular">
                  MOST POPULAR
                </div>
              )}

              <div className="membership-card-top">
                <span className="membership-card-number">
                  {plan.id}
                </span>

                <span className="membership-card-subtitle">
                  {plan.subtitle}
                </span>
              </div>

              <h3>{plan.name}</h3>

              <p className="membership-card-description">
                {plan.description}
              </p>

              <div className="membership-price">
                <span>₹</span>
                <strong>{plan.price}</strong>
                <small>{plan.period}</small>
              </div>

              <div className="membership-divider"></div>

              <div className="membership-features">
                {plan.features.map((feature, index) => (
                  <div
                    className="membership-feature"
                    key={feature}
                  >
                    <span>0{index + 1}</span>
                    <strong>{feature}</strong>
                    <i>✓</i>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="membership-card-button"
                onClick={() => setActivePlan(plan.id)}
              >
                CHOOSE {plan.name}
                <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHY MEMBERSHIP
      ===================================================== */}

      <section className="membership-benefits">
        <div className="membership-benefits-visual">
          <div className="benefits-circle benefits-circle-one"></div>
          <div className="benefits-circle benefits-circle-two"></div>
          <div className="benefits-circle benefits-circle-three"></div>

          <div className="benefits-number">06</div>

          <div className="benefits-racket">
            <div className="racket-head"></div>
            <div className="racket-handle"></div>
          </div>

          <div className="benefits-shuttle">
            <span></span>
          </div>
        </div>

        <div className="membership-benefits-content">
          <div className="membership-section-label">
            <span>02</span>
            MORE THAN A MEMBERSHIP
          </div>

          <h2>
            BUILT
            <br />
            FOR
            <br />
            <strong>PLAYERS.</strong>
          </h2>

          <p>
            Smash Arena membership gives you more than access
            to a court. It's access to a community built around
            improving, competing and enjoying the game.
          </p>

          <div className="benefit-list">
            <div className="benefit-item">
              <span>01</span>

              <div>
                <strong>PLAY MORE</strong>
                <p>
                  Get reliable court access and spend more time
                  doing what you love.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <span>02</span>

              <div>
                <strong>TRAIN BETTER</strong>
                <p>
                  Access structured training programs designed
                  to develop real match performance.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <span>03</span>

              <div>
                <strong>COMPETE HARDER</strong>
                <p>
                  Join tournaments, challenges and competitive
                  events throughout the year.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/training"
            className="membership-benefits-button"
          >
            EXPLORE TRAINING
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          MEMBERSHIP EXPERIENCE
      ===================================================== */}

      <section className="membership-experience">
        <div className="membership-experience-header">
          <div>
            <div className="membership-section-label">
              <span>03</span>
              THE MEMBER EXPERIENCE
            </div>

            <h2>
              STEP INTO
              <strong>THE ARENA.</strong>
            </h2>
          </div>

          <p>
            Everything you need to turn court time into
            progress.
          </p>
        </div>

        <div className="experience-grid">
          <div className="experience-card experience-large">
            <div className="experience-number">01</div>

            <div className="experience-icon">
              +
            </div>

            <span>COURT ACCESS</span>

            <h3>
              YOUR
              <strong>COURT.</strong>
            </h3>

            <p>
              Book courts when you need them and keep your
              training schedule consistent.
            </p>

            <div className="experience-line"></div>
          </div>

          <div className="experience-card">
            <div className="experience-number">02</div>

            <div className="experience-icon">
              ↗
            </div>

            <span>COMMUNITY</span>

            <h3>
              FIND YOUR
              <strong>SQUAD.</strong>
            </h3>

            <p>
              Meet players, challenge new opponents and
              become part of the Arena community.
            </p>
          </div>

          <div className="experience-card">
            <div className="experience-number">03</div>

            <div className="experience-icon">
              ★
            </div>

            <span>COMPETITION</span>

            <h3>
              PLAY TO
              <strong>WIN.</strong>
            </h3>

            <p>
              Enter club tournaments and put your skills
              under real match pressure.
            </p>
          </div>

          <div className="experience-card experience-wide">
            <div className="experience-number">04</div>

            <div className="experience-wide-content">
              <span>PERFORMANCE</span>

              <h3>
                EVERY SESSION.
                <strong>BETTER.</strong>
              </h3>

              <p>
                Track your progress and build your game with
                focused training, coaching and consistency.
              </p>
            </div>

            <div className="experience-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="membership-faq">
        <div className="membership-faq-heading">
          <div className="membership-section-label">
            <span>04</span>
            MEMBERSHIP FAQ
          </div>

          <h2>
            GOT
            <strong>QUESTIONS?</strong>
          </h2>
        </div>

        <div className="faq-list">
          <details open>
            <summary>
              <span>01</span>
              Which membership is best for beginners?
              <strong>+</strong>
            </summary>

            <p>
              The Starter membership is designed for beginners
              and casual players who want regular court access
              and basic training opportunities.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span>
              Can I upgrade my membership later?
              <strong>+</strong>
            </summary>

            <p>
              Yes. You can move to a higher membership whenever
              your training and competition requirements grow.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span>
              Do memberships include tournaments?
              <strong>+</strong>
            </summary>

            <p>
              Tournament access depends on your membership plan.
              Perform and Elite members receive competitive
              event access.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span>
              Can I speak with someone before joining?
              <strong>+</strong>
            </summary>

            <p>
              Absolutely. Visit our Contact page and our team
              can help you choose the right membership.
            </p>
          </details>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="membership-final">
        <div className="membership-final-grid"></div>

        <div className="membership-final-shuttle">
          <span></span>
        </div>

        <span>YOUR GAME STARTS HERE</span>

        <h2>
          READY TO
          <br />
          <strong>PLAY?</strong>
        </h2>

        <p>
          Choose your membership and take the next step
          toward becoming a better player.
        </p>

        <div className="membership-final-actions">
          <Link
            to="/contact"
            className="membership-final-button"
          >
            JOIN SMASH ARENA
            <span>↗</span>
          </Link>

          <Link
            to="/training"
            className="membership-final-outline"
          >
            VIEW TRAINING
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default Membership;