import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MovieCard from "../../components/MovieCard/MovieCard";
import { movies } from "../../data/movies";
import "./Wishlist.css";

const FAVOURITES_KEY = "cinebookFavourites";

function getFavouriteIds() {
  try {
    return JSON.parse(localStorage.getItem(FAVOURITES_KEY) || "[]");
  } catch {
    return [];
  }
}

function Wishlist() {
  const [favouriteIds, setFavouriteIds] = useState(getFavouriteIds);
  const favouriteMovies = movies.filter((movie) => favouriteIds.includes(movie.id));

  useEffect(() => {
    const updateWishlist = () => setFavouriteIds(getFavouriteIds());
    window.addEventListener("cinebook-favourites-change", updateWishlist);
    window.addEventListener("storage", updateWishlist);
    return () => {
      window.removeEventListener("cinebook-favourites-change", updateWishlist);
      window.removeEventListener("storage", updateWishlist);
    };
  }, []);

  return (
    <main className="wishlist-page">
      <section className="wishlist-header">
        <span className="page-label">YOUR CINEBOOK</span>
        <h1>Wishlist</h1>
        <p>Movies you saved for your next watch.</p>
      </section>

      {favouriteMovies.length ? (
        <section>
          <div className="wishlist-results-header">
            <h2>Saved Movies</h2>
            <span>{favouriteMovies.length} {favouriteMovies.length === 1 ? "movie" : "movies"}</span>
          </div>
          <div className="wishlist-grid">
            {favouriteMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </section>
      ) : (
        <section className="wishlist-empty">
          <Heart size={42} />
          <h2>Your wishlist is empty</h2>
          <p>Tap the heart on any movie to save it here.</p>
          <Link to="/movies">Browse Movies</Link>
        </section>
      )}
    </main>
  );
}

export default Wishlist;
