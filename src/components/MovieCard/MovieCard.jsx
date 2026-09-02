import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieCard.css";

const FAVOURITES_KEY = "cinebookFavourites";

function MovieCard({ movie }) {
  const [favourite, setFavourite] = useState(false);
  useEffect(() => { setFavourite(JSON.parse(localStorage.getItem(FAVOURITES_KEY) || "[]").includes(movie.id)); }, [movie.id]);
  const toggleFavourite = () => { const saved = JSON.parse(localStorage.getItem(FAVOURITES_KEY) || "[]"); const next = saved.includes(movie.id) ? saved.filter((id) => id !== movie.id) : [...saved, movie.id]; localStorage.setItem(FAVOURITES_KEY, JSON.stringify(next)); setFavourite(next.includes(movie.id)); window.dispatchEvent(new Event("cinebook-favourites-change")); };
  return <article className="movie-card"><div className="movie-poster"><Link to={`/movies/${movie.id}`} className="movie-card-link"><img src={movie.image} alt={movie.title} /></Link><button type="button" className={`favorite-btn ${favourite ? "is-favorite" : ""}`} onClick={toggleFavourite} aria-label={favourite ? `Remove ${movie.title} from favourites` : `Save ${movie.title} to favourites`}><Heart size={18} fill={favourite ? "currentColor" : "none"} /></button><div className="rating"><Star size={14} fill="currentColor" />{movie.rating}</div></div><Link to={`/movies/${movie.id}`} className="movie-card-link movie-info"><h3>{movie.title}</h3><p>{movie.genre}</p><span>{movie.language}</span></Link></article>;
}
export default MovieCard;
