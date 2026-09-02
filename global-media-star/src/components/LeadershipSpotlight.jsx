import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import "./LeadershipSpotlight.css";

function LeadershipSpotlight() {
  return (
    <section className="leadership-section section">

      <div className="container">

        <SectionTitle
          eyebrow="Leadership Spotlight"
          title="The People Shaping Tomorrow"
          description="Meet the visionaries, founders and leaders whose ideas are influencing the next generation of business."
        />

        <div className="leader-feature">

          {/* Image */}
          <div className="leader-image">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85"
              alt="Business leader"
            />

            <div className="leader-image-label">
              LEADER OF THE MONTH
            </div>
          </div>


          {/* Content */}
          <div className="leader-content">

            <span className="leader-category">
              BUSINESS • LEADERSHIP
            </span>

            <h3>
              Visionary Leadership
              <span>for a Changing World</span>
            </h3>

            <p className="leader-description">
              Today's most influential leaders are not simply
              responding to change. They are creating it. Discover
              the mindset, strategies and principles driving
              meaningful transformation across industries.
            </p>


            {/* Quote */}
            <div className="leader-quote">

              <span className="quote-mark">“</span>

              <p>
                Great leadership begins with the courage to
                imagine what others cannot yet see.
              </p>

            </div>


            {/* Bottom */}
            <div className="leader-bottom">

              <div className="leader-author">

                <strong>
                  Global Media Star
                </strong>

                <span>
                  Executive Insights
                </span>

              </div>

              <Link
                to="/leadership"
                className="leader-button"
              >
                Discover More
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LeadershipSpotlight;