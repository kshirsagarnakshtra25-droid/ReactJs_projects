import { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing to Global Media Star!");
    setEmail("");
  };

  return (
    <section className="newsletter-section">

      <div className="container">

        <div className="newsletter-box">

          <div className="newsletter-content">

            <span className="newsletter-eyebrow">
              STAY INFORMED
            </span>

            <h2>
              Ideas worth
              <span>knowing.</span>
            </h2>

            <p>
              Get the latest business stories, leadership insights,
              technology trends and exclusive perspectives delivered
              directly to your inbox.
            </p>

          </div>


          <div className="newsletter-form-wrapper">

            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
            >

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit">
                Subscribe
                <i className="fa-solid fa-arrow-right"></i>
              </button>

            </form>

            {message && (
              <p className="newsletter-message">
                {message}
              </p>
            )}

            <span className="newsletter-note">
              No spam. Only meaningful stories and insights.
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;