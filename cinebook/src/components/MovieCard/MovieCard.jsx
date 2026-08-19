import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import "./MovieCard.css";

function MovieCard({ movie }) {

  return (

    <Link
      to={`/movies/${movie.id}`}
      className="movie-card-link"
    >

      <div className="movie-card">

        <div className="movie-poster">

          <img
            src={movie.image}
            alt={movie.title}
          />

          <button
            className="favorite-btn"
            onClick={(e) => e.preventDefault()}
          >
            <Heart size={18} />
          </button>

          <div className="rating">

            <Star
              size={14}
              fill="currentColor"
            />

            {movie.rating}

          </div>

        </div>


        <div className="movie-info">

          <h3>
            {movie.title}
          </h3>

          <p>
            {movie.genre}
          </p>

          <span>
            {movie.language}
          </span>

        </div>

      </div>

    </Link>
  );
}

export default MovieCard;