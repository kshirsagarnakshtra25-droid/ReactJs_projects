import { useParams, Link } from "react-router-dom";
import {
  Star,
  Play,
  Clock,
  CalendarDays,
  ShieldCheck
} from "lucide-react";

import { movies } from "../../data/movies";

import "./MovieDetails.css";

function MovieDetails() {

  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );


  // If movie doesn't exist

  if (!movie) {

    return (

      <div className="movie-not-found">

        <h1>Movie Not Found 🎬</h1>

        <p>
          Sorry, we couldn't find this movie.
        </p>

        <Link to="/movies">
          ← Back to Movies
        </Link>

      </div>
    );
  }


  return (

    <div className="movie-details">

      {/* Hero */}

      <section
        className="movie-details-hero"
        style={{
          backgroundImage:
            `url(${movie.banner})`
        }}
      >

        <div className="movie-details-overlay"></div>


        <div className="movie-details-content">

          {/* Poster */}

          <div className="details-poster">

            <img
              src={movie.image}
              alt={movie.title}
            />

          </div>


          {/* Information */}

          <div className="details-info">

            <span className="details-label">
              NOW SHOWING
            </span>

            <h1>
              {movie.title}
            </h1>

            <div className="movie-meta">

              <span>
                {movie.certificate}
              </span>

              <span>
                {movie.duration}
              </span>

              <span>
                {movie.language}
              </span>

            </div>


            {/* Rating */}

            <div className="details-rating">

              <Star
                size={20}
                fill="currentColor"
              />

              <strong>
                {movie.rating}
              </strong>

              <span>
                / 10
              </span>

            </div>


            {/* Genre */}

            <p className="details-genre">
              {movie.genre}
            </p>


            {/* Description */}

            <p className="details-description">
              {movie.description}
            </p>


            {/* Buttons */}

            <div className="details-buttons">

              <Link
                to={`/booking/${movie.id}`}
                className="book-button"
              >
                🎟 Book Tickets
              </Link>


              <button className="trailer-button">

                <Play size={18} />

                Watch Trailer

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* More Details */}

      <section className="movie-extra">

        <div className="extra-block">

          <CalendarDays size={20} />

          <div>

            <span>Release Date</span>

            <strong>
              {movie.releaseDate}
            </strong>

          </div>

        </div>


        <div className="extra-block">

          <Clock size={20} />

          <div>

            <span>Duration</span>

            <strong>
              {movie.duration}
            </strong>

          </div>

        </div>


        <div className="extra-block">

          <ShieldCheck size={20} />

          <div>

            <span>Certificate</span>

            <strong>
              {movie.certificate}
            </strong>

          </div>

        </div>

      </section>


      {/* Cast */}

      <section className="cast-section">

        <h2>
          Cast
        </h2>

        <div className="cast-grid">

          {movie.cast.map(
            (person, index) => (

              <div
                className="cast-card"
                key={index}
              >

                <div className="cast-avatar">
                  {person.charAt(0)}
                </div>

                <span>
                  {person}
                </span>

              </div>

            )
          )}

        </div>

      </section>

    </div>
  );
}

export default MovieDetails;