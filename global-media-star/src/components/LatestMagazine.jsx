import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import "./LatestMagazine.css";

function LatestMagazine() {
  return (
    <section className="latest-magazine section">

      <div className="container">

        <SectionTitle
          eyebrow="Global Media Star"
          title="Latest Magazine"
          description="Explore our latest edition featuring influential leaders, global business trends, innovation, technology and ideas shaping tomorrow."
        />

        <div className="magazine-layout">

          {/* Magazine Cover */}
          <div className="magazine-cover-wrapper">

            <div className="magazine-cover">

              <div className="magazine-top">
                GLOBAL
              </div>

              <div className="magazine-logo">
                MEDIA
                <span>STAR</span>
              </div>

              <div className="magazine-line"></div>

              <div className="magazine-edition">
                AUGUST 2026
              </div>

              <div className="magazine-headline">
                THE FUTURE
                <span>OF BUSINESS</span>
              </div>

              <div className="magazine-subtitle">
                Leadership • Innovation • Technology
              </div>

              <div className="magazine-number">
                08
              </div>

            </div>

          </div>


          {/* Magazine Information */}
          <div className="magazine-info">

            <span className="magazine-label">
              AUGUST 2026 • ISSUE 08
            </span>

            <h3>
              The Future of
              <span>Business & Innovation</span>
            </h3>

            <p>
              Inside this edition, discover the people, companies
              and ideas transforming the global business landscape.
              From artificial intelligence and emerging technology
              to leadership and entrepreneurship.
            </p>

            <div className="magazine-highlights">

              <div className="magazine-highlight">
                <span>01</span>
                <p>Global Business Leaders</p>
              </div>

              <div className="magazine-highlight">
                <span>02</span>
                <p>Technology & AI Revolution</p>
              </div>

              <div className="magazine-highlight">
                <span>03</span>
                <p>Entrepreneurs to Watch</p>
              </div>

            </div>

            <div className="magazine-actions">

              <Link
                to="/magazine"
                className="magazine-primary-btn"
              >
                View Magazine
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link
                to="/magazine"
                className="magazine-text-btn"
              >
                All Issues
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LatestMagazine;