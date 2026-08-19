import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  CalendarDays,
  Ticket
} from "lucide-react";

import {
  events,
  plays,
  sports,
  activities
} from "../../data/experiences";

import "./ExperienceDetails.css";


function ExperienceDetails() {

  const { id } = useParams();

  const navigate = useNavigate();


  // Combine all experiences

  const allExperiences = [
    ...events,
    ...plays,
    ...sports,
    ...activities
  ];


  // Find selected experience

  const experience = allExperiences.find(
    item => item.id === id
  );


  // If not found

  if (!experience) {

    return (

      <div className="experience-not-found">

        <h2>
          Experience not found
        </h2>

        <button
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

      </div>

    );

  }


  return (

    <div className="experience-details">


      {/* Back */}

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >

        <ArrowLeft size={18} />

        Back

      </button>


      {/* Hero */}

      <section className="experience-hero">

        <img
          src={experience.image}
          alt={experience.title}
        />

        <div className="hero-overlay"></div>


        <div className="hero-content">

          <span>
            {experience.type}
          </span>

          <h1>
            {experience.title}
          </h1>

          <p>

            <MapPin size={16} />

            {experience.location}

          </p>

        </div>

      </section>


      {/* Information */}

      <section className="experience-info">


        <div className="experience-info-main">

          <h2>
            About this experience
          </h2>

          <p>
            Get ready for an unforgettable
            experience at {experience.title}.
            Enjoy an exciting event filled
            with entertainment, fun and
            memorable moments.
          </p>


          <div className="info-items">


            <div>

              <CalendarDays size={20} />

              <div>

                <span>
                  Date
                </span>

                <strong>
                  {experience.date}
                </strong>

              </div>

            </div>


            <div>

              <MapPin size={20} />

              <div>

                <span>
                  Location
                </span>

                <strong>
                  {experience.location}
                </strong>

              </div>

            </div>


            <div>

              <Ticket size={20} />

              <div>

                <span>
                  Starting from
                </span>

                <strong>
                  {experience.price}
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* Booking Card */}

        <aside className="experience-book-card">

          <span>
            TICKETS FROM
          </span>

          <h2>
            {experience.price}
          </h2>

          <p>
            Select your tickets and
            reserve your spot.
          </p>


          <button
            onClick={() =>
              alert(
                "Ticket booking will be added next!"
              )
            }
          >

            <Ticket size={18} />

            Book Tickets

          </button>

        </aside>


      </section>

    </div>

  );
}

export default ExperienceDetails;