import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    e.target.reset();
  };

  return (
    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-grid-bg"></div>

        <div className="contact-glow"></div>

        <div className="container contact-hero-content">

          <div className="contact-label">
            <span></span>
            GLOBAL MEDIA STAR
            <span></span>
            CONTACT
          </div>

          <h1>
            Let's Start
            <span>A Conversation.</span>
          </h1>

          <p>
            Have a story, idea, partnership or question?
            We'd love to hear from you.
          </p>

        </div>

      </section>


      {/* CONTACT MAIN */}

      <section className="contact-main">

        <div className="container">

          <div className="contact-layout">

            {/* LEFT */}

            <div className="contact-info">

              <span className="contact-kicker">
                GET IN TOUCH
              </span>

              <h2>
                Your story
                <strong>starts here.</strong>
              </h2>

              <p className="contact-intro">
                Whether you have an interesting story to share,
                want to collaborate with Global Media Star,
                or simply want to say hello, our team is ready
                to connect.
              </p>


              <div className="contact-details">

                <div className="contact-detail">

                  <span className="detail-number">
                    01
                  </span>

                  <div>
                    <small>EMAIL</small>

                    <a href="mailto:hello@globalmediastar.com">
                      hello@globalmediastar.com
                    </a>
                  </div>

                </div>


                <div className="contact-detail">

                  <span className="detail-number">
                    02
                  </span>

                  <div>
                    <small>EDITORIAL</small>

                    <a href="mailto:editorial@globalmediastar.com">
                      editorial@globalmediastar.com
                    </a>
                  </div>

                </div>


                <div className="contact-detail">

                  <span className="detail-number">
                    03
                  </span>

                  <div>
                    <small>PARTNERSHIPS</small>

                    <a href="mailto:partnerships@globalmediastar.com">
                      partnerships@globalmediastar.com
                    </a>
                  </div>

                </div>

              </div>


              <div className="contact-social">

                <span>FOLLOW THE JOURNEY</span>

                <div>

                  <a href="#" aria-label="Instagram">
                    IG
                  </a>

                  <a href="#" aria-label="LinkedIn">
                    LI
                  </a>

                  <a href="#" aria-label="X">
                    X
                  </a>

                  <a href="#" aria-label="YouTube">
                    YT
                  </a>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="contact-form-wrapper">

              <div className="form-heading">

                <span>
                  SEND A MESSAGE
                </span>

                <div>
                  01 / 04
                </div>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      YOUR NAME
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      EMAIL ADDRESS
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    SUBJECT
                  </label>

                  <select required defaultValue="">

                    <option value="" disabled>
                      Select an option
                    </option>

                    <option>
                      General Enquiry
                    </option>

                    <option>
                      Editorial
                    </option>

                    <option>
                      Partnership
                    </option>

                    <option>
                      Advertising
                    </option>

                    <option>
                      Other
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    YOUR MESSAGE
                  </label>

                  <textarea
                    rows="7"
                    placeholder="Tell us what's on your mind..."
                    required
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="contact-submit"
                >
                  SEND MESSAGE
                  <span>↗</span>
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* STORY CTA */}

      <section className="contact-story">

        <div className="container">

          <div className="story-box">

            <span>
              HAVE A STORY?
            </span>

            <h2>
              Know something
              <strong>worth sharing?</strong>
            </h2>

            <p>
              We're always looking for ideas, perspectives
              and stories that deserve a bigger audience.
            </p>

            <a href="mailto:editorial@globalmediastar.com">
              PITCH A STORY
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER CTA */}

      <section className="contact-bottom">

        <div className="container">

          <span>
            GLOBAL MEDIA STAR
          </span>

          <h2>
            Stay curious.
            <strong>Stay ahead.</strong>
          </h2>

          <Link to="/magazine">
            Explore Magazine
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Contact;