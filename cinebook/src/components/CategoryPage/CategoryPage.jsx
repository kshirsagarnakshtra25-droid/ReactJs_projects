import { Link } from "react-router-dom";
import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import "./CategoryPage.css";

function CategoryPage({
  title,
  subtitle,
  category,
  items
}) {
  const [location, setLocation] = useState(() => localStorage.getItem("cinebookLocation") || "Pune");
  useEffect(() => { const updateLocation = () => setLocation(localStorage.getItem("cinebookLocation") || "Pune"); window.addEventListener("cinebook-location-change", updateLocation); return () => window.removeEventListener("cinebook-location-change", updateLocation); }, []);

  return (

    <div className="category-page">

      {/* =========================
          HEADER
      ========================= */}

      <section className="category-header">

        <span className="category-label">
          CINEBOOK
        </span>

        <h1>
          {title}
        </h1>

        <p>
          {subtitle}
        </p>

      </section>


      {/* =========================
          LOCATION
      ========================= */}
{/* 
      <div className="location-bar">

        <MapPin size={18} />

        <span>
          {location}
        </span>

        <button onClick={() => document.querySelector(".location-btn")?.click()}>
          Change
        </button>

      </div> */}


      {/* =========================
          CARDS
      ========================= */}

      <section className="category-content">

        <div className="category-title-row">

          <div>

            <h2>
              {category}
            </h2>

            <p>
              Explore the best experiences
              happening near you.
            </p>

          </div>

          <span className="result-count">
            {items.length} experiences
          </span>

        </div>


        <div className="category-grid">

          {items.map((item) => (

            <Link
              to={`/experience/${item.id}`}
              className="experience-card"
              key={item.id}
            >

              {/* Image */}

              <div className="experience-image">

                <img
                  src={item.image}
                  alt={item.title}
                />


                <div className="experience-date">

                  <CalendarDays size={13} />

                  {item.date}

                </div>

              </div>


              {/* Content */}

              <div className="experience-content">

                <h3>
                  {item.title}
                </h3>

                <p className="experience-location">

                  <MapPin size={13} />

                  {item.location}

                </p>


                <div className="experience-bottom">

                  <strong>
                    {item.price}
                  </strong>

                  <span>
                    {item.type}
                  </span>

                </div>

              </div>


              <div className="experience-arrow">

                <ArrowRight size={16} />

              </div>

            </Link>

          ))}

        </div>

      </section>

    </div>

  );
}

export default CategoryPage;
