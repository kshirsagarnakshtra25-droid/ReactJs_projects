import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <main className="contact-page">
      <Navbar />

      <section className="contact-hero">

        <div className="contact-grid"></div>

        <div className="contact-content">

          <div className="contact-eyebrow">
            <span></span>
            GET IN TOUCH
          </div>

          <h1>
            LET'S
            <strong>CONNECT.</strong>
          </h1>

          <p>
            Have a question about training, membership,
            tournaments or the club? Our team is ready
            to help.
          </p>

        </div>

      </section>


      <section className="contact-main">

        <div className="contact-info">

          <div className="contact-section-label">
            <span>01</span>
            CONTACT DETAILS
          </div>

          <h2>
            COME
            <br />
            <strong>PLAY.</strong>
          </h2>

          <div className="contact-details">

            <div>
              <span>LOCATION</span>
              <strong>
                SMASH ARENA
                <br />
                BADMINTON CLUB
              </strong>
            </div>

            <div>
              <span>PHONE</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div>
              <span>EMAIL</span>
              <strong>hello@smasharena.com</strong>
            </div>

            <div>
              <span>OPENING HOURS</span>
              <strong>
                MON — SUN
                <br />
                06:00 AM — 10:00 PM
              </strong>
            </div>

          </div>

        </div>


        <div className="contact-form-wrapper">

          <div className="contact-section-label">
            <span>02</span>
            SEND A MESSAGE
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been received.");
            }}
          >

            <div className="contact-field">
              <label>YOUR NAME</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>


            <div className="contact-field">
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>


          <div className="contact-field">
  <label>PHONE NUMBER</label>

  <input
    type="tel"
    placeholder="Enter your 10-digit phone number"
    maxLength="10"
    inputMode="numeric"
    pattern="[0-9]{10}"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }}
    required
  />
</div>


            <div className="contact-field">
              <label>MESSAGE</label>
              <textarea
                rows="5"
                placeholder="Tell us how we can help..."
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

      </section>


      <section className="contact-cta">

        <span>READY TO GET ON COURT?</span>

        <h2>
          YOUR GAME
          <strong>STARTS HERE.</strong>
        </h2>

        <div className="contact-cta-buttons">

          <Link
            to="/membership"
            className="contact-primary-button"
          >
            JOIN THE CLUB
            <span>↗</span>
          </Link>

          <Link
            to="/training"
            className="contact-secondary-button"
          >
            VIEW TRAINING
          </Link>

        </div>

      </section>
      <Footer/>

    </main>
  );
};

export default Contact;